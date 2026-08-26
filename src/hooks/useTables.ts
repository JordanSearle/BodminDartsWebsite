import { useEffect, useMemo } from "react";
import { useGoogleDriveDirectories } from "./useGoogleDriveDirectories";
import { useLatestGoogleDriveFile } from "./useLatestGoogleDriveFile";

export interface Table {
  id: string;
  name: string;
  mimeType: string;
  createdTime: string;
}

export interface TableYear {
  id: string;
  name: string;
  createdTime: string;
  tables: Table[];
  loading: boolean;
  error: Error | null;
}

export function useTables(yearsFolderId: string) {
  const {
    directories,
    getDirectories,
  } = useGoogleDriveDirectories();

  const {
    files,
    getLatestFile,
  } = useLatestGoogleDriveFile();

  /*
   * Get the years
   */
  useEffect(() => {
    if (!directories[yearsFolderId]) {
      getDirectories(yearsFolderId);
    }
  }, [yearsFolderId, directories, getDirectories]);

  const years = useMemo(() => {
    return directories[yearsFolderId]?.data ?? [];
  }, [directories, yearsFolderId]);

  /*
   * Get the latest table for each year
   */
  useEffect(() => {
    years.forEach((year) => {
      if (!files[year.id]) {
        getLatestFile(year.id);
      }
    });
  }, [years, files, getLatestFile]);

  /*
   * Combine the year directory with its latest table
   */
  const tables = useMemo<TableYear[]>(() => {
    return years.map((year) => {
      const fileState = files[year.id];

      return {
        id: year.id,
        name: year.name,
        createdTime: year.createdTime,
        tables: fileState?.data ?? null,
        loading: fileState?.loading ?? false,
        error: fileState?.error ?? null,
      };
    });
  }, [years, files]);

  const loading =
    directories[yearsFolderId]?.loading === true ||
    tables.some((year) => year.loading);

  const error =
    directories[yearsFolderId]?.error ??
    tables.find((year) => year.error)?.error ??
    null;

  return {
    tables,
    loading,
    error,
  };
}
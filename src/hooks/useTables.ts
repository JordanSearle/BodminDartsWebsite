import { useEffect, useMemo } from "react";
import { useLatestGoogleDriveFile } from "./useLatestGoogleDriveFile";

export interface Table {
  id: string;
  name: string;
  mimeType: string;
  createdTime: string;
}

export interface TableYear {
  tables: Table[];
  loading: boolean;
  error: Error | null;
}

export function useTables(folderId: string) {
  const {
    files,
    getLatestFile,
  } = useLatestGoogleDriveFile();

  /*
   * Get the active tables
   */
  useEffect(() => {
    if (!files[folderId]) {
      getLatestFile(folderId);
    }
  }, [folderId, files, getLatestFile]);

  /*
   * Return the list of tables for the given folder
   */
  const tables = useMemo<TableYear>(() => {
    const fileState = files[folderId]

    return {
      tables: fileState?.data ?? null,
      loading: fileState?.loading ?? false,
      error: fileState?.error ?? null,
    };
  }, [folderId, files])

  const loading = !!files[folderId]?.loading;
  const error = files[folderId]?.error ?? null;

  return {
    tables,
    loading,
    error,
  };
}
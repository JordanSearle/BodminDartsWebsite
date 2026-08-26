import { useState } from "react";
import type { QueryState } from "../types/query-state";

export interface GoogleDriveDirectory {
  id: string;
  name: string;
  createdTime: string;
}

const FOLDER_MIME_TYPE = "application/vnd.google-apps.folder";

export function useGoogleDriveDirectories() {
  const [directories, setDirectories] = useState<Record<string, QueryState<GoogleDriveDirectory[]>>>({});

  const getDirectories = async (folderId: string) => {
    setDirectories(prev => ({
      ...prev,
      [folderId]: {
        loading: true,
        error: null,
        data: prev[folderId]?.data ?? [],
      },
    }));

    try {
      const params = new URLSearchParams({
        q: `'${folderId}' in parents and mimeType='${FOLDER_MIME_TYPE}' and trashed=false`,
        fields: "files(id,name,createdTime)",
        orderBy: "name desc",
        key: import.meta.env.VITE_GOOGLE_API_KEY,
      });

      const response = await fetch(
        `https://www.googleapis.com/drive/v3/files?${params}`
      );

      if (!response.ok) {
        throw new Error(`Google Drive API returned ${response.status}`);
      }

      const data: { files: GoogleDriveDirectory[] } = await response.json();

      setDirectories(prev => ({
        ...prev,
        [folderId]: {
          loading: false,
          error: null,
          data: data.files,
        },
      }));

      return data;
    } catch (error) {
      const err = error instanceof Error
        ? error
        : new Error("Failed to fetch directories");

      setDirectories(prev => ({
        ...prev,
        [folderId]: {
          loading: false,
          error: err,
          data: prev[folderId]?.data ?? [],
        },
      }));

      return [];
    }
  };

  return {
    directories,
    getDirectories,
  };
}
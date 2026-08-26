import { useCallback, useState } from "react";
import type { QueryState } from "../types/query-state";

export interface GoogleDriveFile {
  id: string;
  name: string;
  mimeType: string;
  createdTime: string;
}

export function useLatestGoogleDriveFile() {
  const [files, setFiles] = useState<
    Record<string, QueryState<GoogleDriveFile[]>>
  >({});

  const getLatestFile = useCallback(async (folderId: string) => {
    setFiles((prev) => ({
      ...prev,
      [folderId]: {
        loading: true,
        error: null,
        data: [],
      },
    }));

    try {
      const params = new URLSearchParams({
        q: `'${folderId}' in parents and mimeType='application/pdf' and trashed=false`,
        orderBy: "name",
        fields: "files(id,name,mimeType,createdTime)",
        key: import.meta.env.VITE_GOOGLE_API_KEY,
      });

      const response = await fetch(
        `https://www.googleapis.com/drive/v3/files?${params}`
      );

      if (!response.ok) {
        throw new Error(
          `Google Drive API returned ${response.status}`
        );
      }

      const result: {
        files: GoogleDriveFile[];
      } = await response.json();

      const file = result.files ?? null;

      setFiles((prev) => ({
        ...prev,
        [folderId]: {
          loading: false,
          error: null,
          data: file,
        },
      }));

      return file;
    } catch (error) {
      const err =
        error instanceof Error
          ? error
          : new Error("Failed to fetch latest file");

      setFiles((prev) => ({
        ...prev,
        [folderId]: {
          loading: false,
          error: err,
          data: [],
        },
      }));

      return null;
    }
  }, []);

  return {
    files,
    getLatestFile,
  };
}
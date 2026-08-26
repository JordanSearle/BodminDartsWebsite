import { useEffect } from "react";
import { useLatestGoogleDriveFile } from "./useLatestGoogleDriveFile";

export function useResults(folderId: string) {
  const {
    files,
    getLatestFile,
  } = useLatestGoogleDriveFile();

  useEffect(() => {
    if (!files[folderId]) {
      getLatestFile(folderId);
    }
  }, [folderId, files, getLatestFile]);

  const result = files[folderId];

  return {
    results: result?.data ?? [],
    loading: result?.loading ?? false,
    error: result?.error ?? null,
    refresh: () => getLatestFile(folderId),
  };
}
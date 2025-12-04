"use client";

import { versions } from "@/config/versions";

export function useVersion() {
  // This codebase is always v4, so we can simplify the logic
  const currentVersionString = "v4";

  // Update versions with current version info
  const updatedVersions = versions.map((v) => ({
    ...v,
    label:
      v.version === currentVersionString ? `${v.version} (Current)` : v.version,
    isCurrentVersion: v.version === currentVersionString,
  }));

  const currentVersion =
    updatedVersions.find((v) => v.isCurrentVersion) || updatedVersions[0];

  return {
    currentVersion,
    allVersions: updatedVersions,
    isLoading: false,
  };
}

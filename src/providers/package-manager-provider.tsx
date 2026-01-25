"use client";

import {
  PackageManager,
  packageManagers,
} from "@/components/common/data/package-managers";
import { createContext, useContext, useEffect, useState } from "react";

interface PackageManagerContextType {
  selectedPackageManager: PackageManager;
  setPackageManager: (packageManager: PackageManager) => void;
  isHydrated: boolean;
}

const PackageManagerContext = createContext<PackageManagerContextType>({
  selectedPackageManager: "pnpm",
  setPackageManager: () => { },
  isHydrated: false,
});

const STORAGE_KEY = "package-manager";

const getStoredPackageManager = (): PackageManager => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    const isValidPackageManager =
      stored && Object.keys(packageManagers).includes(stored);

    if (isValidPackageManager) {
      return stored as PackageManager;
    }

    // If no package manager is stored, set it to pnpm
    setStoredPackageManager("pnpm");
  } catch (error) {
    console.warn("Failed to read package manager from localStorage:", error);
  }

  return "pnpm";
};

const setStoredPackageManager = (packageManager: PackageManager) => {
  if (typeof window === "undefined") return;

  try {
    localStorage.setItem(STORAGE_KEY, packageManager);
  } catch (error) {
    console.warn("Failed to save package manager to localStorage:", error);
  }
};

export const PackageManagerProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [selectedPackageManager, setSelectedPackageManager] =
    useState<PackageManager>("pnpm");
  const [isHydrated, setIsHydrated] = useState(false);

  const setPackageManager = (packageManager: PackageManager) => {
    setSelectedPackageManager(packageManager);
    setStoredPackageManager(packageManager);
  };

  // Hydrate with stored value after component mounts
  useEffect(() => {
    const stored = getStoredPackageManager();
    setSelectedPackageManager(stored);
    setIsHydrated(true);
  }, []);

  return (
    <PackageManagerContext.Provider
      value={{
        selectedPackageManager,
        setPackageManager,
        isHydrated,
      }}
    >
      {children}
    </PackageManagerContext.Provider>
  );
};

export const usePackageManager = () => {
  const context = useContext(PackageManagerContext);
  if (!context) {
    throw new Error(
      "usePackageManager must be used within a PackageManagerProvider"
    );
  }
  return context;
};

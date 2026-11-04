"use client";

import {
    createContext,
    ReactNode,
    useContext,
    useState,
} from "react";

const WebsiteContext = createContext<{
    isBlockSidebarOpen: boolean;
    setIsBlockSidebarOpen: (isBlockSidebarOpen: boolean) => void;
    filterByPrice: string;
    setFilterByPrice: (filterByPrice: string) => void;
    filterBySort: string;
    setFilterBySort: (filterBySort: string) => void;
}>({
    isBlockSidebarOpen: false,
    setIsBlockSidebarOpen: () => { },
    filterByPrice: "all",
    setFilterByPrice: () => { },
    filterBySort: "id",
    setFilterBySort: () => { },
});


export const WebsiteProvider = ({
    children,
}: {
    children: ReactNode;
}) => {


    const [isBlockSidebarOpen, setIsBlockSidebarOpen] = useState(false);
    const [filterByPrice, setFilterByPrice] = useState("all");
    const [filterBySort, setFilterBySort] = useState("id");

    return (
        <WebsiteContext.Provider
            value={{
                isBlockSidebarOpen,
                setIsBlockSidebarOpen,
                filterByPrice,
                setFilterByPrice,
                filterBySort,
                setFilterBySort,
            }}
        >
            {children}
        </WebsiteContext.Provider>
    );
};

export const useWebContext = () => {
    const context = useContext(WebsiteContext);
    if (!context) {
        throw new Error("useWebContext must be used within a WebsiteProvider.");
    }

    return context;
};

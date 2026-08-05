"use client";

import { useState } from "react";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

interface SearchType {
    href: string;
    title: string;
}

const SearchLinks: SearchType[] = [
    {
        title: 'Modern',
        href: '#',
    },
    {
        title: 'eCommerce',
        href: '#',
    },
    {
        title: 'General',
        href: '#',
    },
    {
        title: 'Music',
        href: '#',
    },
    {
        title: 'General',
        href: '#',
    },
];

const Search = () => {
    const [openModal, setOpenModal] = useState(false);

    return (
        <Dialog open={openModal} onOpenChange={setOpenModal}>
            <DialogTrigger
                render={
                    <button className="flex h-9 w-9 items-center justify-center rounded-full transition-colors hover:bg-accent sm:w-auto sm:min-w-48 sm:justify-start sm:gap-2 sm:rounded-md sm:border sm:border-border sm:px-4 sm:py-1.5 sm:hover:bg-transparent cursor-pointer">
                        <SearchIcon size={16} className="text-muted-foreground shrink-0" />
                        <span className="hidden text-sm font-normal text-muted-foreground sm:block">Type to search...</span>
                    </button>
                }
            />
            <DialogContent className="w-full max-w-2xl p-0 gap-0 [&>button]:hidden">
                <DialogTitle className="sr-only">Search</DialogTitle>
                <div className="p-6 border-b border-ld">
                    <Input
                        placeholder="Search links..."
                        className="flex-1 pl-4 rounded-md focus-visible:ring-0 focus-visible:shadow-none"
                    />
                </div>

                <div className="flex-1 overflow-auto pt-0">
                    <SimpleBar className="max-h-72 px-6 [&_.simplebar-scrollbar::before]:bg-border [&_.simplebar-scrollbar::before]:opacity-100">
                        <h5 className="text-lg font-medium pt-5">Quick Page Links</h5>
                        {SearchLinks.length > 0 ? (
                            SearchLinks.map((link, index) => (
                                <a
                                    href={link.href}
                                    className="py-1 px-3 group relative"
                                    key={index}
                                >
                                    <h6 className="group-hover:text-blue-500 mb-1 font-medium text-sm">
                                        {link.title}
                                    </h6>
                                    <p className="text-xs text-bodytext opacity-90 font-medium">
                                        {link.href}
                                    </p>
                                </a>
                            ))
                        ) : (
                            <p className="text-sm text-center text-gray-500 py-4">
                                No results found.
                            </p>
                        )}
                    </SimpleBar>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default Search;

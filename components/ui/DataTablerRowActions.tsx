"use client";

import { MoreHorizontal } from "lucide-react";

import { Button } from "./button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from "./DropdownMenu";


export function DataTableRowActions() {

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex h-8 w-8 p-0 data-[state=open]:bg-muted">
                    <MoreHorizontal />
                    <span className="sr-only">Open menu</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[160px]">
                <DropdownMenuItem>Supprimer</DropdownMenuItem>
                <DropdownMenuItem>Edit</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

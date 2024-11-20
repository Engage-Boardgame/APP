"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { DataTable } from "@/components/ui/DataTable";
import { DataTableColumnHeader } from "@/components/ui/DataTableColumnHeader";
import { DataTableRowActions } from "@/components/ui/DataTablerRowActions";
import { CardType } from "@/types/CardType/CardType";
import { ColumnDef } from "@tanstack/react-table";

export default function DashboardCards() {
    const columns: ColumnDef<CardType>[] = [
        {
            id: "select",
            header: ({ table }) => (
                <Checkbox
                    checked={table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && "indeterminate")}
                    onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                    aria-label="Select all"
                    className="translate-y-[2px]"
                />
            ),
            cell: ({ row }) => (
                <Checkbox
                    checked={row.getIsSelected()}
                    onCheckedChange={(value) => row.toggleSelected(!!value)}
                    aria-label="Select row"
                    className="translate-y-[2px]"
                />
            ),
            enableSorting: false,
            enableHiding: false,
        },
        {
            accessorKey: "id",
            header: ({ column }) => {
                return <DataTableColumnHeader column={column} title="ID" />;
            },
        },
        {
            accessorKey: "color",
            header: "Color",
        },
        {
            accessorKey: "theme.fr",
            header: "FR",
        },
        {
            accessorKey: "theme.en",
            header: "EN",
        },
        {
            id: "actions",
            cell: ({ row }) => <DataTableRowActions row={row} />,
        },
    ];

    const datas: CardType[] = [
        {
            id: 1,
            color: "red",
            theme: {
                fr: "rouge",
                en: "red",
            },
            Cards: [],
        },
        {
            id: 2,
            color: "blue",
            theme: {
                fr: "bleu",
                en: "blue",
            },
            Cards: [],
        },
        {
            id: 3,
            color: "green",
            theme: {
                fr: "vert",
                en: "green",
            },
            Cards: [],
        },
        {
            id: 4,
            color: "yellow",
            theme: {
                fr: "jaune",
                en: "yellow",
            },
            Cards: [],
        },
        {
            id: 5,
            color: "purple",
            theme: {
                fr: "violet",
                en: "purple",
            },
            Cards: [],
        },
        {
            id: 6,
            color: "pink",
            theme: {
                fr: "rose",
                en: "pink",
            },
            Cards: [],
        },
    ];

    return <DataTable columns={columns} data={datas} />;
}

export declare namespace Table {
    type Column = {
        name: string;
        label: string;
        sortable?: boolean;
        // Allow fixed width declaration
        width?: string;
        // To match it with data structure
        field?: string;
    };

    type Entry = {
        id: string;
        [key: string]: string | number | undefined;
    };

    type CurrentSort = {
        column: string;
        order: "asc" | "desc";
    };

    type Pagination = {
        totalEntries: number;
        currentPage: number;
        entrySize: number;
        showEntries: Array<number>;
        currentSort: CurrentSort;
        checkable?: boolean;
    };

    type Config = {
        columns?: Array<Column>;
        entries?: Array<Entry>;
        pagination: Pagination;
    };
}

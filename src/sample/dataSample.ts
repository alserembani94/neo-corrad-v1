import { Table } from "types";
import data from "./tableData.json";

export type GetDataProps = {
    size?: number;
    page?: number;
    filterOptions?: Array<Table.FilterOption>;
    sortOption?: Table.CurrentSort;
};

type GetData = (params: GetDataProps) => {
    entries: Array<unknown>;
    totalRows: number;
};

export const getData: GetData = ({
    size = 10,
    page = 1,
    // TODO: Add filter functions
    // filterOptions = [],
    sortOption = {},
}) => {
    const selectedData = data;

    const filteredData = selectedData.filter(() => true);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const sortedData = filteredData.sort((firstItem: any, secondItem: any) => {
        if (!sortOption.column) return 0;

        if (sortOption.order === "asc") {
            return firstItem[sortOption.column] > secondItem[sortOption.column]
                ? 1
                : -1;
        } else if (sortOption.order === "desc") {
            return firstItem[sortOption.column] > secondItem[sortOption.column]
                ? -1
                : 1;
        }

        return 0;
    });

    const dataTotalLength = sortedData.length;

    const firstIndex = (page - 1) * size;
    const lastIndex = page * size;

    const truncatedData = sortedData.slice(firstIndex, lastIndex);

    return {
        entries: truncatedData,
        totalRows: dataTotalLength,
    };
};

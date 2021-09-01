<template>
    <Layout>
        <section class="flex flex-col gap-2">
            <h1>Table Data</h1>
        </section>
        <section class="flex flex-col gap-8">
            <Card title="Introduction">
                <p>
                    Table data is table with paginations, filters, sorts options
                    available out of the box!
                </p>
                <!-- <div class="max-w-3xl">
                    <code-highlight languange="typescript">
                        {{ codeSample.importCard }}
                    </code-highlight>
                </div> -->
            </Card>
            <Card title="Sample Data">
                <AltTable
                    :columns="tableConfig.columns"
                    :entries="dataState.entries"
                    :pagination="pagination"
                    :total-rows="totalRows"
                    @paginate="handlePagination"
                    @filter="handleFilter"
                    @sort="handleSort"
                    @entry-resize="handleResize"
                >
                    <template #row_id="{ entry }">
                        {{ entry.id }}
                    </template>
                    <template #row_name="{ entry }">
                        {{ entry.name }}
                    </template>
                    <template #row_age="{ entry }">
                        {{ entry.age }}
                    </template>
                    <template #row_action="">
                        <button class="btn-primary btn-sm">Submit</button>
                    </template>
                </AltTable>
            </Card>
        </section>
    </Layout>
</template>

<script setup lang="ts">
// Importing components
import Layout from "@/components/layouts/Default.vue";
import Card from "@/components/containers/Card.vue";
import AltTable from "@/components/containers/TableData.vue";

import { reactive, watchEffect } from "vue";
import tableConfig from "@/sample/tableConfig.json";
import { getData, GetDataProps } from "@/sample/dataSample";

const { entries, totalRows } = getData({});

const dataState = reactive({
    entries,
    totalRows,
});

const pagination = reactive<Table.Pagination>({
    ...(tableConfig.pagination as Table.Pagination),
});

// Handle data call here, preferably use async/await
const updateData = (params: GetDataProps) => {
    const { entries: nextEntries, totalRows: nextTotalRows } = getData(params);
    dataState.entries = nextEntries;
    dataState.totalRows = nextTotalRows;
};

// watchEffect used here to handle side effects, which allows async/await operation later on
watchEffect(() => {
    // console.table({
    //     page: pagination.currentPage,
    //     size: pagination.entrySize,
    //     sortOption: pagination.currentSort,
    //     filterOptions: pagination.filterOptions,
    // });
    updateData({
        page: pagination.currentPage,
        size: pagination.entrySize,
        sortOption: pagination.currentSort,
        filterOptions: pagination.filterOptions,
    });
});

// Importing types and dependencies
import { Table } from "types";

const handlePagination = (page: number) => {
    pagination.currentPage = page;
};

const handleFilter = (filterOptions: Array<Table.FilterOption>) => {
    pagination.currentPage = 1;
    pagination.filterOptions = filterOptions;
};

const handleSort = (sortOption: Table.CurrentSort) => {
    pagination.currentPage = 1;
    pagination.currentSort = sortOption;
};

const handleResize = (size: number) => {
    pagination.currentPage = 1;
    pagination.entrySize = size;
};
</script>

<template>
    <Layout>
        <section class="flex flex-col gap-2">
            <h1>Tables</h1>
        </section>
        <section class="flex flex-col gap-8">
            <Card title="Introduction">
                <p>
                    The current container that you see is
                    <code>Card</code> component.

                    <br />

                    To use the component, simply import
                    <code>Card</code> component, and use it inside your code.
                    The specs for <code>Card</code> are standard, which can be
                    referred with the TailwindCSS classes - <code>py-6</code>,
                    <code>px-8</code>, <code>shadow-md</code> and
                    <code>rounded-md</code>
                </p>
                <!-- <div class="max-w-3xl">
                    <code-highlight languange="typescript">
                        {{ codeSample.importCard }}
                    </code-highlight>
                </div> -->
            </Card>
            <Card title="Introduction">
                <CTableData
                    :columns="tableConfig.columns"
                    :entries="tableConfig.entries"
                    :pagination="tableConfig.pagination"
                />
            </Card>
        </section>
    </Layout>
</template>

<script setup lang="ts">
// Importing components
import Layout from "@/components/layouts/Default.vue";
import Card from "@/components/containers/Card.vue";
import CTableData from "@/components/containers/TableData.vue";

// Importing types and dependencies
import { reactive } from "vue";
import { Table } from "types";

const showEntries: Array<number> = [5, 10, 25, 50, 100];

const data = [
    {
        id: "1",
        name: "Atif",
        age: 25,
    },
    {
        id: "2",
        name: "Akmal",
    },
    {
        id: "3",
        name: "Yazid",
        age: 18,
    },
    {
        id: "4",
        name: "Faris",
        age: 28,
    },
];

const tableConfig = reactive<Table.Config>({
    columns: [
        {
            name: "id",
            label: "ID",
            sortable: true,
            width: "100px",
            field: "id",
        },
        {
            name: "name",
            label: "Name",
            field: "name",
        },
        {
            name: "age",
            label: "Age",
            sortable: true,
            field: "age",
        },
    ],
    entries: data,
    pagination: {
        totalEntries: data.length,
        currentPage: 1,
        entrySize: 10,
        currentSort: {
            column: "id",
            order: "desc",
        },
        showEntries,
        // checkable: true,
    },
});
</script>

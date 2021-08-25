<template>
    <div class="flex flex-col gap-4">
        <div class="flex flex-row flex-wrap gap-4 items-center">
            <div class="flex flex-row items-center gap-4">
                <p>Show</p>
                <select name="entries-size" id="entries-size">
                    <option
                        v-for="entrySize in props.pagination.showEntries"
                        :key="entrySize"
                        value="entrySize"
                    >
                        {{ entrySize.toString() }}
                    </option>
                </select>
            </div>
        </div>
        <TableBase
            :columns="props.columns"
            :entries="props.entries"
            :current-sort="props.pagination.currentSort"
            :checkable="props.pagination.checkable"
        />
        <div class="flex flex-row justify-between items-center">
            <p>
                Show {{ pageInfo.from }} to {{ pageInfo.to }} of
                {{ pageInfo.total }} entries
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">
// import { TableData } from "types";
import { Table } from "types";
import { computed, defineProps, withDefaults } from "vue";
import TableBase from "./TableBase.vue";

type Props = {
    columns?: Array<Table.Column>;
    entries?: Array<Table.Entry>;
    pagination: Table.Pagination;
};

const props = withDefaults(defineProps<Props>(), {
    columns: () => [],
    entries: () => [],
    pagination: () => ({
        totalEntries: 1,
        currentPage: 1,
        entrySize: 10,
        showEntries: [5, 10, 25, 100],
        currentSort: { column: "id", order: "asc" },
    }),
});

const maxTo = props.pagination.entrySize * props.pagination.currentPage;

const pageInfo = computed(() => ({
    from: props.pagination.entrySize * (props.pagination.currentPage - 1) + 1,
    to:
        maxTo > props.pagination.totalEntries
            ? props.pagination.totalEntries
            : maxTo,
    total: props.pagination.totalEntries,
}));
</script>

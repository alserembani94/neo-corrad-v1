<template>
    <layout>
        <p>This is About Us page</p>
    </layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Layout from "@/components/layouts/Default.vue";

export default defineComponent({
    name: "Home",
    components: {
        Layout,
    },
});
</script>

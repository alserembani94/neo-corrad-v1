<template>
    <layout>
        <section class="flex flex-col gap-2">
            <h1>About Corrad Neo</h1>
        </section>
        <section class="flex flex-row flex-wrap gap-8">
            <card title="Team" cardClass="flex-1 min-w-mobile">
                <p>
                    The team behind Corrad Neo is the most dedicated team in
                    history of ANSI. Malaysian-made, design specially brewed,
                    components catered in the minute details.
                </p>
            </card>
            <card title="Contact Us" cardClass="flex-1 min-w-mobile">
                <p>
                    You can just reach us at bla bla bla. So we will wait there
                    until there is response.
                </p>
            </card>
        </section>
    </layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Layout from "@/components/layouts/Default.vue";
import Card from "@/components/containers/Card.vue";

export default defineComponent({
    name: "About",
    components: {
        Layout,
        Card,
    },
});
</script>

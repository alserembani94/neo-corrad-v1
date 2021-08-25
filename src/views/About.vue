<template>
    <Layout>
        <section class="flex flex-col gap-2">
            <h1>About Corrad Neo</h1>
        </section>
        <section class="flex flex-row flex-wrap gap-8">
            <Card title="Team" cardClass="flex-1 min-w-mobile">
                <p>
                    The team behind Corrad Neo is the most dedicated team in
                    history of ANSI. Malaysian-made, design specially brewed,
                    components catered in the minute details.
                </p>
            </Card>
            <Card title="Contact Us" cardClass="flex-1 min-w-mobile">
                <p>
                    You can just reach us at bla bla bla. So we will wait there
                    until there is response.
                </p>
            </Card>
        </section>
        <section class="flex flex-row flex-wrap gap-8">
            <Card title="Corrad Stack" cardClass="flex-1">
                <ul class="flex flex-row flex-wrap">
                    <li>
                        <font-awesome-layers full-width class="fa-3x">
                            <font-awesome-icon :icon="icons.faVuejs" />
                            <font-awesome-layers-text
                                class="w-full"
                                transform="down-14 shrink-12"
                                value="Vue 3"
                            />
                        </font-awesome-layers>
                    </li>
                </ul>
                <p></p>
            </Card>
        </section>
        <section class="flex flex-row flex-wrap gap-8">
            <Card
                title="License"
                cardClass="flex-1 min-w-mobile max-w-screen-lg"
            >
                <p>
                    Copyright 2021 Corrad&copy;

                    <br />

                    Permission is hereby granted, free of charge, to any person
                    obtaining a copy of this software and associated
                    documentation files (the "Software"), to deal in the
                    Software without restriction, including without limitation
                    the rights to use, copy, modify, merge, publish, distribute,
                    sublicense, and/or sell copies of the Software, and to
                    permit persons to whom the Software is furnished to do so,
                    subject to the following conditions: The above copyright
                    notice and this permission notice shall be included in all
                    copies or substantial portions of the Software. THE SOFTWARE
                    IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
                    OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
                    MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
                    NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
                    HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
                    WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
                    FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE
                    OR OTHER DEALINGS IN THE SOFTWARE.
                </p>
            </Card>
        </section>
    </Layout>
</template>

<script setup lang="ts">
import { computed } from "vue";
import Layout from "@/components/layouts/Default.vue";
import Card from "@/components/containers/Card.vue";
import {
    faVuejs,
    faFontAwesome,
    faHtml5,
    faCss3,
} from "@fortawesome/free-brands-svg-icons";
import {
    FontAwesomeIcon,
    FontAwesomeLayers,
    FontAwesomeLayersText,
} from "@fortawesome/vue-fontawesome";

const icons = computed(() => ({
    faVuejs,
    faFontAwesome,
    faHtml5,
    faCss3,
}));
</script>

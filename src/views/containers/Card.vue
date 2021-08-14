<template>
    <layout>
        <section class="flex flex-col gap-2">
            <h1>Cards</h1>
        </section>
        <section class="flex flex-col gap-8">
            <card title="Introduction">
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
                <div class="max-w-3xl">
                    <code-highlight languange="typescript">
                        {{ codeSample.importCard }}
                    </code-highlight>
                </div>
            </card>
            <card title="Props" :closable="true">
                <p>
                    Here are the list of acceptable props for
                    <code>Card</code> component:
                </p>

                <div class="overflow-x-auto">
                    <table class="w-full">
                        <thead>
                            <tr>
                                <td>Props</td>
                                <td>Type</td>
                                <td>Default value</td>
                                <td>Required</td>
                                <td>Notes</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><code>title</code></td>
                                <td><code>string</code></td>
                                <td></td>
                                <td><code>true</code></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td><code>subtitle</code></td>
                                <td><code>string</code></td>
                                <td></td>
                                <td><code>false</code></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td><code>cardType</code></td>
                                <td><code>string</code></td>
                                <td><code>"default"</code></td>
                                <td><code>false</code></td>
                                <td class="max-w-xs">
                                    Accepted values: <code>"default"</code>,
                                    <code>"info"</code>, <code>"success"</code>,
                                    <code>"warning"</code>,
                                    <code>"danger"</code>, <code>"dark"</code>,
                                    <code>"light"</code>
                                </td>
                            </tr>
                            <tr>
                                <td><code>cardClass</code></td>
                                <td><code>string</code></td>
                                <td></td>
                                <td><code>false</code></td>
                                <td class="max-w-xs">
                                    You can also use tailwind classes. Applied
                                    to the <code>Card</code> wrapper.
                                </td>
                            </tr>
                            <tr>
                                <td><code>closable</code></td>
                                <td><code>boolean</code></td>
                                <td><code>false</code></td>
                                <td><code>false</code></td>
                                <td class="max-w-xs">
                                    This will add close button to the card, so
                                    user can close the card if needed.
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </card>
        </section>
        <section class="flex flex-col gap-2">
            <h2>Samples</h2>
        </section>
        <section class="flex flex-row gap-8">
            <card title="Card with Titles" cardClass="flex-1 min-w-sm">
                <p>
                    You can put anything inside card, wrapped with
                    <code>Card</code> component!
                </p>
            </card>
            <card
                title="Card with Titles"
                subtitle="...and also subtitles to explain it!"
                cardClass="flex-1 min-w-sm"
            >
                <p>
                    You can put anything inside card, wrapped with
                    <code>Card</code> component!
                </p>
            </card>
        </section>
        <section class="flex flex-row gap-8">
            <card title="Card with Titles" cardClass="flex-1 min-w-sm">
                <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                    quis nostrud exerci tation ullamcorper suscipit lobortis
                    nisl ut aliquip ex ea commodo consequat. Duis autem vel eum
                    iriure dolor in hendrerit in vulputate velit esse molestie
                    consequat, vel illum dolore eu feugiat nulla facilisis at
                    vero eros et accumsan et iusto odio dignissim qui blandit
                    praesent luptatum zzril delenit augue duis dolore te feugait
                    nulla facilisi.
                </p>
            </card>
        </section>
        <section class="flex flex-row gap-8 flex-wrap">
            <card
                title="Card with Titles"
                subtitle="...that is closable!"
                cardClass="flex-1 min-w-sm"
                :closable="true"
            >
                <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                    quis nostrud exerci tation ullamcorper suscipit lobortis
                    nisl ut aliquip ex ea commodo consequat. Duis autem vel eum
                    iriure dolor in hendrerit in vulputate velit esse molestie
                    consequat, vel illum dolore eu feugiat nulla facilisis at
                    vero eros et accumsan et iusto odio dignissim qui blandit
                    praesent luptatum zzril delenit augue duis dolore te feugait
                    nulla facilisi.
                </p>
            </card>
            <card title="Card with Titles" cardClass="flex-1 min-w-sm">
                <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                    quis nostrud exerci tation ullamcorper suscipit lobortis
                    nisl ut aliquip ex ea commodo consequat. Duis autem vel eum
                    iriure dolor in hendrerit in vulputate velit esse molestie
                    consequat, vel illum dolore eu feugiat nulla facilisis at
                    vero eros et accumsan et iusto odio dignissim qui blandit
                    praesent luptatum zzril delenit augue duis dolore te feugait
                    nulla facilisi.
                </p>
            </card>
            <card title="Card with Titles" cardClass="flex-1 min-w-sm">
                <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                    quis nostrud exerci tation ullamcorper suscipit lobortis
                    nisl ut aliquip ex ea commodo consequat. Duis autem vel eum
                    iriure dolor in hendrerit in vulputate velit esse molestie
                    consequat, vel illum dolore eu feugiat nulla facilisis at
                    vero eros et accumsan et iusto odio dignissim qui blandit
                    praesent luptatum zzril delenit augue duis dolore te feugait
                    nulla facilisi.
                </p>
            </card>
        </section>
        <section class="grid grid-cols-3 gap-8">
            <card
                title="Card with Grid"
                subtitle="...that is closable!"
                cardClass="col-span-2 auto-cols-max"
                :closable="true"
            >
                <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                    quis nostrud exerci tation ullamcorper suscipit lobortis
                    nisl ut aliquip ex ea commodo consequat. Duis autem vel eum
                    iriure dolor in hendrerit in vulputate velit esse molestie
                    consequat, vel illum dolore eu feugiat nulla facilisis at
                    vero eros et accumsan et iusto odio dignissim qui blandit
                    praesent luptatum zzril delenit augue duis dolore te feugait
                    nulla facilisi.
                </p>
            </card>
            <card title="Card with Grid" cardClass="">
                <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                    quis nostrud exerci tation ullamcorper suscipit lobortis
                    nisl ut aliquip ex ea commodo consequat. Duis autem vel eum
                    iriure dolor in hendrerit in vulputate velit esse molestie
                    consequat, vel illum dolore eu feugiat nulla facilisis at
                    vero eros et accumsan et iusto odio dignissim qui blandit
                    praesent luptatum zzril delenit augue duis dolore te feugait
                    nulla facilisi.
                </p>
            </card>
        </section>
        <section class="grid grid-cols-4 gap-8">
            <card title="Card with Grid" cardClass="">
                <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                    quis nostrud exerci tation ullamcorper suscipit lobortis
                    nisl ut aliquip ex ea commodo consequat. Duis autem vel eum
                    iriure dolor in hendrerit in vulputate velit esse molestie
                    consequat, vel illum dolore eu feugiat nulla facilisis at
                    vero eros et accumsan et iusto odio dignissim qui blandit
                    praesent luptatum zzril delenit augue duis dolore te feugait
                    nulla facilisi.
                </p>
            </card>
            <card
                title="Card with Grid"
                subtitle="...that is closable!"
                cardClass="col-span-2"
                :closable="true"
            >
                <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                    quis nostrud exerci tation ullamcorper suscipit lobortis
                    nisl ut aliquip ex ea commodo consequat. Duis autem vel eum
                    iriure dolor in hendrerit in vulputate velit esse molestie
                    consequat, vel illum dolore eu feugiat nulla facilisis at
                    vero eros et accumsan et iusto odio dignissim qui blandit
                    praesent luptatum zzril delenit augue duis dolore te feugait
                    nulla facilisi.
                </p>
            </card>
            <card title="Card with Grid" cardClass="">
                <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                    quis nostrud exerci tation ullamcorper suscipit lobortis
                    nisl ut aliquip ex ea commodo consequat. Duis autem vel eum
                    iriure dolor in hendrerit in vulputate velit esse molestie
                    consequat, vel illum dolore eu feugiat nulla facilisis at
                    vero eros et accumsan et iusto odio dignissim qui blandit
                    praesent luptatum zzril delenit augue duis dolore te feugait
                    nulla facilisi.
                </p>
            </card>
        </section>
        <section class="flex flex-row gap-8 flex-wrap">
            <card
                title="Styles Cards: Primary"
                subtitle="Not styled yet"
                cardClass="flex-1 min-w-sm"
                cardType="primary"
            >
                <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                    quis nostrud exerci tation ullamcorper suscipit lobortis
                    nisl ut aliquip ex ea commodo consequat. Duis autem vel eum
                    iriure dolor in hendrerit in vulputate velit esse molestie
                    consequat, vel illum dolore eu feugiat nulla facilisis at
                    vero eros et accumsan et iusto odio dignissim qui blandit
                    praesent luptatum zzril delenit augue duis dolore te feugait
                    nulla facilisi.
                </p>
            </card>
            <card
                title="Styles Cards: Secondary"
                subtitle="Not styled yet"
                cardClass="flex-1 min-w-sm"
                cardType="secondary"
            >
                <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                    quis nostrud exerci tation ullamcorper suscipit lobortis
                    nisl ut aliquip ex ea commodo consequat. Duis autem vel eum
                    iriure dolor in hendrerit in vulputate velit esse molestie
                    consequat, vel illum dolore eu feugiat nulla facilisis at
                    vero eros et accumsan et iusto odio dignissim qui blandit
                    praesent luptatum zzril delenit augue duis dolore te feugait
                    nulla facilisi.
                </p>
            </card>
        </section>
        <section class="flex flex-row gap-8 flex-wrap">
            <card
                title="Styles Cards: Info"
                subtitle="Not styled yet"
                cardClass="flex-1 min-w-sm"
                cardType="info"
            >
                <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                    quis nostrud exerci tation ullamcorper suscipit lobortis
                    nisl ut aliquip ex ea commodo consequat. Duis autem vel eum
                    iriure dolor in hendrerit in vulputate velit esse molestie
                    consequat, vel illum dolore eu feugiat nulla facilisis at
                    vero eros et accumsan et iusto odio dignissim qui blandit
                    praesent luptatum zzril delenit augue duis dolore te feugait
                    nulla facilisi.
                </p>
            </card>
            <card
                title="Styles Cards: Success"
                subtitle="Not styled yet"
                cardClass="flex-1 min-w-sm"
                cardType="success"
            >
                <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                    quis nostrud exerci tation ullamcorper suscipit lobortis
                    nisl ut aliquip ex ea commodo consequat. Duis autem vel eum
                    iriure dolor in hendrerit in vulputate velit esse molestie
                    consequat, vel illum dolore eu feugiat nulla facilisis at
                    vero eros et accumsan et iusto odio dignissim qui blandit
                    praesent luptatum zzril delenit augue duis dolore te feugait
                    nulla facilisi.
                </p>
            </card>
        </section>
        <section class="flex flex-row gap-8 flex-wrap">
            <card
                title="Styles Cards: Warning"
                subtitle="Not styled yet"
                cardClass="flex-1 min-w-sm"
                cardType="warning"
            >
                <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                    quis nostrud exerci tation ullamcorper suscipit lobortis
                    nisl ut aliquip ex ea commodo consequat. Duis autem vel eum
                    iriure dolor in hendrerit in vulputate velit esse molestie
                    consequat, vel illum dolore eu feugiat nulla facilisis at
                    vero eros et accumsan et iusto odio dignissim qui blandit
                    praesent luptatum zzril delenit augue duis dolore te feugait
                    nulla facilisi.
                </p>
            </card>
            <card
                title="Styles Cards: Danger"
                subtitle="Not styled yet"
                cardClass="flex-1 min-w-sm"
                cardType="danger"
            >
                <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                    quis nostrud exerci tation ullamcorper suscipit lobortis
                    nisl ut aliquip ex ea commodo consequat. Duis autem vel eum
                    iriure dolor in hendrerit in vulputate velit esse molestie
                    consequat, vel illum dolore eu feugiat nulla facilisis at
                    vero eros et accumsan et iusto odio dignissim qui blandit
                    praesent luptatum zzril delenit augue duis dolore te feugait
                    nulla facilisi.
                </p>
            </card>
        </section>
        <section class="flex flex-row gap-8 flex-wrap">
            <card
                title="Styles Cards: Dark"
                subtitle="Not styled yet"
                cardClass="flex-1 min-w-sm"
                cardType="dark"
            >
                <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                    quis nostrud exerci tation ullamcorper suscipit lobortis
                    nisl ut aliquip ex ea commodo consequat. Duis autem vel eum
                    iriure dolor in hendrerit in vulputate velit esse molestie
                    consequat, vel illum dolore eu feugiat nulla facilisis at
                    vero eros et accumsan et iusto odio dignissim qui blandit
                    praesent luptatum zzril delenit augue duis dolore te feugait
                    nulla facilisi.
                </p>
            </card>
            <card
                title="Styles Cards: Light"
                subtitle="Not styled yet"
                cardClass="flex-1 min-w-sm"
                cardType="light"
            >
                <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                    quis nostrud exerci tation ullamcorper suscipit lobortis
                    nisl ut aliquip ex ea commodo consequat. Duis autem vel eum
                    iriure dolor in hendrerit in vulputate velit esse molestie
                    consequat, vel illum dolore eu feugiat nulla facilisis at
                    vero eros et accumsan et iusto odio dignissim qui blandit
                    praesent luptatum zzril delenit augue duis dolore te feugait
                    nulla facilisi.
                </p>
            </card>
        </section>
    </layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Layout from "@/components/layouts/Default.vue";
import Card from "@/components/containers/Card.vue";
import CodeHighlight from "vue-code-highlight/src/CodeHighlight.vue";
import "vue-code-highlight/themes/duotone-sea.css";
import "vue-code-highlight/themes/window.css";

const codeSample = {
    importCard: `<template>
    <card title="Introduction">
        <!-- ...Your card content -->
    </card>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Card from "@/components/containers/Card.vue";

export default defineComponent({
    components: {
        Card,
    },
});
<script>`,
};

export default defineComponent({
    name: "CardComp",
    components: {
        Layout,
        Card,
        CodeHighlight,
    },
    setup() {
        return {
            codeSample,
        };
    },
});
</script>

<style scoped lang="pcss">
ul {
    @apply list-disc list-inside;
}
</style>

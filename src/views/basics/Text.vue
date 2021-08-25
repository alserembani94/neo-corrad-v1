<template>
    <Layout>
        <section class="flex flex-col gap-2">
            <h1>Texts</h1>
        </section>
        <section class="flex flex-col gap-8">
            <Card title="Introduction">
                <p>
                    There are several texts element in HTML that can be used
                    semantically, which are:
                </p>
                <ul>
                    <li>
                        <code>&lt;p&gt;</code>
                        - for paragraphs
                    </li>
                    <li>
                        <code>&lt;h1&gt;</code>, <code>&lt;h2&gt;</code>,
                        <code>&lt;h3&gt;</code>, <code>&lt;h4&gt;</code>,
                        <code>&lt;h5&gt;</code>, <code>&lt;h6&gt;</code> - for
                        headings
                    </li>
                    <li><code>&lt;a&gt;</code> - for achors (hyperlinks)</li>
                    <li>
                        <code>&lt;strong&gt;</code>, <code>&lt;em&gt;</code> -
                        for text styles
                    </li>
                    <li>
                        <code>&lt;code&gt;</code> - for code / monospaced text
                    </li>
                </ul>
                <p>
                    ...and so on. You can learn
                    <a
                        href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals"
                        target="_blank"
                        rel="noopener noreferrer"
                        >all text fundamentals in MDN docs.</a
                    >
                </p>
            </Card>
            <Card title="Styles">
                <p>
                    The root font is set to <code>16px</code>. To scale your
                    font proportionally, you can declare your root font size
                    inside <code>index.css</code>.

                    <br />

                    The font used for each category is defined inside
                    <code>tailwind.config.js</code>. The default fonts are as
                    follows:
                </p>

                <ul>
                    <li class="font-sans"><code>sans</code>: Poppins</li>
                    <li class="font-serif"><code>serif</code>: Georgia</li>
                    <li class="font-mono"><code>mono</code>: Fira Code</li>
                </ul>

                <p>Here are the standards used for each text elements:</p>
                <div class="overflow-x-auto">
                    <table class="w-full">
                        <thead>
                            <tr>
                                <td>HTML Element</td>
                                <td>Styles</td>
                                <td>Value</td>
                                <td>Tailwind Class</td>
                            </tr>
                        </thead>
                        <tbody>
                            <!-- For <p> -->
                            <tr>
                                <td rowspan="2"><code>&lt;p&gt;</code></td>
                                <td><code>font-size</code></td>
                                <td><code>1rem</code></td>
                                <td><code>text-base</code></td>
                            </tr>
                            <tr>
                                <td><code>line-height</code></td>
                                <td><code>1.75rem</code></td>
                                <td><code>leading-7</code></td>
                            </tr>
                            <!-- For <code> -->
                            <tr>
                                <td rowspan="2"><code>&lt;code&gt;</code></td>
                                <td><code>font-size</code></td>
                                <td><code>1rem</code></td>
                                <td><code>text-base</code></td>
                            </tr>
                            <tr>
                                <td><code>line-height</code></td>
                                <td><code>1.75rem</code></td>
                                <td><code>leading-7</code></td>
                            </tr>
                            <!-- For <h1> -->
                            <tr>
                                <td rowspan="2"><code>&lt;h1&gt;</code></td>
                                <td><code>font-size</code></td>
                                <td><code>2.25rem</code></td>
                                <td><code>text-4xl</code></td>
                            </tr>
                            <tr>
                                <td><code>font-weight</code></td>
                                <td><code>600</code></td>
                                <td><code>font-semibold</code></td>
                            </tr>
                            <!-- For <h2> -->
                            <tr>
                                <td rowspan="2"><code>&lt;h2&gt;</code></td>
                                <td><code>font-size</code></td>
                                <td><code>1.875rem</code></td>
                                <td><code>text-3xl</code></td>
                            </tr>
                            <tr>
                                <td><code>font-weight</code></td>
                                <td><code>600</code></td>
                                <td><code>font-semibold</code></td>
                            </tr>
                            <!-- For <h3> -->
                            <tr>
                                <td rowspan="2"><code>&lt;h3&gt;</code></td>
                                <td><code>font-size</code></td>
                                <td><code>1.5rem</code></td>
                                <td><code>text-2xl</code></td>
                            </tr>
                            <tr>
                                <td><code>font-weight</code></td>
                                <td><code>600</code></td>
                                <td><code>font-semibold</code></td>
                            </tr>
                            <!-- For <h4> -->
                            <tr>
                                <td rowspan="2"><code>&lt;h4&gt;</code></td>
                                <td><code>font-size</code></td>
                                <td><code>1.25rem</code></td>
                                <td><code>text-xl</code></td>
                            </tr>
                            <tr>
                                <td><code>font-weight</code></td>
                                <td><code>600</code></td>
                                <td><code>font-semibold</code></td>
                            </tr>
                            <!-- For <h5> -->
                            <tr>
                                <td rowspan="2"><code>&lt;h5&gt;</code></td>
                                <td><code>font-size</code></td>
                                <td><code>1.125rem</code></td>
                                <td><code>text-lg</code></td>
                            </tr>
                            <tr>
                                <td><code>font-weight</code></td>
                                <td><code>600</code></td>
                                <td><code>font-semibold</code></td>
                            </tr>
                            <!-- For <h6> -->
                            <tr>
                                <td rowspan="2"><code>&lt;h6&gt;</code></td>
                                <td><code>font-size</code></td>
                                <td><code>1rem</code></td>
                                <td><code>text-base</code></td>
                            </tr>
                            <tr>
                                <td><code>font-weight</code></td>
                                <td><code>600</code></td>
                                <td><code>font-semibold</code></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </Card>
            <Card title="Samples">
                <h1>Heading 1</h1>
                <h2>Heading 2</h2>
                <h3>Heading 3</h3>
                <h4>Heading 4</h4>
                <h5>Heading 5</h5>
                <h6>Heading 6</h6>
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
                    <br />
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
            </Card>
        </section>
    </Layout>
</template>

<script setup lang="ts">
import Layout from "@/components/layouts/Default.vue";
import Card from "@/components/containers/Card.vue";
</script>

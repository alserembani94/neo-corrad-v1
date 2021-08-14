<template>
    <layout>
        <section class="flex flex-col gap-2">
            <h1>Themes</h1>
        </section>
        <section class="flex flex-col gap-8">
            <card title="Introduction">
                <p>
                    We are proudly using Tailwind, a utility-first CSS framework
                    packed with classes that can be composed to build any
                    design, directly in your markup. To explore more information
                    about TailwindCSS, you can head to
                    <a
                        href="https://tailwindcss.com/docs"
                        rel="noopener noreferrer"
                        target="_blank"
                        >Tailwind documentation</a
                    >.

                    <br />

                    On top of TailwindCSS, we are also expanding the themes, so
                    you can also customize the themes either using our templates
                    by modifying <code>src/index.css</code>, or just modify
                    <code>tainwind.config.js</code> directly.
                </p>
            </card>
        </section>

        <section class="grid grid-cols-1 gap-8">
            <card title="Colors">
                <p>
                    We are extending existing Tailwind Colors profile,
                    handpicked just for you.
                </p>
                <!-- <div
                    v-for="color in colorProfile"
                    :key="`color-${color}`"
                    class="flex flex-row flex-wrap"
                >
                    <p class="w-40 mt-4">
                        <code>{{ color }}</code>
                    </p>
                    <div class="flex flex-row flex-wrap gap-3">
                        <div
                            v-for="shade in shades"
                            :key="`color-${color}-${shade}`"
                            class="flex flex-col items-center"
                        >
                            <div
                                class="w-16 h-16 rounded-lg shadow-md"
                                :class="`bg-${color}-${shade}`"
                            />
                            <p class="text-sm mt-2">{{ shade }}</p>
                        </div>
                    </div>
                </div> -->

                <!-- Primary Color -->
                <div class="flex flex-row flex-wrap">
                    <p class="w-40 mt-4">
                        <code>primary</code>
                    </p>
                    <div class="flex flex-row flex-wrap gap-3">
                        <div class="flex flex-col items-center">
                            <div
                                class="
                                    w-16
                                    h-16
                                    rounded-lg
                                    shadow-md
                                    bg-primary-100
                                "
                            />
                            <p class="text-sm mt-2">100</p>
                        </div>
                        <div class="flex flex-col items-center">
                            <div
                                class="
                                    w-16
                                    h-16
                                    rounded-lg
                                    shadow-md
                                    bg-primary-200
                                "
                            />
                            <p class="text-sm mt-2">200</p>
                        </div>
                        <div class="flex flex-col items-center">
                            <div
                                class="
                                    w-16
                                    h-16
                                    rounded-lg
                                    shadow-md
                                    bg-primary-300
                                "
                            />
                            <p class="text-sm mt-2">300</p>
                        </div>
                        <div class="flex flex-col items-center">
                            <div
                                class="
                                    w-16
                                    h-16
                                    rounded-lg
                                    shadow-md
                                    bg-primary-400
                                "
                            />
                            <p class="text-sm mt-2">400</p>
                        </div>
                        <div class="flex flex-col items-center">
                            <div
                                class="
                                    w-16
                                    h-16
                                    rounded-lg
                                    shadow-md
                                    bg-primary-500
                                "
                            />
                            <p class="text-sm mt-2">500</p>
                        </div>
                        <div class="flex flex-col items-center">
                            <div
                                class="
                                    w-16
                                    h-16
                                    rounded-lg
                                    shadow-md
                                    bg-primary-600
                                "
                            />
                            <p class="text-sm mt-2">600</p>
                        </div>
                        <div class="flex flex-col items-center">
                            <div
                                class="
                                    w-16
                                    h-16
                                    rounded-lg
                                    shadow-md
                                    bg-primary-700
                                "
                            />
                            <p class="text-sm mt-2">700</p>
                        </div>
                        <div class="flex flex-col items-center">
                            <div
                                class="
                                    w-16
                                    h-16
                                    rounded-lg
                                    shadow-md
                                    bg-primary-800
                                "
                            />
                            <p class="text-sm mt-2">800</p>
                        </div>
                        <div class="flex flex-col items-center">
                            <div
                                class="
                                    w-16
                                    h-16
                                    rounded-lg
                                    shadow-md
                                    bg-primary-900
                                "
                            />
                            <p class="text-sm mt-2">900</p>
                        </div>
                    </div>
                </div>

                <!-- Secondary Color -->
                <div class="flex flex-row flex-wrap">
                    <p class="w-40 mt-4">
                        <code>secondary</code>
                    </p>
                    <div class="flex flex-row flex-wrap gap-3">
                        <div class="flex flex-col items-center">
                            <div
                                class="
                                    w-16
                                    h-16
                                    rounded-lg
                                    shadow-md
                                    bg-secondary-100
                                "
                            />
                            <p class="text-sm mt-2">100</p>
                        </div>
                        <div class="flex flex-col items-center">
                            <div
                                class="
                                    w-16
                                    h-16
                                    rounded-lg
                                    shadow-md
                                    bg-secondary-200
                                "
                            />
                            <p class="text-sm mt-2">200</p>
                        </div>
                        <div class="flex flex-col items-center">
                            <div
                                class="
                                    w-16
                                    h-16
                                    rounded-lg
                                    shadow-md
                                    bg-secondary-300
                                "
                            />
                            <p class="text-sm mt-2">300</p>
                        </div>
                        <div class="flex flex-col items-center">
                            <div
                                class="
                                    w-16
                                    h-16
                                    rounded-lg
                                    shadow-md
                                    bg-secondary-400
                                "
                            />
                            <p class="text-sm mt-2">400</p>
                        </div>
                        <div class="flex flex-col items-center">
                            <div
                                class="
                                    w-16
                                    h-16
                                    rounded-lg
                                    shadow-md
                                    bg-secondary-500
                                "
                            />
                            <p class="text-sm mt-2">500</p>
                        </div>
                        <div class="flex flex-col items-center">
                            <div
                                class="
                                    w-16
                                    h-16
                                    rounded-lg
                                    shadow-md
                                    bg-secondary-600
                                "
                            />
                            <p class="text-sm mt-2">600</p>
                        </div>
                        <div class="flex flex-col items-center">
                            <div
                                class="
                                    w-16
                                    h-16
                                    rounded-lg
                                    shadow-md
                                    bg-secondary-700
                                "
                            />
                            <p class="text-sm mt-2">700</p>
                        </div>
                        <div class="flex flex-col items-center">
                            <div
                                class="
                                    w-16
                                    h-16
                                    rounded-lg
                                    shadow-md
                                    bg-secondary-800
                                "
                            />
                            <p class="text-sm mt-2">800</p>
                        </div>
                        <div class="flex flex-col items-center">
                            <div
                                class="
                                    w-16
                                    h-16
                                    rounded-lg
                                    shadow-md
                                    bg-secondary-900
                                "
                            />
                            <p class="text-sm mt-2">900</p>
                        </div>
                    </div>
                </div>

                <!-- Info Color -->
                <div class="flex flex-row flex-wrap">
                    <p class="w-40 mt-4">
                        <code>info</code>
                    </p>
                    <div class="flex flex-row flex-wrap gap-3">
                        <div class="flex flex-col items-center">
                            <div
                                class="
                                    w-16
                                    h-16
                                    rounded-lg
                                    shadow-md
                                    bg-info-100
                                "
                            />
                            <p class="text-sm mt-2">100</p>
                        </div>
                        <div class="flex flex-col items-center">
                            <div
                                class="
                                    w-16
                                    h-16
                                    rounded-lg
                                    shadow-md
                                    bg-info-200
                                "
                            />
                            <p class="text-sm mt-2">200</p>
                        </div>
                        <div class="flex flex-col items-center">
                            <div
                                class="
                                    w-16
                                    h-16
                                    rounded-lg
                                    shadow-md
                                    bg-info-300
                                "
                            />
                            <p class="text-sm mt-2">300</p>
                        </div>
                        <div class="flex flex-col items-center">
                            <div
                                class="
                                    w-16
                                    h-16
                                    rounded-lg
                                    shadow-md
                                    bg-info-400
                                "
                            />
                            <p class="text-sm mt-2">400</p>
                        </div>
                        <div class="flex flex-col items-center">
                            <div
                                class="
                                    w-16
                                    h-16
                                    rounded-lg
                                    shadow-md
                                    bg-info-500
                                "
                            />
                            <p class="text-sm mt-2">500</p>
                        </div>
                        <div class="flex flex-col items-center">
                            <div
                                class="
                                    w-16
                                    h-16
                                    rounded-lg
                                    shadow-md
                                    bg-info-600
                                "
                            />
                            <p class="text-sm mt-2">600</p>
                        </div>
                        <div class="flex flex-col items-center">
                            <div
                                class="
                                    w-16
                                    h-16
                                    rounded-lg
                                    shadow-md
                                    bg-info-700
                                "
                            />
                            <p class="text-sm mt-2">700</p>
                        </div>
                        <div class="flex flex-col items-center">
                            <div
                                class="
                                    w-16
                                    h-16
                                    rounded-lg
                                    shadow-md
                                    bg-info-800
                                "
                            />
                            <p class="text-sm mt-2">800</p>
                        </div>
                        <div class="flex flex-col items-center">
                            <div
                                class="
                                    w-16
                                    h-16
                                    rounded-lg
                                    shadow-md
                                    bg-info-900
                                "
                            />
                            <p class="text-sm mt-2">900</p>
                        </div>
                    </div>
                </div>

                <!-- Success Color -->
                <div class="flex flex-row flex-wrap">
                    <p class="w-40 mt-4">
                        <code>success</code>
                    </p>
                    <div class="flex flex-row flex-wrap gap-3">
                        <div class="flex flex-col items-center">
                            <div
                                class="
                                    w-16
                                    h-16
                                    rounded-lg
                                    shadow-md
                                    bg-success-100
                                "
                            />
                            <p class="text-sm mt-2">100</p>
                        </div>
                        <div class="flex flex-col items-center">
                            <div
                                class="
                                    w-16
                                    h-16
                                    rounded-lg
                                    shadow-md
                                    bg-success-200
                                "
                            />
                            <p class="text-sm mt-2">200</p>
                        </div>
                        <div class="flex flex-col items-center">
                            <div
                                class="
                                    w-16
                                    h-16
                                    rounded-lg
                                    shadow-md
                                    bg-success-300
                                "
                            />
                            <p class="text-sm mt-2">300</p>
                        </div>
                        <div class="flex flex-col items-center">
                            <div
                                class="
                                    w-16
                                    h-16
                                    rounded-lg
                                    shadow-md
                                    bg-success-400
                                "
                            />
                            <p class="text-sm mt-2">400</p>
                        </div>
                        <div class="flex flex-col items-center">
                            <div
                                class="
                                    w-16
                                    h-16
                                    rounded-lg
                                    shadow-md
                                    bg-success-500
                                "
                            />
                            <p class="text-sm mt-2">500</p>
                        </div>
                        <div class="flex flex-col items-center">
                            <div
                                class="
                                    w-16
                                    h-16
                                    rounded-lg
                                    shadow-md
                                    bg-success-600
                                "
                            />
                            <p class="text-sm mt-2">600</p>
                        </div>
                        <div class="flex flex-col items-center">
                            <div
                                class="
                                    w-16
                                    h-16
                                    rounded-lg
                                    shadow-md
                                    bg-success-700
                                "
                            />
                            <p class="text-sm mt-2">700</p>
                        </div>
                        <div class="flex flex-col items-center">
                            <div
                                class="
                                    w-16
                                    h-16
                                    rounded-lg
                                    shadow-md
                                    bg-success-800
                                "
                            />
                            <p class="text-sm mt-2">800</p>
                        </div>
                        <div class="flex flex-col items-center">
                            <div
                                class="
                                    w-16
                                    h-16
                                    rounded-lg
                                    shadow-md
                                    bg-success-900
                                "
                            />
                            <p class="text-sm mt-2">900</p>
                        </div>
                    </div>
                </div>

                <!-- warning Color -->
                <div class="flex flex-row flex-wrap">
                    <p class="w-40 mt-4">
                        <code>warning</code>
                    </p>
                    <div class="flex flex-row flex-wrap gap-3">
                        <div class="flex flex-col items-center">
                            <div
                                class="
                                    w-16
                                    h-16
                                    rounded-lg
                                    shadow-md
                                    bg-warning-100
                                "
                            />
                            <p class="text-sm mt-2">100</p>
                        </div>
                        <div class="flex flex-col items-center">
                            <div
                                class="
                                    w-16
                                    h-16
                                    rounded-lg
                                    shadow-md
                                    bg-warning-200
                                "
                            />
                            <p class="text-sm mt-2">200</p>
                        </div>
                        <div class="flex flex-col items-center">
                            <div
                                class="
                                    w-16
                                    h-16
                                    rounded-lg
                                    shadow-md
                                    bg-warning-300
                                "
                            />
                            <p class="text-sm mt-2">300</p>
                        </div>
                        <div class="flex flex-col items-center">
                            <div
                                class="
                                    w-16
                                    h-16
                                    rounded-lg
                                    shadow-md
                                    bg-warning-400
                                "
                            />
                            <p class="text-sm mt-2">400</p>
                        </div>
                        <div class="flex flex-col items-center">
                            <div
                                class="
                                    w-16
                                    h-16
                                    rounded-lg
                                    shadow-md
                                    bg-warning-500
                                "
                            />
                            <p class="text-sm mt-2">500</p>
                        </div>
                        <div class="flex flex-col items-center">
                            <div
                                class="
                                    w-16
                                    h-16
                                    rounded-lg
                                    shadow-md
                                    bg-warning-600
                                "
                            />
                            <p class="text-sm mt-2">600</p>
                        </div>
                        <div class="flex flex-col items-center">
                            <div
                                class="
                                    w-16
                                    h-16
                                    rounded-lg
                                    shadow-md
                                    bg-warning-700
                                "
                            />
                            <p class="text-sm mt-2">700</p>
                        </div>
                        <div class="flex flex-col items-center">
                            <div
                                class="
                                    w-16
                                    h-16
                                    rounded-lg
                                    shadow-md
                                    bg-warning-800
                                "
                            />
                            <p class="text-sm mt-2">800</p>
                        </div>
                        <div class="flex flex-col items-center">
                            <div
                                class="
                                    w-16
                                    h-16
                                    rounded-lg
                                    shadow-md
                                    bg-warning-900
                                "
                            />
                            <p class="text-sm mt-2">900</p>
                        </div>
                    </div>
                </div>

                <!-- danger Color -->
                <div class="flex flex-row flex-wrap">
                    <p class="w-40 mt-4">
                        <code>danger</code>
                    </p>
                    <div class="flex flex-row flex-wrap gap-3">
                        <div class="flex flex-col items-center">
                            <div
                                class="
                                    w-16
                                    h-16
                                    rounded-lg
                                    shadow-md
                                    bg-danger-100
                                "
                            />
                            <p class="text-sm mt-2">100</p>
                        </div>
                        <div class="flex flex-col items-center">
                            <div
                                class="
                                    w-16
                                    h-16
                                    rounded-lg
                                    shadow-md
                                    bg-danger-200
                                "
                            />
                            <p class="text-sm mt-2">200</p>
                        </div>
                        <div class="flex flex-col items-center">
                            <div
                                class="
                                    w-16
                                    h-16
                                    rounded-lg
                                    shadow-md
                                    bg-danger-300
                                "
                            />
                            <p class="text-sm mt-2">300</p>
                        </div>
                        <div class="flex flex-col items-center">
                            <div
                                class="
                                    w-16
                                    h-16
                                    rounded-lg
                                    shadow-md
                                    bg-danger-400
                                "
                            />
                            <p class="text-sm mt-2">400</p>
                        </div>
                        <div class="flex flex-col items-center">
                            <div
                                class="
                                    w-16
                                    h-16
                                    rounded-lg
                                    shadow-md
                                    bg-danger-500
                                "
                            />
                            <p class="text-sm mt-2">500</p>
                        </div>
                        <div class="flex flex-col items-center">
                            <div
                                class="
                                    w-16
                                    h-16
                                    rounded-lg
                                    shadow-md
                                    bg-danger-600
                                "
                            />
                            <p class="text-sm mt-2">600</p>
                        </div>
                        <div class="flex flex-col items-center">
                            <div
                                class="
                                    w-16
                                    h-16
                                    rounded-lg
                                    shadow-md
                                    bg-danger-700
                                "
                            />
                            <p class="text-sm mt-2">700</p>
                        </div>
                        <div class="flex flex-col items-center">
                            <div
                                class="
                                    w-16
                                    h-16
                                    rounded-lg
                                    shadow-md
                                    bg-danger-800
                                "
                            />
                            <p class="text-sm mt-2">800</p>
                        </div>
                        <div class="flex flex-col items-center">
                            <div
                                class="
                                    w-16
                                    h-16
                                    rounded-lg
                                    shadow-md
                                    bg-danger-900
                                "
                            />
                            <p class="text-sm mt-2">900</p>
                        </div>
                    </div>
                </div>

                <!-- dark Color -->
                <div class="flex flex-row flex-wrap">
                    <p class="w-40 mt-4">
                        <code>dark</code>
                    </p>
                    <div class="flex flex-row flex-wrap gap-3">
                        <div class="flex flex-col items-center">
                            <div
                                class="
                                    w-16
                                    h-16
                                    rounded-lg
                                    shadow-md
                                    bg-dark-100
                                "
                            />
                            <p class="text-sm mt-2">100</p>
                        </div>
                        <div class="flex flex-col items-center">
                            <div
                                class="
                                    w-16
                                    h-16
                                    rounded-lg
                                    shadow-md
                                    bg-dark-200
                                "
                            />
                            <p class="text-sm mt-2">200</p>
                        </div>
                        <div class="flex flex-col items-center">
                            <div
                                class="
                                    w-16
                                    h-16
                                    rounded-lg
                                    shadow-md
                                    bg-dark-300
                                "
                            />
                            <p class="text-sm mt-2">300</p>
                        </div>
                        <div class="flex flex-col items-center">
                            <div
                                class="
                                    w-16
                                    h-16
                                    rounded-lg
                                    shadow-md
                                    bg-dark-400
                                "
                            />
                            <p class="text-sm mt-2">400</p>
                        </div>
                        <div class="flex flex-col items-center">
                            <div
                                class="
                                    w-16
                                    h-16
                                    rounded-lg
                                    shadow-md
                                    bg-dark-500
                                "
                            />
                            <p class="text-sm mt-2">500</p>
                        </div>
                        <div class="flex flex-col items-center">
                            <div
                                class="
                                    w-16
                                    h-16
                                    rounded-lg
                                    shadow-md
                                    bg-dark-600
                                "
                            />
                            <p class="text-sm mt-2">600</p>
                        </div>
                        <div class="flex flex-col items-center">
                            <div
                                class="
                                    w-16
                                    h-16
                                    rounded-lg
                                    shadow-md
                                    bg-dark-700
                                "
                            />
                            <p class="text-sm mt-2">700</p>
                        </div>
                        <div class="flex flex-col items-center">
                            <div
                                class="
                                    w-16
                                    h-16
                                    rounded-lg
                                    shadow-md
                                    bg-dark-800
                                "
                            />
                            <p class="text-sm mt-2">800</p>
                        </div>
                        <div class="flex flex-col items-center">
                            <div
                                class="
                                    w-16
                                    h-16
                                    rounded-lg
                                    shadow-md
                                    bg-dark-900
                                "
                            />
                            <p class="text-sm mt-2">900</p>
                        </div>
                    </div>
                </div>

                <!-- light Color -->
                <div class="flex flex-row flex-wrap">
                    <p class="w-40 mt-4">
                        <code>light</code>
                    </p>
                    <div class="flex flex-row flex-wrap gap-3">
                        <div class="flex flex-col items-center">
                            <div
                                class="
                                    w-16
                                    h-16
                                    rounded-lg
                                    shadow-md
                                    bg-light-100
                                "
                            />
                            <p class="text-sm mt-2">100</p>
                        </div>
                        <div class="flex flex-col items-center">
                            <div
                                class="
                                    w-16
                                    h-16
                                    rounded-lg
                                    shadow-md
                                    bg-light-200
                                "
                            />
                            <p class="text-sm mt-2">200</p>
                        </div>
                        <div class="flex flex-col items-center">
                            <div
                                class="
                                    w-16
                                    h-16
                                    rounded-lg
                                    shadow-md
                                    bg-light-300
                                "
                            />
                            <p class="text-sm mt-2">300</p>
                        </div>
                        <div class="flex flex-col items-center">
                            <div
                                class="
                                    w-16
                                    h-16
                                    rounded-lg
                                    shadow-md
                                    bg-light-400
                                "
                            />
                            <p class="text-sm mt-2">400</p>
                        </div>
                        <div class="flex flex-col items-center">
                            <div
                                class="
                                    w-16
                                    h-16
                                    rounded-lg
                                    shadow-md
                                    bg-light-500
                                "
                            />
                            <p class="text-sm mt-2">500</p>
                        </div>
                        <div class="flex flex-col items-center">
                            <div
                                class="
                                    w-16
                                    h-16
                                    rounded-lg
                                    shadow-md
                                    bg-light-600
                                "
                            />
                            <p class="text-sm mt-2">600</p>
                        </div>
                        <div class="flex flex-col items-center">
                            <div
                                class="
                                    w-16
                                    h-16
                                    rounded-lg
                                    shadow-md
                                    bg-light-700
                                "
                            />
                            <p class="text-sm mt-2">700</p>
                        </div>
                        <div class="flex flex-col items-center">
                            <div
                                class="
                                    w-16
                                    h-16
                                    rounded-lg
                                    shadow-md
                                    bg-light-800
                                "
                            />
                            <p class="text-sm mt-2">800</p>
                        </div>
                        <div class="flex flex-col items-center">
                            <div
                                class="
                                    w-16
                                    h-16
                                    rounded-lg
                                    shadow-md
                                    bg-light-900
                                "
                            />
                            <p class="text-sm mt-2">900</p>
                        </div>
                    </div>
                </div>

                <p>
                    There are also other colors that are declared for the sake
                    of consistency and abstraction.
                </p>
                <div class="flex flex-row flex-wrap gap-3">
                    <div class="flex flex-col items-center">
                        <div class="w-16 h-16 rounded-lg bg-white shadow-md" />
                        <p class="text-sm mt-2"><code>white</code></p>
                    </div>
                    <div class="flex flex-col items-center">
                        <div class="w-16 h-16 rounded-lg bg-black shadow-md" />
                        <p class="text-sm mt-2"><code>black</code></p>
                    </div>
                    <div class="flex flex-col items-center">
                        <div class="w-16 h-16 rounded-lg bg-baseBg shadow-md" />
                        <p class="text-sm mt-2"><code>baseBg</code></p>
                    </div>
                </div>
            </card>
        </section>
    </layout>
</template>

<script setup lang="ts">
import Layout from "@/components/layouts/Default.vue";
import Card from "@/components/containers/Card.vue";
import "vue-code-highlight/themes/duotone-sea.css";
import "vue-code-highlight/themes/window.css";
</script>

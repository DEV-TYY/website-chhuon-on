<script setup lang="ts">
    import { ref } from 'vue'

    const showNews = ref(false)
    const showEvents = ref(false)

    function toggle(menu) {
    if (menu === 'news') {
        showNews.value = !showNews.value
        showEvents.value = false
    } else {
        showEvents.value = !showEvents.value
        showNews.value = false
    }
    }
</script>


<template>
    <section class="flex items-center relative flex justify-center items-center z-30 text-amber bg-darkCyan">
        <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 max-w-8xl lg:w-[90%] w-full lg:gap-16 gap-5 px-14 mx-auto font-medium leading lg:px-24 lg:mt-16 nt-0">

            <!-- Logo -->
            <div>
                <ul>
                <li class="flex w-full h-full lg:items-start lg:justify-start items-center justify-center">
                    <div class="2xl:w-full lg:w-full w-full h-full flex lg:justify-end justify-center px-4">
                        <NuxtImg src="/logo/footer-logo.webp" class="h-auto w-full bottom-5 lg:-translate-y-[15%]" loading="lazy" />
                    </div>
                </li>
                </ul>
            </div>

            <!-- Menu -->
            <div class="mb-4">
                <ul class="flex w-full flex-col gap-2">

                <li class="border-b-2 py-1 mb-1 border-amber hover:text-white duration-150">
                    <a class="lg:text-xl text-lg font-roman" href="/golf-course">GOLF COURSE</a>
                </li>

                <li class="border-b-2 py-1 mb-1 border-amber hover:text-white duration-150">
                    <a class="lg:text-xl text-lg font-roman hover:text-white" href="/rates">RATES</a>
                </li>

                <li class="border-b-2 py-1 mb-1 border-amber hover:text-white duration-150">
                    <a class="lg:text-xl text-lg font-roman hover:text-white" href="/membership">MEMBERSHIP</a>
                </li>

                <li class="border-b-2 py-1 mb-1 border-amber hover:text-white duration-150">
                    <a class="lg:text-xl text-lg font-roman hover:text-white" href="/golf-academy">GOLF ACADEMY</a>
                </li>

                <li class="border-b-2 py-1 mb-1 border-amber hover:text-white duration-150">
                    <a class="lg:text-xl text-lg font-roman hover:text-white" href="/gallery">GALLERY</a>
                </li>

                <!-- NEWS & EVENTS (same structure) -->
                <li class="border-b-2 py-1 mb-1 border-amber hover:text-white duration-150 relative group">

                    <a class="lg:text-xl py-1 text-lg font-roman hover:text-white cursor-pointer">
                    NEWS & EVENTS
                    </a>

                    <ul class="z-10 hidden group-hover:block duration-300 absolute bg-darkCyan w-60 drop-shadow-lg rounded-lg transition-all ease-in-out">

                    <li class="text-sm shadow-2xl rounded-md submenu">

                        <!-- NEWS -->
                        <div class="lg:flex blcock">
                        <a
                            @click="toggle('news')"
                            class="block font-roman text-amber rounded-md transition-colors duration-200 cursor-pointer"
                        >
                            NEWS
                        </a>

                        <div
                            v-show="showNews"
                            class="absolute drop-shadow-lg lg:mt-2 mt-16 py-2 lg:translate-x-24 shadow-2xl lg:-translate-y-5 lg:left-[87.5px] z-20 bg-darkCyan rounded-md duration-300"
                        >
                            <a href="/news&events/soft-opening-lake-course-18-holes"
                            class="block whitespace-nowrap font-roman text-amber duration-200">
                            SOFT OPENING LAKE COURSE 18 HOLES
                            </a>

                            <a href="/news&events/international-travel"
                            class="px-1.5 block whitespace-nowrap font-roman text-amber duration-200">
                            INTERNATIONAL TRAVEL: NEW KID ON<br> THE BLOCK - CHHUN ON
                            </a>
                        </div>
                        </div>

                        <!-- EVENTS -->
                        <div class="relative">
                        <div class="lg:flex blcock">
                            <a
                            @click="toggle('events')"
                            class="block font-roman text-amber rounded-md transition-colors duration-200 cursor-pointer"
                            >
                            EVENTS
                            </a>

                            <div
                            v-show="showEvents"
                            class="absolute drop-shadow-lg lg:mt-2 mt-9 py-2 lg:translate-x-24 shadow-2xl lg:-translate-y-5 lg:left-[87.5px] z-20 bg-darkCyan rounded-md duration-300"
                            >
                            <a href="/news&events/events/the-first-ladies-golf-social"
                                class="block whitespace-nowrap font-roman text-amber duration-200">
                                THE FIRST LADIES GOLF SOCIAL
                            </a>

                            <a href="/news&events/events/tournament"
                                class="block whitespace-nowrap font-roman text-amber duration-200">
                                THE 8<sup>th</sup> SAMDECH HUN SEN TOURNAMENT
                            </a>

                            <a href="/news&events/events/championship"
                                class="block whitespace-nowrap font-roman text-amber duration-200">
                                THE CITY GOLF LOYALTY CHAMPIONSHIP
                            </a>
                            </div>
                        </div>

                        <a href="/news&events/hole-in-one-record"
                            class="block font-roman text-amber rounded-md transition-colors duration-200">
                            HOLE IN ONE RECORD
                        </a>
                        </div>

                        </li>
                        </ul>
                    </li>

                    <li class="border-b-2 py-1 mb-1 border-amber hover:text-white duration-150">
                        <a class="lg:text-xl text-lg font-roman hover:text-white" href="/about-us">ABOUT US</a>
                    </li>

                    <li class="mb-3">
                        <a class="lg:text-xl text-lg font-roman hover:text-white"
                        href="mailto:reservations@chhunon-golfresort.com">
                        BOOK YOUR TEE TIME
                        </a>
                    </li>

                </ul>
            </div>

            <!-- Contact -->
            <div class="mb-4 mt-1 lg:ml-12">
                <h1 class="lg:text-xl text-lg font-roman">CONTACT US</h1>
                <ul role="list" class="flex flex-col gap-2">
                    <li role="listitem"><p class="lg:text-lg font-roman mt-5">info@chhunon-golfresort.com</p></li>
                    <li role="listitem"><p class="lg:text-lg font-roman">+855 69 683 888</p></li>
                    <li role="listitem"><p class="lg:text-lg font-roman">Chrey Loas commune, Ponhea Lueu district, Kandal province, Cambodia</p></li>
                    <!--- Social --->
                    <li role="listitem" class="flex items-center gap-5 lg:mt-32 mt-10">
                        <!--- Facebook --->
                        <div class="bg-amber w-7 h-7 mt-1 flex justify-center items-center rounded-full">
                            <a href="https://www.facebook.com/chhunongolfresort" class="absolute mt-2 pt-[3px]" target="_blank" aria-label="social" aria-labelledby="social">
                                <svg width="20" height="25" fill="#0d3d3c" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 50 50">
                                    <path d="M32,11h5c0.552,0,1-0.448,1-1V3.263c0-0.520-0.403-0.96-0.925-0.997C35.484,2.153,32.376,2,30.141,2C20,2,20,5.68,20,12.368 V19h-7c-0.552,0-1,0.448-1,1v7c0,0.552,0.448,1,1,1h7v19c0,0.552,0.448,1,1,1h7c0.552,0,1-0.448,1-1V28h7.222 c0.51,0,0.938-0.383,0.994-0.89l0.778-7C38.06,19.518,37.596,19,37,19h-8v-5C29,12.343,30.343,11,32,11z"></path>
                                </svg>
                            </a>
                        </div>
                        <!--- Instagran --->
                        <div class="mt-2 flex justify-center items-center rounded-full">
                            <a href="https://www.instagram.com/chhunongolfresort/" target="_blank" aria-label="social" aria-labelledby="social">
                                <svg width="25" height="25" fill="#c28f64" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg>
                            </a>
                        </div>
                        <!--- LinkedIn --->
                        <div class="w-6 h-6 bg-amber mt-2 flex justify-center items-center rounded-md">
                            <a href="https://www.linkedin.com/company/chhunongolfresort/" target="_blank" aria-label="social" aria-labelledby="social">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="18" height="18" viewBox="0 0 256 256" xml:space="preserve">
                                <defs>
                                </defs>
                                <g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">
                                    <path d="M 1.48 29.91 h 18.657 v 60.01 H 1.48 V 29.91 z M 10.809 0.08 c 5.963 0 10.809 4.846 10.809 10.819 c 0 5.967 -4.846 10.813 -10.809 10.813 C 4.832 21.712 0 16.866 0 10.899 C 0 4.926 4.832 0.08 10.809 0.08" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: #0d3d3c; fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0)" stroke-linecap="round"></path>
                                    <path d="M 31.835 29.91 h 17.89 v 8.206 h 0.255 c 2.49 -4.72 8.576 -9.692 17.647 -9.692 C 86.514 28.424 90 40.849 90 57.007 V 89.92 H 71.357 V 60.737 c 0 -6.961 -0.121 -15.912 -9.692 -15.912 c -9.706 0 -11.187 7.587 -11.187 15.412 V 89.92 H 31.835 V 29.91 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: #0d3d3c; fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0)" stroke-linecap="round"></path>
                                </g>
                            </svg>
                            </a>
                        </div>
                        <!--- Telegram --->
                        <div class="w-8 h-8 mt-2 flex justify-center items-center rounded-full">
                            <a href="https://t.me/chhunongolfresort" target="_blank" aria-label="social" aria-labelledby="social">
                                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21 5L2 12.5L9 13.5M21 5L18.5 20L9 13.5M21 5L9 13.5M9 13.5V19L12.2488 15.7229" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </section>

</template>
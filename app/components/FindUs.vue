<template>
    <section class="relative flex h-full flex-col items-center justify-center w-full gap-5 lg:max-w-8xl lg:px-0 mb-10 lg:mt-30 mt-10">
        <div class="grid grid-cols-1 w-4/5 lg:grid-cols-1 lg:gap-7">
            <div class="items-start mt-4">
                <div class="bg-darkCyan w-[140px] h-[3px]"></div>
                <h1 class="py-5 2xl:text-4xl lg:text-3xl text-2xl font-roman text-darkCyan">CONTACT US</h1>
            </div>
            <div class="lg:col-span-2">
                <ul role="list" class="flex flex-col gap-3 [&>li]:flex mb-6">
                    <li role="listitem" class="flex items-center gap-5 justify-center">
                        <div>
                            <svg class="w-10 h-10" xmlns="http://www.w3.org/2000/svg" data-name="1" viewBox="0 0 128 128" width="25" height="25">
                                <path d="M126.74 86.4 90.8 72a2 2 0 0 0-1.9.22L72.52 83.87a88.62 88.62 0 0 1-28.46-28.49l11.68-16.27A2 2 0 0 0 56 37.2L41.6 1.26A2 2 0 0 0 39.37 0L1.66 7.22a1.93 1.93 0 0 0-.77.31 1.79 1.79 0 0 0-.36.3A2 2 0 0 0 0 9.18 119 119 0 0 0 118.81 128a2 2 0 0 0 1.35-.53 1.79 1.79 0 0 0 .3-.36 1.93 1.93 0 0 0 .31-.77L128 88.63a2 2 0 0 0-1.26-2.23Zm-9.58 37.6A115 115 0 0 1 4 10.84l34.49-6.57 13.36 33.4L40 54.12a2 2 0 0 0 0 2.19A92.42 92.42 0 0 0 71.57 88a2 2 0 0 0 2.18-.08l16.58-11.77 33.4 13.36Z" fill="#0d3d3c" class="color000 svgShape"></path>
                            </svg>
                        </div>
                        <div class="w-full">
                            <h1 class="lg:text-2xl text-xl font-roman text-darkCyan">PHONE</h1>
                            <p class="font-roman 2xl:text-2xl lg:text-lg text-sm text-darkCyan">+855 69 683 888</p>
                        </div>
                    </li>
                    <li><div class="w-full h-[1px] bg-darkCyan"></div></li>
                    <li role="listitem" class="flex items-center gap-5 justify-center">
                        <div>
                            <svg class="w-10 h-10" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 128 128" viewBox="0 0 128 128" width="25" height="25">
                                <path fill="#0d3d3c" d="M112 105H16c-5.514 0-10-4.486-10-10V30c0-5.514 4.486-10 10-10h96c5.514 0 10 4.486 10 10v65c0 5.514-4.486 10-10 10zM16 24c-3.309 0-6 2.691-6 6v65c0 3.309 2.691 6 6 6h96c3.309 0 6-2.691 6-6V30c0-3.309-2.691-6-6-6H16z" class="color505070 svgShape"></path>
                                <path fill="#0d3d3c" d="M64 65.04a5.989 5.989 0 0 1-3.456-1.101L8.003 33.734a2.001 2.001 0 0 1-.737-2.731 2.004 2.004 0 0 1 2.731-.737l52.816 30.379a1.997 1.997 0 0 0 2.373 0l.188-.123 52.629-30.256a2.001 2.001 0 0 1 1.994 3.468L67.456 63.939A5.989 5.989 0 0 1 64 65.04z" class="color505070 svgShape"></path>
                            </svg>
                        </div>
                        <div class="w-full">
                            <h1 class="lg:text-2xl text-lg font-roman text-darkCyan">EMAIL</h1>
                            <a href="mailto:info@chhunon-golfresort.com" class="font-roman 2xl:text-2xl lg:text-lg text-sm border-b border-darkCyan text-darkCyan">info@chhunon-golfresort.com</a>
                        </div>
                    </li>
                    <li><div class="w-full h-[1px] bg-darkCyan"></div></li>
                    <li role="listitem" class="flex items-center gap-5  justify-center">
                        <div>
                            <svg class="w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="25" height="25">
                                <path d="M42 48H28V35h-8v13H6V27a1 1 0 1 1 2 0v19h10V33h12v13h10V28a1 1 0 1 1 2 0v20z" fill="#0d3d3c" class="color000 svgShape"></path>
                                <path d="M47 27a.997.997 0 0 1-.691-.277L24 5.384 1.691 26.723a1 1 0 0 1-1.383-1.445L24 2.616l23.691 22.661A1 1 0 0 1 47 27zM39 15a1 1 0 0 1-1-1V8h-6a1 1 0 1 1 0-2h8v8a1 1 0 0 1-1 1z" fill="#0d3d3c" class="color000 svgShape"></path>
                            </svg>
                        </div>
                        <div class="w-full">
                            <h1 class="lg:text-2xl text-lg font-roman text-darkCyan">ADDRESS</h1>
                            <p class="font-roman 2xl:text-2xl lg:text-lg text-sm text-darkCyan">Chrey Loas Commune, Ponhea Lueu District,<br>
                                Kandal Province, Cambodia</p>
                        </div>
                    </li>
                    <li><div class="w-full h-[1px] bg-darkCyan"></div></li>
                </ul>
                <div class="col-span-4">
                      <ClientOnly>
                    <iframe
                        loading="lazy"
                        title="Our Location"
                        class="w-full min-h-[400px] h-full"
                        style="border:0;"
                        allowfullscreen
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31258.549038326742!2d104.8334701!3d11.6718159!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31094dcad83cfd75%3A0x9ade7cbc7f073b0b!2sChhun%20On%20Golf%20Resort!5e0!3m2!1sen!2skh!4v1711677043166!5m2!1sen!2skh" 
                        frameborder="0"
                        scrolling="no"
                        marginheight="0"
                        marginwidth="0"
                        referrerpolicy="no-referrer-when-downgrade">
                    </iframe>
                    </ClientOnly>
                </div>
            </div>
        </div>
    </section>
</template>
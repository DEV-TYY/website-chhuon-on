<script setup lang="ts">
  import NewsDescription from '~/components/NewsDescription.vue';
  import Banner from '~/components/Banner.vue';
  import Title from '~/components/Title.vue';
</script>

<template>
  <div>
    <!--- MAIN BANNER -->
    <Banner class="lg:mb-14 mb-8" image="banner/news-banner.webp"/>

    <Title 
      textClass="text-amber uppercase  2xltext-5xl lg:text-5xl text-3xl mb-5 text-amber border-none lg:max-w-8xl w-4/5"
      title="International Travel: New kid on the block –<br> Chhun On Golf Resort"/>

    <Title 
      textClass="lg:text-2xl text-lg text-darkCyan font-semibold border-none"
      title="What do you do when you’re the youngest and smallest kid on the block,<br>
              but want to compete with – and maybe even beat – the big guys?"/>

    <Title 
      textClass="lg:text-2xl text-lg text-darkCyan font-semibold border-none italic"
      title="TRAVEL FEATURE BY PAUL MYERS"/>

     <div class="w-full flex justify-center">
        <div class="lg:max-w-8xl w-4/5">
            <div class="grid lg:grid-cols-1 grid-cols-1">
                <div class="grid lg:gap-8 lg:grid-cols-2 grid-cols-1 mb-8">
                    <div>
                        <NewsDescription
                            descriptiontone="You match and try to exceed what they offer, ensuring that everyone well and truly takes notice. So it is with golf tourism to Cambodia."
                            descriptionttwo="At present, Thailand and Vietnam are the heavyweights, attracting the lion’s share of foreign golfers from North and South-East Asia, Europe, the sub-continent and Middle East, the Pacific and elsewhere."
                            image="/gallery/gallery-six.webp"
                            />

                        <NewsDescription
                            descriptiontone="Cambodia, a country wedged between the two golf tourism powerhouses, is currently a minor and – outside Korea and Japan – a relatively unknown destination, also well behind Malaysia and Indonesia in golf visitor numbers. But perhaps not for much longer."
                            image="/banner/travel-image-two.webp"
                            />
                            
                        <NewsDescription
                            descriptiontone="While the number of elite courses remains low, Fabrice Ho, the affable general manager of partly-opened Chhun On Golf Resort on the outskirts of Phnom Penh and a long-time golf executive in Cambodia, believes the Khmer nation’s time has come to be counted among the best golf experiences in Asia.
                                           <br>If the Brian Curley-designed Lake Course and the upcoming Palms Course at Chhun On are his validation, it’s hard to disagree."
                            image="/gallery/gallery-one.webp"
                            />

                        <NewsDescription
                            descriptiontone="The ongoing development, set to fully open in mid-2026 with no expense or attention to detail spared, is as appealing as the best 36-hole public-access complexes in Asia.
                              <br>Think Black Mountain in Hua Hin, Thailand; Danang Golf Club near Danang, Vietnam; The Els Club on Malaysia’s Desaru Coast; Blue Canyon’s twin courses in Phuket, and Spring City near Kunming, China and you have a sense of Chhun On’s pedigree."
                            image="/gallery/gallery-four.webp"
                            />
                    </div>

                    <div>
                        <NewsDescription
                            descriptiontone="Owned by a subsidiary of Cambodia’s Kampuchea Tela oil and gas corporation, Chhun On’s Lake Course opened in April and its Palms Course is set for play in the first half 2026, coinciding with the completion of a huge 20,000 square-metre-round clubhouse which dominates the local landscape."
                            descriptionttwo="Chhun On’s name comes from Kampuchea Tela’s founder and CEO, Okhna Chhun On. His investment brings to three the number of top-notch public-access courses in the Cambodian capital, complementing Vattanac Golf Resort (also with two courses) and Garden City, while a private members’ course, Phnom Penh Grand, has serious credentials, too."
                            image="/banner/travel-image-five.webp"
                            />

                        <NewsDescription
                            descriptiontone="Brian Curley, a partner in the esteemed Schmidt Curley design company which designed all Mission Hills’ 12 courses near Shenzhen, China as well as numerous others in China, Vietnam and across Asia, has delivered his solo expertise at Chhun On with stunning results."
                            descriptionttwo="So much so that Fabrice Ho, who hails originally from New Caledonia and was formerly general manager at Phokeethra Golf and Country Club in Siem Reap, is aiming for Chhun On to become the best golf complex in Cambodia and among the top half-dozen in Asia."
                            descriptiontthree="He is also expecting Cambodia to become a single destination of choice for foreign golfers, rather than only an add-on to Thailand and Vietnam."
                            image="/gallery/gallery-five.webp"
                            />


                        <NewsDescription
                            descriptiontone="“Ten years ago, the only really golfing choice in Cambodia was in Siem Reap, but since the opening of Vattanac and Garden City and now Chhun On, Phnom Penh is on the golf tourism map,” he declares."
                            descriptionttwo="“Golf tourists are always looking for somewhere new to play and now they have another choice.”"
                            descriptiontthree="Further, with the impending opening of Phnom Penh’s new Techo International airport in 2026 (set to be one of the largest in South-East Asia and likely to attract new foreign carriers) and additional courses planned or under construction near Sihanoukville in southern Cambodia, the outlook is promising."
                            descriptiontfour="Already, winter golf escapees from Korea and Japan have discovered the attraction of high season (December to March) golf in Cambodia.
                                             Others are following, including Australia, from where groups are already booked or planned at Chhun On in 2026."
                            descriptiontfive="“Cambodia is like Vietnam 20 years ago,” Fabrice Ho says. “But with only 16 million people [compared with 100 million in Vietnam and 70 million in Thailand], we are more reliant on visiting golfers.”"
                            image="/gallery/gallery-fourteen.webp"
                            />
                    </div>
                </div>
            </div>
        </div>
    </div>

  </div>
</template>
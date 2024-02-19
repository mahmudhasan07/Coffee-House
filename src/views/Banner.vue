<template >
    <section class="lg:my-10 md:my-7 my-4 lg:mx-10 md:mx-5 mx-2">
        <swiper :slides-per-view="1" :space-between="0" @swiper="onSwiper" :speed="2000" :autoplay="true"  :effect="'creative'"
            :creativeEffect="{
                prev: {
                    shadow: true,
                    translate: ['-120%', 0, -500],
                },
                next: {
                    shadow: true,
                    translate: ['120%', 0, -500],
                },
            }" :grabCursor="true" :navigation="true" :modules="modules" loop="true" centered-slides="true"
            @slideChange="onSlideChange">
            <swiper-slide>
                <div class="relative">
                    <img src="https://i.ibb.co/drL19z7/coffeebanner1.png" class="w-full h-full relative bannerimage" alt="">
                    <div
                        class="text-white textbanner absolute  lg:ml-10 md:ml-7 ml-3 lg:left-1/4 left-1/3 text-center top-1/3 shadow-lg">
                        <h1 class="lg:text-7xl text-center my-3  font-extrabold">
                            Best Coffee Town
                        </h1>
                        <button
                            class="p-3 rounded-xl border-2 lg:text-lg font-semibold backdrop-blur-3xl bg-transparent">Explore</button>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="relative">
                    <img src="https://i.ibb.co/cFXMvsx/coffeebanner2.jpg" class="w-full h-full relative bannerimage" alt="">
                    <div class="text-white textbanner absolute  lg:left-1/4 left-1/3 -ml-10  text-center top-1/3 shadow-lg">
                        <h1 class="lg:text-7xl text-center my-3  font-extrabold">
                            Best Service We provide
                        </h1>
                        <button class="p-3 rounded-xl border-2 lg:text-lg font-semibold backdrop-blur-3xl">Explore</button>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="relative">
                    <img src="https://i.ibb.co/myjrtnh/coffeebanner3.jpg" class="w-full h-full relative bannerimage" alt="">
                    <div class="text-white textbanner absolute  lg:left-1/4 left-1/3 -ml-10  text-center top-1/3 shadow-lg">
                        <h1 class="lg:text-7xl text-center my-3   font-extrabold">
                            Some Time For Myself
                        </h1>
                        <button class="p-3 rounded-xl border-2 lg:text-lg font-semibold backdrop-blur-3xl">Explore</button>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="relative">
                    <img src="https://i.ibb.co/8XPwGwz/coffeebanner4.jpg" class="w-full h-full relative bannerimage" alt="">
                    <div class="text-white textbanner absolute lg:left-1/4 left-1/3  text-center top-1/3 shadow-lg">
                        <h1 class="lg:text-7xl text-center my-3   font-extrabold">
                            Friendly Atmosphere <br> To Enjoy Yourself
                        </h1>
                        <button class="p-3 rounded-xl border-2 lg:text-lg font-semibold backdrop-blur-3xl">Explore</button>
                    </div>
                </div>
            </swiper-slide>
        </swiper>
        <!-- <div class="relative">
            <img id="bannerimage" src="https://i.ibb.co/drL19z7/coffeebanner1.png" class="w-full h-full relative" alt="">
        </div> -->
    </section>
</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectCube, EffectCreative } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-cube';
// import { EffectCube } from 'swiper/modules';

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        const onSwiper = (swiper) => {
            console.log(swiper);
        };
        const onSlideChange = () => {
            console.log('slide change');
        };
        return {
            onSwiper,
            onSlideChange,
            modules: [Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectCreative],
        };
    },
};

</script>
<style >
.bannerimage {
    aspect-ratio: 2/1;
    object-fit: cover;
    border-radius: 50px;
    /* opacity: 0.90; */
    /* background-color: black; */
}

.textbanner {
    filter: drop-shadow(5px 1px 80px black);
}
</style>
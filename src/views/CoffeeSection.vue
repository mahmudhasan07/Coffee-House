<template >
    <section class="my-10">
        <h1 class="text-[#AE7E4E] text-3xl font-bold text-center my-10">COFFEE BUILD YOUR BASE.</h1>
        <div class="flex flex-wrap lg:gap-0 gap-5 justify-around">
            <div class="lg:w-1/4  my-auto space-y-5">
                <div class="flex gap-5">
                    <div class="text-end">
                        <h1 class="text-2xl font-semibold">Croissant</h1>
                        <p>A croissant is a buttery, flaky, viennoiserie pastry of Austrian origin, but mostly associated
                            with France.</p>
                    </div>
                    <div>
                        <img class="w-28" :src="croissant" alt="" srcset="">
                    </div>
                </div>
                <div class="flex gap-5">
                    <div class="text-end">
                        <h1 class="text-2xl font-semibold">Toast Bread</h1>
                        <p>Toast bread, also known simply as toast or sliced bread, is a type of bread that has been sliced
                            and then toasted by exposure to radiant heat.</p>
                    </div>
                    <div>
                        <img class="w-28" :src="toast" alt="" srcset="">
                    </div>
                </div>
                <div class="flex gap-5">
                    <div class="text-end">
                        <h1 class="text-2xl font-semibold">Pancakes</h1>
                        <p>Pancakes are a type of flatbread or cake, typically round and flat, made from a batter that
                            usually consists of flour, eggs, milk, and butter or oil.</p>
                    </div>
                    <div>
                        <img class="w-28" :src="pancakes" alt="" srcset="">
                    </div>
                </div>

            </div>
            <!-- *2nd part -->
            <div class="lg:w-1/4 w-2/3">
                <img :src="coffee1" alt="">
            </div>
            <!-- *3rd part -->
            <div class="lg:w-1/4 my-auto space-y-5">
                <div class="flex flex-row-reverse gap-10">
                    <div class="">
                        <h1 class="text-2xl font-semibold">Turkish Coffee</h1>
                        <p>Turkish coffee is a traditional method of preparing coffee that originated in Turkey and has been
                            a significant part of Turkish culture for centuries.</p>
                    </div>
                    <div>
                        <img  class="w-40 " :src="turkish_coffee" alt="" srcset="">
                    </div>
                </div>
                <div class="flex flex-row-reverse gap-10 ">
                    <div>
                        <h1 class="text-2xl font-semibold">Coffee</h1>
                        <p>Coffee is a popular beverage enjoyed by millions of people around the world. It is made from
                            roasted and ground coffee beans, which come from the seeds of the Coffea plant. </p>
                    </div>
                    <div>
                        <img class="w-44" :src="coffee" alt="" srcset="">
                    </div>
                </div>
                <div class="flex flex-row-reverse gap-10">
                    <div >
                        <h1 class="text-2xl font-semibold">Morning Coffee</h1>
                        <p>Morning coffee is a cherished ritual for many people around the world. It's often the first thing
                            people reach for after waking up to help kick-start their day.</p>
                    </div>
                    <div>
                        <img class="w-40" :src="hot_cup" alt="" srcset="">
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>
<script setup>
import coffee1 from "../../public/coffee1.jpg";
import croissant from "../../public/croissant.png";
import toast from "../../public/toast.png";
import pancakes from "../../public/pancakes.png";
import turkish_coffee from "../../public/turkish-coffee.png";
import coffee from "../../public/coffee.png";
import hot_cup from "../../public/hot-cup.png";
</script>
<style lang="">
    
</style>
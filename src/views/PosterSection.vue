<template >
    <h1 class="text-[#AE7E4E] text-3xl font-bold text-center my-10">COFFEE BUILD YOUR BASE.</h1>
    <section class="flex flex-wrap  mx-10 ">
        <div class="  lg:flex-1">
            <img class="h-full rounded-xl object-cover" :src="feed1" alt="">
        </div>
        <div class="lg:ml-20 ">
            <img class="h-full  mx-auto rounded-xl" :src="feed2" alt="" srcset="">
        </div>
        <div class=" lg:flex-1 mx-auto border-black">
            <img class="w-80 mx-auto rounded-xl mb-3" :src="feed3" alt="">
            <img class="w-80 mx-auto rounded-xl " :src="feed4" alt="">
        </div>
    </section>
</template>
<script setup>
import feed1 from "../../public/feed1.jpg"
import feed2 from "../../public/feed2.jpg"
import feed3 from "../../public/feed3.jpg"
import feed4 from "../../public/feed4.jpg"
</script>
<style ></style>
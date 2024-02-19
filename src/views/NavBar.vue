<script setup>


</script>
<template >
    <nav class="flex flex-wrap justify-center lg:gap-28 gap-5 text-white  border-b-2 border-gray-500 py-3 bg-[#AE7E4E]">
        <div>
            <h1 class="text-4xl font-bold">Coffee House</h1>
        </div>
        <div class="flex flex-wrap text-xl font-semibold my-auto justify-center lg:gap-10 gap-2">
            <div class=" p-1 flex flex-col gap-1">
                <router-link class="navtitle" to="/">Home</router-link>
                <p class="nai"></p>
            </div>
            <div class=" p-1 flex flex-col gap-1">
                <router-link class="navtitle" to="/coffees">Coffees & Snacks</router-link>
                <p class="nai "></p>
            </div>
            <div class="p-1 flex flex-col gap-1">
                <router-link class="navtitle" to="/add-coffee">Add Coffee</router-link>
                <p class="nai "></p>
            </div>
            <div class="p-1 flex flex-col gap-1">
                <router-link class="navtitle" to="/updateORdelete">Update or Delete</router-link>
                <p class="nai "></p>
            </div>
            <div class="p-1 flex flex-col gap-1">
                <router-link class="navtitle" to="/about">About</router-link>
                <p class="nai"></p>
            </div>
        </div>
    </nav>
</template>

<style >
.nai {
    height: 0px;
    width: 0px;
    border-bottom: 4px solid;
    border-radius: 50px;

}

.navtitle:hover+.nai {
    height: 1px;
    width: 0px;
    margin: auto;
    border-bottom: 4px solid;
    border-radius: 50px;
    /* transition: all 2s; */
    animation: border both 1s;
}

@keyframes border {
    0% {
        width: 0%
    }

    100% {
        width: 100%
    }
}

.navtitle:focus + .nai {
    width: 100%;
    border-bottom: 4px solid;
    border-radius: 50px;
}
</style>
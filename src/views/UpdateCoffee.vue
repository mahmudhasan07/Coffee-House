<template >
    <section>
        <div >
            <h1 class="text-3xl font-semibold text-center my-10 ">Update OR Delete Your Coffee</h1>
            <div id="cards" class="flex flex-wrap justify-start gap-10 border-2 w-fit mx-10">

            </div>
            


            

        </div>

    </section>
</template>
<script setup>
import useAxios, { AxiosSecure } from '@/components/Hooks/useAxios';
import { ref, watchEffect } from 'vue';

const array = ref("")


watchEffect(() => {
    const axiosLink = useAxios(AxiosSecure)

    axiosLink.get('/coffees')
        .then(res => {
            array.value = res.data
            console.log(array.value[0]);

            const cards = document.getElementById('cards')
            array.value.map((element)=>{
                const card = document.createElement("div")
                card.className= "w-80 card p-2 border-2 border-gray-400 rounded-xl"
                card.innerHTML = `
                <img class="w-full h-80 object-cover" src="${element.Coffee_image}" alt="">
            <h1 class="text-2xl font-semibold">${element.Coffee_name}</h1>
            <p class="text-lg font-semibold">TK. ${element.Coffee_price}</p>
            <p class='my-2'>${element.Coffee_note}</p>

            <div class="mt-auto flex gap-1">
                <button class="btn w-1/2">Update</button>
                <button class="btn w-1/2">Delete</button>
                </div>
            
                `
                cards.appendChild(card)
            })

        })
        .catch(error => {
            console.log(error);
        })
}, [])

</script>
<style ></style>

<!-- <div class="border-2 mt-auto flex">
<button class="btn w-1/2">Update</button>
<button class="btn w-1/2">Delete</button>
</div> -->
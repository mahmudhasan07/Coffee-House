<template >
    <section>
        <div>
            <h1 class="text-3xl font-semibold text-center my-10 ">Update OR Delete Your Coffee</h1>
            <div id="cards" class="flex flex-wrap justify-start gap-10 mx-10">
                <div v-for="(item, ID) in array" :key="ID" class="w-80 card p-2 border-2 border-gray-400 rounded-xl">
                    <img class="w-full rounded-xl h-80 object-cover" :src="item.Coffee_image" alt="">
                    <h1 class="text-2xl font-semibold">{{ item.Coffee_name }}</h1>
                    <p class="text-lg font-semibold">TK. {{ item.Coffee_price }}</p>
                    <p class='my-2'>{{ item.Coffee_note }}</p>
                    <div class="flex gap-2 mt-auto">
                        <button :onclick="()=>handleUpdate(item.ID)" class="btn w-1/2 ">Update</button>
                        <button :onclick="()=>handleDelete(item.ID)" class="btn w-1/2">Delete</button>
                    </div>
                </div>
            </div>
        </div>

    </section>
</template>
<script setup>
import useAxios, { AxiosSecure } from '@/components/Hooks/useAxios';
import router from '@/router';
import { ref, watchEffect } from 'vue';

const array = ref([])
const axiosLink = useAxios(AxiosSecure)




watchEffect(() => {
    axiosLink.get('/coffees')
        .then(res => {
            array.value = res.data
            console.log(typeof (array));
        })
        .catch(error => {
            console.log(error);
        })

}, [])

const handleUpdate = (id) => {
    console.log("hello");
    router.push(`/updateORdelete/${id}`)
}

const handleDelete =(id)=>{
    console.log(id);
axiosLink.delete(`/coffees/${id}`)
.then(res=>{
    console.log(res.data);
})
.catch(error=>{
    console.log(error);
})

    
}

</script>
<style ></style>

<!-- <div class="border-2 mt-auto flex">
<button class="btn w-1/2">Update</button>
<button class="btn w-1/2">Delete</button>
</div> -->
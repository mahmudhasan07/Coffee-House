<template >
    <section>
        <h1 class="text-4xl text-center font-bold my-10">Update Your Item</h1>
        <div class="border-2 w-1/2 flex flex-wrap justify-between gap-5 p-2">
            <input  type="text" class="w-80 border-2 border-gray-400 p-2 rounded-xl">
            <input type="text" class="w-80 border-2  border-gray-400 p-2 rounded-xl">
            <textarea name="" id="" class="w-full border-2 border-black rounded-2xl" cols="30" rows="10"></textarea>
        </div>
    </section>
</template>
<script setup>
import useAxios, { AxiosSecure } from '@/components/Hooks/useAxios';
import { ref, watchEffect } from 'vue';

const item = ref()
const id = defineProps(['id'])




const axiosLink = useAxios(AxiosSecure)

watchEffect(()=>{
    axiosLink.get(`/coffees/${id?.id}`)
    .then(res=>{
        console.log(res.data);
        item.value = res.data
    })
    .catch(error=>{
        console.log(error);
    })
},[]) coffe

console.log(item.Coffee_name);

</script>
<style >
    
</style>
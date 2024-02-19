<template >
    <section>
        <h1 class="text-4xl text-center font-bold my-10">Update Your Item</h1>
        <div  class="border-2 border-[#AE7E4E] mx-auto w-1/2  p-5 rounded-2xl">
            <div id="input-section" class="flex  flex-wrap justify-between gap-5">

            </div>
            <input ref="hi" type="text" value="Hello hi bye" class="w-80 border-2  border-gray-400 p-2 rounded-xl" name="" id="">
            <button :onclick="handleupdate" class="btn w-full my-5 bg-[#AE7E4E] text-white text-lg">Update</button>
        </div>
    </section>
</template>
<script setup>
import useAxios, { AxiosSecure } from '@/components/Hooks/useAxios';
import { ref, watchEffect } from 'vue';

const id = defineProps(['id'])


const axiosLink = useAxios(AxiosSecure)

watchEffect(() => {
    axiosLink.get(`/coffees/${id?.id}`)
        .then(res => {
            const item = res.data
            document.getElementById("input-section").innerHTML = `
        <input :v-model="inputValue" name="Coffee_name" type="text" value="${item.Coffee_name}" class="w-80 border-2  border-gray-400 p-2 rounded-xl">
        <input name="Coffee_price" type="text" value="${item.Coffee_price}"  class="w-80 border-2  border-gray-400 p-2 rounded-xl">
            <textarea name="Coffee_note" id="" value="${item.Coffee_note}" class="w-full border-2 p-2 border-black rounded-2xl" rows="10">${item.Coffee_note}</textarea>
            
        `
        })
        .catch(error => {
            console.log(error);
        })
}, [])


const handleupdate=(e)=>{
    e.preventDefault();
    
// const from = e.target
// const name = from.Coffee_name
// const price = from.Coffee_price.value
// const note = from.Coffee_note.value
const nai = this.$refs.hi.value
console.log(nai);

}


</script>
<style ></style>
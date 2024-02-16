<template >
    <section>
        <div>
            <h1 class="text-3xl font-semibold text-center my-10">Update OR Delete Your Coffee</h1>
        </div>
        <div>
            
        </div>
    </section>
</template>
<script setup>
import useAxios, { AxiosSecure } from '@/components/Hooks/useAxios';
import { ref, watchEffect } from 'vue';

const array = ref("")


watchEffect(()=>{
    const axiosLink = useAxios(AxiosSecure)

axiosLink.get('/coffees')
.then(res=>{
    array.value = res.data
})
.catch(error=>{
console.log(error);
})
},[])

console.log(typeof(array));

</script>
<style >
    
</style>
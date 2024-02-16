<template >
    <section class="my-10 bg-[#AE7E4E] text-white flex justify-around  p-2">
        <div class="text-3xl font-semibold py-3">
<p class="text-5xl my-2">{{customerNum}} <span>+</span></p>
<p>Customer Visited</p>
        </div>
        <div class="text-3xl font-semibold py-3">
<p class="text-5xl my-2">{{customerReview}} <span>⭐</span></p>
<p>Customer Reviewed</p>
        </div>
        <div class="text-3xl font-semibold py-3">
<p class="text-5xl my-2">{{customerNum}} <span>+</span></p>
<p>Customer Visited</p>
        </div>

    </section>
</template>
<script setup>
import { ref, watchEffect } from 'vue';



const customerNum = ref(1000)
const customerReview = ref(1.0)

// console.log(customerNum.value);


// watchEffect(()=>{
//     const timmer = setInterval(()=>{
//         customerNum.value++
//         customerReview.value++
//         // if(customerNum.value > 9999){
//         //     clearInterval(timmer)
//         //     console.log("clear");
//         // }
//     },10)
// },[])




// setInterval(()=>{
//             customerNum++;
//             console.log(customerNum);
//             if(customerNum > 50){
//                 clearInterval(customerNum)
//                 console.log("clear");
//             }
//         },1000)


// watchEffect(()=>{
    
// },[])

// const divNum = document.getElementById("divNumber")
// divNum.innerText = `hello `

</script>
<style ></style>
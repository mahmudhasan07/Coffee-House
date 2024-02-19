<template >
    <section class="my-10 bg-[#AE7E4E] text-white flex flex-wrap text-center justify-around  p-2">
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


watchEffect(()=>{
    const timmer = setInterval(()=>{
        const value = customerNum.value+ 10
        customerNum.value = value
        if(customerNum.value > 9999){
            clearInterval(timmer)
            console.log("clear");
        }
    },10)
},[])

const reviewer = setInterval(()=>{
        const time = customerReview.value + 0.10
        customerReview.value = parseFloat(time.toFixed(1))
        if(customerReview.value >4.8){
                clearInterval(reviewer)
        }
},230)




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
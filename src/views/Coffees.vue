<template >
    <section>
        <h1 class="text-3xl font-bold text-center my-10 text-[#AE7E4E]">Our Coffess & Snacks</h1>

        <div id="card" class="flex justify-center gap-10">


        </div>
<!-- 
        <div id="cardDiv" class="w-72 h-80 border-2 overflow-hidden border-gray-400 mx-10 rounded-xl p-1">
            <img class="" src="https://i.ibb.co/x5mgQc0/djjdsdjs.jpg" alt="">
            <div class="p-2 mt-10">
                <h1 class="text-2xl font-semibold">Lungo</h1>
                <p class="font-semibold">TK. 350</p>
                <p>A style of espresso where more water is passed through the coffee grounds, resulting in a longer extraction time and a larger volume of coffee.</p>
            </div>
        </div> -->


    </section>
</template>
<script setup>
import useAxios, { AxiosSecure } from '@/components/Hooks/useAxios';
import { watchEffect } from 'vue';

const axiosLink = useAxios(AxiosSecure)

watchEffect(() => {
    axiosLink.get("/coffees")
        .then(res => {
            const array = res.data
            // console.log(array);
            const cardDiv = document.getElementById("card")
            array.map((element) => {
                const div = document.createElement('div')
                div.className = 'w-72 h-80 border-2 overflow-hidden border-gray-400 rounded-xl p-1'
                div.id = "cardDiv"
                div.innerHTML = `
             <img  src=${element?.Coffee_image} id="cardimg" class='' alt="">
             <div class="p-2 mt-10">
                <h1 class="text-2xl font-semibold">${element?.Coffee_name}</h1>
                <p class="font-semibold">TK. ${element?.Coffee_price}</p>
                <p>${element?.Coffee_note}</p>
            </div>
             `

                cardDiv.appendChild(div)
            }
            )

        })
        .catch(err => {
            console.log(err);
        })
}, [])
</script>
<style>
.carddiv {
    cursor: pointer;
}

#cardimg {
    width: 300px;
    height: 300px;
    /* aspect-ratio: 4/3; */
    object-fit: contain;
}

/* #cardimg:hover {
    width: 100px;
    height: 100px;
    border-radius: 100%;
    transition: all .5s;
} */

#cardDiv {
    /* transform: rotateY(20deg); */
    /* perspective: 1000px; */


}

#cardDiv > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
    transition: all 1s;
}


#cardDiv:hover > div{
    display: inline;
    transition: all 1s;
}



#cardDiv:hover >img{
    width: 100px;
    height: 100px;
    border-radius: 100%;
    transition: all 1s;
}

/* #cardDiv:hover>img {
    transform: perspective(1000px) rotateX(0deg) rotateZ(0deg) rotateY(-100deg);
    transition: all 1s;
    } */
</style>
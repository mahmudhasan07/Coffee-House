<template >
    <section id="divNumber" class="my-10 bg-[#AE7E4E] text-white flex justify-around p-2">

    </section>
</template>
<script setup>
import { EffectScope, watchEffect } from 'vue';

watchEffect(() => {
    const divNum = document.getElementById("divNumber")
    const div = document.createElement("div")
    div.innerHTML = `
<p>5000</p>
`
    divNum.appendChild(div)
}, [])

</script>
<style ></style>
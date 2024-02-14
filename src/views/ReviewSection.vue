<template >
    <section  class="my-10 bg-[#AE7E4E] text-white flex justify-around p-2">
        <div id="divNumber">
        </div>

    </section>
</template>
<script setup>

const divNum = document.getElementById("divNumber")
    const div = document.createElement("div")
    div.innerHTML = `
<img src="https://i.ibb.co/x5mgQc0/djjdsdjs.jpg" />
`
    divNum.appendChild(div)

</script>
<style ></style>
<template >
    <section>
        <h1 class="text-[#AE7E4E] text-3xl font-bold text-center my-10">Add Your Coffee or Snack.</h1>
        <div>

        </div>
        <form :onsubmit="handleForm" action="" class=" w-1/2 mx-auto p-2 space-y-2">
            <div class="flex justify-between">
                <div>
                    <label class="text-lg font-semibold">Coffee Name </label> <br>
                    <input name="name" type="text" class="border-2 w-80 p-2 rounded-2xl border-gray-400">
                </div>
                <div>
                    <label class="text-lg font-semibold">Coffee Price </label> <br>
                    <input name="price" type="text" class="border-2 w-80 p-2 rounded-2xl border-gray-400">
                </div>
            </div>
            <div class="flex justify-between">
                <div>
                    <label class="text-lg font-semibold" for="">Upload Your Coffee Image</label> <br>
                    <input :onchange="handleImage" name="image" type="file"
                        class="border-2 w-80 p-2 rounded-2xl border-gray-400">
                </div>
                <div id="imagePreview" class="w-full">

                </div>
            </div>
            <div>

                <div>
                    <label class="text-lg font-semibold" for="">Coffee Information</label> <br>
                    <textarea name="note" class="border-2 p-2 border-gray-400 w-full rounded-xl" rows="5 "></textarea>
                </div>
            </div>
            <div>
                <button class="btn w-full bg-[#AE7E4E] text-white">Add Item</button>
            </div>
        </form>
        <div id="imagePreview">

        </div>
    </section>
</template>
<script setup>
import useAxios, { AxiosSecure } from '@/components/Hooks/useAxios';
import axios from 'axios';
// import { useTransitionState } from 'vue';
import Swal from 'sweetalert2'


const axiosLink = useAxios(AxiosSecure)

let imageDemo

const handleImage = (e) => {
    e.preventDefault()
    const file = e.target.files[0]
    // console.log(file);

    imageDemo = URL.createObjectURL(file)
    document.getElementById("imagePreview").innerHTML = `<img class="w-16 mx-auto" src=${imageDemo} /> `
    // console.log(imageDemo);
}

const handleForm = (e) => {
    e.preventDefault();
    const from = e.target
    const name = from.name.value
    const price = from.price.value
    const image = from.image.files[0]
    const note = from.note.value

    if (image) {
        axios.post('https://api.imgbb.com/1/upload?key=890925a8320c10ec4aec72015adb4563', { image }, {
            headers: {
                "content-type": "multipart/form-data"
            }
        })
            .then(res => {
                // console.log(res);
                const imgbbURL = res.data.data.display_url
                const curd = { name, price, imgbbURL, note }
                axiosLink.post("/add-coffee", curd)
                    .then(res => {
                        console.log(res);
                        if (res.data == "success") {
                            Swal.fire({
                                title: "Successfully Added",
                                text: "Your coffee is successfully added",
                                icon: "success"
                            });
                        }
                        if(res.data == "don't add in database"){
                            Swal.fire({
                                title: "Unsuccessfully",
                                text: "Your coffee is unsuccessfully to added",
                                icon: "error"
                            });
                        }
                    })
                    .catch(error => {
                        console.log(error);
                    })

            })
            .catch(error => {
                console.log(error);
            })
    }

}
</script>
<style ></style>
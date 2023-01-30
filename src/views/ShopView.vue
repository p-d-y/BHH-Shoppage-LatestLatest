<template>
    <main>
        <div class="topBar">Neuheiten</div>
        <div class="cointainer">
            <div class="products" @click="router.push(`/product/${product.id}`)" v-for="product in products" :key="product">
                <img :src="product.url" alt="">
                <div class="bottom">

                    <p>{{ product.name }}</p>
                    <p>{{ product.preis }}</p>
                </div>
            </div>

        </div>
        <div class="topBarBottom"></div>

    </main>
</template>


<script setup> 
import data from "../data.json"
import {ref} from "vue"
import { useRouter } from "vue-router";

const products = ref(data)
const router = useRouter()



</script>


<style scoped>
* {
    padding: 0;
    margin: 0;
    /* background-color: rgba(242, 230, 230, 0.798) ; */
    
}
.topBar{
    background-color: rgba(245,245,245,255);
    padding: 50px;
    font-weight: bolder;
    text-align: center;
    font-size: 23px;
    font-family: century Gothic;
    border-top: black 5px solid;
    
}

.topBarBottom{
    background-color: rgba(245,245,245,255);
    padding: 50px;
    font-weight: bolder;
    text-align: center;
    font-size: 23px;
    font-family: century Gothic;
    border-bottom: black 5px solid;
}
.cointainer {
    width: 70%;
    height: auto;
    /* border: solid 1px black; */
    margin: auto;
    margin-top: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;

}

.products {
    /* border: solid black 1px; */
    width: 250px;
    height: 400px;
    margin: 25px;
    box-shadow: 0 0 5px;
    cursor: pointer;
}

.products:hover {
    box-shadow: 0 0 15px;
}

.products img {
    height: 80%;
    width: 100%;
}

.products p {
font-family: century gothic;
text-align: center;
margin: 10px 0;
font-size: larger;
font-weight: bold;
}

.bottom{
    border-top: 1px black solid;
}
</style>
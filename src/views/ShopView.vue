<template>
    <main>
        <div class="topBar">Neuheiten</div>
        <div class="cointainer">

            <WarenkorbView @click="router.push(`/product/${product._id.$oid}`)" v-for="product in products" :key="product" 
            :product="product"/>
        </div>
        
        <div class="topBarBottom"></div>

    </main>
</template>


<script setup>

import { useRouter } from "vue-router";

const router = useRouter()

</script>

<script> 
import WarenkorbView from "../components/WarenkorbView.vue"


export default{
    components:{WarenkorbView},
    data(){
        return{
            product: "",
            products: [],
        }
    },
    mounted(){
        this.api_get_products()
    },

    methods:{
        api_get_products(){
            fetch('https://api.bhhshop.bembel.dev/api/product')
            .then(res => res.json())
            .then(data => this.products = data)
            .catch(err => console.log(err))
        }
    }
}

</script>


<style scoped>
* {
    padding: 0;
    margin: 0;
    /* background-color: rgba(242, 230, 230, 0.798) ; */
    
}
.topBar{
    background-color: rgba(0,143,163,255);
    padding: 30px;
    font-weight: bolder;
    text-align: center;
    font-size: 23px;
    font-family: century Gothic;
    /* border-top: black 5px solid; */
    box-shadow: 1px 1px 10px;
    
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
    justify-content: center;

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
    box-shadow: 0 0 15px
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
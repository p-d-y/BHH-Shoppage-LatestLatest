<script setup>
import {useRoute} from 'vue-router'
import {ref, onBeforeMount} from "vue"
import products from "../data.json"



const product = ref(null)
const route = useRoute()
const {id} = route.params

onBeforeMount(() => {
     product.value = products.find(p => p.id === parseInt(id))
})

console.log(route.params)
</script>


<template>
    <main>
        <div class="container">
            <div class="productContainer">
                <img src="../assets/hoodie0.jpg" alt="">
                <div class="productInfo">
                    <h1>{{ product.name }}</h1>
                    <div class="stock">
                        <p>In Stock</p>
                    </div>
                    <ul>
                        <li>Eigenschaft 1</li>
                        <li>Eigenschaft 2</li>
                        <li>Eigenschaft 3</li>

                    </ul>
                    <div>

                        <div class="größe" @click="openSizes()">{{ defaultText }}</div>
                        <ul class="größeUl" v-if="sizeOpen == true">
                            <li class="größeIl" v-for="size in sizes" :key="size" @click="chooseSize(size)">  {{ size }}</li>
                        </ul>
                    </div>
                    <p style="margin: 15px 0">{{ product.preis + "€" }}</p>
                    <p>{{ product.color }}</p>

                </div>
            </div>
            <div class="productReview">
                <div class="reviewNav">
                    <div class="reviews" @click="openReview()" :class="{reviewsWhite: reviewOpen==false}">Reviews</div>
                    <div class="writeReviewsWhite"  @click="openWriteReview()" :class="{writeReviews: writeReview==true}">Write Reviews</div>
                </div>

                <div class="reviewContent"></div>
            </div>


        </div>

    </main>
</template>


<script >

export default {
    data() {
        return {
            sizeOpen: false,
            showDropdown: false,
            erased: "None",
            defaultText: "Größe",
            defaultText1: "Größe",
            reviewOpen: true,
            writeReview: false,
            sizes: ["M", "L", "S"]
        }
    },

    methods: {
        openSizes() {
            this.sizeOpen = !this.sizeOpen;
            console.log(this.sizeOpen)
        },

        chooseSize(size){
            this.defaultText = size;
            this.sizeOpen = false;


        },

        openReview(){
            this.reviewOpen =true
            this.writeReview = false
        },
      
        openWriteReview(){
            this.writeReview =true
            this.reviewOpen = false
            console.log(this.writeReview)
        },
      



    }
}



</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    font-size: 23px;
    font-family: century Gothic;

}

.container {
    width: 60%;
    margin: auto;
    margin-top: 75px;
    height: auto;
    /* border: solid black 1px; */

}


.productContainer {
    height: 600px;
    display: flex;
    /* justify-content: space-between; */
    flex-wrap: wrap;
}

.productContainer img {
    height: 100%;
    width: auto;
    /* border: solid black 1px; */
    box-shadow: 1px 1px 2px;
}

.productInfo {
    /* border: solid rgb(255, 9, 22) 1px; */
    width: 300px;
    margin: 0 60px;

}

.stock p {
    background-color: rgb(11, 198, 11);
    width: 120px;
    text-align: center;
    border-radius: 15px;
    margin: 25px 0;


}

ul {
    list-style-type: square;
}

ul li {
    font-size: 19px;
    margin: 13px 0;
}

.größe {
    width: 80px;
    height: 30px;
    background-color: white;
    box-shadow: 0 0 3px;
    text-align: center;
    padding-top: 5px;
    cursor: pointer;
    border-radius: 2px;
    margin-top: 25px;

}

.größe:hover {
    box-shadow: 0 0 6px;
}

.größeUl {
    width: 100px;
    height: auto;
    margin-left: 15px ;
    padding-top: 5px;
    cursor: pointer;
    list-style-type: none;
}

.größeIl {

    text-align: center;
    margin: 6px 0;
    background-color: white;
    height: 30px;
    width: 50px;
    box-shadow: 0 0 3px;
}

.reviewNav{
    display: flex;
    margin-top: 30px ;

}

.reviewNav div {
    margin: 0 15px;
    
    padding: 15px;
}


.reviewContent{
    background-color: rgba(245,245,245,255);
    width: 95%;
    height: 150px;
    margin-left: 15px;

}


.reviews{
    background-color: rgba(245,245,245,255);
    cursor: pointer;
}

.reviewsWhite{
    background-color: white;
    cursor: pointer;
}


.writeReviews{
    background-color: rgba(245,245,245,255);
    cursor: pointer;
}


.writeReviewsWhite{
    background-color: white;
    cursor: pointer;
}
</style>
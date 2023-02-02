<script setup>

import { useRouter } from 'vue-router'
import {RouterLink} from "vue-router"

const router = useRouter()

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'EUR'
});


</script>

<script >

import { useRoute } from 'vue-router'

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
            sizes: ["M", "L", "S"],
            products: [],
            Product: "",
            id: "",
            in_stock: "",
            cart_id: "",
            amount: 1
        }
    },
    computed:{
        productTotal(){
            this.$store.getters.productQuantity(this.Product)
        }
    },
    beforeMount(){
        const route = useRoute()
        this.id= route.params.id
        this.api_get_product()
    },
    methods: 
    {
        test(stuff){
            console.log(stuff)
        },
        api_get_product(){
            fetch('https://api.bhhshop.bembel.dev/api/product/id=' + this.id)
                .then(res => res.json())
                .then(data => this.products = data)
                .catch(err => console.log(err))
        },
        choosedSize(size){
            product.choosedSize = size;
            
        },
        api_add_cart(ID){
            fetch('https://api.bhhshop.bembel.dev/api/cart/add/' + ID + "/" + this.amount)
                .then(res => res.text())
                .then(data => this.cart_id = data.split(":")[1])
                .catch(err => console.log(err))
        },
        check_stock(){
            if(this.Product.amount > 0){
                this.in_stock = "In Stock"
            }
            else{
                this.in_stock = "Out of Stock"
            }
            return this.in_stock
        },

        addProduct(){
            this.amount++
        },

        reduceProduct(){
            if(this.amount>=1){
                this.amount--

            }

        },


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
            this.writeReview = true
            this.reviewOpen = false
            console.log(this.writeReview)
        },
    }
}


</script>



<template>
    <main>
        <div style= "display: none;">
            {{ Product = JSON.parse(JSON.stringify(products))[0] }}
        </div>
        <div class="topBar">BHH-Shop</div>
        <div class="container">
            <div class="productContainer">
                <!-- <img :src="product.url" alt=""> -->
                <div class="productInfo">
                    <h1> {{ Product.product }}  </h1>
                    <div class="stock">
                        <p>{{ check_stock() }}</p>
                    </div>
                    <ul>
                        <li>{{ Product.type }}</li>
                        <li>{{ Product.color }}</li>

                    </ul>
                    <div>

                        <div class="größe" @click="openSizes()">{{ defaultText }}</div>
                        <ul class="größeUl" v-if="sizeOpen == true">
                            <li class="größeIl" v-for="size in sizes" :key="size" @click="chooseSize(size) , choosedSize(size)" >  {{ size }}</li>
                        </ul>
                    </div>
                    <p style="margin: 15px 0">{{ formatter.format(Product.price) }}</p>
                    <p>Menge: {{ amount }}</p><div class="buttons">

                    <div @click="addProduct()" class="button" >+</div>
                    <div @click="reduceProduct()" class="button" >-</div>
                    </div>
                    <div>
                        <Button @click="api_add_cart(Product._id.$oid), router.push('/warenkorb/${cart_id}'), api_add_image(Product._id.$oid)"> Warenkorb
                        </Button>
                    </div>

                </div>
            </div>
            <div class="productReview">
                <div class="reviewNav">
                    <div class="reviews" @click="openReview()" :class="{reviewsWhite: reviewOpen==false}">Reviews</div>
                    <div class="writeReviewsWhite"  @click="openWriteReview()" :class="{writeReviewClass: writeReview==true}">Write Reviews</div>
                </div>


                <div class="reviewContant" v-if="reviewOpen==true"><p style="padding: 10px; overdlow-y: scroll">

                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fringilla odio luctus purus mattis vestibulum. Duis vel nulla a lectus pretium euismod.
                     Nunc convallis ultricies risus ut sodales. Nulla molestie magna ut nunc facilisis pharetra. Fusce blandit lobortis dolor, sed pellentesque sapien posuere a. Aliquam erat volutpat. 
                </p>
                </div>

                <div class="writeReviewContent" v-if="writeReview==true">
                    <input type="text">

                </div>
            </div>


        </div>

    </main>
</template>


<style scoped>
* {
    margin: 0;
    padding: 0;
    font-size: 23px;
    font-family: century Gothic;

}

.buttons{
    display: flex;
}

.button:hover {
    box-shadow: 0 0 6px;
}


.button{
    box-shadow: 0 0 3px;
    border: solid 1px black;
    background-color: white;
    width: 25px;
    margin: 0 5px;
    text-align: center;
    cursor: pointer;
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

.container {
    width: 60%;
    margin: auto;
    margin-top: 50px;
    height: auto;
    /* border: solid black 1px; */
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;

}


.productContainer {
    height: auto;
    display: flex;
    /* justify-content: space-between; */
    flex-wrap: wrap;
}

.productContainer img {
    height: 100%;
    max-width: 440px;
    /* border: solid black 30px; */
    box-shadow: 0.5px 0.5px 10px;

}

.productInfo {
    /* border: solid rgb(255, 9, 22) 1px; */
    width: auto;
    margin-left: 50px;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    

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



.inWarenkorb{
    padding: 10px;
    margin-top: auto;
    background-color: rgba(0,143,163,255);
    cursor: pointer;
    border: none;
    
}





.reviewNav{
    display: flex;
    margin-top: 30px ;

}

.reviewNav div {
    margin: 0 15px;
    
    padding: 15px;
}

.reviewContant{
    background-color: rgba(245,245,245,255);
    width: 95%;
    height: 150px;
    margin-left: 15px;
}

.writeReviewContent{
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


.writeReviewsWhite{
    background-color: white;
    cursor: pointer;
}
.writeReviewClass{
    background-color: rgba(245,245,245,255);

  

   
}

input {
    height: 80%;
    width: 95%;
    margin: 15px;
}

</style>
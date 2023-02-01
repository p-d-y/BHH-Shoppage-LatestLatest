<template>


     
            <div class="products" >
                <img :src="product.url" alt="">
                <div class="bottom">

                    <p>{{product.name}}</p>
                    <p>{{product.preis}}</p>
                    
                </div>
            </div>
       

       

</template>

<script>

export default{

    props:['product'],

    data(){
        return{
            
        }
    },
}

</script>

<style scoped>
*{
    font-family: century gothic;
text-align: center;

font-weight: bold;
}


.container{
    display: flex;
    justify-content: center;
}
.products {
    /* border: solid black 1px; */
    width: 250px;
    height: 400px;
    margin-right: 25px;
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


.WarenkorbInfo{


}
</style>
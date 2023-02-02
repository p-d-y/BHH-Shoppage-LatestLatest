<template>
    <div class="topbar">Warenkorb</div>

        <div class="container">
            <div class="wareFrame">
                <WarenkorbView class="ware" />
      
           
           
                <div class="warenInfo">

                    <div class="row">
                        <p>Artikel</p> <p>Name</p>
                    </div>

                    <div class="row">
                        <p>Preis</p> <p>25,99€</p>
                    </div>

                    
                    <div class="row">
                        <p>Menge</p> <p>5</p>
                    </div>
                </div>    
        </div>



        <div class="wareFrame">
                <WarenkorbView class="ware" />
      
           
           
                <div class="warenInfo">

                    <div class="row">
                        <p>Artikel</p> <p>Name</p>
                    </div>

                    <div class="row">
                        <p>Preis</p> <p>25,99€</p>
                    </div>

                    
                    <div class="row">
                        <p>Menge</p> <p>5</p>
                    </div>
                </div>    
        </div>

        <div class="wareFrame">
                <WarenkorbView class="ware" />
      
           
           
                <div class="warenInfo">

                    <div class="row">
                        <p>Artikel</p> <p>Name</p>
                    </div>

                    <div class="row">
                        <p>Preis</p> <p>25,99€</p>
                    </div>

                    
                    <div class="row">
                        <p>Menge</p> <p>5</p>
                    </div>
                </div>    
        </div>


    </div>

    <div class="gesamt">
        Gesamt:
    </div>
</template>

<script>
import WarenkorbView from "../components/warenkorb_product.vue"

export default {
components: {WarenkorbView},
    
    data(){
        return{

        }
    }
}


</script>


<style scoped>
.topbar{
    background-color: rgba(0,143,163,255);
    padding: 30px;
    font-weight: bolder;
    text-align: center;
    font-size: 23px;
     box-shadow: 1px 1px 10px;
}

.container{
    height: auto;
    width: 70%;
    /* border: solid green 1px; */
    /* background-color: yellow; */
    margin: auto;
    margin-top: 25px;
    display: flex;
    
    flex-wrap: wrap;
}
.wareFrame{
    /* justify-content: space-between; */
    /* border: solid black 3px; */
    display: flex;
    width: 100%;
    box-shadow: 1px 1px 10px;
    margin: 15px 0;
}


.ware{
margin: 15px 15px;
/* min-width: 250px;     */
}
.row{
    display: flex;
    width: 100%;
    /* background-color: yellow; */
    justify-content: space-between;
    flex-direction: row;
    margin: auto;
    border-bottom: solid black 2px   ;

}

.row p{
    margin: 25px;
}










.warenInfo{
    display: flex;
    flex-direction: column;
    
    /* border: solid yellow 2px; */
    
    width: 70%;
}

.warenInfo p{
    margin: 15px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 20px;
}
</style>
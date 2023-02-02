<script setup>
import { RouterLink, RouterView } from 'vue-router'
import TopInfo from "./components/TopInfo.vue"
import preconfig from "./preconfig_data.json"


</script>

<template>
    <TopInfo />
    
    <main>
        
        <nav class="navbar">
            <div class="logo">
                <img class="bhhLogo" src="./assets/BigLogoOnlay.png" alt="nope">
            </div>
            
            <div class="hamburger">
                
                
            </div>
            <div class="navdiv">
                
                <ul class="ulN">
                    <li class="liN"><RouterLink to="/" class="normal"   style="cursor:pointer"  :class="{active: $route.name==='home'}" >Home</RouterLink></li>
                    <li class="liN">
                        <RouterLink to="/shop" class="normal" style="cursor:pointer"  :class="{active: $route.name==='shop'}">Shop</RouterLink></li>
                    <li class="liN">    <RouterLink to="/profile" class="normal" style="cursor:pointer"  :class="{active: $route.name==='profile'}">Profile</RouterLink></li>
                    <li class="liN"><a  class="normal" :class="{active: openProduct==true}" @click="populate()" style="cursor:pointer">Contact</a></li>
                    <li class="liN"><a class="normal" v-bind:href="test">{{ navFive }}</a></li>
                    
                </ul>
                
                
            </div>
        </nav>
        
        <RouterView />
    </main>
    

</template>


<script>

export default{


    data(){
        return{
            result: String
        }
    },
    methods:{
        saveFile: function() {
            const data = JSON.stringify(this.arr)
            window.localStorage.setItem('arr', data);
            console.log(JSON.parse(window.localStorage.getItem('arr')))
        },
        dump(){
            fetch("https://api.bhhshop.bembel.dev/api/dump", {
                "method": "POST",
                "headers": {
                    "Content-Type": 'json'
                },
                body: {
                    json_data: preconfig
                }
            })
        },
    }

}
</script>


<style scoped>

.navbar {
    height: 65px;
    
    background-color: rgba(255, 255, 255, 0.871);

    position: relative;


    align-items: center;
    display: flex;


}

.bhhLogo {
    height: 100%;
    width: 90px;
    margin-left: 15px;
    

    cursor: pointer;
}





.navdiv {


    margin-left: auto;

}


.ulN{
    padding: 15px;

}

.ulN .liN {
    display: inline;
    padding: 0 10px;
    border-radius: 5px;


}

.normal
 {
    text-decoration: none;
    padding: 6px 10px;
    font-size: 25px;
    font-family: century gothic;
    color: rgb(0, 42, 131);
    border-radius: 5px;

}

 .active {
    text-decoration: none;
    padding: 6px 10px;
    font-size: 25px;
    font-family: century gothic;
    color: white;
    border-radius: 5px;
    background-color: rgb(1, 21, 64);



}



ul li a:hover {
    text-decoration: none;
    padding: 6px 10px;
    font-size: 25px;
    font-family: century gothic;
    color: white;
    border-radius: 5px;
    background-color: rgb(1, 21, 64);



}


@media only screen and (max-width: 1320px) {
    .navbar {
        padding: 0 10px;
    }

    ul li a {
        padding: 2px
    }

}




@media only screen and (max-width: 1107px) {



    ul {
        padding: 15px 10px
    }

    ul li {
        padding: 5px
    }

    .navbar {
        padding: 0 5px
    }

}


@media only screen and (max-width: 785px) {
    ul {
        padding: 0px;
        display: none;
    }

    .hamburger {
        background-image: url("./assets/burger.png");
        height: 30px;
        width: 50px;
        margin: auto;
        left: 270px;
        background-repeat: no-repeat;

    }
}



.navdiv p {
    color: white;
}
</style>
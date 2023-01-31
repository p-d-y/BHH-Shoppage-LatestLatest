<script setup>
import { RouterLink, RouterView } from 'vue-router'
import TopInfo from "./components/TopInfo.vue"





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
                    <li class="liN"><RouterLink to="/" class="normal"  @click="activeNavBarHome()" style="cursor:pointer"  :class="{active: isActiveHome==true}" >Home</RouterLink></li>
                    <li class="liN">
                        <RouterLink to="/shop" class="normal" @click="activeNavBarShop()" style="cursor:pointer"  :class="{active: isActiveShop==true}">Shop</RouterLink></li>
                    <li class="liN">    <RouterLink to="/profile" class="normal" @click="activeNavBarProfile()" style="cursor:pointer"  :class="{active: isActiveProfile==true}">Profile</RouterLink></li>
                    <li class="liN"><a  class="normal" :class="{active: openProduct==true}" @click="$emit('openProduct')" style="cursor:pointer">Contact</a></li>
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
            isActiveHome: true,
            isActiveShop: false,
            isActiveProfile: false,
            isActiveContact: false,

        }
    },

    methods:{
        activeNavBarHome(){
            this.isActiveHome = !this.isActiveHome
            this.isActiveShop = false
            this.isActiveProfile = false


        },
        activeNavBarShop(){
            this.isActiveShop = !this.isActiveShop
            this.isActiveHome = false
          
            this.isActiveProfile = false

        },
        activeNavBarProfile(){
            this.isActiveProfile = !this.isActiveProfile
            this.isActiveHome = false
            this.isActiveShop = false
            

        },
        activeNavBarContact(){
            this.isActiveContact = !this.isActiveContact
            this.isActiveHome = false
            this.isActiveShop = false
            this.isActiveProfile = false

        }
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
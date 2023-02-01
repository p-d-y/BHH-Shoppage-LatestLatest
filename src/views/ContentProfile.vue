<template>

 <div class="uberschr">
        <h1>Max Mustermann</h1>
    <p>max.mustermann@gmail.com</p>
    </div>


 <div class="frame">

    <div>
        <p>Username:</p> 
        <input type="text" name="" id="" value="MaxMuster">
    </div>

    <div>
        <p>Vorname:</p> 
        <input type="text" name="" id="" value="MaxMuster">
    </div>

    <div>
        <p>Nachname:</p> 
        <input type="text" name="" id="" value="MaxMuster">
    </div>

    <div>
        <p>E-mail:</p> 
        <input type="text" name="" id="" value="MaxMuster">
    </div>

    <div>
        <p>Straße + H.Nr:</p> 
        <input type="text" name="" id="" value="MaxMuster">
    </div>

    <div>
        <p>Ort:</p> 
        <input type="text" name="" id="" value="MaxMuster">
    </div>
   </div>

</template>


<script>



export default {
    data() {
        return {
            uberschrift: "Please enter a goal!",
            input: "",
            goals: [],

        }
    },

    methods: {
        addGoal() {
            this.goals.push(this.input);
            this.input = "";
        },
      
    }



}

</script>


<style scoped>
*{
     /* font-size: 15px; */
    font-family: century gothic;
}

.uberschr{
    text-align: center;
    font-size: 15px;
     background-color: rgba(0,143,163,255);
     padding: 18px;
     box-shadow: 1px 1px 10px;;

}


.frame
{
    width: 70%;
    margin: auto;
    box-shadow: 0 0 5px;
    padding: 25px;
    margin-top: 15px;
}
.frame div{
    /* background-color: aqua; */
    margin: 25px 0;
    
    display: flex;
    justify-content:space-around;
    font-size: 20px;

    
}

input{
    width: 300px;
}





</style>
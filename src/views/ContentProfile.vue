<template>

    <div class="frame">

        <div class="box">
            <h1 class="laas">{{ uberschrift }}</h1>
            <div class="loos">

                <input type="text" id="inputstuff" size="50" v-model="input" />
                <button id="click" @click="addGoal()">add Goal</button>
                <button id="click" @click="deleteGoal()">delete Goal</button>
            </div>
            <ul>
                <li id="ldafd" v-for="goal in goals" v-bind:key="goal" >{{ goal }}</li>


            </ul>



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
.laas {
    text-align: center;
    margin: 15px 0px;
    font-size: 50px;
    font-family: century gothic;
    text-decoration-line: underline;
    text-decoration: dashed;

}

.frame {
    display: flex;
    justify-content: center;
    align-items: center;



}

.box {
    border: 3px black solid;
    width: 1050px;
    height: 550px;
    margin-top: 250px;
    box-shadow: 5px 2px 15px;
    overflow: scroll;
}

.loos {
    text-align: center;

}

#inputstuff {
    height: 30px;
    font-size: 20px;

}

#click {
    height: 30px;
    margin: 0px 50px;
    font-size: 20px;
}

ul li {
    border: solid black 1px;
    padding: 15px;
    text-decoration: none;
    list-style-type: none;
    font-size: 25px;
    font-family: century gothic;
    font-weight: bolder;
    margin: 25px 10px;
    background-color: white;

}
</style>
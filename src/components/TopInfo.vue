<template>
    <div class="topInfo">
        <div class="topInfoContentFrame">
            <div class="topInfoContent">{{valueone}}</div>
           <div class="topInfoContent">{{valuetwo}}</div>
           <div class="topInfoContent">{{valuethree}}</div>

        </div>

    </div>
</template>

<script>



export default {
    data(){
        return{
            valueone: "Info",
            valuetwo:   "FAQ",
            valuethree: "Help"
        }
    },
}
</script>

<style scoped>

.topInfo{
    width:100%;
    height: 20px;
    background-color: black;
    border-bottom: solid black 1px;
    position: relative;
    
}

.topInfoContentFrame{
    
    float: right;
    width: 280px;
    height: 100%;
    margin-right: 80px;
    /* display: inline;  */
    
}

.topInfoContent{
    width: 80px;
    height: 100%;
    border-right: solid white 1px;
    border-left:white solid 1px;
    float: right;
    text-align: center;
    margin: 0 2px;
    font-family: century gothic;
    color: white;
}

</style>

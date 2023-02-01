<template>
  <div class="home">

      <div class="hero">

          <video class="video" src="../assets/hamburg.mp4" autoplay loop muted>
          </video>

          <div>
              <div class="TwoImages">

                  <img class="logoimg" src="../assets/BigLogoOnlay.png">
                  <img class="logotext" src="../assets/BigLogoOnlayText.png">
              </div>

              <p id="logoTextP">Style deine Karriere an der BHH</p>
          </div>
      </div>


      <!-- Entdecke deinen beruflichen Style an der Beruflichen Hochschule Hamburg! -->




      <div class="content">
              <div class="HomeUberschrift"> Entdecke deinen beruflichen Style an der Beruflichen Hochschule Hamburg!</div>

      </div>


      <footer>

          




      </footer>

  </div>
</template>

<script>




export default {
  

}

</script>

<style >
*{
  margin: 0;
  padding: 0;
}

.hero {
  justify-content: center;
  align-items: center;
  text-align: center;
  color: black;
  overflow: hidden;
  position: relative;
  height: 100vh;
  width: 100%;
  /* border: solid blue 3px; */
  
}


.video {
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100%;
  min-height: 100%;
  z-index: -1;
}





.TwoImages {
  width: 550px;
  height: 140px;
  position: relative;
  display: flex;
  margin: 150px auto;
  margin-bottom: 0px;


}



.logo2 {
  width: 350px;
  height: 140px;
  position: relative;

  margin: 150px auto;
  margin-bottom: 0px;

}


#logoTextP {
  margin-top: 10px;
  color: black;
  font-family: century gothic;
  font-weight: 10;
  font-size: 25px;


}

.HomeUberschrift {

  text-align: center;
  font-family: century gothic;
  font-weight: bolder;
  font-size: 25px;
  color: black;
  
  padding: 50px;

    background-color: rgba(242, 230, 230, 0.798);
  box-shadow: 1px 1px 10px;
}




.content{
 
  width: 100%;
}








@media only screen and (max-width: 785px) {
  .logotext {
      display: none;
  }

  .logoimg {
      padding-left: 95px;
  }

}
</style>
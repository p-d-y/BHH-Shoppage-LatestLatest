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
              <div class="HomeUberschrift">

              <p id="HomeUberschrifP">Entdecke deinen beruflichen Style an der Beruflichen Hochschule Hamburg!</p>

          </div>

          <div class="ProductFrame">

              <div class="Product">

                  <img  class="Productimg" src="../assets/hoodie1.jpg" alt="">
                  <div class="Producttxt"><p>Super Cool Hooddie</p></div>
              </div>

                <div class="Product">

                  <img  class="Productimg" src="../assets/hoodie1.jpg" alt="">
                  <div class="Producttxt"><p>Super Cool Hooddie</p></div>
              </div>


                     <div class="Product">

                  <img  class="Productimg" src="../assets/hoodie1.jpg" alt="">
                  <div class="Producttxt"><p>Super Cool Hooddie</p></div>
              </div>


                   <div class="Product">

                  <img  class="Productimg" src="../assets/hoodie1.jpg" alt="">
                  <div class="Producttxt"><p>Super Cool Hooddie</p></div>
              </div>
          </div>

      </div>


      <footer>
          <div class="FooterFrame">



          </div>


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
  width: 100%;
  height: 150px;
  font-family: century gothic;
  font-weight: bolder;
  font-size: 25px;
  align-content: center;
  background-color: white;
  color: blakc;


}

.HomeUberschrift p {
  padding-top: 50px;


}


.content{
 
  width: 100%;
  background-color: rgba(212,212,212,255); 
}

.ProductFrame{
  margin: 70px 0px;
  
  width: 100%;
  flex-wrap: wrap;
  display: flex;
  justify-content: space-around;
  background-color: rgba(212,212,212,255); 

}

.Product{

  height: 600px;
  width: 400px;
  box-shadow: 5px 5px 15px;
  margin: 30px 0px;
  background-color: rgba(212,212,212,255); 
}




.Producttxt p{
 
  height: 60px;
  width: 100%;
  font-family: century gothic;
  font-size: 25px;
  font-weight:bolder;
  text-align: center;
  background-color: white;
  box-shadow: 5px 5px 20px;


  
}

.Productimg{
  width: 100%;
  
}





.FooterFrame{

  width: 100%;
  height: 300px;
  background-color: white;
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
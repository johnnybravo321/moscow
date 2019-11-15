<template>
  <v-container grid-list-xs>
   <v-layout align-center class="info_box">
     <v-flex sm7 xs12 offset-sm2>
       <h1>
         About us
       </h1>
     </v-flex>
   </v-layout>
    <v-layout align-center class="info_box" row wrap mt-n10>
     <v-flex sm7 xs12 offset-sm2>
       <div>
         <p>
           We are a unique kind of car dealership that offer a unique selection of cars.
We sell rusted vehicles for collectors and companies. Our goal is to try to get value out 
of vehicles and that have been abandoned. We functional parts letting the car live again, 
so you can be most rustic and cultured driver.
<br> <br>
<b>Our website:</b>
<br>
We have made our website so that you have the chance to see our online selection and get 
an idea of what we sell. You can buy a car on our webpage and we will fix it up so its ready for pick up. 
<br> <br>
<b>Our selection:</b><br>
  We provide a great variation in our shop. You can get old school cars, modern cars, muscle
cars and even super cars in a rustic and traditional look, rust. We get our cars from scrapeyards and sellers and give them a makeover, rust, for you to buy.

         </p>
         
       </div>
       
     </v-flex>
   </v-layout>
   
  </v-container>
</template>
<style lang="scss" scoped>
  .info_box:first-child .flex h1 {
    font-size: 500%;
    padding: 50px;
  }
  .info_box .flex h1 {
  color: white;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 16px;
  text-align: center;
}
.info_box .flex div p { 
  color: white;
    padding: 20px;
  }
  .info_box .flex div {
       background-color: #33333391;
   
    padding: 20px;
  }
 
  .layout:first-child {
    height:30vh;
  }
  .layout:last-child {
    height:40vh;
  }
</style>

<template>
  <v-container grid-list-lg offset-3 mt-10>
     <v-img position: center src="@/assets/Rusty_car_logo.png" height="100%" width="655px" ></v-img>

  </v-container>
</template>

<script>
//import HelloWorld from '../components/HelloWorld';

export default {

  components: {
    //HelloWorld,
  },
};
</script>
<style lang="scss" scoped>

.info_box .flex h1 {
  @include infobox_mixin(5px, map-get($colorz, white), 10px, 5px, map-get($colorz, white));
  font-weight: bold;
  text-transform: uppercase;
  font-size: 16px;
  text-align: center;
}
  .info_box .flex div {
    background-color: white;
    padding: 20px;
  }
  .layout:first-child {
    height:40vh;
  }
  .layout:last-child {
    height:40vh;
  }
</style>
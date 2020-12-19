<template>
<div><div class="w3-container w3-teal">
  <h1>My Header</h1>
</div>

 <input v-model="message">
<div class="w3-container w3-teal">
  <p>My Footer</p>
</div>
  <form>
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname"><br>
  <label for="lname">Last name:</label><br>
  <input type="text" id="lname" name="lname">


 <input v-model="message">
<br>
  <input type="button" value="aceptar">
          <router-link to="/hola">Entrar</router-link>
</form>

</div>
</template>

<script>


export default {
  props: {
   message: String,
   edad: Number,
   fechaNac: Date,


    columnas: {
      type: Number,
      default: 4
    },
    filas: {
      type: Number,
      default: 3
    }
  }
};
</script>

<style scoped>

      h1 {
  text-shadow: 2px 2px;
}
h1 {
  text-shadow: 2px 2px black;
  color: green; 
}


</style>

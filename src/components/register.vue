<template>
<div>

<h1>Registrate!</h1>
<div>
    <p>Nombre:<input type="text" name="nombreUser" id="nombreUser">
    <p>Apellido Paterno:</p>
    <input type="text" name="apelUserP" id="apelUserP"> 
    <p>Rut (ejemplo 20657359-8):</p>
    <input type="text" name="rutUser" id="rutUser">
    <p>Fecha nacimiento:</p>
    <input type="date" name="fechaN" id="fechaN">
    <p >Correo electronico</p>
    <input  type="text" name="correoUser" id="correoUser">
    <br>
    <br>
    <!-- <input type="button" value="Registrar"> -->
  <router-link to="/regExitoso">Registrar</router-link>

</div>
  
</div>
</template>



<script>
export default {
name: "register"



}
</script>





<style scoped>

</style>

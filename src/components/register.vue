<template>
<div>

<h1>Registrate!</h1>
<div>

    <form action="/regExitoso" class="colu1" method="GET">
    <p>Nombre:<p>
<!-- debe de estar dentro de un form action="/nombre de la siguiente pagina" -->
      <input type="text" name="nombreUser" id="nombreUser" placeholder="Nombre" required>
    <p>Apellido Paterno:</p>
    <input type="text" name="apelUserP" id="apelUserP" placeholder="Apellido" required> 
    <p>Rut (ejemplo 20657359-8):</p>
    <input type="text" name="rutUser" id="rutUser" placeholder="Rut" required>
    <p>Fecha nacimiento:</p>
    <input type="date" name="fechaN" id="fechaN" placeholder="Fecha Nacimiento" required>
    <p >Correo electronico</p>
    <input  type="text" name="correoUser" id="correoUser" placeholder="Correo" required>
    <button type="submit" class="Full" >Registrar
    </button>
  <br>

  <br>
  </form>
</div>
  
</div>
</template>



<script>
export default {
name: "register"



}
</script>





<style scoped>
.colu1 {
  float: left;
  width: 50%;
  margin: auto;
  padding: 0 50px;
  margin-top: 6px;
}
.colu2 {

  float: right;
  width: 50%;
  margin: auto;
  padding: 0 50px;
  margin-top: 6px;
}
</style>

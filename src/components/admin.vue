<template>
<div>

  <h1>PAGINA DE ADMINISTRADOR</h1>

<p>Buscar Usuario</p>
        <input class="userIn" type="text" name="usuario" placeholder="Usuario" required >
        <input class="rutIn" type="text" name="Rut" placeholder="Rut Usuario" required>
        <input type="button" value="Buscar Usuario">
<!-- crear una clase para hacer referencia a style y de alla cambiar color y margenes -->
      <div>
          <input class="readUser" type="button" value="Ver Usuario">

<input class="updateUser" type="button" value="Actualizar Usuario">

<input class="deleteUser" type="button" value="Eliminar Usuario">

<input class="addUser" type="button" value="Agregar Usuario">
      </div><br>
      <br>
      <div>
        
      </div>
</div>
</template>


<script>
export default {
  data (){
return;



}


}
</script>


<style scoped>
      h1 {
  text-shadow: 2px 2px;
}
h1 {
  text-shadow: 2px 2px black;
  color: white; 
}


</style>

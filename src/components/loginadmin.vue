
<template>

<div>
<div>Hola mundo</div>
<h1>POR FAVOR INGRESA TU USUARIO DE ADMINISTRADOR</h1>
  <div class="col">
        <div class="hide-md-lg">
        </div >Ingresa tu CUENTA <br>
      <form action="/hola" method="GET"> 
        <input type="text" name="usuario" placeholder="Usuario" required><br><br>
        <input type="password" name="contraseña" placeholder="Contraseña" required><br><br>
        <button type="submit" class="btnsuccess" to="/admin">Entrar</button>
         <router-link class="btnAdmin" to="/admin">Entrar como Administrador</router-link><br />
      </form>


</div>  
</div>
</template>






<script>

export default {
    name: "loginadmin",
 data (){
  return{
            
    }
  }
}
</script>





<style scoped>
h1 {
  text-shadow: 2px 2px white;
  color: #3B5998; 
}
.btnAdmin{
  text-shadow:white;
  color: white; 
}
.btnsuccess{
  color: white;
  background-color: green;
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 4px;
  margin: 5px 0;
  opacity: 0.85;
  display: inline-block;
  font-size: 17px;
  line-height: 20px;
  text-decoration: none;
  /* es el boton de entrar en verde */

}
</style>

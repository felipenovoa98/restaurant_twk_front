<template>
<div>
<div class="container">

  <form  action="/action_page.php" >
  
    <div class="row">

      <br>
      <br>
      <br>
      <h1 style ="text-align:center">Regístrate gratis<br>
         o inicia con tu CUENTA</h1>
      <br>
      <br>
    <div class="vl"> 
      <br>
      <br><br>
      <span style="color:black" class="vl-innertext">O</span>
    </div>

    <div class="col"><br>
        <a href="#" class="fb btn">
        <i class="fa fa-facebook fa-fw"></i>Login con Facebook 
        </a><br><br>
        <a href="#" class="twitter btn">
        <i class="fa fa-twitter fa-fw"></i> Login con Twitter 
        </a><br><br>
        <a href="#" class="google btn">
        <i class="fa fa-google fa-fw"></i>  Login con Google+
        </a>
        <br>
        <br>
    </div>
  <div class="col">
        <div class="hide-md-lg">
        </div>INGRESA TU CUENTA <br>
      <form action="/hola" method="GET"> 
        <input type="text" name="usuario" placeholder="Usuario" required><br><br>
        <input type="password" name="contraseña" placeholder="Contraseña" required><br><br>
        <button type="submit" class="btnsuccess">Entrar</button>
      </form>
    <!-- <router-link to="/hola">Entrar</router-link> es para ingresar directamente a otra pagina --> 
    <!-- iniciar entre paginas  -->
    <br>
    <br>
    <br>
    <br>
  </div>
    </div>
    </form>
  </div>

  <div class="bottom-container">
    <div class="row">
      <div class="col">
        <br>   
        <br>
        <router-link class="btnAdmin" to="/admin">Entrar como Administrador</router-link><br />
      </div>
        <br>
        <br>
        <div class="col">
        <!-- <a href="#" style="color:white" class="btn">Registrate</a> -->
          <router-link style="color:white" class="regUser" to="/register">Registrate gratis!</router-link>
        </div>
    </div>
   <br>
   <br>
  </div>
</div>
</template>

<script>
export default {
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
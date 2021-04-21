<template>
<div>
<!-- este es el inicio, solo redericciona a la pagina de login  -->
      <h1 style="color: white">BIENVENIDOS AL NUEVO <br>
            RESTAURANT "EL HAMBRIENTO" </h1>
<h3>Cuídate y Cuida a tu Familia del Covid-19          </h3>
<h3> así proteges a todos :D</h3>

        <img src="../assets/logo_res1.png" alt="Avatar" class="avatar" />
        <p></p>
        <router-link style="color:black" to= "/login">Agenda Tu Hora!</router-link><br />
</div>
</template>

<script>
export default {
name: "inicio"
}
</script>

<style scoped>
      h1 {
  text-shadow: 20px 20px rgb(0, 0, 0);
}
h1 {
  text-shadow: 4px 4px #c2761f;

}
</style>

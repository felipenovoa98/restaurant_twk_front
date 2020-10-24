<template>



<div>

  <body style="background-color: #99ccff ;">
    <!-- este es para cambiar el color http://www.htmlcodes.ws/color/html-color-code-generator.cfm?colorName=PowderBlue -->

<h1 style="background-color:#66b3ff;"> RESTAURANT EL HAMBRIENTO </h1>

<h2 style="background-color:#66b3ff;"> POR FAVOR <br>
   SELECCIONE UNA HORA PARA IR</h2>
<!-- este es igual que ocupar el <h1> -->
<!-- es para editar o seleccionar el tiempo -->
<p style="background-color:#66b3ff;">ingrese la hora al cual desea reservar la Hora</p>



<p style="background-color:#66b3ff;">Elije un dia</p>
<input  type="date" name="" id="">
<!-- es para resetear un boton  -->
<p style="background-color:#66b3ff;">Fecha</p>
<input type="time" name="" id=""><br>

<p style="background-color:#66b3ff;">algun comentario para la pagina </p>
 <input v-model="message"> <button>guardar</button><br>

<!-- este input es para seleccionar una semana y año, dia no!!-->
<br>
        <router-link to="/Reservado" tag="button">Confirmar</router-link  >
<br>
</body>




</div>
</template>
<script>
export default {
name: "hola"
//esta da referencia a como se llama la carpeta y esta carpeta se llama "hola"

}</script>





<style scoped>
p {
  color: black;
   text-align:unset;
}
h1 {
   color: black;
   text-align: center;
}

</style>

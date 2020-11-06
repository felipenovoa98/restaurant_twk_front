<template>



<div>

<body  style="background-color: #99ccff ;">
    <!-- este es para cambiar el color http://www.htmlcodes.ws/color/html-color-code-generator.cfm?colorName=PowderBlue -->

   <h1 style="background-color:black;"> RESTAURANT EL HAMBRIENTO </h1>
   <p style="background-color:black;">ingrese la hora al cual desea reservar la Hora</p>
<form action="/reservado" method="GET">
   <h2 style="background-color:black;"> POR FAVOR <br>
   SELECCIONE UNA HORA PARA IR</h2>
   <div class="col1">
      <p style="background-color:black;">Elije un dia</p>
         <input  type="date" name="diaReserva" id="diaReserva" placeholder="Seleccione un Día" required>
   </div>
       <div class="vl"> 
          <br>

      <span class="vl-innertext">Y</span>
    </div>
   <div class="col2">
      <p style="background-color:black;">Hora</p> 
         <input class="horaReserva" type="time" name="horaReserva" id="horaReserva" placeholder="Seleccione una Hora" required><br>
   </div>  
   <br>
      <button type="submit" class="btnsuccess">Entrar</button>
</form>
<br>
<br>
   <input v-model="message">
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
  color: white;
   text-align:unset;
}
h1 {
   color: white;
   text-align: center;
}
.col1 {
  float: left;
  width: 50%;
  margin: auto;
  padding: 0 50px;
  margin-top: 6px;
}
.col2 {

  float: right;
  width: 50%;
  margin: auto;
  padding: 0 50px;
  margin-top: 6px;
}
</style>

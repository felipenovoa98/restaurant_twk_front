<template>
<div>


<br>
<br>
<br><br>
  <div><h1>Felicidades tu Reserva se guardo correctamente</h1> </div><br>
      <img src="../assets/logo_res1.png" alt="Avatar" class="avatar" /><br>
      {{Reserva+" "+ horaReserva+ " " +hora}}<br>
        <router-link to= "/">Regresar</router-link><br />
</div>
</template>






<script>
export default {
    data (){
 return{
   

     Reserva:'Tu Reserva es a las ',
     horaReserva: "00:00",
     hora: "",
 }


}
}

</script>


}




<style scoped>

</style>

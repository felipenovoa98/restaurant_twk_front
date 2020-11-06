<template>
<div>


<br>
<br>
<br><br>
  <div class="mundo ">{{msg }}</div><br>
      <img src="../assets/logo_res.png" alt="Avatar" class="avatar" /><br>
      {{Reserva+" "+ horaReserva}}<br>
        <router-link to= "/">Regresar</router-link><br />
</div>
</template>






<script>
export default {
    data (){
 return{
   
     msg: 'Felicidades tu Reserva se guardo correctamente',
     Reserva:'Tu Reserva es a las ',
     horaReserva: "00:00",
 }


}
}

</script>


}




<style scoped>

</style>

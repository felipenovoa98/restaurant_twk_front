<template>
  <div>
    <!-- este componente es para hacer la reserva -->
    <body class= "todo" style="background-color: #99ccff">
      <!-- este es para cambiar el color http://www.htmlcodes.ws/color/html-color-code-generator.cfm?colorName=PowderBlue -->
      <h1 style="background-color: black">RESTAURANT EL HAMBRIENTO</h1>
      <img src="../assets/logo_res1.png" alt="Avatar" class="avatar" />
     
      <form action="" method="GET">
        <h2 class="colorHora">
          POR FAVOR <br />
          SELECCIONE UNA HORA
        </h2>

        <br/>
        <div>
         <h1 style="color: black" >
          Selecciona la fecha deseada</h1>
          <input
            type="date"
            v-model="fecha"
            data-date-format="YYYY DD MMMM, h:mm:ss" />
            

        <h1 style="color: black">
          Selecciona la hora deseada</h1>
          <!-- es el boton que guarda y redericciona a la otra pagina -->
          <input type="time" v-model="hora"
        />

        <h1 style= "color: black" > Comentario </h1>

        <p style="white-space: pre-line;">{{ message }}</p>
        <br>
        <textarea v-model="message" placeholder="agregar comentario"></textarea>
        </div>


        <div>
        <br />
          Elige un Tipo de Mesa
<!-- son las opciones qu e tiene para elegir alguna mesa  -->
          <select v-model="reserva.mesa_id">
            <option value="1">1: Mesa Individual: 1P</option>
            <option value="2">2: Mesa Para Dos: 2P</option>
            <option value="3">3: Mesa Reunion: 4P</option>
            <option value="4">4: Mesa Familiar: 6P</option>
            <option value="5">5: Mesa XL: 10P</option>
          </select>

        </div>
        <br>
        <br>
          <button @click="agregarReserva" type="submit" class="btnsuccess">
            Reservar 
          </button>
      </form>

      <br />
      <br />
    </body>
    
  </div>
  
</template>

<script>
import axios from "axios";
export default {
  name: "hola",
  data: () => ({
    id_user: 0,
    fecha: null,
    hora: null,
    message: null,
    estado_id: null,
    reserva: {
      fechaReserva: "", mesa_id: 0, user_id: 0, },
  }),
  // 
  mounted() {
    this.id_user = this.$route.params.usuario;
    // console.log( this.$route.params.usuario)
  },
  methods: {
    agregarReserva(e) {
      e.preventDefault();
      // aqui guardo la fecha y la hora en fechaReserva
      this.reserva.fechaReserva = this.fecha+ ' '+this.hora + '' + this.estado_id + this.message;
      this.reserva.user_id =this.id_user;

      //  let año =this.fecha.split('-');
      axios
      
        .post("http://127.0.0.1:8000/api/reserva", this.reserva)
        .then((response) => {
          if (response.data.created) {
            alert("Reserva exitosa :D")
            // this.$router.push("/regExitoso");
          } else {
            alert("Reserva no Registrada");
          }
        });
    },
  },
};
//esta da referencia a como se llama la carpeta y esta carpeta se llama "hola"
</script>

<style scoped>
p {
  color: white;
  text-align: unset;
}
h1 {
  color: white;
  text-align: center;
}
.col1 {
  float: left;
  width: auto;
  margin: auto;
  height: auto;
  padding: auto;
  margin-top: auto;
}
.col2 {
  float: right;
  width: auto;
  margin: auto;
  height: auto;
  padding: auto;
  margin-top: auto;
}
.colorIngreso {
  color: black;
}
.avatar{

    background-size: 50px 50px;
}
.colorHora {
  color: rgb(41, 12, 12);
}

.btnsuccess{
  color:green ;
background-color: brown;
background-size: 100px;
text: 150px;

}

</style>
  
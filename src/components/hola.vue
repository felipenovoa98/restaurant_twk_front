<template>
  <div>
    <!-- este componente es para hacer la reserva -->
    <body style="background-color: #99ccff">
      <!-- este es para cambiar el color http://www.htmlcodes.ws/color/html-color-code-generator.cfm?colorName=PowderBlue -->
      <h1 style="background-color: black">RESTAURANT EL HAMBRIENTO</h1>
      <img src="../assets/logo_res1.png" alt="Avatar" class="avatar" />
      <p class="colorIngreso">ingrese la hora al cual desea reservar la Hora</p>
      <form action="" method="GET">
        <h2 class="colorHora">
          POR FAVOR <br />
          SELECCIONE UNA HORA PARA IR
        </h2>

        <div></div>
        <div class="col2">
          <!-- el type datatime-local es para la fecha y hora en el mismo campo -->
          <!-- <input data-date-format="YYYY MMMM DD, h:mm:ss" type="datetime-local"  value=""  required> -->
        </div>

      
          <!-- Campo de entrada de fecha -->
          Selecciona la fecha deseada:
          <input
            type="date"
            v-model="fecha"
            data-date-format="YYYY MMMM DD, h:mm:ss"
          />
          <!-- Campo de entrada de hora -->
          Selecciona la hora deseada:
          <!-- es el boton que guarda y redericciona a la otra pagina -->
          <input type="time" v-model="hora" />
        <div>
          <br />
          Elige un Tipo de Mesa
<!-- son las opciones que tiene para elegir alguna mesa  -->
          <select v-model="reserva.mesa_id">
            <option value="1">1: Mesa Individual: 1P</option>
            <option value="2">2: Mesa Para Dos: 2P</option>
            <option value="3">3: Mesa Reunion: 4P</option>
            <option value="4">4: Mesa Familiar: 6P</option>
            <option value="5">5: Mesa XL: 10P</option>
          </select>
        </div><br><br>
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
    reserva: {
      fechaReserva: "",
      mesa_id: 0,
      user_id: 0,
    },
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
      this.reserva.fechaReserva = this.fecha+ ' '+this.hora;
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
.colorIngreso {
  color: black;
}
.colorHora {
  color: rgb(41, 12, 12);
}
</style>
  
<template>
  <div>
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
        <div class="col1">
          <p>Elije un dia</p>
          <input
            type="date"
            v-model="fecha"
            placeholder="Seleccione un Día"
            required
          />
        </div>

        <div class="vl">
          <br />

          <br /><br /><br /><br />
          <span class="vl-innertext">Y</span><br /><br /><br />
        </div>
        <div></div>
        <div class="col2">
          <p>Hora</p>
          <input
            class="hora"
            type="time"
            v-model="hora"
            placeholder="Seleccione una Hora"
            required
          /><br />
          <button @click="agregarReserva" type="submit" class="btnsuccess">Reservar</button>
        </div>
        <br />
      </form>

      <form>
        <div>
          <br />
          Elige un Tipo de Mesa
          <br />
          <select>
            <option value="tipoMesaind">Mesa Individual: 1P</option>
            <option value="tipoMesaXl">Mesa Para Dos: 2P</option>
            <option value="tipoMesaXl">Mesa Reunion: 4P</option>
            <option value="tipoMesaXl">Mesa Familiar: 6P</option>
            <option value="tipoMesaXl">Mesa XL: 10P</option>
          </select>
        </div>
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
    fecha:'',
    hora:'',
    reserva: {
    fechaReserva:this.fecha+' '+ this.hora,
        mesa_id: '',
        user_id: '',
      },
      }),
  mounted(){
  // aqui se recibe el parametro de el otro componente de register
    console.log( this.$route.params)
  },
  methods: {
    agregarReserva(e) {
      e.preventDefault();

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

  }

}

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
  
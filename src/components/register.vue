<template>
  <div class="fondo">
    <h1>Registrate!</h1>
    <div>
      <!-- este es un form para hacer un fromulario que contenga los datos  -->
      <form action= "" class="colu1" method="GET">
        <p>Nombre:</p>
        <p>
          <!-- debe de estar dentro de un form action="/nombre de la siguiente pagina" -->
          <!-- se llaman los datos de data con el v-model  -->
          <input
            type="text"
            v-model="usuario.name"
            placeholder="Nombre"
            required
          />
        </p>
        <p>Apellido Paterno:</p>
        <input
          type="text"
          v-model="usuario.lastname"
          placeholder="Apellido"
          required
        />
        <p>Numero telefono:</p>
        <input
          type="text"
          v-model="usuario.phone"
          placeholder="Numero Telefono"
          required
        />
        <p>Correo electronico</p>
        <input
          type="text"
          v-model="usuario.email"
          placeholder="Correo"
          required
        />
        <p>Contraseña:</p>
        <input
          type="password"
          v-model="usuario.password"
          placeholder="Contraseña"
          required
        />
        <button @click="agregarUsuario" type="submit" class="Full">Registrar</button>
        <br />

        <br />
      </form>
    </div>
  </div>
</template>



<script>
import axios from "axios";
export default {
  // esta es la funcion data que encapsula a un arreglo llamado registroUsuario y creo una lista llamado usuario con sus datos que serán llamados mas arriba
  name: "register",
  data: () => ({
    registroUsuario: [],
    usuario: {
        name: '',
        lastname: '',
        phone: '',
        email: '',
        password: '',
      },
  }),
  methods: {
    // creo una funcion que llama al prevent default que Cancela el evento si este es cancelable, sin detener el resto del funcionamiento del evento
    agregarUsuario(e) {
      e.preventDefault();

      axios
        .post("http://127.0.0.1:8000/api/users",this.usuario )
        .then((response) => {
          // el siguiente if responde a una creacion de usuario 
          if(response.data.created)
          {
            // lado bueno que hace que cree al usuario llamando a los datos de usuario:
            let id= response.data.user_id;
            this.$router.push({name:"hola",params:{usuario:id}});
            // se hace el push a otro componente y se le entrega un parametro
          console.log(response.data)}
          else{
            alert("Usuario no Registrado")
            // muestra un mensaje que no fue creado
          }
        });
    },
  },
};
// en este style muestra un diseño de la pagina
</script>
<style scoped>
.colu1 {
  float: auto;
  width: 50%;
  margin: auto;
  padding: 0px 20px;
  margin-top: 2px;
}
</style>

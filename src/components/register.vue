<template>
  <div class="fondo">
    <h1>Registrate!</h1>
    <div>
      <form action= "" class="colu1" method="GET">
        <p>Nombre:</p>
        <p>
          <!-- debe de estar dentro de un form action="/nombre de la siguiente pagina" -->
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
    agregarUsuario(e) {
      e.preventDefault();

      axios
        .post("http://127.0.0.1:8000/api/users",this.usuario )
        .then((response) => {
          
          if(response.data.created)
          {
            let id= response.data.user_id;
            this.$router.push({name:"hola",params:{usuario:id}});
            // se hace el push a otro componente y se le entrega un parametro
          console.log(response.data)}
          else{
            alert("Usuario no Registrado")
          }
        });
    },
  },
};
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

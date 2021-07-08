<template>
  <div>
<div>Hola mudno</div>
  <h1>hola  </h1>
    <h3 style="color: black">Tabla de Datos de Usuarios</h3>
    <!-- crear una clase para hacer referencia a style y de alla cambiar color y margenes -->

    <br />
    <br />
    <div></div>
    <table>
      <tr>
        <!-- titulos de tabla -->
        <th>Nombre</th>
        <th>fecha Reserva</th>
        <th>hora</th>
        <th>Correo</th>
        <th>Numero Mesa</th>
      
      </tr>
      <!-- contenidos de la tabla -->
      <tr v-for="item in usuarios" :key="item.id">
        <td>{{ item.name }}</td>
        <td>{{ item.numMesa }}</td>
        <td>{{ item.fechaReserva }}</td>
        <td>{{ item.email }}</td>
        <td>
          <button @click="eliminarUsuario(item.id)">Eliminar</button>
          <button @click="modal(item)">Actualizar</button>
        </td>
      </tr>
    </table>

<div v-if="showModal">
      <transition name="modal">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-container">
              <div class="modal-header">
                <slot name="header"> default header </slot>
              </div>


  <!-- es un formulario con ventana flotante " -->

              <form action="" class="colu1" method="GET">
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
                <p>Fecha Reserva:</p>
                <input
                  type="text"
                  v-model="usuario.fechaReserva"
                  placeholder="fecha reserva"
                  required
                />
                <p>Hora:</p>
                <input
                  type="text"
                  v-model="usuario.hora"
                  placeholder=" Hora"
                  required
                />
                <p>Correo electronico</p>
                <input
                  type="text"
                  v-model="usuario.email"
                  placeholder="Correo"
                  required
                />
                <p>Numero de Mesa:</p>
                <input
                  type="integer"
                  v-model="usuario.numMesa"
                  placeholder="Numero de la Mesa"
                  required
                />
                <button @click="actualizarUsuario" type="submit" class="Full"> Actualizar </button>
                <button class="modal-default-button" @click="showModal = false"> Cancelar</button>
                <br />
                <br />
              </form>




            </div>
          </div>
        </div>
      </transition>
  </div>
  
  </div>
</template>


<script>
import axios from "axios";
export default {
  name: "admin",
  data: () => ({
    showModal: false,
    // arreglo o Array
    usuarios: [],
    // variable llamado usuario (objeto)
    usuario: {
      id:0,
      name: "",
      hora: "",
      numMesa: "",
      email: "",
      fechaReserva: "",
    },
  }),
  methods: {
    obtenerUsuarios() {
      axios
        .get("http://127.0.0.1:8000/api/users")
        .then((response) => {
          this.usuarios = response.data.data;
          console.log(response.data.data);
          return response;
        })
        // .then((json)=> {
        //   console.log(json);
        // })
        .catch((error) => {
          // handle error
          console.log(error);
        });
    },

    eliminarUsuario(id) {
      axios
        .delete(`http://127.0.0.1:8000/api/users/${id}`)
        // el then es el que recibe la respuesta de la petición
        .then(() => {
          this.usuarios = this.usuarios.filter((usuario) => usuario.id !== id);
        });

      // .then((response)=>{
      //   console.log(response);
      alert("Usuario Eliminado");
      // });
    },
// este es para actualizar usuario un objeto con sus datos llamandolo con el this.usuario
    actualizarUsuario(e) {
      e.preventDefault();
    axios
    .put(`http://127.0.0.1:8000/api/users/${this.usuario.id}`, this.usuario)
    .then((response) => {
      console.log(response)
    });
    },
// se le dan todos los item 
    modal(item) {
      this.usuario.id=item.id;
      this.usuario.name = item.name;
      this.usuario.lastname = item.lastname;
      this.usuario.phone = item.phone;
      this.usuario.email = item.email;
      this.usuario.password = item.password;
      this.showModal = true;
    },
// aqui agregamos un usuario con sus datos respectivos para luego ser guardados por axios y laravel en la base de datos
    agregarUsuario(id, name, lastname, phone, email, password) {
      const newUsuario = {
        id: id,
        name: name,
        lastname: lastname,
        phone: phone,
        email: email,
        password: password,
      };
      axios
        .post("http://127.0.0.1:8000/api/users/" + newUsuario.id, newUsuario)
        .then((response) => {
          this.usuarios.post(response.data.data);
          alert("Usuario Nuevo");
        });
    },
  },
  mounted() {
    this.obtenerUsuarios();
  },
};
</script>


<style scoped>
h1 {
  text-shadow: 2px 2px;
}
h1 {
  text-shadow: 2px 2px black;
  color: white;
}

table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
  background-color: black;
}

td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #615b5b;
}
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 500px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}


.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
.colu1 {
  float: auto;
  color: #42b983;
  width: 50%;
  margin: auto;
  padding: 0px 20px;
  margin-top: 2px;
}
</style>



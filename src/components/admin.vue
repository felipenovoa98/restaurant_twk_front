<template>
  <div>
    <h1>PAGINA DE ADMINISTRADOR</h1>

    <p>Buscar Usuario</p>
    <input
      class="rutIn"
      type="text"
      name="Rut"
      placeholder="Rut Usuario"
      required
    />
    <input type="button" value="Buscar Usuario" />
    <!-- crear una clase para hacer referencia a style y de alla cambiar color y margenes -->

    <br />
    <br />
    <div></div>
    <table>
      <tr>
        <!-- titulos de tabla -->
        <th>Nombre</th>
        <th>Apellido</th>
        <th>Teléfono</th>
        <th>Correo</th>
        <th>Acción</th>
      </tr>
        <!-- contenidos de la tabla -->
      <tr v-for="item in usuarios" :key="item.id">
        <td>{{item.name}}</td>
        <td>{{item.lastname}}</td>
        <td>{{item.phone}}</td>
        <td>{{item.email}}</td>
        <td><button @click="eliminarUsuario(item.id)">Eliminar</button>
        <button @click="actualizarUsuario(item.id,item.name,item.lastname,item.phone,item.email,item.password)">Actualizar</button></td>
      </tr>
      
    </table>
  </div>
</template>


<script>
import axios from 'axios'
export default {
  name: "admin",
  data: () => ({
    usuarios: [],
  }),
  methods: {
    obtenerUsuarios() {
      axios
        .get("http://127.0.0.1:8000/api/users")
        .then((response)=> {
          this.usuarios=response.data.data;
         return response;
        })
        // .then((json)=> {
        //   console.log(json);
        // })
        .catch((error)=> {
          // handle error
          console.log(error);
        });
    },
    eliminarUsuario(id){
      axios
      .delete(`http://127.0.0.1:8000/api/users/${id}`)
      // el then es el que recibe la respuesta de la petición
      .then(() => {this.usuarios = this.usuarios.filter(usuario => usuario.id !== id);});

      // .then((response)=>{
      //   console.log(response);
        alert("Usuario Eliminado");
      // });
    },
  actualizarUsuario(id,name,lastname,phone,email,password){
    const usuario={
      id:id,
      name:name,
      lastname:lastname,
      phone:phone,
      email:email,
      password:password
    };
    axios.put('http://127.0.0.1:8000/api/users/'+usuario.id,usuario)
    .then(response=>{
      this.usuarios.push(response.data.data);
      this.usuarios = this.usuarios.filter(usuario => usuario.id !== id);
    })
  }

  },
      agregarUsuario(id,name,lastname,phone,email,password){
    const newUsuario={
      id:id,
      name:name,
      lastname:lastname,
      phone:phone,
      email:email,
      password:password
    };
    axios.post('http://127.0.0.1:8000/api/users/'+newUsuario.id,newUsuario)
    .then(response=>{
      this.usuarios.post(response.data.data);
      alert("Usuario Actualizado");
    })
  },
  mounted(){
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
</style>



<template>
  <div>
    <div class="container">
      <form action="">
        <div class="row">
          <br />
          <br />
          <br />
          <h1 style="text-align: center">
            Regístrate gratis<br />
            o inicia con tu CUENTA
          </h1>
          <br />
          <br />
          <div class="vl">
            <br />
            <br /><br />
            <span style="color: black" class="vl-innertext">O</span>
          </div>

          <div class="col">
            <br />
            <a href="#" class="fb btn">
              <i class="fa fa-facebook fa-fw"></i>Login con Facebook </a
            ><br /><br />
            <a href="#" class="twitter btn">
              <i class="fa fa-twitter fa-fw"></i> Login con Twitter </a
            ><br /><br />
            <a href="#" class="google btn">
              <i class="fa fa-google fa-fw"></i> Login con Google+
            </a>
            <br />
            <br />
          </div>
          <div class="col">
            <div class="hide-md-lg"></div>
            INGRESA TU CUENTA <br />
            <!-- este form es para hacer un iniciar sesion mediante el email  -->
            <form action="" method="GET">
              <input
                type="text"
               v-model="usuario.email"
                placeholder="Email"
                required
              /><br /><br />
              <input
                type="password"
                v-model="usuario.password"
                placeholder="Contraseña"
                required
              /><br /><br />
              <button type="submit" @click="login" class="btnsuccess">Entrar</button>
            </form>
            <!-- iniciar entre paginas  -->
            <br />
            <br />
            <br />
            <br />
          </div>
        </div>
      </form>
    </div>

    <div class="bottom-container">
      <div class="row">
        <div class="col">
          <br />
          <br />
          <router-link class="btnAdmin" to="/admin"
            >Entrar como Administrador</router-link
          ><br />
        </div>
        <br />
        <br />
        <div class="col">
          <!-- <a href="#" style="color:white" class="btn">Registrate</a> -->
          <router-link style="color: white" class="regUser" to="/register"
            >Registrate gratis!</router-link
          >
        </div>
      </div>
      <br />
      <br />
    </div>
  </div>
</template>

<script>
// importamos el axios para ser llamado mas abajo
import axios from 'axios'
export default {
  name: "admin",
  data: () => ({
    usuarios: [],
    usuario:{
    password:'',
    email:'',
},
  }),
  methods: {
    obtenerUsuarios() {
      axios
      // "http://127.0.0.1:8000/api/users" es la ruta de usuario para hacer el CRUD
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
    // lo que hace esta funcion es actualizar los usuarios los datos que se actualizarán
  actualizarUsuario(id,name,lastname,phone,email,password){
    const usuario={
      id:id,
      name:name,
      lastname:lastname,
      phone:phone,
      email:email,
      password:password
    };
    // el axios llama a put para hacer una actualizacion del usuario
    axios.put('http://127.0.0.1:8000/api/users/'+usuario.id,usuario)
    .then(response=>{
      this.usuarios.push(response.data.data);
      this.usuarios = this.usuarios.filter(usuario => usuario.id !== id);
    })
  },
  // 
  login(e){
    e.preventDefault();
  axios.post('http://127.0.0.1:8000/api/login/',this.usuario)
    .then(response=>{
      if(response.data.user_id)
          {
            let id= response.data.user_id;
            this.$router.push({name:"hola",params:{usuario: id}});
            // se hace el push a otro componente y se le entrega un parametro
          }
          else{
            alert("No Registrado :C")
          }
    })
  },
  
  },
  // el agregar usuario tiene sus datos dentro de su funcion y es llamado en un pos para que lo 
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
      alert("Usuario Creado");
    })

  },

  mounted(){
    this.obtenerUsuarios();
  },
  
};
</script>
<style scoped>
h1 {
  text-shadow: 2px 2px white;
  color: #3b5998;
}
.btnAdmin {
  text-shadow: white;
  color: white;
}
.btnsuccess {
  color: white;
  background-color: green;
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 4px;
  margin: 5px 0;
  opacity: 0.85;
  display: inline-block;
  font-size: 17px;
  line-height: 20px;
  text-decoration: none;
  /* es el boton de entrar en verde */
}
</style>
<template>
<div>
    <div v-if="showModal">
<transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">

          <div class="modal-header">
            <slot name="header">
              default header
            </slot>
          </div>


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


          <div class="modal-footer">
            <slot name="footer">
              <button class="modal-default-button" @click="showModal=false">
                OK
              </button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</div>

<div >
  <button id="show-modal" @click="showModal = true">Show Modal</button>
  <!-- use the modal component, pass in the prop -->
  <!-- <modal v-if="showModal" @close="showModal = false"> -->
    <!--
      you can use custom content here to overwrite
      default content
    -->
    <h3 slot="header">custom header</h3>
  <!-- </modal> -->
</div>
</div>
</template>


<script>
export default {
    
name:"name",
 data: () => ({
    datosdeUsuario: [],
  showModal: false,
      usuario: {
        name: 'Felipe',
        lastname: 'Novoa',
        phone: '555555',
        email: 'felipenovo98@gmail.com',
        password: '123',
      },
  

 })

}

</script>


<style scoped>
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
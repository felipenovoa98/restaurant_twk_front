<template>
<div>

  <p>esto es una prueba</p>
  <input type="button" v-on: click="saludar(user.firstname)">
<!-- este es un boton para mandar una instruccion por pantalla dando click -->

  
</div>
</template>

<script>
export default {

    data(){
        return{
            title: 'Hola A Todos',
            user: {
                firstname: "Felipe",
                lastname: "Novoa"
            }

        }

    methods: {

    }
    }

    

}
</script>





<style scoped>

</style>

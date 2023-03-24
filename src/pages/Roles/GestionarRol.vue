<template>
  <div class="row">
           <!-- boton agregar -->
  <div class="col-8 offset-2">
    <router-link
    class="btn"
    :to="{
      name: 'Registrarrol'
    }">
      Agregar
  </router-link>
  </div>
  <!-- aqui termin el boton -->

    <div class="col-12">
    <card class="card-plain">
      <div class="table-full-width table-responsive">
        <table class="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Nombre</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="rol in listaRol">
              <th scope="row">{{ rol.id_rol }}</th>
              <td>{{ rol.nombre }}</td>
              <td>
                <button class="btn btn-sm bg-primary text-white">
                  <i class="fas fa-eye"></i>
                </button>
                <button class="btn btn-sm bg-success text-white">
                  <i class="fas fa-edit"></i>
                </button>
                <button class="btn btn-sm bg-danger text-white">
                  <i class="fas fa-trash-alt"></i>
                </button>


              </td>
            </tr>

          </tbody>
        </table>
        
      </div>
    </card>
  </div>
  </div>
</template>
<script>


import axios from 'axios';


export default {
  components: {
 
  },
  data() {
    return {
      listaRol:[],
     
    };
  },
  mounted(){
    this.listarRol()
  },
  methods: {
    listarRol() {
       //alert("jahahsa")
      axios.get("http://localhost:3000/listarRol")
      .then((res) => {

        this.listaRol = res.data
        console.log(res.data);
      })
      .catch((err) => {
        alert("error del servidor")
      })
    }
  }
};
</script>
<style></style>

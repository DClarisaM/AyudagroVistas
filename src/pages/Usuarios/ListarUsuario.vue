<template>
    <div class="row">

      <div class="col-8 offset-2">
      <router-link
      class="btn"
      :to="{
        name: 'Registrarusuario'
      }">
        Agregar
    </router-link>
    </div>
      
  
      <div class="col-12">
      <card class="card-plain">
        <div class="table-full-width table-responsive">
          <table class="table table-striped table-hover">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Nombre</th>
                <th scope="col">Apellido</th>
                <th scope="col">Correo_electronico</th>
                <th scope="col">Telefono</th>
                <th scope="col">Direccion</th>
                <th scope="col">Estado</th>
                <th scope="col">Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="usuario in listaUsuarios">
                <th scope="row">{{ usuario.id_usuario }}</th>
                <td>{{ usuario.nombre }}</td>
                <td>{{ usuario.apellido }}</td>
                <td>{{ usuario.correo_electronico }}</td>
                <td>{{ usuario.telefono }}</td>
                <td>{{ usuario.direccion }}</td>
                <td>{{ usuario.estado }}</td>
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
        listaUsuarios:[],
       
      };
    },
    mounted(){
      this.listarUsuarios()
    },
    methods: {
      listarUsuarios() {
        //  alert("jahahsa")
        axios.get("http://localhost:3000/listarUsuario")
        .then((res) => {
  
          this.listaUsuarios = res.data
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
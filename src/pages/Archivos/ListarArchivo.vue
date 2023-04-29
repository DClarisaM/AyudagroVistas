<template>
  
  
    <div class="row">
      <div class="text-center">
          <p-button type="danger" round @click.native.prevent="loginadmin()">
            Administrar Categorias
          </p-button>
        </div>
        <br> 
        <div class="text-center">
          <p-button type="danger" round @click.native.prevent="loginadmin()">
            Administrar Subcategorias
          </p-button>
        </div>
        <br> 
        <div class="text-center">
          <p-button type="danger" round @click.native.prevent="loginadmin()">
            Ver Usuario
          </p-button>
        </div>
        <br> 
        <div class="text-center">
          <p-button type="danger" round @click.native.prevent="loginadmin()">
            Ver Sugerencias
          </p-button>
        </div>
        <br> 
        <br>
        <br>
        <br>
        <div class="text-center">
          <p-button type="danger" round @click.native.prevent="loginadmin()">
            Ver Valor_R
          </p-button>
        </div>
        <div class="text-center">
          <p-button type="danger" round @click.native.prevent="loginadmin()">
            Ver Pregunta
          </p-button>
        </div>
        <br>  <div class="text-center">
          <p-button type="dark" round @click.native.prevent="loginadmin()">
            Ver Respuesta
          </p-button>
        </div>
        <br>
        <div class="text-center">
          <p-button type="dark" round @click.native.prevent="loginadmin()">
            Gestionar Rol
          </p-button>
        </div>
        <br>
        <div class="text-center">
          <p-button type="dark" round @click.native.prevent="loginadmin()">
            preguntas
          </p-button>
        </div>   <br>
        <div class="text-center">
          <p-button type="dark" round @click.native.prevent="loginadmin()">
            Gestionar Archivo
          </p-button>
        </div>   <br>
        <div class="text-center">
          <p-button type="dark" round @click.native.prevent="loginadmin()">
            Mostrar Sugerencias
          </p-button>
        </div>   <br>
        <div class="text-center">
          <p-button type="dark" round @click.native.prevent="loginadmin()">
            Listar Pregunta Archivo
          </p-button>
        </div> 
        <br><br><br><br>
        <div class="text-center">
          <p-button type="danger" round @click.native.prevent="loginadmin()">
            Mis Preguntas
          </p-button>
        </div>   
        <br><br><br><br>
        <div class="text-center">
          <p-button type="danger" round @click.native.prevent="loginadmin()">
            Sin Respuesta
          </p-button>
        </div>  
             <!-- boton agregar -->
    <div class="col-8 offset-2">
      <router-link
      class="btn"
      :to="{
        name: 'Registrararchivo'
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
                <th scope="col">Nombre Archivo</th>
                <th scope="col">Url</th>
                <th scope="col">Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="archivo in listaArchivos">
                <th scope="row">{{ archivo.id_archivo }}</th>
                <td>{{ archivo.nombre_archivo }}</td>
                <td>{{ archivo.url }}</td>
                <td>
                  <router-link class="btn bg-danger text-white" :to="{name: 'Verarchivo', params: {idArchivo: archivo.id_archivo} }">
                    <i class="fas fa-eye"></i>
                  </router-link>
                  <router-link class="btn bg-danger text-white">
                    <i class="fas fa-edit"></i>
                  </router-link>
                  <button class="btn  bg-danger text-white" @click="eliminar()">
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
  import Swal from 'sweetalert2'
  
  
  export default {

 
    components: {
   

      
    },
    data() {
      return {
        listaArchivos:[],
       
       
       
      };
    },
    mounted(){
      this.listarArchivos(),
      eliminar()
    },
    methods: {
      
   



      listarArchivos() {
         //alert("jahahsa")
        axios.get("http://localhost:3000/listarArchivo")
        .then((res) => {
  
          this.listaArchivos = res.data
          console.log(res.data);
        })
        .catch((err) => {
          alert("error del servidor")
        })
      },
      eliminar(){
      // alert("hahaha")
      const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: 'btn btn-danger',
    cancelButton: 'btn btn-danger'
  },
  buttonsStyling: false
})

swalWithBootstrapButtons.fire({
  title: 'Estas seguro ?',
  text: "Esto se eliminara definitivo!",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonText: 'Si, estoy seguro!',
  cancelButtonText: 'No, cancelar!',
  reverseButtons: true
}).then((result) => {
  if (result.isConfirmed) {
    axios.delete("http://localhost:3000/eliminarArchivo/2")
    swalWithBootstrapButtons.fire(
      'Eliminado!',
      'Se elimino con exito.',
      'danger'
    )
  } else if (
    /* Read more about handling dismissals below */
    result.dismiss === Swal.DismissReason.cancel
  ) {
    swalWithBootstrapButtons.fire(
      'Cancelado',
      'No se eliminara :)',
      'error'
    )
  }
})

    }
    }
  };
  </script>
  <style></style>
  
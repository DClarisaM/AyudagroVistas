<template>
    <div class="row">
             <!-- boton agregar -->
    <div class="col-8 offset-2">
      <router-link
      class="btn"
      :to="{
        name: 'RegistrarsugerenciaArchivo'
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
                <th scope="col">Archivo</th>
                <th scope="col">Sugerencia</th>
                <th scope="col">Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="sugerencia_archivo in listaSugerenciaArchivo">
                <th scope="row">{{ sugerencia_archivo.id_sugerencia_archivo }}</th>
                <td>{{ sugerencia_archivo.archivo_id }}</td>
                <td>{{ sugerencia_archivo.sugerencia_id }}</td>
                <td>
                  <router-link class="btn bg-primary text-white" :to="{name: 'VersugerenciaArch', 
                   params: {idSugerenciaArchivo: sugerencia_archivo.id_sugerencia_archivo}
                }">
                    <i class="fas fa-eye"></i>
                  </router-link>

                  <router-link class="btn bg-success text-white" :to="{ name: 'EditarsugerenciasArch', 
                  // params: { idSugerencia_archivo: archivo.id_sugerencia_archivo } 
                  }">
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
        listaSugerenciaArchivo:[],
       
      };
    },
    mounted(){
      this.listarSugerenciaArchivos(),
      eliminar()
    },
    methods: {
      listarSugerenciaArchivos() {
         //alert("jahahsa")
        axios.get("http://localhost:3000/listarSugerencia_archivo")
        .then((res) => {
  
          this.listaSugerenciaArchivo = res.data
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
    confirmButton: 'btn btn-success',
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
    axios.delete("http://localhost:3000/eliminarSugerenci_archivo/2")
    swalWithBootstrapButtons.fire(
      'Eliminado!',
      'Se elimino con exito.',
      'success'
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
  
<template>
    <div class="row">
  
             <!-- boton agregar -->
    <div class="col-8 offset-2">
      <router-link
      class="btn"
      :to="{
        name: 'Registrarrespuesta'
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
                <th scope="col">Descripción</th>
                <th scope="col">Hora-Fecha</th>
                <th scope="col">Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="respuesta in listaRespuestas">
                <th scope="row">{{ respuesta.id_respuesta }}</th>
                <td>{{ respuesta.descripcion }}</td>
                <td>{{ respuesta.hora_fecha }}</td>
                <td>
                  <router-link class="btn bg-primary text-white" :to="{name: 'Verrespuesta', params: {idRespuesta: respuesta.id_respuesta} }">
                    <i class="fas fa-eye"></i>
                  </router-link>
                  <router-link class="btn bg-success text-white" :to="{ name: 'Editarrespuesta', 
                  // params: { idRespuesta: archivo.id_respuesta } 
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
        listaRespuestas:[],
       
      };
    },
    mounted(){
      this.listarRespuestas(),
      eliminar()
    },
    methods: {
      listarRespuestas() {
        //  alert("jahahsa")
        axios.get("http://localhost:3000/listarRespuesta")
        .then((res) => {
  
          this.listaRespuestas = res.data
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
    axios.delete("http://localhost:3000/eliminarRespuesta/3")
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
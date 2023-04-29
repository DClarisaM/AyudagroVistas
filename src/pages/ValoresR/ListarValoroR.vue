<template>
    <div class="row">
             <!-- boton agregar -->
    <div class="col-8 offset-2">
      <router-link
      class="btn"
      :to="{
        name: 'RegistrarvalorR'
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
                <th scope="col">Usuario</th>
                <th scope="col">Respuesta</th>
                <th scope="col">Calificacion</th>
                <th scope="col">Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="valor in listaValor">
                <th scope="row">{{ valor.id_valorar }}</th>
                <td>{{ valor.usuario_id }}</td>
                <td>{{ valor.respuesta_id }}</td>
                <td>{{ valor.calificacion }}</td>
                <td>
                  <router-link class="btn bg-primary text-white" :to="{name: 'VervalorR',  params: {idValorR: valor.id_valorar}   }">
                    <i class="fas fa-eye"></i>
                  </router-link>
                 
                  <router-link class="btn bg-success text-white" :to="{ name: 'EditarvalorR', 
                  // params: { idValorR: archivo.id_valorar } 
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
        listaValor:[],
       
      };
    },
    mounted(){
      this.listarValor(),
      eliminar()
    },
    methods: {
      listarValor() {
         
        axios.get("http://localhost:3000/listarValorarR")
        .then((res) => {
  
          this.listaValor = res.data
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
    axios.delete("http://localhost:3000/eliminarValorarR/2")
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
  
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
                <router-link class="btn bg-primary text-white" :to="{name: 'Verrol', params: {idRol: rol.id_rol}
                  }">
                    <i class="fas fa-eye"></i>
                  </router-link>
                  <router-link class="btn bg-success text-white" :to="{ name: 'Editarrol', 
                  // params: { idRol: archivo.id_rol } 
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
      listaRol:[],
     
    };
  },
  mounted(){
    this.listarRol(),
    eliminar()
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
    axios.delete("http://localhost:3000/eliminarRol/5")
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

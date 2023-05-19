<template>
  <div>
    <drop-down class="nav-item" title="Admin"  icon="ti-linux">
  <!-- <a class="dropdown-item"><router-link class="text-center form-text" :to="{name:'categorias'}">Administrar Categorias</router-link></a> -->
  <!-- <a class="dropdown-item"><router-link class="text-center form-text" :to="{name:'subcategorias'}">Administrar SubCategorias</router-link></a> -->
  <a class="dropdown-item"><router-link class="text-center form-text" :to="{name:'usuario'}">Ver Usuarios</router-link></a>
  <!-- <a class="dropdown-item"><router-link class="text-center form-text" :to="{name:'sugerencias'}">Ver Sugerencias</router-link></a> -->
  <!-- <a class="dropdown-item"><router-link class="text-center form-text" :to="{name:'valorR'}">Ver ValorR</router-link></a> -->
  <a class="dropdown-item"><router-link class="text-center form-text" :to="{name:'pregunta'}">Ver Pregunta</router-link></a> 
   <a class="dropdown-item"><router-link class="text-center form-text" :to="{name:'respuesta'}">Ver Respuesta</router-link></a> 
  <a class="dropdown-item"><router-link class="text-center form-text" :to="{name:'rol'}">Gestionar Rol</router-link></a>
  <!-- <a class="dropdown-item"><router-link class="text-center form-text" :to="{name:'ListaPreguntas'}">Preguntas</router-link></a> -->
  <a class="dropdown-item"><router-link class="text-center form-text" :to="{name:'archivo'}">Volver a Mis Archivos</router-link></a>
  <!-- <a class="dropdown-item"><router-link class="text-center form-text" :to="{name:'sugerenciaArchivo'}">mostrar Sugerencias</router-link></a> -->
  <!-- <a class="dropdown-item"><router-link class="text-center form-text" :to="{name:'preguntaArchivo'}">Listar Pregunta Archivo</router-link></a> -->
  <!-- <a class="dropdown-item"><router-link class="text-center form-text" :to="{name:'MisPreguntas'}">Mis Preguntas</router-link></a> -->
  <!-- <a class="dropdown-item"><router-link class="text-center form-text" :to="{name:'SinRespuesta'}">Sin Respuesta</router-link></a> -->
 

</drop-down>
  
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
              <tr v-for="respuesta in listaRespuestas" :key="respuesta.id_respuesta">
                <th scope="row">{{ respuesta.id_respuesta }}</th>
                <td>{{ respuesta.descripcion }}</td>
                <td>{{ respuesta.hora_fecha }}</td>
                <td>
                  <router-link class="btn bg-primary text-white" :to="{name: 'Verrespuesta', params: {idRespuesta: respuesta.id_respuesta} }">
                    <i class="fas fa-eye"></i>
                  </router-link>
                  <router-link class="btn bg-success text-white" :to="{ name: 'Editarrespuesta', 
                   params: { idRespuesta: respuesta.id_respuesta } 
                  }">
                    <i class="fas fa-edit"></i>
                  </router-link>
                  <button class="btn  bg-danger text-white" @click="eliminar(respuesta.id_respuesta)">
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
        axios.get("http://192.168.56.103:3000/listarRespuesta")
        .then((res) => {
  
          this.listaRespuestas = res.data
          console.log(res.data);
        })
        .catch((err) => {
          alert("error del servidor")
        })
      },
      eliminar(id){
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
     //alert(id)
    axios.delete("http://192.168.56.103:3000/eliminarRespuesta/"+id)
    swalWithBootstrapButtons.fire(
      'Eliminado!',
      'Se elimino con exito.',
      'success'
    ).then(()=>{
              location.reload();
            });
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
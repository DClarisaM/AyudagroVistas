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
 
    <div class="col-12">
        <card class="card-plain">
          <div class="table-full-width table-responsive">
            <table class="table table-striped table-hover">
              <thead>
                <tr>
                  <!-- <th scope="col">Id</th> -->
                  <!-- <th scope="col">Nombre</th> -->
                  <th scope="col">Apellido</th>
                  <th scope="col">Correo Electronico</th>
                  <th scope="col">Telefono</th>
                  <th scope="col">Direccion</th>

                  
                </tr>
              </thead>
              <tbody>
                <tr>  
                  <td>{{ listaUsuario.apellido}}</td>
                  <td>{{ listaUsuario.correo_electronico}}</td>
                  <td>{{ listaUsuario.telefono}}</td>
                  <td>{{ listaUsuario.direccion}}</td>
                  
                </tr>  
              </tbody>
              
            </table>
  
  
          </div>
        </card>
      </div>
  </div>
    
  </template>
  
  <script>
  import axios from "axios";
  import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
  export default {
    components: {
  
    },
    data() {
      return {
        idUsuario: null,
        listaUsuario: {},
  
      };
    },
    async mounted() {
      this.idUsuario = this.$route.params.idUsuario
      // alert(this.idCategoria)
      await this.verUsuario()
    },
    methods: {
      verUsuario() {
        // alert("aaaa")
        axios.get("http://192.168.56.103:3000/verDetalleUsuario/"+this.idUsuario)
          .then((res) => {
            //codigo
            // alert("bbbb")
            console.log(res.data);
            this.listaUsuario = res.data
          })
          .catch((err) => {
            //TODO mostrar ventana emergente sweetalert2 con el error
            Swal.fire("error del servidor")
          })
      }
  
    }
  };
  </script>
    
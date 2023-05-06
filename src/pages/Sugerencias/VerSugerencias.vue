<template>
  <div>
    <drop-down class="nav-item" title="Admin"  icon="ti-linux">
  <a class="dropdown-item"><router-link class="text-center form-text" :to="{name:'categorias'}">Administrar Categorias</router-link></a>
  <a class="dropdown-item"><router-link class="text-center form-text" :to="{name:'subcategorias'}">Administrar SubCategorias</router-link></a>
  <a class="dropdown-item"><router-link class="text-center form-text" :to="{name:'usuario'}">Ver Usuario</router-link></a>
  <a class="dropdown-item"><router-link class="text-center form-text" :to="{name:'sugerencias'}">Ver Sugerencias</router-link></a>
  <a class="dropdown-item"><router-link class="text-center form-text" :to="{name:'valorR'}">Ver ValorR</router-link></a>
  <a class="dropdown-item"><router-link class="text-center form-text" :to="{name:'pregunta'}">Ver Pregunta</router-link></a>
  <a class="dropdown-item"><router-link class="text-center form-text" :to="{name:'respuesta'}">Ver Respuesta</router-link></a>
  <a class="dropdown-item"><router-link class="text-center form-text" :to="{name:'rol'}">Gestionar Rol</router-link></a>
  <a class="dropdown-item"><router-link class="text-center form-text" :to="{name:'ListaPreguntas'}">Preguntas</router-link></a>

  <a class="dropdown-item"><router-link class="text-center form-text" :to="{name:'sugerenciaArchivo'}">mostrar Sugerencias</router-link></a>
  <a class="dropdown-item"><router-link class="text-center form-text" :to="{name:'preguntaArchivo'}">Listar Pregunta Archivo</router-link></a>
  <a class="dropdown-item"><router-link class="text-center form-text" :to="{name:'MisPreguntas'}">Mis Preguntas</router-link></a>
  <a class="dropdown-item"><router-link class="text-center form-text" :to="{name:'SinRespuesta'}">Sin Respuesta</router-link></a>
 

</drop-down>
  
    <div class="col-12">
        <card class="card-plain">
          <div class="table-full-width table-responsive">
            <table class="table table-striped table-hover">
              <thead>
                <tr>
                  <!-- <th scope="col">Id</th> -->
                  
                  <th scope="col">Descripción</th>
                </tr>
              </thead>
              <tbody>
                <tr>  
                  <td>{{ listaSugerencias.descripcion}}</td>
                  
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
  
  export default {
    components: {
  
    },
    data() {
      return {
        idSugerencia: null,
        listaSugerencias: {},
  
      };
    },
    async mounted() {
      this.idSugerencia = this.$route.params.idSugerencia
      // alert(this.idCategoria)
      await this.Versugerencias()
    },
    methods: {
        Versugerencias() {
        // alert("aaaa")
        axios.get("http://localhost:3000/verDetalleSugerencia/"+this.idSugerencia)
          .then((res) => {
            //codigo
            // alert("bbbb")
            console.log(res.data);
            this.listaSugerencias = res.data
          })
          .catch((err) => {
            //TODO mostrar ventana emergente sweetalert2 con el error
            alert("error del servidor")
          })
      }
  
    }
  };
  </script>
    
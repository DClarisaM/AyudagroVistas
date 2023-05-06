<template>
  <div>    <drop-down class="nav-item" title="Admin"  icon="ti-linux">
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
              <th scope="col">Pregunta</th>
              <th scope="col">Archivo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{{ listaPreguntaArch.pregunta_id }}</td>
              <td>{{ listaPreguntaArch.archivo_id }}</td>
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
  components: {},
  data() {
    return {
      idPreguntaArchivo: null,
      listaPreguntaArch: {},
    };
  },
  async mounted() {
    this.idPreguntaArchivo = this.$route.params.idPreguntaArchivo;
    // alert(this.idCategoria)
    await this.verPreguntaArchivo();
  },
  methods: {
    verPreguntaArchivo() {
      // alert("aaaa")
      axios
        .get(
          "http://localhost:3000/verDetallePregunts_archivo/" +
            this.idPreguntaArchivo
        )
        .then((res) => {
          //codigo
          // alert("bbbb")
          console.log(res.data);
          this.listaPreguntaArch = res.data;
        })
        .catch((err) => {
          //TODO mostrar ventana emergente sweetalert2 con el error
          alert("error del servidor");
        });
    },
  },
};
</script>
    
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
    <form>
      <div class="form-group">
        <label for="exampleFormControlInput1">Pregunta</label>
        <input
          type="text"
          class="form-control"
          placeholder="Pregunta"
          v-model="pregunta.descripcion"
          required
        />
      </div>

      <div>
        <button class="btn" @click="registrarPregunta()">
          Registrar Pregunta
        </button>
      </div>
    </form>
  </div>
</template>
<script>
import axios from "axios";

export default {
  components: {},
  data() {
    return {
      //variables
      pregunta: {
        descripcion: "",
      },
    };
  },
  mounted() {},
  methods: {
    registrarPregunta() {
      // alert("jahkajs")
      axios.post("http://localhost:3000/nuevaPregunta", this.pregunta)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          alert("error del servidor");
        });
    },
  },
};
</script>
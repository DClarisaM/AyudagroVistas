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
            <div class="form-group" >
                <label for="exampleFormControlInput1">Nombre</label>
                <input type="text" class="form-control" placeholder="Categoria"  v-model="categoria.titulo" required>
            </div>
            <div class="form-group" >
                <label for="exampleFormControlInput1">Descripción</label>
                <input type="text" class="form-control" placeholder="Descripcion" v-model="categoria.descripcion" required>
            </div>
           
            

            <div>
                <button class="btn" @click="EditarCategoria()">
                   Guardar Cambios 
                </button>
            </div>
        </form>
    </div>
</template>
<script>
import axios from "axios";

export default {
  components: {

  },
  data() {
    return {
      idCateg: null,
      categoria: {
        titulo: "",
        descripcion:""
      }

    };
  },
  async mounted() {
    this.id = this.$route.params.idCategoria
    await this.listarRespuestas()
  },
  mounted(){
    this.verCategoria()
  },
  methods: {
    EditarCategoria() {
      // alert("aaaa")
      axios.put("http://localhost:3000/editarCategoria/1")
        .then((res) => {
          //codigo
          console.log(res);
          //ya se editó
        })
        .catch((err) => {
          //TODO mostrar ventana emergente sweetalert2 con el error
          alert("error del servidor")
        })
    },
    verCategoria() {
        // alert("aaaa")
        axios.get("http://localhost:3000/verDetalleCategoria/1")
          .then((res) => {
            //codigo
            console.log(res.data);
            this.categoria.titulo = res.data.titulo
            this.categoria.descripcion = res.data.descripcion
          })
          .catch((err) => {
            //TODO mostrar ventana emergente sweetalert2 con el error
            alert("error del servidor")
          })
      
  
    }

  }
};
</script>
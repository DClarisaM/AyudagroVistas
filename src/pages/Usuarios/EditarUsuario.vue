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
                <label for="exampleFormControlInput1">Apellido</label>
                <input type="text" class="form-control" placeholder=""  v-model="usuario.apellido" required>
            </div>
            <div class="form-group" >
                <label for="exampleFormControlInput1">Correo Electronico</label>
                <input type="text" class="form-control" placeholder=""  v-model="usuario.correo_electronico" required>
            </div>
            <div class="form-group" >
                <label for="exampleFormControlInput1">Telefono</label>
                <input type="text" class="form-control" placeholder=""  v-model="usuario.telefono" required>
            </div>
            <div class="form-group" >
                <label for="exampleFormControlInput1">Direccion</label>
                <input type="text" class="form-control" placeholder=""  v-model="usuario.direccion" required>
            </div>
            
            
            

            <div>
                <button class="btn" @click="EditarUsario()">
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
        idUsuario: null,
        usuario: {
            apellido: "",
            correo_electronico: "",
            telefono: "",
            direccion: "",
        
      }

    };
  },
  async mounted() {
    this.idUsuario = this.$route.params.idUsuario
 
  },
  mounted(){
    this.idUsuario = this.$route.params.idUsuario
    this.verUsuario()
  },
  methods: {
    EditarUsario() {
    //   alert("aaaa")
      axios.put("http://localhost:3000/editarUsuario/1")
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
    verUsuario() {
        // alert("aaaa")
        axios.get("http://localhost:3000/verDetalleUsuario/1" )
          .then((res) => {
            //codigo
            console.log(res.data);
            this.usuario.apellido = res.data.apellido
            this.usuario.correo_electronico = res.data.correo_electronico
            this.usuario.telefono = res.data.telefono
            this.usuario.direccion = res.data.direccion
           
            
          })
          .catch((err) => {
            //TODO mostrar ventana emergente sweetalert2 con el error
            alert("error del servidor")
          })
      
  
    }
  }
};
</script>
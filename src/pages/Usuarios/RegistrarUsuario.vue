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
        <form>
            <div class="form-group">
                <label for="exampleFormControlInput1">Nombre</label>
                <input type="text" class="form-control" placeholder="" v-model="usuario.nombre" required>
            </div>
            <div class="form-group">
                <label for="exampleFormControlInput1">Apellido:</label>
                <input type="text" class="form-control"  placeholder="" v-model="usuario.apellido" required>
            </div>
            <div class="form-group">
                <label for="exampleFormControlInput1">Correo Electronico</label>
                <input type="text" class="form-control"  placeholder="" v-model="usuario.correo_electronico" required>
            </div>
            <div class="form-group">
                <label for="exampleFormControlInput1">Contraseña</label>
                <input type="text" class="form-control"  placeholder="" v-model="usuario.contraseña" required>
            </div>
            <div class="form-group">
                <label for="exampleFormControlInput1">Repetir contraseña</label>
                <input type="text" class="form-control"  placeholder="" v-model="usuario.repetir_contraseña" required>
            </div>
            <div class="form-group">
                <label for="exampleFormControlInput1">Telefono</label>
                <input type="text" class="form-control"  placeholder="" v-model="usuario.telefono" required>
            </div>
            <div class="form-group">
                <label for="exampleFormControlInput1">Direccion</label>
                <input type="text" class="form-control"  placeholder="" v-model="usuario.direccion" required>
            </div>
            <div class="form-group">
                <label for="exampleFormControlInput1">Estado</label>
                <input type="text" class="form-control"  placeholder="" v-model="usuario.estado" required>
            </div>
            <div class="form-group">
                <label for="exampleFormControlSelect1">Rol</label>
                <select class="form-control" id="exampleFormControlSelect1" v-model="usuario.rol_id" required>
                    <option value="1">Usuario</option>
                    <option value="2">administrador</option>
                    
                </select>
            </div>
            

            <div>
                <button class="btn" @click="registrarUsuario()">
                    Registrar usuario
                </button>
            </div>
        </form>
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
      //variables
      usuario: {
        nombre: "",
        apellido: "",
        correo_electronico: "",
        contraseña: "",
        repetir_contraseña: "",
        telefono: "",
        direccion:"",
        estado: "",
        rol_id: null
        
        
      }
    };
  },
  mounted() {
    
  },
  methods: {
    registrarUsuario(){
         // },
 
      if(!this.user.nombre || !this.user.apellido ||!this.user.correo_electronico || !this.user.telefono 
      || !this.user.direccion ||!this.user.contrasena ||!this.user.password){
          //  alert("Porfavoe revise que todos los campos del registro esten llenos"); 
             Swal.fire({
  icon: 'warning',
  title: 'Campos vacios',
  text: 'Porfavor reivise que todos los campos esten llenos para continuar!',
  
})
this.enviado=true

      }else{
                var emailField = document.getElementById('correo_electronico');
                var validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        if( validEmail.test(emailField.value)){
          // Swal.fire('correo valido')
        if (this.user.password == this.user.contrasena) {
        axios.post("http://localhost:3000/nuevoUser", this.user).then((res) => {
          console.log(res);
          Swal.fire('Registro de usuario exitoso')
          this.$router.push("/login");
        });
      } else {
        Swal.fire('Las contraseñas no coinsiden')
        this.enviado=true

        // alert("contraseñas no coinciden");
      }}else{
                  Swal.fire({
                    title: 'Correo no válido',
                    text: 'Porfavor ingrese un correo valido',
                    icon:'warning',
                  });
                  this.enviado=true

                 }
        
      }
    
    }
  }
};
</script>
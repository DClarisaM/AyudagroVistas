<template>
    <div>
       
        
        <form>
            <div class="form-group">
                <label for="exampleFormControlInput1">Nombre</label>
                <input type="text" class="form-control" placeholder="" v-model="usuario.nombre" required>
            </div>
            <div class="form-group">
                <label for="exampleFormControlInput1">apellido:</label>
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
        rol_id: null,
        
        
      }
    };
  },
  mounted() {
    
  },
  methods: {
    registrarUsuario(){
        axios.post("http://localhost:3000/nuevoUsuario",this.usuario)
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            alert("error del servidor")
        })
    }
  }
};
</script>
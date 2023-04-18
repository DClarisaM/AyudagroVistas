<template>
    <div>
       
        
        <form>
            <div class="form-group">
                <label for="exampleFormControlInput1">Nombre</label>
                <input type="text" class="form-control" placeholder="Nombre" v-model="rol.nombre" required>
            </div>
            
            

            <div>
                <button class="btn" @click="registrarRol()">
                    Registrar Rol
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
      rol: {
        nombre: "",
        
        
      }
    };
  },
  mounted() {
    
  },
  methods: {
    registrarRol(){
         //alert("jahkajs")
        axios.post("http://localhost:3000/nuevoRol",this.rol)
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
<template>
    <div>
        
        
        <form>
            <div class="form-group" >
                <label for="exampleFormControlInput1">Rol</label>
                <input type="text" class="form-control" placeholder=""  v-model="rol.nombre" required>
            </div>
            
            

            <div>
                <button class="btn" @click="EditarRol()">
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
        idRol: null,
        rol: {
            nombre: "",
        
      }

    };
  },
  async mounted() {
    this.idRol = this.$route.params.idRol
 
  },
  mounted(){
    this.idRol = this.$route.params.idRol
    this.VerRol()
  },
  methods: {
    EditarRol() {
    //   alert("aaaa")
      axios.put("http://localhost:3000/editarRol/1")
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
    VerRol() {
        // alert("aaaa")
        axios.get("http://localhost:3000/verDetalleRol/1" )
          .then((res) => {
            //codigo
            console.log(res.data);
            this.rol.nombre = res.data.nombre
            
          })
          .catch((err) => {
            //TODO mostrar ventana emergente sweetalert2 con el error
            alert("error del servidor")
          })
      
  
    }
  }
};
</script>
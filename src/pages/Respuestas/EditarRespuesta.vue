<template>
    <div>
        
        
        <form>
            <div class="form-group" >
                <label for="exampleFormControlInput1">Descripcion</label>
                <input type="text" class="form-control" placeholder=""  v-model="respuesta.descripcion" required>
            </div>
            
            

            <div>
                <button class="btn" @click="EditarRespuesta()">
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
        idRespuesta: null,
        respuesta: {
        descripcion: "",
        
      }

    };
  },
  async mounted() {
    this.idRespuesta = this.$route.params.idRespuesta
 
  },
  mounted(){
    this.idRespuesta = this.$route.params.idRespuesta
    this.VerRespuesta()
  },
  methods: {
    EditarRespuesta() {
    //   alert("aaaa")
      axios.put("http://localhost:3000/editarRespuesta/1")
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
    VerRespuesta() {
        // alert("aaaa")
        axios.get("http://localhost:3000/verDetalleRespuesta/1" )
          .then((res) => {
            //codigo
            console.log(res.data);
            this.respuesta.descripcion = res.data.descripcion
            
          })
          .catch((err) => {
            //TODO mostrar ventana emergente sweetalert2 con el error
            alert("error del servidor")
          })
      
  
    }
  }
};
</script>
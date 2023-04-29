<template>
    <div>
        
        
        <form>
            <div class="form-group" >
                <label for="exampleFormControlInput1">descripcion</label>
                <input type="text" class="form-control" placeholder=""  v-model="sugerencia.descripcion" required>
            </div>
            
            
            

            <div>
                <button class="btn" @click="EditarSugerencia()">
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
        idSugerencia: null,
        sugerencia: {
            descripcion: "",

        
      }

    };
  },
  async mounted() {
    this.idSugerencia = this.$route.params.idSugerencia
 
  },
  mounted(){
    this.idSugerencia = this.$route.params.idSugerencia
    this.VerSugerencia()
  },
  methods: {
    EditarSugerencia() {
    //   alert("aaaa")
      axios.put("http://localhost:3000/editarSugerencia/1")
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
    VerSugerencia() {
        // alert("aaaa")
        axios.get("http://localhost:3000/verDetalleSugerencia/1" )
          .then((res) => {
            //codigo
            console.log(res.data);
            this.sugerencia.descripcion = res.data.descripcion
           
            
          })
          .catch((err) => {
            //TODO mostrar ventana emergente sweetalert2 con el error
            alert("error del servidor")
          })
      
  
    }
  }
};
</script>
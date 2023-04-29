<template>
    <div>
        
        
        <form>
            <div class="form-group" >
                <label for="exampleFormControlInput1">Descripcion</label>
                <input type="text" class="form-control" placeholder=""  v-model="pregunta.descripcion" required>
            </div>
            
            

            <div>
                <button class="btn" @click="EditarPregunta()">
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
        idPregunta: null,
        pregunta: {
        descripcion: "",
        
      }

    };
  },
  async mounted() {
    this.idPregunta = this.$route.params.idPregunta
 
  },
  mounted(){
    this.idPregunta = this.$route.params.idPregunta
    this.VerPregunta()
  },
  methods: {
    EditarPregunta() {
      alert("aaaa")
      axios.put("http://localhost:3000/editarPregunta/1")
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
    VerPregunta() {
        // alert("aaaa")
        axios.get("http://localhost:3000/verDetallePregunta/1" )
          .then((res) => {
            //codigo
            console.log(res.data);
            this.pregunta.descripcion = res.data.descripcion
            
          })
          .catch((err) => {
            //TODO mostrar ventana emergente sweetalert2 con el error
            alert("error del servidor")
          })
      
  
    }
  }
};
</script>
<template>
    <div>
        
        
        <form>
            <div class="form-group" >
                <label for="exampleFormControlInput1">Pregunta</label>
                <input type="text" class="form-control" placeholder=""  v-model="pregunta_archivo.pregunta_id" required>
            </div>
            <div class="form-group" >
                <label for="exampleFormControlInput1">Descripcion</label>
                <input type="text" class="form-control" placeholder=""  v-model="pregunta_archivo.archivo_id" required>
            </div>
            
            

            <div>
                <button class="btn" @click="EditarPreguntaArchivo()">
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
        idPreguntaArchivo: null,
        pregunta_archivo: {
        pregunta_id: "",
        archivo_id: "",
        
      }

    };
  },
  async mounted() {
    this.idPreguntaArchivo = this.$route.params.idPreguntaArchivo
 
  },
  mounted(){
    this.idPreguntaArchivo = this.$route.params.idPreguntaArchivo
    this.VerPreguntaArchivo()
  },
  methods: {
    EditarPreguntaArchivo() {
    //   alert("aaaa")
      axios.put("http://localhost:3000/editarPregunta_archivo/1")
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
    VerPreguntaArchivo() {
        // alert("aaaa")
        axios.get("http://localhost:3000/verDetallePregunts_archivo/1" )
          .then((res) => {
            //codigo
            console.log(res.data);
            this.pregunta_archivo.pregunta_id = res.data.pregunta_id
            this.pregunta_archivo.archivo_id = res.data.archivo_id
            
          })
          .catch((err) => {
            //TODO mostrar ventana emergente sweetalert2 con el error
            alert("error del servidor")
          })
      
  
    }
  }
};
</script>
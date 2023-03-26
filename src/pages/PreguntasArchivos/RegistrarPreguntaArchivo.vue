<template>
    <div>
       
        
        <form>
            <div class="form-group">
                <label for="exampleFormControlInput1">Archivo Id</label>
                <input type="text" class="form-control" placeholder="Archivo id" v-model="pregunta_archivo.archivo_id" required>
            </div>
            <div class="form-group">
                <label for="exampleFormControlInput1">Pregunta Id</label>
                <input type="text" class="form-control" placeholder="Pregunta id" v-model="pregunta_archivo.pregunta_id" required>
            </div>
            
            
            

            <div>
                <button class="btn" @click="registrarPreguntaArchivo()">
                    Registrar Pregunta Archivo
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
      pregunta_archivo: {
        archivo_id: "",
        pregunta_id:"",
        
        
      }
    };
  },
  mounted() {
    
  },
  methods: {
    registrarPreguntaArchivo(){
        //  alert("jahkajs")
        axios.post("http://localhost:3000/nuevaPregunta_archivo",this.pregunta_archivo)
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
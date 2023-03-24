<template>
    <div>
       
        
        <form>
            <div class="form-group">
                <label for="exampleFormControlInput1">Respuesta</label>
                <input type="text" class="form-control" placeholder="Escriba su respuesta" v-model="respuesta.descripcion" required>
            </div>
            <div class="form-group">
                <label for="exampleFormControlInput1">Hora y fecha</label>
                <input type="text" class="form-control" placeholder="11:12 23/03/2023" v-model="respuesta.hora_fecha" required>
            </div>
            <div class="form-group">
                <label for="exampleFormControlInput1">Id Pregunta</label>
                <input type="text" class="form-control" placeholder="3" v-model="respuesta.pregunta_id" required>
            </div>
            

            <div>
                <button class="btn" @click="registrarRespuesta()">
                    Registrar Respuesta
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
      respuesta: {
        descripcion: "",
        hora_fecha:"",
        pregunta_id: null
        
        
      }
    };
  },
  mounted() {
    
  },
  methods: {
    registrarRespuesta(){
        // alert("jahkajs")
        axios.post("http://localhost:3000/nuevaRespuesta",this.respuesta)
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
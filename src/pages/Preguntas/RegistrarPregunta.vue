<template>
    <div>
       
        
        <form>
            <div class="form-group">
                <label for="exampleFormControlInput1">Pregunta</label>
                <input type="text" class="form-control" placeholder="Pregunta" v-model="pregunta.descripcion" required>
            </div>
            
            

            <div>
                <button class="btn" @click="registrarPregunta()">
                    Registrar Pregunta
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
      pregunta: {
        descripcion: "",
        
        
      }
    };
  },
  mounted() {
    
  },
  methods: {
    registrarPregunta(){
        // alert("jahkajs")
        axios.post("http://localhost:3000/nuevaPregunta",this.pregunta)
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
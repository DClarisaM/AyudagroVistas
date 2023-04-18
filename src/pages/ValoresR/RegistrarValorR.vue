<template>
    <div>
       
        
        <form>
            <div class="form-group">
                <label for="exampleFormControlInput1">Usuario id</label>
                <input type="text" class="form-control" placeholder="Id Usuario" v-model="valor_r.usuario_id" required>
            </div>
            <div class="form-group">
                <label for="exampleFormControlInput1">Respuesta id</label>
                <input type="text" class="form-control" placeholder="Id Respuesta" v-model="valor_r.respuesta_id" required>
            </div>
            <div class="form-group">
                <label for="exampleFormControlInput1">Calificacion</label>
                <input type="text" class="form-control" placeholder="5" v-model="valor_r.calificacion" required>
            </div>
            

            <div>
                <button class="btn" @click="registrarValorR()">
                    Registrar Valor Respuesta
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
      valor_r: {
        usuario_id: "",
        calificacion:"",
        respuesta_id: ""
        
        
      }
    };
  },
  mounted() {
    
  },
  methods: {
    registrarValorR(){
        // alert("jahkajs")
        axios.post("http://localhost:3000/nuevoValorarR",this.valor_r)
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
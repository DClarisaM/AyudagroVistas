<template>
    <div>
         
        
        <form>
        
            <div class="form-group">
                <label for="exampleFormControlInput1">Archivo id:</label>
                <input type="text" class="form-control"  placeholder="archivo" v-model="sugerencia_archivo.archivo_id" required>
            </div>
            <div class="form-group">
                <label for="exampleFormControlInput1">Sugerencia id:</label>
                <input type="text" class="form-control"  placeholder="sugerencia" v-model="sugerencia_archivo.sugerencia_id" required>
            </div>
            

            <div>
                <button class="btn" @click="registrarSugerenciaArchivo()">
                    Registrar sugerencia
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
      sugerencia_archivo: {
        archivo_id: null,
        sugerencia_id: null,

      }
    };
  },
  mounted() {
    
  },
  methods: {
    registrarSugerenciaArchivo(){
        axios.post("http://localhost:3000/nuevaSugerencia_archivo",this.sugerencia_archivo)
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
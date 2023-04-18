<template>
    <div>
       
        
        <form>
            <div class="form-group">
                <label for="exampleFormControlInput1">Nombre Archivo</label>
                <input type="text" class="form-control" placeholder="Nombre Archivo" v-model="archivo.nombre_archivo" required>
            </div>
            <div class="form-group">
                <label for="exampleFormControlInput1">Url</label>
                <input type="text" class="form-control"  placeholder="Url" v-model="archivo.url" required>
            </div>
            

            <div>
                <button class="btn" @click="registrarArchivo()">
                    Registrar Archivo
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
      archivo: {
        nombre_archivo: "",
        url: "",
        
      }
    };
  },
  mounted() {
    
  },
  methods: {
    registrarArchivo(){
        // alert("jahkajs")
        axios.post("http://localhost:3000/nuevoArchivo",this.archivo)
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
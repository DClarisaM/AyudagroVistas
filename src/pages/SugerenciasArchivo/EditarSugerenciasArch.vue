<template>
    <div>
        
        
        <form>
            <div class="form-group" >
                <label for="exampleFormControlInput1">Archivo</label>
                <input type="text" class="form-control" placeholder=""  v-model="sugerencia_archivo.archivo_id" required>
            </div>
            <div class="form-group" >
                <label for="exampleFormControlInput1">Sugerencia</label>
                <input type="text" class="form-control" placeholder=""  v-model="sugerencia_archivo.sugerencia_id" required>
            </div>
            
            
            

            <div>
                <button class="btn" @click="EditarSugerencia_archivo()">
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
        idSugerencia_archivo: null,
        sugerencia_archivo: {
            archivo_id: "",
            sugerencia_id: "",


        
      }

    };
  },
  async mounted() {
    this.idSugerencia_archivo = this.$route.params.idSugerencia_archivo
 
  },
  mounted(){
    this.idSugerencia_archivo = this.$route.params.idSugerencia_archivo
    this.VerSugerencia_archivo()
  },
  methods: {
    EditarSugerencia_archivo() {
    //   alert("aaaa")
      axios.put("http://localhost:3000/editarSugerencia_archivo/1")
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
    VerSugerencia_archivo() {
        // alert("aaaa")
        axios.get("http://localhost:3000/verDetalleSugerencia_archivo/1" )
          .then((res) => {
            //codigo
            console.log(res.data);
            this.sugerencia_archivo.archivo_id = res.data.archivo_id
            this.sugerencia_archivo.sugerencia_id = res.data.sugerencia_id
           
            
          })
          .catch((err) => {
            //TODO mostrar ventana emergente sweetalert2 con el error
            alert("error del servidor")
          })
      
  
    }
  }
};
</script>
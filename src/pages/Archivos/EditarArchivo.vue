<template>
    <div>
        
        
        <form>
            <div class="form-group" >
                <label for="exampleFormControlInput1">Nombre Archivo</label>
                <input type="text" class="form-control" placeholder="Nombre Archivo"  v-model="archivo.nombre_archivo" required>
            </div>
            <div class="form-group" >
                <label for="exampleFormControlInput1">URL</label>
                <input type="text" class="form-control" placeholder="Descripcion" v-model="archivo.url" required>
            </div>
           
            

            <div>
                <button class="btn" @click="EditarArchivos()">
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
        idArchivo: null,
        archivo: {
        nombre_archivo: "",
        url:""
      }

    };
  },
  async mounted() {
    this.idArchivo = this.$route.params.idArchivo
 
  },
  mounted(){
    this.idArchivo = this.$route.params.idArchivo
    this.verArchivos()
  },
  methods: {
    EditarArchivos() {
      alert("aaaa")
      axios.put("http://localhost:3000/editarCategoria/1")
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
    verArchivos() {
        // alert("aaaa")
        axios.get("http://localhost:3000/verDetalleArchivo/1" )
          .then((res) => {
            //codigo
            console.log(res.data);
            this.archivo.nombre_archivo = res.data.nombre_archivo
            this.archivo.url = res.data.url
          })
          .catch((err) => {
            //TODO mostrar ventana emergente sweetalert2 con el error
            alert("error del servidor")
          })
      
  
    }
  }
};
</script>
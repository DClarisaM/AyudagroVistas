<template>
    <div>
        
        
        <form>
            <div class="form-group" >
                <label for="exampleFormControlInput1">Titulo</label>
                <input type="text" class="form-control" placeholder=""  v-model="subcategoria.titulo" required>
            </div>
            <div class="form-group" >
                <label for="exampleFormControlInput1">Descripcion</label>
                <input type="text" class="form-control" placeholder=""  v-model="subcategoria.descripcion" required>
            </div>
            
            

            <div>
                <button class="btn" @click="EditarSubcategoria()">
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
        idSubcategoria: null,
        subcategoria: {
            titulo: "",
            descripcion: "",

        
      }

    };
  },
  async mounted() {
    this.idSubcategoria = this.$route.params.idSubcategoria
 
  },
  mounted(){
    this.idSubcategoria = this.$route.params.idSubcategoria
    this.VerSubcategoria()
  },
  methods: {
    EditarSubcategoria() {
    //   alert("aaaa")
      axios.put("http://localhost:3000/editarSubcategoria/1")
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
    VerSubcategoria() {
        // alert("aaaa")
        axios.get("http://localhost:3000/verDetalleSubcategoria/1" )
          .then((res) => {
            //codigo
            console.log(res.data);
            this.subcategoria.titulo = res.data.titulo
            this.subcategoria.descripcion = res.data.descripcion
            
          })
          .catch((err) => {
            //TODO mostrar ventana emergente sweetalert2 con el error
            alert("error del servidor")
          })
      
  
    }
  }
};
</script>
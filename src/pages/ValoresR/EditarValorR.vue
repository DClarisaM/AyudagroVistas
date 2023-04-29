<template>
    <div>
        
        
        <form>
            <div class="form-group" >
                <label for="exampleFormControlInput1">Calificacion</label>
                <input type="text" class="form-control" placeholder=""  v-model="valor_r.calificacion" required>
            </div>

            <div>
                <button class="btn" @click="EditarValorR()">
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
        idValorR: null,
        valor_r: {
            calificacion: "",
            
      }

    };
  },
  async mounted() {
    this.idValorR = this.$route.params.idValorR
 
  },
  mounted(){
    this.idValorR = this.$route.params.idValorR
    this.VervalorR()
  },
  methods: {
    EditarValorR() {
    //   alert("aaaa")
      axios.put("http://localhost:3000/editarValorarR/1")
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
    VervalorR() {
        // alert("aaaa")
        axios.get("http://localhost:3000/verDetalleValorarR/1" )
          .then((res) => {
            //codigo
            console.log(res.data);
            this.valor_r.calificacion = res.data.calificacion
          })
          .catch((err) => {
            //TODO mostrar ventana emergente sweetalert2 con el error
            alert("error del servidor")
          })
      
  
    }
  }
};
</script>
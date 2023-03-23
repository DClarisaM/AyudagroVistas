<template>
    <div>
        {{ registrarCategoria }}
        
        <form>
            <div class="form-group">
                <label for="exampleFormControlInput1">Nombre categoria:</label>
                <input type="text" class="form-control" placeholder="frutas" v-model="categoria.titulo" required>
            </div>
            <div class="form-group">
                <label for="exampleFormControlInput1">Descripción:</label>
                <input type="text" class="form-control"  placeholder="frutas" v-model="categoria.descripcion" required>
            </div>
            

            <div>
                <button class="btn" @click="registrarCategoria()">
                    Registrar categoria
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
      categoria: {
        titulo: "",
        descripcion: "",
        
      }
    };
  },
  mounted() {
    
  },
  methods: {
    registrarCategoria(){
        axios.post("http://localhost:3000/nuevaCategoria",this.categoria)
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
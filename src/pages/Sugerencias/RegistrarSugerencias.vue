<template>
    <div>
         {{ registrarSugerencia }}
        
        <form>
        
            <div class="form-group">
                <label for="exampleFormControlInput1">Descripción:</label>
                <input type="text" class="form-control"  placeholder="Descripcion" v-model="sugerencia.descripcion" required>
            </div>
            <div class="form-group">
                <label for="exampleFormControlSelect1">Subcategoria</label>
                <select class="form-control" id="exampleFormControlSelect1" v-model="sugerencia.subcategorias_id" required>
                    <option value="1">Frutas</option>
                    <option value="2">verduras</option>
                    <option value="2">animales</option>
                </select>
            </div>

            <div>
                <button class="btn" @click="registrarSugerencia()">
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
      sugerencia: {
        descripcion: "",
        subcategorias_id: null
      }
    };
  },
  mounted() {
    
  },
  methods: {
    registrarSugerencia(){
        axios.post("http://localhost:3000/nuevaSugerencia",this.sugerencia)
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
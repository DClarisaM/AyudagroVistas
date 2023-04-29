<template>
    <div>
         
        <form>
            <div class="form-group">
                <label for="exampleFormControlInput1">Nombre subcategoria:</label>
                <input type="text" class="form-control" placeholder="Subcategoria" v-model="subcategoria.titulo" required>
            </div>
            <div class="form-group">
                <label for="exampleFormControlInput1">Descripción:</label>
                <input type="text" class="form-control"  placeholder="Descripcion" v-model="subcategoria.descripcion" required>
            </div>
            <div class="form-group">
                <label for="exampleFormControlSelect1">Categoria</label>
                <select class="form-control" id="exampleFormControlSelect1" v-model="subcategoria.categoria_id" required>
                    <option value="1">Frutas</option>
                    <option value="2">verduras</option>
                    <option value="3">animales</option>
                


                </select>
            </div>

            <div>
                <button class="btn" @click="registrarSubcategoria()">
                    Registrar subcategoria
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
      subcategoria: {
        titulo: "",
        descripcion: "",
        categoria_id: null
      }
    };
  },
  mounted() {
    
  },
  methods: {
    registrarSubcategoria(){
        axios.post("http://localhost:3000/nuevaSubcategoria",this.subcategoria)
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
<template>
  <div class="row">
    <!-- aqui empieza el boton agregar -->
    <div class="col-8 offset-2">
      <router-link
      class="btn"
      :to="{
        name: 'Registrarcategorias'
      }">
        Agregar
    </router-link>
    </div>
    <!-- aqui termina el boton -->
    


    <div class="col-12">
      <card class="card-plain">
        <div class="table-full-width table-responsive">
          <table class="table table-striped table-hover">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Nombre</th>
                <th scope="col">Descripción</th>
                <th scope="col">Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="categoria in listaCategorias">
                <th scope="row">{{ categoria.id_categoria }}</th>
                <td>{{ categoria.titulo }}</td>
                <td>{{ categoria.descripcion }}</td>
                <td>
                  <button class="btn btn-sm bg-primary text-white">
                    <i class="fas fa-eye"></i>
                  </button>
                  <button class="btn btn-sm bg-success text-white">
                    <i class="fas fa-edit"></i>
                  </button>
                  <button class="btn btn-sm bg-danger text-white">
                    <i class="fas fa-trash-alt"></i>
                  </button>


                </td>
              </tr>

            </tbody>
          </table>
       

        </div>
      </card>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import Swal from 'sweetalert2'

export default {
  components: {
    
  },
  data() {
    return {
      listaCategorias: [],
      
    };
  },
  mounted() {
    this.listarCategorias()
  },
  methods: {
    listarCategorias() {
      // alert("aaaa")
      axios.get("http://localhost:3000/listarCategoria")
        .then((res) => {
          //codigo
          this.listaCategorias = res.data
          console.log(res.data);
        })
        .catch((err) => {
          alert("error del servidor")
        })
    }
  }
};
</script>
<style></style>
  
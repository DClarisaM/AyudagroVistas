<template>
    <div class="col-12">
        <card class="card-plain">
          <div class="table-full-width table-responsive">
            <table class="table table-striped table-hover">
              <thead>
                <tr>
                  <!-- <th scope="col">Id</th> -->
                  <th scope="col">Nombre</th>
                  <th scope="col">Descripción</th>
                  
                </tr>
              </thead>
              <tbody>
                <tr>  
                  <td>{{ listaCategorias.titulo }}</td>
                  <td>{{ listaCategorias.descripcion }}</td>
                </tr>  
              </tbody>
              
            </table>
  
  
          </div>
        </card>
      </div>
    
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    components: {
  
    },
    data() {
      return {
        idCategoria: null,
        listaCategorias: {},
  
      };
    },
    async mounted() {
      this.idCategoria= this.$route.params.idCategoria
      // alert(this.idCategoria)
      await this.listarCategorias()
    },
    methods: {
      listarCategorias() {
        // alert("aaaa")
        axios.get("http://localhost:3000/verDetalleCategoria/"+this.idCategoria)
          .then((res) => {
            //codigo
            // alert("bbbb")
            console.log(res.data);
            this.listaCategorias = res.data
          })
          .catch((err) => {
            //TODO mostrar ventana emergente sweetalert2 con el error
            alert("error del servidor")
          })
      }
  
    }
  };
  </script>
    
<template>
    <div class="col-12">
        <card class="card-plain">
          <div class="table-full-width table-responsive">
            <table class="table table-striped table-hover">
              <thead>
                <tr>
                  <!-- <th scope="col">Id</th> -->
                  <th scope="col">Titulo</th>
                  <th scope="col">Descripción</th>
                  
                </tr>
              </thead>
              <tbody>
                <tr>  
                  <td>{{ listaSubcategoria.titulo }}</td>
                  <td>{{ listaSubcategoria.descripcion}}</td>
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
        idSubcategoria: null,
        listaSubcategoria: {},
  
      };
    },
    async mounted() {
      this.idSubcategoria= this.$route.params.idSubcategoria
      // alert(this.idCategoria)
      await this.Versubcategorias()
    },
    methods: {
      Versubcategorias() {
        // alert("aaaa")
        axios.get("http://localhost:3000/verDetalleSubcategoria/"+this.idSubcategoria)
          .then((res) => {
            //codigo
            // alert("bbbb")
            console.log(res.data);
            this.listaSubcategoria = res.data
          })
          .catch((err) => {
            //TODO mostrar ventana emergente sweetalert2 con el error
            alert("error del servidor")
          })
      }
  
    }
  };
  </script>
    
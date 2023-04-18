<template>
    <div class="col-12">
        <card class="card-plain">
          <div class="table-full-width table-responsive">
            <table class="table table-striped table-hover">
              <thead>
                <tr>
                  <!-- <th scope="col">Id</th> -->
                  <th scope="col">Nombre</th>
                  <th scope="col">URL</th>
                  
                </tr>
              </thead>
              <tbody>
                <tr>  
                  <td>{{ listaArchivo.nombre_archivo }}</td>
                  <td>{{ listaArchivo.url}}</td>
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
        idArchivo: null,
        listaArchivo: {},
  
      };
    },
    async mounted() {
      this.idArchivo= this.$route.params.idArchivo
      // alert(this.idCategoria)
      await this.verArchivos()
    },
    methods: {
      verArchivos() {
        // alert("aaaa")
        axios.get("http://localhost:3000/verDetalleArchivo/"+this.idArchivo)
          .then((res) => {
            //codigo
            // alert("bbbb")
            console.log(res.data);
            this.listaArchivo = res.data
          })
          .catch((err) => {
            //TODO mostrar ventana emergente sweetalert2 con el error
            alert("error del servidor")
          })
      }
  
    }
  };
  </script>
    
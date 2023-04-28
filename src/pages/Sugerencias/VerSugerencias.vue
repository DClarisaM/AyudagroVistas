<template>
    <div class="col-12">
        <card class="card-plain">
          <div class="table-full-width table-responsive">
            <table class="table table-striped table-hover">
              <thead>
                <tr>
                  <!-- <th scope="col">Id</th> -->
                  
                  <th scope="col">Descripción</th>
                </tr>
              </thead>
              <tbody>
                <tr>  
                  <td>{{ listaSugerencias.descripcion}}</td>
                  
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
        idSugerencia: null,
        listaSugerencias: {},
  
      };
    },
    async mounted() {
      this.idSugerencia = this.$route.params.idSugerencia
      // alert(this.idCategoria)
      await this.Versugerencias()
    },
    methods: {
        Versugerencias() {
        // alert("aaaa")
        axios.get("http://localhost:3000/verDetalleSugerencia/"+this.idSugerencia)
          .then((res) => {
            //codigo
            // alert("bbbb")
            console.log(res.data);
            this.listaSugerencias = res.data
          })
          .catch((err) => {
            //TODO mostrar ventana emergente sweetalert2 con el error
            alert("error del servidor")
          })
      }
  
    }
  };
  </script>
    
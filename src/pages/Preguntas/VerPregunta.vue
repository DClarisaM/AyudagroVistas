<template>
    <div class="col-12">
        <card class="card-plain">
          <div class="table-full-width table-responsive">
            <table class="table table-striped table-hover">
              <thead>
                <tr>
                  <!-- <th scope="col">Id</th> -->
                 
                  <th scope="col">Descripción</th>
                  <th scoped="col">Usuario</th>
                  
                </tr>
              </thead>
              <tbody>
                <tr>  
                  <td>{{ listaPregunta.descripcion }}</td>
                  <td>{{ listaPregunta.usuario_id }}</td>
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
        idPregunta: null,
        listaPregunta: {},
  
      };
    },
    async mounted() {
      this.idPregunta= this.$route.params.idPregunta
      // alert(this.idCategoria)
      await this.verPregunta()
    },
    methods: {
        verPregunta() {
        // alert("aaaa")
        axios.get("http://localhost:3000/verDetallePregunta/"+this.idPregunta)
          .then((res) => {
            //codigo
            // alert("bbbb")
            console.log(res.data);
            this.listaPregunta = res.data
          })
          .catch((err) => {
            //TODO mostrar ventana emergente sweetalert2 con el error
            alert("error del servidor")
          })
      }
  
    }
  };
  </script>
    
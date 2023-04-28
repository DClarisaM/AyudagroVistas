<template>
    <div class="col-12">
        <card class="card-plain">
          <div class="table-full-width table-responsive">
            <table class="table table-striped table-hover">
              <thead>
                <tr>
                  <!-- <th scope="col">Id</th> -->
                  
                  <th scope="col">Usuario</th>
                  <th scope="col">Respuesta</th>
                  <th scope="col">Calificacion</th>
                </tr>
              </thead>
              <tbody>
                <tr>  
                  <td>{{ listaValorR.usuario_id}}</td>
                  <td>{{ listaValorR.respuesta_id}}</td>
                  <td>{{ listaValorR.calificacion}}</td>
                  
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
        idValorR: null,
        listaValorR: {},
  
      };
    },
    async mounted() {
      this.idValorR = this.$route.params.idValorR
      // alert(this.idCategoria)
      await this.VervalorR()
    },
    methods: {
        VervalorR() {
        // alert("aaaa")
        axios.get("http://localhost:3000/verDetalleValorarR/"+this.idValorR)
          .then((res) => {
            //codigo
            // alert("bbbb")
            console.log(res.data);
            this.listaValorR = res.data
          })
          .catch((err) => {
            //TODO mostrar ventana emergente sweetalert2 con el error
            alert("error del servidor")
          })
      }
  
    }
  };
  </script>
    
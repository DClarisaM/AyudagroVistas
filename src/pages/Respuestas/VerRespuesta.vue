<template>
    <div class="col-12">
        <card class="card-plain">
          <div class="table-full-width table-responsive">
            <table class="table table-striped table-hover">
              <thead>
                <tr>
                  <!-- <th scope="col">Id</th> -->
                  <!-- <th scope="col">Usuario</th> -->
                  <th scope="col">Descripción</th>
                  <th scope="col">Hora Fecha</th>

                  
                </tr>
              </thead>
              <tbody>
                <tr>  
                  <!-- <td>{{ listaRespuesta.usuario_id }}</td> -->
                  <td>{{ listaRespuesta.descripcion}}</td>
                  <td>{{ listaRespuesta.hora_fecha}}</td>
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
        idRespuesta: null,
        listaRespuesta: {},
  
      };
    },
    async mounted() {
      this.idRespuesta= this.$route.params.idRespuesta
      // alert(this.idCategoria)
      await this.VerRespuesta()
    },
    methods: {
        VerRespuesta() {
        // alert("aaaa")
        axios.get("http://localhost:3000/verDetalleRespuesta/"+this.idRespuesta)
          .then((res) => {
            //codigo
            // alert("bbbb")
            console.log(res.data);
            this.listaRespuesta = res.data
          })
          .catch((err) => {
            //TODO mostrar ventana emergente sweetalert2 con el error
            alert("error del servidor")
          })
      }
  
    }
  };
  </script>
    
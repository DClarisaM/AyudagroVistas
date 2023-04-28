<template>
    <div class="col-12">
        <card class="card-plain">
          <div class="table-full-width table-responsive">
            <table class="table table-striped table-hover">
              <thead>
                <tr>
                  <!-- <th scope="col">Id</th> -->
                  <!-- <th scope="col">Nombre</th> -->
                  <th scope="col">Apellido</th>
                  <th scope="col">Correo Electronico</th>
                  <th scope="col">Telefono</th>
                  <th scope="col">Direccion</th>

                  
                </tr>
              </thead>
              <tbody>
                <tr>  
                  <td>{{ listaUsuario.apellido}}</td>
                  <td>{{ listaUsuario.correo_electronico}}</td>
                  <td>{{ listaUsuario.telefono}}</td>
                  <td>{{ listaUsuario.direccion}}</td>
                  
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
        idUsuario: null,
        listaUsuario: {},
  
      };
    },
    async mounted() {
      this.idUsuario = this.$route.params.idUsuario
      // alert(this.idCategoria)
      await this.verUsuario()
    },
    methods: {
      verUsuario() {
        // alert("aaaa")
        axios.get("http://localhost:3000/verDetalleUsuario/"+this.idUsuario)
          .then((res) => {
            //codigo
            // alert("bbbb")
            console.log(res.data);
            this.listaUsuario = res.data
          })
          .catch((err) => {
            //TODO mostrar ventana emergente sweetalert2 con el error
            alert("error del servidor")
          })
      }
  
    }
  };
  </script>
    
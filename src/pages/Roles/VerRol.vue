<template>
    <div class="col-12">
        <card class="card-plain">
          <div class="table-full-width table-responsive">
            <table class="table table-striped table-hover">
              <thead>
                <tr>
                  <!-- <th scope="col">Id</th> -->
                  <th scope="col">Rol</th>
                  
                </tr>
              </thead>
              <tbody>
                <tr>  
                  <td>{{ listaRol.nombre }}</td>
                  
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
        idRol: null,
        listaRol: {},
  
      };
    },
    async mounted() {
      this.idRol= this.$route.params.idRol
      // alert(this.idCategoria)
      await this.VerRol()
    },
    methods: {
        VerRol() {
        // alert("aaaa")
        axios.get("http://localhost:3000/verDetalleRol/"+this.idRol)
          .then((res) => {
            //codigo
            // alert("bbbb")
            console.log(res.data);
            this.listaRol = res.data
          })
          .catch((err) => {
            //TODO mostrar ventana emergente sweetalert2 con el error
            alert("error del servidor")
          })
      }
  
    }
  };
  </script>
    
<template>
    <div class="col-12">
        <card class="card-plain">
          <div class="table-full-width table-responsive">
            <table class="table table-striped table-hover">
              <thead>
                <tr>
                  <!-- <th scope="col">Id</th> -->
                  <th scope="col">Archivo</th>
                  <th scope="col">Sugerencia</th>
                  
                </tr>
              </thead>
              <tbody>
                <tr>  
                  <td>{{ listaSugerenciaArchivo.archivo_id }}</td>
                  <td>{{ listaSugerenciaArchivo.sugerencia_id }}</td>
                  
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
        idSugerenciaArchivo: null,
        listaSugerenciaArchivo: {},
  
      };
    },
    async mounted() {
      this.idSugerenciaArchivo= this.$route.params.idSugerenciaArchivo
      // alert(this.idCategoria)
      await this.VersugerenciaArch()
    },
    methods: {
        VersugerenciaArch() {
        // alert("aaaa")
        axios.get("http://localhost:3000/verDetalleSugerencia_archivo/"+this.idSugerenciaArchivo)
          .then((res) => {
            //codigo
            // alert("bbbb")
            console.log(res.data);
            this.listaSugerenciaArchivo = res.data
          })
          .catch((err) => {
            //TODO mostrar ventana emergente sweetalert2 con el error
            alert("error del servidor")
          })
      }
  
    }
  };
  </script>
    
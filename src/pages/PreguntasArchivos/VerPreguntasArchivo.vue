<template>
    <div class="col-12">
        <card class="card-plain">
          <div class="table-full-width table-responsive">
            <table class="table table-striped table-hover">
              <thead>
                <tr>
                  <!-- <th scope="col">Id</th> -->
                  <th scope="col">Pregunta</th>
                  <th scope="col">Archivo</th>
                  
                </tr>
              </thead>
              <tbody>
                <tr>  
                  <td>{{ listaPreguntaArch.pregunta_id }}</td>
                  <td>{{ listaPreguntaArch.archivo_id }}</td>
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
        idPreguntaArchivo: null,
        listaPreguntaArch: {},
  
      };
    },
    async mounted() {
      this.idPreguntaArchivo = this.$route.params.idPreguntaArchivo
      // alert(this.idCategoria)
      await this.verPreguntaArchivo()
    },
    methods: {
        verPreguntaArchivo() {
        // alert("aaaa")
        axios.get("http://localhost:3000/verDetallePregunts_archivo/"+this.idPreguntaArchivo)
          .then((res) => {
            //codigo
            // alert("bbbb")
            console.log(res.data);
            this.listaPreguntaArch = res.data
          })
          .catch((err) => {
            //TODO mostrar ventana emergente sweetalert2 con el error
            alert("error del servidor")
          })
      }
  
    }
  };
  </script>
    
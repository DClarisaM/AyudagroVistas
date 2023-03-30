<template>
  <div>
    <!-- <div class="col-6 offset-3">
    <card class="card-user">
       <div class="image">
         <img src="@/assets/img/background.jpg" alt="..." />
       </div>
       <div>
         <div class="author">
           <img
             class="avatar border-white"
             src="@/assets/img/faces/face-2.jpg"
             alt="..."
           />
           <h4 >
             Como hacer arroz
           </h4>
         </div>
         <div class="text-right">
           <p-button type="info" round @click.native.prevent="">
             Responder
           </p-button>
         </div>
         
       </div>
     </card>
  </div> -->
     
    <div class="col-10 offset-1"  v-for="respuesta in listaRespuestas" >
  <card class="card-Mpregunta">
     <div class="Mimagen"  >
       <img src="@/assets/img/background.jpg" alt="..." />
     </div>
     <div>
       <div class="Mfoto">
         <img
           class="Musuario border-white"
           src="@/assets/img/faces/face-2.jpg"
           alt="..."
         />
         <h4 >
          
         </h4>
       </div>
        <!-- <h5>
          {{ respuesta.pregunta_id }}
          {{ respuesta.descripcion }}
        </h5> -->
        <small class="text-right">
          {{ respuesta.createdAt }}
        </small>
     </div>
     <div  v-for="preguntas in listaRespuestas" >
     <label for="floatingTextarea2">
        {{ preguntas.descripcion }}
      </label>
    </div>
     <div class="form-floating">
  <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" ></textarea>
</div>
     <div class="text-right">
           <p-button type="info" round @click.native.prevent="">
             Responder
           </p-button>
         </div>
   </card>
  </div>
  
  
  
</div>
  </template>
  <script>
import axios from "axios";

export default {
  components: {
    
  },
  data() {
    return {
      idPregunta: 0,
      listaRespuestas: [],
     
    };
  },
  mounted() {
    //idPregunta = this.$route.params.preguntaId
    this.listarRespuestas()
  },
  methods: {
    listarRespuestas() {
      // alert("aaaa")
      axios.get("http://localhost:3000/ListarRespuestasPorPreguntaId/1")
        .then((res) => {
          //codigo
          this.listaRespuestas = res.data
          console.log(res.data);
        })
        .catch((err) => {
          //TODO mostrar ventana emergente sweetalert2 con el error
          alert("error del servidor")
        })
    }
   
  }
};</script>
  
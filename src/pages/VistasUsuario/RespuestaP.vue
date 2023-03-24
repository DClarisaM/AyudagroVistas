<template>
    
 
    <div class="col-10 offset-1">
  <card class="card-Mpregunta">
     <div class="Mimagen">
       <img src="@/assets/img/background.jpg" alt="..." />
     </div>
     <div>
       <div class="Mfoto">
         <img
           class="Musuario border-white"
           src="@/assets/img/faces/face-2.jpg"
           alt="..."
         />
         <h4 class="Mnombre">
           Danier
         </h4>
       </div>
        <h5>con que puedo abonar la fresa para mayor produccion en clima frio </h5>
     </div>
     <div class="form-floating">
  <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" ></textarea>
  <label for="floatingTextarea2">Comments</label>
</div>
     <div class="text-right">
           <p-button type="info" round @click.native.prevent="">
             Responder
           </p-button>
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
      idPregunta: null
    };
  },
  mounted() {
    idPregunta = this.$route.params.preguntaId
  },
  methods: {
   
  }
};</script>
  
<template>
   <div>
  <div class="col-6 offset-3">

    <card class="card-user">
       <div class="image">
         <img src="@/assets/img/background2.jpg" alt="..." />
       </div>
       <div>
         <div class="author">
           <img
             class="avatar border-white"
             src="@/assets/img/faces/face-4.jpg"
             alt="..."
           />
           <h4 class="title">
             Danier
           </h4>
         </div>
         
       </div>
       <div class="text-center">
          <p-button type="info" round @click.native.prevent="">
            Preguntar
          </p-button>
        </div>
     </card>
  </div>


  <div class="col-10 offset-1">
<card class="card-Pregunta">
   <div class="imagen">
     <img src="@/assets/img/background2.jpg" alt="..." />
   </div>
   <div>
     <div class="Foto">
       <img
         class="Fusuario border-white"
         src="@/assets/img/faces/face-4.jpg"
         alt="..."
       />
       <h4 class="Nombre">
         Danier
       </h4>
     </div>
      <h5>como hacer el amarre a la dairita  </h5>
   </div>
   <div class="h2 mb-0">
    <b-icon-arrow-up></b-icon-arrow-up>
    <b-icon-exclamation-triangle-fill></b-icon-exclamation-triangle-fill>
  </div>
   
  <div class="text-right">
          <p-button type="info" @click.native="Responder()">
            Responder
          </p-button>
        </div>
 </card>
</div>


</div>

</template>
<script>
export default {
  data() {
    return {
      user: {
     
      },
    };
  },
  methods: {
   Responder(){
    this.$router.push("/RespuestaP");
   }
  },
};
</script>

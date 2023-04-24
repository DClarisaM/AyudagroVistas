<template>
  <card class="card-user">
    <div slot="image">
      <img src="@/assets/img/foto-negra.png" alt="..." />
    </div>
    <div>
      <div class="author">
        <img
          class="avatar border-white"
          src="@/assets/img/faces/face-4.jpg"
          alt="..."
        />
        <h4 class="title">
          {{ us.nombre +" " +us.apellido }}
        </h4>
        <label for="">De:</label>
        <h4 class="title">{{ us.direccion }}</h4>
        <label for="">Telefono::</label>
        <h4 class="title">{{ us.telefono }}</h4>
        <label for="">E-mail:</label>
        <h4 class="title">{{ us.correo_electronico
         }}</h4>
      </div>
    
     
    </div>
    <hr />
   
  </card>
</template>
<script>
export default {
  data() {
    return {
      details: [
       
      ],
      us:"",
    };
  },
  mounted(){
    this.us = JSON.parse(localStorage.getItem("usuarios"));
  },
  methods: {
    
  },
};
</script>
<style></style>

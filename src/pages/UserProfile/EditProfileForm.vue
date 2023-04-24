<template>
  <card class="card" title="Editar Perfil">
    <div>
      <form @submit.prevent>
        <div class="row">
          <div class="col-md-6">
            <fg-input
              type="text"
              label="Nombre"
             placeholder="erazo"
              v-model="user.nombre"
            >
            <button class="btn btn-sm bg-success text-white">
                    <i class="fas fa-edit"></i>
                  </button>
            
            </fg-input>
          </div>
          <div class="col-md-6">
             <fg-input
              type="text"
              label="Apellido"
              placeholder="Trochez"
              v-model="user.apelllido"
            >
            
            </fg-input> 
            

          </div>
        </div>
  
        <div class="row">
          <div class="col-md-6">
            <fg-input
              type="text"
              label="Telefono"
              placeholder="Telefono"
              v-model="user.telefono"
            >
            </fg-input>
          </div>
          
          <div class="col-md-6">
            <fg-input
              type="text"
              label="Dirección"
              placeholder="Popayan"
              v-model="user.direccin"
            >
            </fg-input>
          </div>
        </div>
        

        <div class="text-center">
          <p-button type="info" round @click.native.prevent="updateProfile">
            guardar Cambios
          </p-button>
        </div>
        <div class="clearfix"></div>
      </form>
    </div>
  </card>
</template>
<script>
export default {
  data() {
    return {
      user: {
        email: "",
        nombre: "",
        apelllido: "",
        direccion: "",
        telefono: "",
        estado: "",
      },
      us:"",
    };
  },
  mounted(){
    this.us = JSON.parse(localStorage.getItem("usuarios"));
  },
  methods: {
    updateProfile() {
      alert("Your data: " + JSON.stringify(this.user));
    },
  },
};
</script>
<style></style>

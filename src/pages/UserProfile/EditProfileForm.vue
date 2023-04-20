<template>
  <card class="card" title="Editar Perfil">
    <div>
      <form @submit.prevent>
        <div class="row">
          <div class="col-md-6">
            <fg-input
              type="text"
              label="Nombre"
              placeholder="Danier"
              v-model="user.nombre"
            >
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
              v-model="user.direccón"
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
    };
  },
  methods: {
    updateProfile() {
      alert("Your data: " + JSON.stringify(this.user));
    },
  },
};
</script>
<style></style>

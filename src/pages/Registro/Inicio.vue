<template>
  <card class="card" title="Login">
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
              label="Correo Electronico"
              placeholder="gmail.com"
              v-model="user.gmail"
            >
            </fg-input>
          </div>
          
          <div class="col-md-6">
            <fg-input
              type="text"
              label="Contraseña"
              placeholder="******"
              v-model="user.contraseña"
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
          <div class="col-md-6">
            <fg-input
              type="text"
              label="Repetir Contraseña"
              placeholder="******"
              v-model="user.contraseña2"
            >
            </fg-input>
          </div>
          <div class="col-md-6">
            <fg-input
              type="text"
              label="Telefono"
              placeholder="#####"
              v-model="user.telefono"
            >
            </fg-input>
          </div>
          <div class="col-md-6">
            <fg-input
              type="text"
              label="Direccion"
              placeholder="Cl-#"
              v-model="user.direccion"
            >
            </fg-input>
          </div>
        </div>
        

        <div class="text-center">
          <p-button type="info" round @click.native.prevent="updateProfile">
            Registrar Usuario
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
        nombre: "",
        apelllido: "",
        email: "",
        contraseña:"",
        contraseña2:"",
        telefono: "",
        direccion: "",
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

<!-- eslint-disable prettier/prettier -->
<template>
  <card class="card" title="Inicio de secion">
    <div>
      <form @submit.prevent>
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
        </div>

        <div class="text-center">
          <p-button type="info" round @click.native.prevent="updateProfile">
            INICIAR SECION
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
        contraseña: "",
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

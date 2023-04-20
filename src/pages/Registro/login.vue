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
              v-model="user.correo_electronico"
            >
            </fg-input>
          </div>

          <div class="col-md-6">
            <fg-input
              type="text"
              label="Contraseña"
              placeholder="******"
              v-model="user.contrasena"
            >
            </fg-input>
          </div>
        </div>

        <div class="text-center">
          <p-button type="info" round @click.native.prevent="login()" >
            INICIAR SECION
          </p-button>
        </div>
        <div class="clearfix"></div>
      </form>
    </div>
  </card>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      user: {
        correo_electronico: "",
        contrasena: "",
      },
    };
  },
  methods: {
    // updateProfile() {
    //   alert("Your data: " + JSON.stringify(this.user));
    // },

    login() {
         let json={
             "usuario":this.correo_electronico,
             "password":this.contrasena,
         };
      alert("Inicio exitoso");
      axios.post("http://localhost:3000/login", json)
        .then((data) => {
          console.log(data);
        })
        .catch((err) => {
          alert(err+"error del servidor");
        });
    },
  },
};
</script>
<style></style>

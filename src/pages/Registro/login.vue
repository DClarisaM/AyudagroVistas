<!-- eslint-disable prettier/prettier -->
<template>
  <card class="card" title="Inicio de sesion">
    <div>
      <form @submit.prevent>
        <div class="row">
          <div class="col-md-6">
            <fg-input type="Email" label="Correo Electronico" placeholder="gmail" v-model="user.correo_electronico">
            </fg-input>
          </div>

          <div class="col-md-6">
            <fg-input type="password" label="Contraseña" placeholder="******" v-model="user.contrasena">
            </fg-input>
          </div>
        </div>

        <div class="text-center">
          <p-button type="info" @click="iniciarSesion()">
            INICIAR SESION
          </p-button>
        </div>
        <div class="clearfix"></div>
      </form>
    </div>
  </card>
</template>
<script>
import axios from 'axios'
import { stringify } from 'querystring';
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

    iniciarSesion() {
      axios.post("http://localhost:3000/login", this.user)
        .then(res => {
          if (res.data.status == "error") {
            alert(res.data.msg)
          } else {
            alert("Bienbenido a AyudAgro")
          }
        })

    },
  },
};
</script>
<style></style>

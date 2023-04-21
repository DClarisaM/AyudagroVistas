<!-- eslint-disable prettier/prettier -->
<template>
    <card class="text center" title="Recuperar Contraseña">
      <div>
        <form @submit.prevent>
          <div class="row justify-content-around">
            <div class="col-md-7">
              <fg-input type="password" label="Contraseña" placeholder="*******" v-model="user.correo_electronico">
              </fg-input>
            </div>
            <div class="col-md-7">
              <fg-input type="password" label="Repita Contraseña" placeholder="******" v-model="user.correo_electronico">
              </fg-input>
            </div>
          </div>
          <div class="text-center">
            <p-button type="info" round @click.native.prevent="login()">
              Cambiar Contraseña
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
      Registrate(){
       this.$router.push("/Inicio")
      },
      // updateProfile() {
      //   alert("Your data: " + JSON.stringify(this.user));
      // },
  
      login() {
        let json = {
          "usuario": this.correo_electronico,
          "password": this.contrasena,
        };
        alert("Inicio exitoso");
        axios.post("http://localhost:3000/login", json)
          .then((data) => {
            console.log(data);
          })
          .catch((err) => {
            alert(err + "error del servidor");
          });
      },
    },
  };
  </script>
  <style></style>
  
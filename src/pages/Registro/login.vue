<!-- eslint-disable prettier/prettier -->
<template>
  <card class="card" title="Inicio de sesión">
    <div>
      <form @submit.prevent>
        <div class="row">
          <div class="col-md-6">
            <fg-input
              type="text"
              label="Correo Electronico"
              placeholder="gmail.com"
              v-model="user.correo_electronico"
              v-on:keyup.enter="login()"
            >
            </fg-input>
          </div>

          <div class="col-md-6">
            <fg-input
              type="password"
              label="Contraseña"
              placeholder="******"
              v-model="user.contrasena"
              v-on:keyup.enter="login()"
            >
            </fg-input>
          </div>
        </div>

        <div class="text-center">
          <p-button type="info" round @click.native.prevent="login()">
            Iniciar sesión
          </p-button>
        </div>
        <br>
        <div>
          <router-link class="text-center form-text" :to="{name:'vistas'}">Ingresar Como Administrador</router-link>
        </div>

        <div id="passwordHelpBlock" class="text-center form-text">
          ¿No tienes cuenta?
        </div>
        <div class="text-center">
          <p-button type="info" round @click.native.prevent="Registrate()">
            Registrate
          </p-button>
        </div>

    
        <div class="clearfix"></div>
      </form>
    </div>
  </card>
</template>
<script>
import axios from "axios";
import Swal from 'sweetalert2/dist/sweetalert2.js'

import 'sweetalert2/src/sweetalert2.scss'
export default {
  data() {
    return {
      user: {
        correo_electronico: "",
        contrasena: "",
       
      },
    };
  },
  mounted(){
    
  },
  
  methods: {
    Registrate(){
      this.$router.push("/inicio");
    },
    // updateProfile() {
    //   alert("Your data: " + JSON.stringify(this.user));
    // },

    login() {
      console.log(this.user)
      // if(!this.user.correo_electronico && !this.user.contrasena){
      //     Swal.fire("No ingresastes ningun dato")}
      axios.post("http://localhost:3000/login", this.user).then((res) => {
      
        if (res.data.status == "error") {
          //  console.log(res.data.msg);
          Swal.fire(res.data.msg);
        } else {
         // alert("Bienvenido Ayudagro");
          this.$router.push("/dashboard");
          window.location.reload();
          localStorage.setItem("usuarios", JSON.stringify(res.data.user));
        }
      });
    },


  },
};
</script>
<style></style>

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
import {required} from 'vuelidate/lib/validators'
export default {
  data() {
    return {
      user: {
        correo_electronico: "",
        contrasena: "",
        rol_id:1,
      },
    };
  },
  validations:{
    correo_electronico:{required},
    contrasena:{required,}
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
      axios.post("http://localhost:3000/login", this.user).then((res) => {
        if (res.data.status == "error") {
          //  console.log(res.data.msg);
          alert(res.data.msg);
        } else {



          
         // alert("Bienvenido Ayudagro");
          this.$router.push("/dashboard");

          localStorage.setItem("usuarios", JSON.stringify(res.data.user));
          console.log(res.data.user);
        }
      });
    },
//iniciar como administrador
    loginadmin() {
      axios.post("http://localhost:3000/login", this.user).then((res) => {
        if (res.data.status == "error") {
          //  console.log(res.data.msg);
          alert(res.data.msg);
        } else {



          
          alert("Bienvenido  Ayudagro");
          this.$router.push("/archivo");

          localStorage.setItem("usuarios", JSON.stringify(res.data.user));
          console.log(res.data);
        }
      });
    },



  },
};
</script>
<style></style>

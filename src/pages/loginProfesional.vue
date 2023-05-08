
<template>
  <card class="card" title="Inicio de sesión para el Profesional">
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
              v-on:keyup.enter="login2()"
            >
            </fg-input>
          </div>
        </div>

        <div class="text-center">
          <p-button type="info" round @click.native.prevent="login3()">
            Iniciar sesión 
          </p-button>
        </div>
        <br>
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
        rol_id:3,
      },
    };
  },
  methods: {
    Registrate(){
      this.$router.push("/inicio");
    },
    // updateProfile() {
    //   alert("Your data: " + JSON.stringify(this.user));
    // },

    login3() {
      axios.post("http://localhost:3000/login3", this.user).then((res) => {
        if (res.data.status == "error") {
          //  console.log(res.data.msg);
          alert(res.data.msg);
        } else {



          
          alert("Bienvenido Ayudagro Profesional");
          this.$router.push("/archivo");

          localStorage.setItem("usuarios", JSON.stringify(res.data.user));
          console.log(res.data);
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

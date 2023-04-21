<!-- eslint-disable prettier/prettier -->
<template>
  <card class="card" title="Registro de nuevo usuario">
    <div>
      <form @submit.prevent>
        <div class="row">
          <div class="col-md-6">
            <fg-input
              type="text"
              label="Nombre"
              id="nombre"
              placeholder="Danier"
              v-model="user.nombre"
              required
            >
            </fg-input>
          </div>
          <div class="col-md-6">
            <fg-input
              type="text"
              label="Apellido"
              id="apellido"
              placeholder="Trochez"
              v-model="user.apellido"
              required
            >
            </fg-input>
          </div>
        </div>

        <div class="row">
          <div class="col-md-6">
            <fg-input
              type="text"
              label="Correo Electronico"
              id="email"
              placeholder="gmail.com"
              v-model="user.correo_electronico"
              required
            >
            </fg-input>
          </div>

          <div class="col-md-6">
            <fg-input
              type="text"
              label="Contraseña"
              id="contrasena"
              placeholder="******"
              v-model="user.contrasena"
              required
            >
            </fg-input>
          </div>

          <div class="col-md-6">
            <fg-input
              type="text"
              label="Repetir Contraseña"
              placeholder="******"
              required
            >
            </fg-input>
          </div>
          <div class="col-md-6">
            <fg-input
              type="text"
              label="Telefono"
              id="telefono"
              placeholder="#####"
              v-model="user.telefono"
              required
            >
            </fg-input>
          </div>
          <div class="col-md-6">
            <fg-input
              type="text"
              label="Direccion"
              id="direccion"
              placeholder="Cl-#"
              v-model="user.direccion"
              required
            >
            </fg-input>
          </div>
        </div>

        <div class="text-center">
          <button class="btn" @click="CrearUser()">Registrar</button>
        </div>
        <div class="clearfix"></div>
      </form>
    </div>
  </card>
</template>
<script>
import axios from "axios";
export default {
  name: "Inicio",
  data() {
    return {
      user: {
        rol: 1,
        nombre: "",
        apellido: "",
        correo_electronico: "",
        contrasena: "",
        telefono: "",
        direccion: "",
        estado: "activo",
      },
    };
  },
  methods: {
    // updateProfile() {
    //   alert("Your data: " + JSON.stringify(this.user));
    // },
    CrearUser() {
      //console.log(this.user);

      // eslint-disable-next-line prettier/prettier
      axios
        .post("http://localhost:3000/nuevoUser", this.user)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
      // this.$router.push("/");
      alert("registro exitoso");
    },
  },
};
</script>
<style></style>

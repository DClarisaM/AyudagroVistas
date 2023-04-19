<!-- eslint-disable prettier/prettier -->
<template>
  <card class="card" title="Registro de nuevo usuario">
    <div>
      <form @submit.prevent>
        <div class="row">
          <div class="col-md-6">
            <fg-input type="text" label="Nombre" 
             id="nombre" placeholder="Danier" v-model="user.nombre">
            </fg-input>
          </div>
          <div class="col-md-6">
            <fg-input type="text" label="Apellido"
            id="apellido" placeholder="Trochez" v-model="user.apellido">
            </fg-input>
          </div>
        </div>

        <div class="row">
          <div class="col-md-6">
            <fg-input type="email" label="Correo Electronico"
            id="email" placeholder="gmail.com" v-model="user.correo_electronico">
            </fg-input>
          </div>

          <div class="col-md-6">
            <fg-input type="password" label="Contraseña"
            id="contrasena" placeholder="******" v-model="user.contrasena">
            </fg-input>
          </div>
          
          <div class="col-md-6">
            <fg-input type="password" label="Repetir Contraseña" placeholder="******">
            </fg-input>
          </div>
          <div class="col-md-6">
            <fg-input type="num" label="Telefono" 
            id="telefono" placeholder="#####" v-model="user.telefono">
            </fg-input>
          </div>
          <div class="col-md-6">
            <fg-input type="text" label="Direccion" 
            id="direccion" placeholder="Cl-#" v-model="user.direccion">
            </fg-input>
          </div>
        </div>

        <div class="text-center">
          <p-button type="info" @click="CrearUser()">
            Registrar Usuario
          </p-button>
        </div>
        
      </form>
    </div>
  </card>
</template>
<script>
import axios from 'axios'
export default {
  name:"Inicio",
  data() {
    return {
      user: {
        rol_id: 1,
        nombre: "",
        apellido: "",
        correo_electronico: "",
        contrasena: "",
        telefono: "",
        direccion: "",
        estado: "activo",
      },
    }
  },
  methods: {
    // updateProfile() {
    //   alert("Your data: " + JSON.stringify(this.user));
    // },
    CrearUser(){
      alert(aaaa)
      axios.post("https://localhost:3000/nuevoUser", this.user)
      .then( response=>{
          console.log(response)

          alert("registro exitoso")
        }
      )
      this.$router.push("/");
    },
  },
}
</script>
<style></style>

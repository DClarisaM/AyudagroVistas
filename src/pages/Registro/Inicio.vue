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
            />
            <div v-if="enviado && !$v.user.nomrbre.required" class="mensajeError">
              Debe escribir un nombre
            </div>
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
              type="password"
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
              type="password"
              label="Repetir Contraseña"
              id="password"
              v-model="user.password"
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
            >

          
            </fg-input>
            <div v-if="enviado && !$.direccion.required" class="mensajeError">
             Debe escibir una direccionsi 
            </div>
          </div>
        </div>

        <div class="text-center">
          <button class="btn" @click="validar()">Registrar</button>
        </div>
        <div class="clearfix"></div>
      </form>
    </div>
  </card>
</template>
<script>
import axios from "axios"
import {required, email, minLength, sameAs} from 'vuelidate/lib/validators'

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
        password: "",
      },
      enviado:false,
    };
  },
  validation:{
    user:{
    nombre:{required},
    apellido:{required},
    correo_electronico:{required, email},
    contrasena:{required, minLength:minLength(5)},
    password:{required, sameAsContrasena:sameAs("contrasena")},
    telefono:{required},
    direccion:{required},
    }
},
  
  methods: {
    validar(){
      this.enviado=true;
      if(this.$v.$invalid){
        return;
      }
      console.log("formulario valido")
    },
    // updateProfile() {
    //   alert("Your data: " + JSON.stringify(this.user));
    // },
    CrearUser() {
      // console.log(this.user.password);
      if (this.user.password == this.user.contrasena) {
        axios.post("http://localhost:3000/nuevoUser", this.user).then((res) => {
          console.log(res);
          alert("registro exitoso");
          this.$router.push("/login");
        });
      } else {
        alert("contraseñas no coinciden");
      }

      //   .catch((err) => {
      //     console.log(err);
      //   });
      // // this.$router.push("/");
      // alert("registro exitoso");
    },
  },
};
</script>
<style></style>

<!-- eslint-disable prettier/prettier -->
<template>
  <card class="card" title="Registro de nuevo usuario">
    <div>
      <form @submit.prevent>
        <div class="row">
          <div class="col-md-6">
            <fg-input
              minlength="3"
              type="text"
              label="Nombre"
              id="nombre"
              placeholder="Danier"
              v-model="user.nombre"
              required="true"
            />
            <h7 style="color:#FF0000" v-if="!user.nombre">Debe escribir un nombre</h7> 
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
            <h7 style="color:#FF0000" v-if="!user.apellido">Debe escribir un apellido</h7> 

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
            <h7 style="color:#FF0000" v-if="!user.correo_electronico">Debe escribir un correo </h7> 

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
            <h7 style="color:#FF0000" v-if="!user.contrasena">Debe escribir una contraseña</h7> 

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
            <h7 style="color:#FF0000" v-if="!user.password">Debe repetir su contraseña</h7> <br>
            <h7 style="color:#FF0000" v-if="user.contrasena != user.password">Las contraseñas deben ser iguales</h7> 

            </fg-input>
          </div>
          <div class="col-md-6">
            <fg-input
              type="text"
              label="Telefono o Celular"
              id="telefono"
              placeholder="#####"
              v-model="user.telefono"
              required
            >
            <h7 style="color:#FF0000" v-if="!user.telefono" class="mensajeError"> Debe escribir un telefono o celular</h7> 

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
            <h7 style="color:#FF0000" v-if="!user.direccion">Debe escribir una  direccion</h7> 


          
            </fg-input>
            <!-- <div v-if="enviado && !$.direccion.required" class="mensajeError">
             Debe escibir una direccionsi 
            </div> -->
          </div>
        </div>

        <div class="text-center">
          <button class="btn" @click="validatorUser()">Registrar</button>
        </div>
        <div class="clearfix"></div>
      </form>
    </div>
  </card>
</template>
<script>
import axios from "axios"
import { useVuelidate } from '@vuelidate/core'
//import { required, email , minLength} from '@vuelidate/validators'
import {required, email, minLength} from 'vuelidate/lib/validators'

export default {
  setup(){
       return {v$: useVuelidate() }
  },
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
  
 
  
  methods: { 

    
    // validar(){
    //   this.enviado=true;
    //   if(this.$v.$invalid){
    //     console.log("si")
    //     return;
    //   }

    //   console.log("formulario valido")
    // },
    // updateProfile() {
    //   alert("Your data: " + JSON.stringify(this.user));
    // },
    CrearUser() {
       console.log(this.user.password);
      if (this.user.password == this.user.contrasena) {
        axios.post("http://localhost:3000/nuevoUser", this.user).then((res) => {
          console.log(res);
          alert("registro exitoso");
          this.$router.push("/login");
        });
      } else {
        alert("contraseñas no coinciden");
      }

     
    },
    validatorUser(){
      if(!this.user.nombre || !this.user.apellido ||!this.user.correo_electronico || !this.user.telefono || !this.user.direccion){
            alert("Porfavoe revise que todos los campos del registro esten llenos")

      }else{
        if (this.user.password == this.user.contrasena) {
        axios.post("http://localhost:3000/nuevoUser", this.user).then((res) => {
          console.log(res);
          alert("registro exitoso");
          this.$router.push("/login");
        });
      } else {
        alert("contraseñas no coinciden");
      }
        
      }
    },
    // validations:{
    //   user:{
    //      nombre:{required},
    //      apellido:{required},
    //      correo_electronico:{required,email},
    //      contrasena:{required, minLength : minLength(5) },
    //      telefono:{required},
    //     direccion:{required},
    //     estado: {required},
    //     password: {required},

    //   }

    // },
  },
};
</script>
<style></style>

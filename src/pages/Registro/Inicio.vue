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
            <h7 style="color:#FF0000" v-if="!user.nombre && enviado==true">Debe escribir un nombre</h7> 
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
            <h7 style="color:#FF0000" v-if="!user.apellido && enviado==true">Debe escribir un apellido</h7> 

            </fg-input>
          </div>
        </div>

        <div class="row">
          <div class="col-md-6">
            <fg-input
              type="email" multiple
              :rules="validateEmail"
              size="32" minlength="10" maxlength="64"
              label="Correo Electronico"
              id="correo_electronico"
              placeholder="gmail.com"
              v-model="user.correo_electronico"
              
              required="required"
            >
            <h7 style="color:#FF0000" v-if="!user.correo_electronico && enviado==true">Debe escribir un correo </h7> 

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
            <h7 style="color:#FF0000" v-if="!user.contrasena && enviado==true">Debe escribir una contraseña</h7> 

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
            <h7 style="color:#FF0000" v-if="!user.password && enviado==true">Debe repetir su contraseña</h7> <br>
            <h7 style="color:#FF0000" v-if="user.contrasena != user.password  &&enviado==true">Las contraseñas deben ser iguales</h7> 

            </fg-input>
          </div>
          <div class="col-md-6">
            <fg-input
              type="number"
              label="Telefono o Celular"
              id="telefono"
              placeholder="#####"
              v-model="user.telefono"
              required
            >
            <h7 style="color:#FF0000" v-if="!user.telefono && enviado==true" class="mensajeError"> Debe escribir un telefono o celular</h7> <br>
            <h7 style="color:#FF0000" v-if="!user.telefono && enviado==true" class="mensajeError"> Este capo solo deve contener numero</h7> 


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
            <h7 style="color:#FF0000" v-if="!user.direccion && enviado==true">Debe escribir una  direccion</h7> 


          
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
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import axios from "axios"

export default {
 
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
    validateEmail(value) {
      // if the field is empty
      if (!value) {
        return 'This field is required';
      }
      // if the field is not a valid email
      const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
      if (!regex.test(value)) {
        return 'This field must be a valid email';
      }
      // All is good
      return true;
    },

  validateEmail(){
                var emailField = document.getElementById('correo_electronico');
                var validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
                if( validEmail.test(emailField.value) ){
                  alert('correo valido');
                
                }else{
                  alert('correo invalido');
                 }
              } ,
    
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
    // CrearUser() {
    //    console.log(this.user.password);
    //   if (this.user.password == this.user.contrasena) {
    //     axios.post("http://localhost:3000/nuevoUser", this.user).then((res) => {
    //       console.log(res);
    //       alert("registro exitoso");
    //       this.$router.push("/login");
    //     });
    //   } else {
      
    //   }

     
    // },
    validatorUser(){
      if(!this.user.nombre || !this.user.apellido ||!this.user.correo_electronico || !this.user.telefono 
      || !this.user.direccion ||!this.user.contrasena ||!this.user.password){
          //  alert("Porfavoe revise que todos los campos del registro esten llenos"); 
             Swal.fire({
  icon: 'warning',
  title: 'Campos vacios',
  text: 'Porfavor reivise que todos los campos esten llenos para continuar!',
  
})
this.enviado=true

      }else{
                var emailField = document.getElementById('correo_electronico');
                var validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        if( validEmail.test(emailField.value)){
          // Swal.fire('correo valido')
        if (this.user.password == this.user.contrasena) {
        axios.post("http://localhost:3000/nuevoUser", this.user).then((res) => {
          console.log(res);
          Swal.fire('Registro de usuario exitoso')
          this.$router.push("/login");
        });
      } else {
        Swal.fire('Las contraseñas no coinsiden')
        this.enviado=true

        // alert("contraseñas no coinciden");
      }}else{
                  Swal.fire({
                    title: 'Correo no válido',
                    text: 'Porfavor ingrese un correo valido',
                    icon:'warning',
                  });
                  this.enviado=true

                 }
        
      }
    },
   
  },
};
</script>
<style></style>

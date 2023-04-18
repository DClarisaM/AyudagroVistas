<template>
    <div>

    {{ user }}
    <card class="card" title="Editar Perfil">
      <div>
        <form @submit.prevent>
          <div class="row">
            <div class="col-md-6">
              <fg-input
                type="text"
                label="Correo electronico"
                placeholder="Daniertrochez12@"
                v-model="user.user"
              >
              
              
              </fg-input>
            </div>
            <div class="col-md-6">
               <fg-input
                type="password"
                label="Contraseña"
                placeholder=""
                v-model="user.password"
              >
              
              </fg-input> 
              
  
            </div>
          </div>
    
          <!-- <div class="row">
            <div class="col-md-6">
              <fg-input
                type="text"
                label="Telefono"
                placeholder="Telefono"
                v-model="user.telefono"
              >
              </fg-input>
            </div> -->
            
            <!-- <div class="col-md-6">
              <fg-input
                type="text"
                label="Dirección"
                placeholder="Popayan"
                v-model="user.direccón"
              >
              </fg-input>
            </div>
          </div> -->
          
  
          <div class="text-center">
            <button type="info" round @click="iniciarSesion()">
              Iniciar Sesion
            </button>
          </div>
          <div class="clearfix"></div>
        </form>
      </div>
    </card>
</div>
  </template>
  <script>
import { stringify } from 'querystring';

  export default {
    data() {
      return {
        user: {
          user: null,
          password: null,
          
        },
        usuariobd: "a@a.com",
        passwordbd: "123",
        respuesta: {
          nombre: "Yennifer",
          idUsuario: 1,
          idPerfil: 3
          
        },
      };
    },
    methods: {
      updateProfile() {
        alert("Your data: " + JSON.stringify(this.user));
      },
      iniciarSesion(){
        
        if( this.user.user == this.usuariobd && this.user.password == this.passwordbd ){
            alert("correcto") 
            localStorage.setItem('usuario',"1")
            // localStorage.setItem('usuario', JSON.stringify(respuesta))
            this.$router.push("/dashboard")
            
        }else{
            alert("el usuario no existe")
        }
      }
    },
  };
  </script>
  <style></style>
  
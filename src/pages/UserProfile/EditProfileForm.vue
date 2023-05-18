<template>
  <card class="card" title="Editar Perfil">
    
  
          
    <div>
      <form @submit.prevent>
        <div class="row">
          <div class="col-md-6">
            <fg-input
              type="text"
              label="Nombre"
             placeholder="erazo"
              v-model="user.nombre"
            >            
            </fg-input>
            <div  style="color:#FF0000" v-if="!user.nombre && estado==true" >*Campo obligatorio</div>

          </div>
      
          <div class="col-md-6">
             <fg-input
              type="text"
              label="Apellido"
              placeholder="Trochez"
              v-model="user.apellido"
            >
            
            </fg-input> 
            <div  style="color:#FF0000" v-if="!user.apellido && estado==true">*Campo obligatorio</div>

            

          </div>
        
        </div>
  
        <div class="row">
          <div class="col-md-6">
            <fg-input
              type="number"
              label="Telefono"
              placeholder="Telefono"
              v-model="user.telefono"
            >
            </fg-input>
            <div  style="color:#FF0000" v-if="!user.telefono && estado==true">*Campo obligatorio</div>

          </div>
          
          <div class="col-md-6">
            <fg-input
              type="text"
              label="Dirección"
              placeholder="Popayan"
              v-model="user.direccion"
            >
            </fg-input>
            <div  style="color:#FF0000" v-if="!user.direccion && estado==true">*Campo obligatorio</div>

          </div>
        </div>
        

        <div class="text-center">
                <button class="btn btn-primary" @click="updateProfile()">
                  Guardar Cambios
                </button>
              </div>
        <div class="clearfix"></div>
      </form>
    </div>
   
  </card>
  
</template>
<script>
import axios from 'axios';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
export default {
  data() {
    return {
      user: {
       // correo_electronico: "",
        nombre: "",
        apellido: "",
        direccion: "",
        telefono: "",
       // contrasena: "",
      },
      us:"",
      estado:false
    };
  },
  mounted(){
    this.us = JSON.parse(localStorage.getItem("usuarios"))
  },
  methods: {
  
    updateProfile() {
     
      if(!this.user.nombre || !this.user.apellido || !this.user.direccion || !this.user.telefono){
        Swal.fire("*Campos requeridos")
        this.estado=true
      }else{
        this.correo_electronico=this.us.correo_electronico,
      this.contrasena=this.us.contrasena
      axios.put("http://localhost:3000/editarUsuario/"+this.us.id_usuario,this.user)
      .then((res) => {
          console.log(res);
          Swal.fire("Actualizacion exitosa")
          localStorage.clear();
          this.$router.push("/login");
          location.reload();
        })
        .catch((err) => {
          console.log(err);
          alert("error del servidor" + err);
        });}
    },
  },
};
</script>
<style>


</style>

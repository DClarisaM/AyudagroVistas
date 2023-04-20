<!-- eslint-disable prettier/prettier -->
<template>
    <card class="text center" title="Codigo De Verificacion">
        <div>
            <form @submit.prevent>
                <div class="row justify-content-around">
                    <div class="col-md-7">
                        <fg-input type="num" label="" placeholder="Ingrese El Codigo De Verificacion"
                            v-model="user.correo_electronico">
                        </fg-input>
                    </div>
                </div>
                <div class="text-center">
                    <p-button type="info" round @click.native.prevent="NuevaContraseña()">
                        Verificar
                    </p-button>
                </div>
                <div id="passwordHelpBlock" class="text-center form-text">
                    ¿No haz recibido tu codigo?
                </div>
                <a class="text-center form-text" href="/recuperacion">
                    Reenviar codigo
                </a>
                <div class="clearfix"></div>
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
            },
        };
    },
    methods: {
        NuevaContraseña() {
            this.$router.push("/NuevaContraseña")
        },
        // updateProfile() {
        //   alert("Your data: " + JSON.stringify(this.user));
        // },

        login() {
            let json = {
                "usuario": this.correo_electronico,
                "password": this.contrasena,
            };
            alert("Inicio exitoso");
            axios.post("http://localhost:3000/login", json)
                .then((data) => {
                    console.log(data);
                })
                .catch((err) => {
                    alert(err + "error del servidor");
                });
        },
    },
};
</script>
<style></style>
  
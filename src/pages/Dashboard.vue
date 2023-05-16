<template>
  <div>
    <h2 style="color:#18541f" class="text-center">BIENVENIDO AYUDAGRO</h2>
    <div class="col-6 offset-3">

      <card class="card-user">
        <div class="image">
          <img src="@/assets/img/background2.jpg" alt="..." />
        </div>

        <div>
          <div class="author">
            <img class="avatar border-white" src="@/assets/img/faces/face-4.jpg" alt="..." />
            <h4 class="title">{{ us.nombre }}</h4>
          </div>
        </div>
        <div class="text-center">
          <!-- <p-button type="info" round @click.native.prevent="">
            Preguntar
          </p-button> -->
          <div class="col-8 offset-2">
            <router-link class="btn btn-success" :to="{
              name: 'preguntar',
            }">
              Preguntar
            </router-link>
          </div>
        </div>
      </card>

    </div>

    <div class="col-10 offset-1" v-for="pregunta in listaPreguntas  " :key="pregunta.id_pregunta">
      <card class="card-Pregunta">
        <div class="imagen">
          <img src="@/assets/img/background2.jpg" alt="..." />
        </div>
        <div>
          <div class="Foto">
            <img class="Fusuario border-white" src="@/assets/img/faces/face-4.jpg" alt="..." />
            <h4 class="Nombre">{{ pregunta.Usuario.nombre }} </h4>
          </div>
          <h4>Preguntó:</h4>
          <h5>{{ pregunta.descripcion }}</h5>
          <div class="text-muted">
            <small>autor de la pregunta:{{ pregunta.Usuario.nombre + " " + pregunta.Usuario.apellido }}</small><br>
            <small>fecha y hora :{{ pregunta.Usuario.createdAt }}</small>
            <!-- <small>subcategoria de la pregunta{{ pregunta.subcategoria_id }}</small> -->
            <div class="text-right">
              <!-- <p-button type="info" round @click.native.prevent="">
                Responder
              </p-button> -->
           

        
             
              
              <router-link class="btn bg-dark text-white" :to="{
                name: 'RespuestaP', params: { preguntaId: pregunta.id_pregunta }
              }">
                <i class="fas fa-eye"></i>
              </router-link>
              <router-link class="btn btn-success" :to="{
                name: 'RespuestaP',
                params: { preguntaId: pregunta.id_pregunta },
              }">
                Responder
              </router-link>
            </div>
          </div>
        </div>
      </card>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import Swal from "sweetalert2";
export default {
  components: {},
  data() {
    return {
     
      id_pregunta: null,
      listaPreguntas: [],
      listarPregunta: [],
      us: "",
      id: null,
    };
  },
  mounted() {
    this.us = JSON.parse(localStorage.getItem("usuarios"));
    this.listarPreguntas();
    this.listarPregunta();
    console.log(this.listaPreguntas)
  },
  methods: {
    listarPreguntas() {
      // alert("aaaa")
      axios
        .get("http://localhost:3000/listarPreguntaNombreUsuario")
        .then((res) => {
          //codigo
          this.listaPreguntas = res.data;
          console.log(res.data);
        })
        .catch((err) => {
          //TODO mostrar ventana emergente sweetalert2 con el error
          alert("error del servidor", +err);
        });
    },
  },
  listarPregunta() {
    // alert("aaaa")
    axios
      .get("http://localhost:3000/ListarPreguntaxId" + this.id_pregunta)
      .then((res) => {
        //codigo
        this.listaPreguntas = res.data.usuario;
        console.log(listaPreguntas);
      })
      .catch((err) => {
        //TODO mostrar ventana emergente sweetalert2 con el error
        alert("error del servidor", +err);
      });
  },
 
};
</script>

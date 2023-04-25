<template>
  <div>
    <div class="col-8 offset-2">
      <button class="btn" @click="obtenerlocalstorage()">local</button>
    </div>
    {{ userloger }}

    <div class="col-6 offset-3">
      <card class="card-user">
        <div class="image">
          <img src="@/assets/img/background.jpg" alt="..." />
        </div>
        <div>
          <div class="author">
            <img
              class="avatar border-white"
              src="@/assets/img/faces/face-2.jpg"
              alt="..."
            />
            <h4 class="title">{{ us.nombre }}</h4>
          </div>
        </div>
        <div class="row">
          <div class="col-6">
            <div class="form-group">
              <label for="exampleFormControlSelect1">Categoria</label>
              <select class="form-control" id="exampleFormControlSelect1">
                <option value="1">Frutas</option>
                <option value="2">verduras</option>
                <option value="3">animales</option>
              </select>
            </div>
            <!-- <div class="form-floating">
                <textarea class="form-control" placeholder="Detalle de la categoria" id="floatingTextarea2" style="height: 50px"></textarea>
            </div> -->
          </div>
          <div class="col-6">
            <div class="form-group">
              <label for="exampleFormControlSelect1">Subcategoria</label>
              <select class="form-control" id="exampleFormControlSelect1">
                <option value="1">Mango</option>
                <option value="2">Manzana</option>
                <option value="3">Vaca</option>
              </select>
            </div>
            <div class="form-floating" v-for="pregunta in listaPreguntas">
              <!-- <textarea class="form-control" placeholder="Detalle de la Subcategoria" id="floatingTextarea2" style="height: 50px"
                
                ></textarea> -->
              <!-- <h6 class="descrip" >
                 {{ pregunta.subcategoria_id }}
                </h6> -->
            </div>
          </div>
        </div>
        <div class="col-10 offset-1">
          <card class="card-Pregunta">
            <!-- <div class="form-floating">
                <textarea class="form-control" placeholder="Escriba aquí su pregunta" id="floatingTextarea2" style="height: 100px"
                 v-model="pregunta.descripcion">
                </textarea>
              </div> -->
            <form>
              <div class="form-group">
                <label for="exampleFormControlInput1">Pregunta</label>

                <textarea
                  class="form-control"
                  placeholder="Escriba aquí su pregunta"
                  id="floatingTextarea2"
                  style="height: 100px"
                  v-model="pregunta.descripcion"
                  v-on:keyup.enter="registrarPregunta()"
                >
                </textarea>
              </div>

              <!-- <div>
                <button class="btn" @click="registrarPregunta()">
                    Preguntar
                </button>
            </div> -->
            </form>
            <div class="h2 mb-0">
              <b-icon-arrow-up></b-icon-arrow-up>
              <b-icon-exclamation-triangle-fill></b-icon-exclamation-triangle-fill>
            </div>
          </card>
        </div>
        <div class="text-center">
          <button class="btn btn-primary" @click="registrarPregunta()">
            Preguntar
          </button>
        </div>
      </card>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  components: {},
  data() {
    return {

      listaPreguntas: [],
      pregunta: {
        subcategoria_id:1,
        usuario_id:"",
        descripcion: "",
      },
      userloger: "",
      us: "",
      a:null,
    };
  },
  mounted() {
   
    this.us = JSON.parse(localStorage.getItem("usuarios"));
    this.listarPreguntas();
  },
  methods: {
    listarPreguntas() {
      this.pregunta.usuario_id=this.us.id_usuario
      console.log(this.pregunta.usuario_id)
      axios
        .get("http://localhost:3000/listarPregunta")
        .then((res) => {
          //codigo
          this.listaPreguntas = res.data;
          //console.log(res.data);
        })
        .catch((err) => {
          //TODO mostrar ventana emergente sweetalert2 con el error
          alert("error del servidor" + err);
        });
    },
    registrarPregunta() {
      //  alert("jahkajs")
      this.usuario_id=this.us.id_usuario;
      console.log(this.usuario_id);
      axios
        .post("http://localhost:3000/nuevaPregunta", this.pregunta)
        .then((res) => {
          alert("Pregunta registrada con exito");
          console.log(res);
          this.$router.push("/");
        })
        .catch((err) => {
          alert("error del servidor" + err);
        });
    },
    obtenerlocalstorage() {
      alert("jajajaj");
      this.userloger = localStorage.getItem("usuario");
    },
  },
};
</script>

<style scoped>
.descrip {
  border: 2px black;
}
</style>
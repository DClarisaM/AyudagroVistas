<template>
  <div>
    <!-- <div class="col-8 offset-2">
      <button class="btn" @click="obtenerlocalstorage()">local</button>
    </div> -->
    <!-- {{ userloger }} -->

    <div class="col-6 offset-3">
      <card class="card-user">
        <div class="image">
          <img src="@/assets/img/background2.jpg" alt="..." />
        </div>
        <div>
          <div class="author">
            <img
              class="avatar border-white"
              src="@/assets/img/faces/face-4.jpg"
              alt="..."
            />
            <h4 class="title">{{ us.nombre+" "+us.apellido }}</h4>
          </div>
        </div>
        <!-- <div class="row">
          <div class="col-6">
            <div class="form-group">
              <label for="exampleFormControlSelect1">Categoria</label>
              <select class="form-control" id="exampleFormControlSelect1">
                <option value="1">Frutas</option>
                <option value="2">verduras</option>
                <option value="3">animales</option>
              </select>
            </div>
          
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
            <div class="form-floating" v-for="pregunta in listaPreguntas" :key="pregunta.id_pregunta">
             
            </div>
          </div>
        </div>aa -->
        <div class="col-10 offset-1">
          <card class="card-Pregunta">
          
            <form>
              <div class="form-group">
                <label for="exampleFormControlInput1">Pregunta</label>

                <textarea
                  class="form-control"
                  placeholder="Escriba aquí su pregunta"
                  id="floatingTextarea2"
                  style="height: 80px"
                  v-model="pregunta.descripcion"
                  v-on:keyup.enter="registrarPregunta()"
                >
                </textarea>
                <h5 style="color:#FF0000" v-if="!pregunta.descripcion && estado==true">*El campo no puede estar vacio</h5> 

              </div>
            </form>
            <div class="h2 mb-0">
              <b-icon-arrow-up></b-icon-arrow-up>
              <b-icon-exclamation-triangle-fill></b-icon-exclamation-triangle-fill>
            </div>
          </card>
        </div>
        <div class="text-center">
          <button class="btn btn-success" @click="registrarPreguntaV()">
            Guardar Pregunta
          </button>
        </div>
      </card>
    </div>
  </div>
</template>
<script>
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import axios from "axios"
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
      estado:false,
    
    };
  },
  mounted() {
    this.id=this.us.id_usuario
   
    this.us = JSON.parse(localStorage.getItem("usuarios"));
    this.listarPreguntas();
  },
  methods: {
    listarPreguntas() {
      this.pregunta.usuario_id=this.us.id_usuario
      console.log(this.pregunta.usuario_id)
      axios
        .get("http://localhost:3000/listarPregunta",this.pregunta)
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
      axios.post("http://localhost:3000/nuevaPregunta",this.pregunta)
        .then((res) => {
          alert("Pregunta registrada con exito");
          console.log(res);
          this.$router.push("/Dashboard");
        })
        .catch((err) => {
          alert("error del servidor" + err);
        });
    },
    registrarPreguntaV(){
      this.usuario_id=this.us.id_usuario;
      if(!this.pregunta.descripcion){
        Swal.fire('Error la respuesta esta vacia')
        this.estado=true

      }else{  axios.post("http://localhost:3000/nuevaPregunta",this.pregunta)
        .then((res) => {
          Swal.fire("Pregunta registrada con exito");
          console.log(res);
          this.$router.push("/Dashboard");
        })
        .catch((err) => {
          Swal.fire("error del servidor" );
        });

      }

    },
    // obtenerlocalstorage() {
    //   alert("jajajaj");
    //   this.userloger = localStorage.getItem("usuario");
    // },
  },
};
</script>

<style scoped>
.descrip {
  border: 2px black;
}
</style>
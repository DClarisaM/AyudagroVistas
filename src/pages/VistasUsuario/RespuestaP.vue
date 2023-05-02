<template>
  <div>
    <div >
    <div class="col-6 offset-3" >
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
           <h4 class="title">{{ us.nombre }}</h4>
           <div>
           <h4 >
              {{ listaPregunta.descripcion}}
           </h4>
           </div>
         </div>
         <!-- <div class="text-right">
           <p-button type="info" round @click.native.prevent="">
             Responder
           </p-button>
         </div> -->
         <div class="form-group">
                
                <textarea class="form-control" placeholder="Escriba aquí su respuesta" id="floatingTextarea2" style="height: 50px"
                 v-model="respuesta.descripcion">
                </textarea>
                <div class="text-center">
                <button class="btn btn-primary" @click="nuevaRespuesta()" >
                    Guardar Respuesta
                </button>
                </div>
            </div>
         
       </div>
     </card>
    </div>
  </div>

    <div class="col-10 offset-1" v-for="respuesta in listaRespuestas" :key="respuesta.id_respuesta ">
      <card class="card-Mpregunta">
        <div class="Mimagen">
          <img src="@/assets/img/background2.jpg" alt="..." />
        </div>
        <div>
          <div class="Mfoto">
            <img class="Musuario border-white" src="@/assets/img/faces/face-4.jpg" alt="..." />
            <!-- <h4>
             hola
            </h4> -->
          </div>
          <h5>
          {{ respuesta.pregunta_id }}
          {{ respuesta.descripcion }}
        </h5>
          <small class="text-right">
            {{ respuesta.createdAt }}
          </small>
        </div>
       
        <!-- <div v-for="preguntas in listaRespuestas">
          <label for="floatingTextarea2">
            {{ preguntas.descripcion }}
          </label>
        </div> -->
        <!-- <div class="form-floating">
          <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2"></textarea>
        </div> -->
        <!-- <div class="text-right">
          <p-button type="info" round @click.native.prevent="">
            Responder
          </p-button>
        </div> -->
      </card>
    </div>



  </div>
</template>
<script>
import axios from "axios";

export default {
  components: {

  },
  data() {
    return {
      idPregunta: null,
      listaRespuestas: [],
      listaPregunta: [],

      respuesta: {
        usuario_id:"",
        pregunta_id:1,
        descripcion: "",
        hora_fecha:null,
      },
      pregunta:[],
      us:{},
      preUs:"",
      preid:{}

    };
  },
  async mounted() {
    this.idPregunta = this.$route.params.preguntaId
    this.listarRespuestas(),
    this.verPregunta()
    this.respuestasPorUser()
    this.respuestasPorUserid()
    this.us = JSON.parse(localStorage.getItem("usuarios"));
  },
  methods: {
    listarRespuestas() {
      // alert("aaaa")
      axios.get("http://localhost:3000/ListarRespuestasPorPreguntaId/"+ this.idPregunta)
        .then((res) => {
          //codigo
          this.listaRespuestas = res.data
          console.log(res.data);
        })
        .catch((err) => {
          //TODO mostrar ventana emergente sweetalert2 con el error
          alert("error del servidor")
        })
    },


    verPregunta() {
        // alert("aaaa")
        axios.get("http://localhost:3000/verDetallePregunta/"+this.idPregunta)
          .then((res) => {
            //codigo
            // alert("bbbb")
            console.log(res.data);
            this.listaPregunta = res.data
          })
          .catch((err) => {
            //TODO mostrar ventana emergente sweetalert2 con el error
            alert("error del servidor")
          })
      },

      
      nuevaRespuesta(){
         //alert("jahkajs")
        this.respuesta.usuario_id=this.us.id_usuario
        this.respuesta.pregunta_id=this.idPregunta
        console.log(this.respuesta.pregunta_id)
        console.log(this.respuesta.descripcion )
        axios.post("http://localhost:3000/nuevaRespuesta",this.respuesta)
        .then((res) => {
            console.log(res);
           // this.$router.push("/");
        })
        .catch((err) => {
          console.log(res)
          alert("error del servidor"+err)
        })
    },
//pruebas paratraer el usuario que realiza la pregunta
    respuestasPorUser(){
     axios.get("http://localhost:3000/resxUser",)
     .then((res)=>{
      this.preUs=res.data
      console.log(this.preUs);

     })
     .catch((err)=>{
      console.log(err)
     })
    },
    respuestasPorUserid(){
     axios.get("http://localhost:3000/ListarRespuestasPorUsuario/1")
     .then((res)=>{
      this.preid=res.data
      console.log(this.prei.Usuario);

     })
     .catch((err)=>{
      console.log(err)
     })
    },

  }
};
</script>
  
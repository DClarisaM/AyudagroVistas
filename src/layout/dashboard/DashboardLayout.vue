<template>
  <div class="wrapper">
    <side-bar v-if="us!=null" >
      <template slot="links">
        <di v-if="us.rol_id ==1 || us.rol_id==3">  <sidebar-link to="/dashboard" name="Inicio" icon="ti-home" /></di>
        <di v-if="us.rol_id==1 || us.rol_id==3"><sidebar-link to="/stats" name="Perfil" icon="ti-face-smile" /></di>
        
        <!-- <sidebar-link to="/categorias" name="Administrar Categorias" icon="ti-layout-list-thumb-alt" /> -->
        <!-- <sidebar-link to="/subcategorias" name="Administrar Subcategorias" icon="ti-layout-list-post" /> -->
        <div v-if="us.rol_id==2"><sidebar-link to="/usuario" name="Ver Usuario" icon="ti-user" /></div>
        <div v-if="us.rol_id==2"><sidebar-link to="/pregunta" name="Ver Pregunta" icon="ti-help" /></div>
        <!-- <sidebar-link to="/sugerencias" name="Ver Sugerencias" icon="ti-light-bulb" /> -->
        <!-- <sidebar-link to="/valorR" name="Ver Valor_R" icon="ti-view-list-alt" /> -->
        <div v-if="us.rol_id==2"><sidebar-link to="/respuesta" name="Ver Respuesta" icon="ti-pencil-alt" /></div>
        <!-- <sidebar-link to="/rol" name="Gestionar Rol" icon="ti-view-list-alt" /> -->
        <!-- <sidebar-link to="/ListaPreguntas" name="preguntas" icon="ti-comments" /> -->
        <!-- <sidebar-link to="/Inicio" name="Login" icon="ti-check-box" /> -->
        <!-- <sidebar-link to="/sugerenciaArchivo" name="Mostrar Sugerencias Archivo" icon="ti-save-alt" /> -->
        <!-- <sidebar-link to="/preguntaArchivo" name="Listar Pregunta Archivo" icon="ti-view-list-alt" /> -->
        <div v-if="us.rol_id==1 || us.rol_id==3"><sidebar-link to="/preguntar" name="preguntar" icon="ti-write" /></div>
        <!--<sidebar-link to="/MisPreguntas" name="Mis Preguntas" icon="ti-pencil-alt" /> -->
        <!-- <sidebar-link to="/SinRespuesta" name="Sin Respuesta" icon="ti-info" /> -->
        <!-- <sidebar-link to="/vistas" name="Inicio Sesion" icon="ti-eye" /> -->
        

      

      </template>

      <mobile-menu>

        <li class="nav-item">
          <a class="nav-link">
            <i class="ti-panel"></i>
            <p>Stats</p>
          </a>
        </li>
        
        <!-- <drop-down class="nav-item" title="5 Notifications" title-classes="nav-link" icon="ti-bell">
          <a class="dropdown-item">Notification 1</a>
          <a class="dropdown-item">Notification 2</a>
          <a class="dropdown-item">Notification 3</a>
          <a class="dropdown-item">Notification 4</a>
          <a class="dropdown-item">Another notification</a>
        </drop-down> -->
        <li class="nav-item">
          <a class="nav-link">
            <i class="ti-settings"></i>
            <p>Settings</p>
          </a>
        </li>
        <li class="divider"></li>
        
      </mobile-menu>
    
    </side-bar>
    
    <div class="main-panel">
      <top-navbar></top-navbar>
      <h1>
        {{ usuariologueado }}
        
      </h1>

      <!--<dashboard-content @click.native="toggleSidebar"> </dashboard-content>-->
      <div class="content">
        <div class="container-fluid">
          <transition name="fade" mode="out-in">
            <!-- your content here -->
            <router-view></router-view>
          </transition>
        </div>
      </div>
      <content-footer></content-footer>
    </div>
    
  </div>
  
</template>
<style lang="scss"></style>





<script>
import TopNavbar from "./TopNavbar.vue";
import ContentFooter from "./ContentFooter.vue";
import DashboardContent from "./Content.vue";
import MobileMenu from "./MobileMenu";
export default {
  data() {
    return {
      // usuariologueado: ""
      us:null
    };

  },
  components: {
    TopNavbar,
    ContentFooter,
    DashboardContent,
    MobileMenu,



  },
  mounted() {
    // this.usuariologueado = localStorage.getItem('usuario')
    this.us = JSON.parse(localStorage.getItem("usuarios"));
  },
  methods: {

    toggleSidebar() {
      if (this.$sidebar.showSidebar) {
        this.$sidebar.displaySidebar(false);
      }
    },
  },
  // mounted() {
  //   localStorage.setItem('usuario')
  // }
};
</script>


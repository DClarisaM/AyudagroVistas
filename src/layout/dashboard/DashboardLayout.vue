<template>
  <div class="wrapper">
    <side-bar>
      <template slot="links">
        <sidebar-link to="/dashboard" name="Ayudagro" icon="ti-panel" />
        <sidebar-link to="/stats" name="User Profile" icon="ti-user" />
        
       
        
        
       
        <sidebar-link
          to="/categorias"
          name="Gestionar Categorias"
          icon="ti-view-list-alt"
        />
        <sidebar-link
          to="/subcategorias"
          name="Gestionar Subcategorias"
          icon="ti-view-list-alt"
        />
        <sidebar-link
          to="/usuario"
          name="Listar Usuario"
          icon="ti-view-list-alt"
        />
        <sidebar-link
          to="/sugerencias"
          name="Listar Sugerencias"
          icon="ti-view-list-alt"
        />
        <sidebar-link
          to="/valorR"
          name="Listar Valor_R"
          icon="ti-view-list-alt"
        />
        
        <sidebar-link
          to="/pregunta"
          name="Listar Pregunta"
          icon="ti-view-list-alt"
        />
        <sidebar-link
          to="/respuesta"
          name="Listar Respuesta"
          icon="ti-view-list-alt"
        />
        <sidebar-link
          to="/archivo"
          name="Listar Archivo"
          icon="ti-view-list-alt"
        />
        <sidebar-link
          to="/rol"
          name="Listar Rol"
          icon="ti-view-list-alt"
        />
        <sidebar-link
          to="/archivo"
          name="Gestionar Archivo"
          icon="ti-view-list-alt"
        />
        <sidebar-link
          to="/sugerenciaArchivo"
          name="Listar Sugerencias Archivo"
          icon="ti-view-list-alt"
        />
        <sidebar-link
          to="/preguntaArchivo"
          name="Listar Pregunta Archivo"
          icon="ti-view-list-alt"
          />
          <sidebar-link
          v-if="usuariologueado != 1"
          to="/preguntar"
          name="preguntar"
          icon="ti-view-list-alt"
        />
        <sidebar-link
          to="/MisPreguntas"
          name="MisPreguntas"
          icon="ti-view-list-alt"
        />
        <sidebar-link
          to="/SinRespuesta"
          name="SinRespuesta"
          icon="ti-view-list-alt"
        />
        <sidebar-link
          to="/vistas"
          name="vistas"
          icon="ti-view-list-alt"
        />
        />
       

      </template>

      <mobile-menu>

        <li class="nav-item">
          <a class="nav-link">
            <i class="ti-panel"></i>
            <p>Stats</p>
          </a>
        </li>
        <drop-down
          class="nav-item"
          title="5 Notifications"
          title-classes="nav-link"
          icon="ti-bell"
        >
          <a class="dropdown-item">Notification 1</a>
          <a class="dropdown-item">Notification 2</a>
          <a class="dropdown-item">Notification 3</a>
          <a class="dropdown-item">Notification 4</a>
          <a class="dropdown-item">Another notification</a>
        </drop-down>
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

      <dashboard-content @click.native="toggleSidebar"> </dashboard-content>

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
       usuariologueado:""
      };
    },
  components: {
    TopNavbar,
    ContentFooter,
    DashboardContent,
    MobileMenu,
  },
  mounted(){
      this.usuariologueado=localStorage.getItem('usuario')
    },
  methods: {
    toggleSidebar() {
      if (this.$sidebar.showSidebar) {
        this.$sidebar.displaySidebar(false);
      }
    },
  },
};
</script>

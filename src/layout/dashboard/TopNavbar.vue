<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">{{ routeName }}</a>
      <div class="user-controls"  v-if="us!=null" >
            <button v-on:click="cerrarSesion()">
              <i class="fas fa-sign-out-alt"></i>Cerrar Sesion</button>
          </div>
          
      <button
        class="navbar-toggler navbar-burger"
        type="button"
        @click="toggleSidebar"
        :aria-expanded="$sidebar.showSidebar"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-bar"></span>
        <span class="navbar-toggler-bar"></span>
        <span class="navbar-toggler-bar"></span>
      </button>
  
    </div>
  </nav>
</template>
<script>
export default {
  computed: {
    routeName() {
      const { name } = this.$route;
      return this.capitalizeFirstLetter(name);
    },
  },
  data() {
    return {
      us:null,
      activeNotifications: false,
    };
  },
  mounted() {
 
    this.us = JSON.parse(localStorage.getItem("usuarios"));
  },
  methods: {
    cerrarSesion(){

localStorage.clear();
this.$router.push('/login');
},
    capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
    toggleNotificationDropDown() {
      this.activeNotifications = !this.activeNotifications;
    },
    closeDropDown() {
      this.activeNotifications = false;
    },
    toggleSidebar() {
      this.$sidebar.displaySidebar(!this.$sidebar.showSidebar);
    },
    hideSidebar() {
      this.$sidebar.displaySidebar(false);
    },
  },
};
</script>
<style>
.user-controls{
  position: absolute;
  top: 32%;
  right: 1%;
  
}

</style>

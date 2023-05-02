<template>
  <footer class="footer">
    <div class="container-fluid d-flex flex-wrap justify-content-between">
      <nav>
        <ul>
          <li>
            <router-link :to="{ path: '/admin' }">Equipo <br> Ayudagro</router-link>
          </li>
        </ul>
      </nav>
      <div class="copyright d-flex flex-wrap">
        <h5>Yennifer</h5>
        <img  class="foto1" src="@/assets/img/Yennifer.jpg" alt="">
      </div>
      <div class="copyright d-flex flex-wrap">
        <h5>Daira</h5>
        <img  class="foto1" src="@/assets/img/Daira.jpg" alt="">
      </div>
      <div class="copyright d-flex flex-wrap">
        <h5>Ivan</h5>
        <img  class="foto1" src="@/assets/img/Ivan.jpg" alt="">
      </div>
      <div class="copyright d-flex flex-wrap">
        <h5>Jaiver</h5>
        <img  class="foto1" src="@/assets/img/Jaiver.jpg" alt="">
      </div>
      <div class="copyright d-flex flex-wrap">
        <h5>3R420</h5>
        <img  class="foto1" src="@/assets/img/3R420.jpg" alt="">
      </div>
      <div class="copyright d-flex flex-wrap">
        <h5>Angie</h5>
        <img  class="foto1" src="@/assets/img/Angie.jpg" alt="">
      </div>
      
    </div>
  </footer>
</template>
<script>
export default {};
</script>
<style>
.foto1{
  height: 50px;
  
}
</style>

<template>
  <footer class="footer">
    <div class="container-fluid d-flex flex-wrap justify-content-between">
      <nav>
        <ul>
          <li>
            <router-link :to="{ path: '/admin' }">Ayudagro</router-link>
          </li>
        </ul>
      </nav>
      <div class="copyright d-flex flex-wrap">
        <h5>Yennifer</h5>
        <img  class="foto1" src="@/assets/img/Yennifer.jpg" alt="">
        
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

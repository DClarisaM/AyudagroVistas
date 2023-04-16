
<template>
  <div>
    <h1> hola bebe </h1>
    <!-- <router-view></router-view> -->
    <div class="content">
    <div class="container-fluid">
      <transition name="fade" mode="out-in">
        <!-- your content here -->
        <router-view></router-view>
      </transition>
    </div>
  </div>
  </div>
</template>
  
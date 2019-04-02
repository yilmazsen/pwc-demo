<template>
  
  <div id="app">
  <div  class="app-wrapper">
    
    <Header class="sidebar-container"/>


    <main class="main-container">
      <Sidebar/>
      <nuxt/>
    
    </main>
  </div>
  </div>
</template>

<script>
  import Header from '@/components/Header'
  import Sidebar from '@/components/Sidebar'

  export default {
    components: {
      Header,
      Sidebar
    }    
  }
</script>


<style rel="stylesheet/scss" lang="scss" scoped>
  @import "@/styles/mixin.scss";
   @import "@/styles/Sidebar.scss";
  .app-wrapper {
    @include clearfix;
    position: relative;
    height: 100%;
    width: 100%;
    margin: -10px;
   

    &.mobile.openSidebar{
      position: fixed;
      top: 0;
    }
  }
  .drawer-bg {
    background: #000;
    opacity: 0.3;
    width: 100%;
    top: 0;
    height: 100%;
    position: absolute;
    z-index: 999;
  }
</style>


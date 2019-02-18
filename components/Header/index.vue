<template>


    <el-col  :span="3"  style="float:left; " >
    <el-menu 
      default-active="1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
     
      <el-menu-item index="1">
        <i class="el-icon-menu"></i>
            <span class="title"></span>
            <nuxt-link  to="/" class="link">Dashboard</nuxt-link>
      </el-menu-item>
      <el-menu-item index="2">
        <i class="el-icon-edit"></i>
             <span class="title"></span>
        <nuxt-link to="/HC/operations" class="link" >
        Operations</nuxt-link> 
      </el-menu-item>

      <el-menu-item index="3">
             <span class="title"></span>
        <i class="el-icon-view b"></i>
        <nuxt-link  to="/HC" class="link">Employees</nuxt-link>
       
       
      </el-menu-item>
    </el-menu>
  </el-col>






</template>

<script>
import backgroundUrl from '~/assets/img/firstbg.jpg'
  export default {
    data() {
    return { backgroundUrl }
  },
        methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style>
  .el-menu-vertical-demo{
    min-height: 950px;
    height: 100%;
    width: 100%;
  }
  .link
  {
    text-decoration: none;
    color: #fff;
     
  }
 
  
</style>
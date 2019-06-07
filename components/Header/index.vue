<template>
  <el-col :span="3" style="float:left; ">
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="1">
        <i class="el-icon-menu"></i>
        <span class="title"></span>
        <nuxt-link to="/" class="link">Dashboard</nuxt-link>
      </el-menu-item>
      <el-menu-item index="2">
        <i class="el-icon-edit"></i>
        <span class="title"></span>
        <nuxt-link to="/hc/operations">Operations</nuxt-link>
      </el-menu-item>

      <el-menu-item index="3">
        <span class="title"></span>
        <i class="el-icon-view b"></i>
        <nuxt-link to="/hc" class="link">Employees</nuxt-link>
      </el-menu-item>
    </el-menu>
  </el-col>
</template>

<script>
import backgroundUrl from "~/assets/img/firstbg.jpg";
export default {
  data() {
    return { backgroundUrl };
  }
};
</script>

<style scoped>
.el-menu-vertical-demo {
  min-height: 950px;
  height: 100%;
  width: 100%;
}
.link {
  text-decoration: none;
  color: #fff;
  display: block;
  width: auto;
  height: auto;
}
li {
  width: auto;
  height: auto;
}
.el-menu-item li {
  display: inline-block;

  height: auto;
}

.el-menu-item a {
  display: inline-block;
  text-decoration: none;
  width: 100%;
  color: #fff;
  border: none;
  height: auto;
}
a:hover {
  width: 100%;
  display: inline-block;
}
</style>
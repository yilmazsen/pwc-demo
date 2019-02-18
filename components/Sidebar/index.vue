<template>
  

  
  <div  class="navbar">
    
    <hamburger :toggle-click="toggleSideBar"  class="hamburger-container"/>
    <breadcrumb />
      <search class="header-search-select" />
    <el-dropdown class="avatar-container" trigger="click">
    
      <div class="avatar-wrapper">
        <img src="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80" class="user-avatar">
        <i class="el-icon-caret-bottom"/>
      </div>
      <el-dropdown-menu slot="dropdown" class="user-dropdown">
        <router-link class="inlineBlock" to="/">
          <el-dropdown-item>
            Home
          </el-dropdown-item>
        </router-link>
        <el-dropdown-item divided>
          <span style="display:block;" >LogOut</span>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>

</template>
<script>
import Breadcrumb from '@/components/Breadcrumb'
import Hamburger from '@/components/Hamburger'
import Search from '@/components/HeaderSearch'
export default {
  components: {
    Breadcrumb,
    Hamburger,
    Search
  }
}
</script>


<style rel="stylesheet/scss" lang="scss" scoped>
.navbar {
 
  height: 50px;
  line-height: 50px;
  margin-right: -15px;
  box-shadow: 0 1px 3px 0 rgba(0,0,0,.12), 0 0 3px 0 rgba(0,0,0,.04);
  .hamburger-container {
    line-height: 58px;
    height: 50px;
    float: left;
    padding: 0 10px;
  }
  .screenfull {
    position: absolute;
    right: 90px;
    top: 16px;
    color: red;
  }
 
.header-search-select {
    font-size: 18px;
    width: 210px;
    float: right;
    margin-right: 70px;
    overflow: hidden;
    background: transparent;


}

  .avatar-container {
    height: 50px;
    display: inline-block;
    position: absolute;
    right: 10px;
    .avatar-wrapper {
      cursor: pointer;
      margin-top: 5px;
      position: relative;
      line-height: initial;
      .user-avatar {
        width: 40px;
        height: 40px;
        border-radius: 10px;
      }
      .el-icon-caret-bottom {
        position: absolute;
        right: -20px;
        top: 25px;
        font-size: 12px;
      }
    }
  }
}
</style>


<template>
<div class="bg">
<el-form   class="login-form">
<div class="logo"></div>
  <el-form-item class="form-group log-status">
    <el-input v-model="username"  placeholder="Username" auto-complete="on" />
  </el-form-item>
  <el-form-item class="form-group log-status">
    <el-input v-model="password" name="pass" :type="password" placeholder="Password" auto-complete="on" />
  </el-form-item>
 
  <el-form-item >
 <el-select class="form-group log-status SelectionSize" v-model="value" placeholder="Select a user type">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
   </el-form-item>


  <el-form-item>
    <el-button @click="gotoPage()" type="primary" class="log-btn">
      Sign in
    </el-button >
  </el-form-item>


</el-form>



    
   </div>
</template>

<script>
export default
{
  data()
  {
     return {
        username: 'admin',
        password: 'admin',
        options: [{
          value: 'HC',
          label: 'HC Staff'
        }, {
          value: 'IT',
          label: 'IT Staff'
        }],
        value: ''
        
        }
      
  },
  methods:
  {
    gotoPage: function()
    {
       this.$router.push('/Dashboard/'+this.value);
    }
  }
}
</script>

<style lang="css" scoped>
@import url(https://fonts.googleapis.com/css?family=Vibur);
* {
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  font-family: arial;
}
 
h1 {
  color: #ccc;
  text-align: center;
  font-family: 'Vibur', cursive;
  font-size: 50px;
}
.logo
{
    background-image:url('https://www.cepde.net/caches/hyuz/cmVzaW1sZXIvMjAxOC95YW5kZXhfbGF1bmNoZXI=.png');
    background-repeat: no-repeat;
    widows: 100px;
    height: 100px;
    margin-left: 95px;
    margin-bottom: 50px;
}
.login-form {
  width: 350px;
  padding: 40px 30px;
  background: #eee;
  -moz-border-radius: 4px;
  -webkit-border-radius: 4px;
  border-radius: 4px;
  margin: auto;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  -moz-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
}

.form-group {
  position: relative;
  margin-bottom: 15px;
}

.form-control {
  width: 100%;
  height: 50px;
  border: none;
  padding: 5px 7px 5px 15px;
  background: #fff;
  color: #666;
  border: 2px solid #ddd;
  -moz-border-radius: 4px;
  -webkit-border-radius: 4px;
  border-radius: 4px;
}
.form-control:focus, .form-control:focus + .fa {
  border-color: #10CE88;
  color: #10CE88;
}

.form-group .fa {
  position: absolute;
  right: 15px;
  top: 17px;
  color: #999;
}

.log-status.wrong-entry {
  -moz-animation: wrong-log 0.3s;
  -webkit-animation: wrong-log 0.3s;
  animation: wrong-log 0.3s;
}

.log-status.wrong-entry .form-control, .wrong-entry .form-control + .fa {
  border-color: #ed1c24;
  color: #ed1c24;
}

.SelectionSize
{
  width: 100%;
  display: inline-block;
}

.log-btn {
  background: #0AC986;
  display: inline-block;
  width: 100%;
  font-size: 16px;
  height: 50px;
  color: #fff;
  text-decoration: none;
  border: none;
  -moz-border-radius: 4px;
  -webkit-border-radius: 4px;
  border-radius: 4px;
  text-align: center;
}

.link {
  text-decoration: none;
  color:#ffffff;
  font-size: 15px;
  margin-bottom: 15px;
}
.link:hover {
  text-decoration: underline;
  color: #FF9000;
}

.alert {
  display: none;
  font-size: 12px;
  color: #f00;
  float: left;
}

@-moz-keyframes wrong-log {
  0%, 100% {
    left: 0px;
  }
  20% , 60% {
    left: 15px;
  }
  40% , 80% {
    left: -15px;
  }
}
@-webkit-keyframes wrong-log {
  0%, 100% {
    left: 0px;
  }
  20% , 60% {
    left: 15px;
  }
  40% , 80% {
    left: -15px;
  }
}
@keyframes wrong-log {
  0%, 100% {
    left: 0px;
  }
  20% , 60% {
    left: 15px;
  }
  40% , 80% {
    left: -15px;
  }
}

</style>
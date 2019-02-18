<template>
<section class="space">
<el-form    ref="form" :model="sizeForm" label-width="120px" size="mini">
  <el-form-item label="Name Surname">
    <el-input v-model="sizeForm.name"></el-input>
  </el-form-item>
  <el-form-item label="LOS">
    <el-select v-model="sizeForm.los" placeholder="please select los">
      <el-option label="Assurance" value="shanghai"></el-option>
      <el-option label="Advisory" value="beijing"></el-option>
      <el-option label="IFS" value="t"></el-option>
      <el-option label="Advisory" value="h"></el-option>
    </el-select>
  </el-form-item>

    <el-form-item label="Sublos">
    <el-select v-model="sizeForm.sublos" placeholder="please select sublos">
      <el-option label="Finance & Information" value="shanghai"></el-option>
      <el-option label="HC" value="beijing"></el-option>
      <el-option label="Infrastructure" value="t"></el-option>
    
    </el-select>
  </el-form-item>


    <el-form-item label="Bottom Los">
    <el-select v-model="sizeForm.bottomlos" placeholder="please select sublos">
      <el-option label="Financial Reporting" value="shanghai"></el-option>
      <el-option label="Internal Finance" value="beijing"></el-option>
      <el-option label="System Reporting" value="t"></el-option>
    
    </el-select>
  </el-form-item>

   <el-form-item label="Tittle">
      <el-select v-model="sizeForm.titles" placeholder="please select sublos">
      <el-option label="Creative Director" value="shanghai"></el-option>
      <el-option label="Director" value="shanghai"></el-option>
      <el-option label="Senior Manager" value="beijing"></el-option>
      <el-option label="Manager" value="t"></el-option>
      <el-option label="Team Leader" value="t"></el-option>
        <el-option label="Administrative" value="t"></el-option>
              <el-option label="Project Management Office" value="t"></el-option>
      <el-option label="Senior Associate" value="t"></el-option>
      <el-option label="Associate" value="t"></el-option>
      <el-option label="Specialist" value="t"></el-option>
      <el-option label="Intern" value="t"></el-option>

    
    </el-select>
  </el-form-item>


 <el-form-item>
  <el-switch
  @click.native="show = !show"
  v-model="value3"
  active-text="Staff"
  inactive-text="Intern">
</el-switch>
 </el-form-item>
  <el-form-item >
    <el-col :span="11">
      <el-date-picker prefix-icon="el-icon-date" type="date" placeholder="Pick a starting date" v-model="sizeForm.date1" style="width: 100%;">
        
      </el-date-picker>
    </el-col>
    
    <div v-if="show" label="Termination Date">
        <el-col class="line" :span="2"> </el-col>
    <el-col :span="11" >
      <el-date-picker type="date" placeholder="Pick a termination date" v-model="sizeForm.date1" style="width: 100%;">
  
      </el-date-picker>
    </el-col>
    </div>
  </el-form-item>

  <el-form-item  size="large">
    <el-button class="log-btn"  @click="CreatingMessage()" >Create</el-button>
    <el-button class="log-btn-red " @click="CancelingMessage()">Cancel</el-button>
  </el-form-item>
</el-form>




</section>
</template>


<script>
import layout from '@/layouts/index'
  export default {
    layout: 'index',
    data() {
      return {
        value3: true,
        show:false,
        centerDialogVisible: false,
        sizeForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      };
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      },
      CreatingMessage() {
        this.$message({
          message: 'New employee record is created.',
          type: 'success'
        });
      },
      CancelingMessage() {
   
          this.$message.error('New employee record is canceled');
        
      }
    }
  };
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.log-btn {
  background: #0AC986;
  display: inline-block;
  width: 10%;
  font-size: 16px;
  height: 50px;
  color: #fff;
  text-decoration: none;
  border: none;
  -moz-border-radius: 4px;
  -webkit-border-radius: 4px;
  border-radius: 0px;
  text-align: center;
}

.log-btn-red {
  background: #f56c6c;
  display: inline-block;
  width: 10%;
  font-size: 16px;
  height: 50px;
   color: #fff;
  text-decoration: none;
  border: none;
  -moz-border-radius: 4px;
  -webkit-border-radius: 4px;
  border-radius: 0px;
  text-align: center;
}


.space
{
  margin-top: 50px;
  margin-left: 50px;
  margin-right: 10px;
 height: 500px;

    
    font-size: 12px;
    position: relative;
    overflow: hidden;
     color: #666;
    background: #fff;
   
    border-color: rgba(0, 0, 0, .05);

-webkit-box-shadow: -4px 10px 61px 7px rgba(0,0,0,0.20);
-moz-box-shadow: -4px 10px 61px 7px rgba(0,0,0,0.20);
box-shadow: 1px 1px 20px 1px rgba(0,0,0,0.20);
      padding: 16px;
      transition: all 0.38s ease-out;
   
}

</style>

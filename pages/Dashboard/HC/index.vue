<template>


  <section class="imgSize">
    <div >
    <h1 >HC's Dashboard</h1>
    </div>
  

 
    <div>
    <img class="imgMargin" src="https://wpimg.wallstcn.com/0e03b7da-db9e-4819-ba10-9016ddfdaed3" />
    </div>
  </section>


</template>


<script>

import PanelGroup from '@/components/Dashboard/PanelGroup.vue'
import TransactionTable from '@/components/Dashboard/TransactionTable.vue'
export default {
     layout: 'index',
     components: {
    PanelGroup,
    TransactionTable
   
  },
  
    validate(data)
  {

      console.log(data)
      return true;
  }
  
}
</script>


<style rel="stylesheet/scss" lang="scss" scoped>

.imgSize
  {
    
    width: 100%;
     background-color: #e3e3e3;
     height: 912px;
     padding-left: 100px;
     padding-top: 50px;

    
  }
.imgMargin
{
  
  margin-top: 150px;
  margin-left: 25%;
  
}

</style>


<!---  <el-row :gutter="8">
      <el-col :xs="{span: 24}" :sm="{span: 24}" :md="{span: 24}" :lg="{span: 12}" :xl="{span: 12}" style="padding-right:8px;margin-bottom:30px;">
        <transaction-table/>
      </el-col>

      
    </el-row> ---!>
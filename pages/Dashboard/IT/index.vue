<template>
<div class="space">
   <div class="dashboard-editor-container">
    <panel-group />
  </div>
  </div>
</template>





<script>

import PanelGroup from '@/components/Dashboard/PanelGroup.vue'
export default {
     layout: 'index',
     components: {
    PanelGroup
   
  },
  data: function()
  {
    return
    {
      status: 'false'
      
    }
  },
    validate(data)
  {

      console.log(data)
      return true;
  }
  
}
</script>


<style rel="stylesheet/scss" lang="scss" scoped>
.dashboard-editor-container {
  padding: 32px;
  background-color: rgb(240, 242, 245);
  margin-top: 5px;
  .chart-wrapper {
    background: #fff;
    padding: 16px 16px 0;
    margin-bottom: 32px;
  }
  .space
  {
    background-color: aqua;
  }
}
</style>


<!---  <el-row :gutter="8">
      <el-col :xs="{span: 24}" :sm="{span: 24}" :md="{span: 24}" :lg="{span: 12}" :xl="{span: 12}" style="padding-right:8px;margin-bottom:30px;">
        <transaction-table/>
      </el-col>

      
    </el-row> ---!>
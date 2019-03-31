<template>
<div class="space">
   <div class="dashboard-editor-container">
     <transaction-table/>
      
  </div>
  </div>
</template>


<script>

import PanelGroup from '@/components/Dashboard/PanelGroup.vue'
import TransactionTable from '@/components/Dashboard/TransactionTable.vue'
export default {
     layout: 'index',
     components: {
    PanelGroup,
    TransactionTable
   
  }
}
</script>


<style rel="stylesheet/scss" lang="scss" scoped>
.dashboard-editor-container {
  padding: 20px;
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


<!---  ---!>
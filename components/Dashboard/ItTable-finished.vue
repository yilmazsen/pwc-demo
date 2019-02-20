
<template>
<div>
  <el-table
   border
    :data="tableData"
    style="width: 100%"
    v-if="status"
    >

 <el-table-column
    width="50px"
      label="#"
        type="index">
    </el-table-column>

    <el-table-column
    width="100px"
      label="Staff Name"
      prop="staffname">
    </el-table-column>

 <el-table-column
 width="200px"
      label="LOS / Sub Los / Bottom Los"
      prop="los">
    </el-table-column>


 <el-table-column
  width="100px"
      label="Title"
      prop="title">
    </el-table-column>


  <el-table-column
   width="100px"
      label="Location"
      prop="location">
    </el-table-column>

<el-table-column
 width="100px"
      label="Phone Model"
      prop="pmodel">
    </el-table-column>

    <el-table-column
     width="90px"
      label="Computer Model"
      prop="cmodel">
    </el-table-column>





        <el-table-column
         width="100px"
      label="Date"
      prop="date">
    </el-table-column>

    <el-table-column
     width="100px"
      label="Status"
     >
       <el-tag
        
          disable-transitions >{{durum}}</el-tag>
    </el-table-column>

    

 <el-table-column
     width="110px"
      label="Explanation"
      prop="explain">
    </el-table-column>


  </el-table>


  <el-dialog
  title="Delete Operation"
  :visible.sync="dialogVisible"
  width="30%">
  <span><b>Are you sure that you want to delete this record?</b></span>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">Cancel</el-button>
    <el-button  @click="dialogVisible = false">Confirm</el-button>
  </span>
</el-dialog>
</div>
</template>

<script>
import CountTo from 'vue-count-to'
export default {

   props: ['status'],
  data() {
       

      const item = {
       
        los: 'IFS / GTS / IT Support',
        staffname: 'Yilmaz SEN',
        title: 'IT Specialist',
        location:'Beşiktaş',
         date: '2019-02-16',
         cmodel: 'T460',
         pmodel: 'iphone 8',
         status: 'success',
        
         explain: 'Teslim Edildi'
      };
      return {
        tableData: Array(10).fill(item),
          search: '',
          dialogVisible: false,
        
           durum: 'Completed'
      }
 
    },
  components: {
    CountTo
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

.test
{
  
  height: 64px;
  width: 64px;
}


.panel-group {
  margin-top: 18px;
  .card-panel-col{
    margin-bottom: 32px;
  }
  .card-panel {
    height: 108px;
    cursor: pointer;
    font-size: 12px;
    position: relative;
    overflow: hidden;
    color: #666;
    background: #fff;
    box-shadow: 4px 4px 40px rgba(0, 0, 0, .05);
    border-color: rgba(0, 0, 0, .05);

      .card-panel-icon-wrapper {
        color: #fff;
      }
      
      .icon-message {
        background: #36a3f7;
      }
      .icon-money {
        background: #f4516c;
      }
      .icon-shopping {
        background: #34bfa3
      }
    }
   
    .icon-message {
      color: #36a3f7;
    }
    .icon-money {
      color: #f4516c;
    }
    .icon-shopping {
      color: #34bfa3
    }
    .card-panel-icon-wrapper {
      float: left;
      margin: 14px 0 0 14px;
      padding: 16px;
      transition: all 0.38s ease-out;
      border-radius: 6px;
    }
    .card-panel-icon {
      float: left;
      font-size: 48px;
    }
    .card-panel-description {
      float: right;
      font-weight: bold;
      margin: 26px;
      margin-left: 0px;
      .card-panel-text {
        line-height: 18px;
        color: rgba(0, 0, 0, 0.45);
        font-size: 16px;
        margin-bottom: 12px;
      }
      .card-panel-num {
        font-size: 20px;
      }
    }
  }

</style>

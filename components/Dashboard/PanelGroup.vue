<template>
  <div  style="width: 100%">
  <el-row :gutter="40" class="panel-group">
    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      
      <div class="card-panel" @click="status = !status , statusI=false,statusF=false,statusD=false ">
        <div class="card-panel-icon-wrapper icon-people">
          <div  class="test" >
           <img src="@/assets/img/icons8-search-property-64.png" alt="">
          </div> 
        </div>
        <div class="card-panel-description"  >
          <div class="card-panel-text" >Hazırlanması Gerekenler</div>
          <count-to :start-val="0" :end-val="500" :duration="3000" class="card-panel-num"/>
        </div>
      </div>
    </el-col>

    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col" >
      <div class="card-panel" @click="statusI = !statusI,status=false,statusF=false,statusD=false " >
        <div class="card-panel-icon-wrapper">
            <img src="@/assets/img/icons8-workspace-64.png" alt="">
        </div>


        <div class="card-panel-description"  >
          <div class="card-panel-text">Kurulumda Olanlar </div>
          <count-to :start-val="0" :end-val="500" :duration="3000" class="card-panel-num"/>
        </div>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel" @click="statusD = !statusD,statusI=false,statusF=false,status=false">
        <div class="card-panel-icon-wrapper " >
          <img src="@/assets/img/icons8-password-64.png" alt=""/>
        </div>
        <div class="card-panel-description"  >
          <div class="card-panel-text">Teslim Edilmesi Beklenenler</div>
          <count-to :start-val="0" :end-val="500" :duration="3200" class="card-panel-num"/>
        </div>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel" @click="statusF = !statusF,statusI=false,status=false,statusD=false">
        <div class="card-panel-icon-wrapper">
         
          <img src="@/assets/img/icons8-job-seeker-64.png" alt=""/>
         
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">Toplam Teslim Edilmiş</div>
          <count-to :start-val="0" :end-val="500" :duration="3600" class="card-panel-num"/>
        </div>
      </div>
    </el-col>
  </el-row>


<TransactionTable :status='status'/>

<TransactionTableD :status='statusD' />

<TransactionTableF :status='statusF'/>

<TransactionTableI :status='statusI'/>

</div>

</template>
<script>
import CountTo from 'vue-count-to'
import TransactionTable from '@/components/Dashboard/ItTable.vue'
import TransactionTableI from '@/components/Dashboard/ItTable-installation.vue'
import TransactionTableF from '@/components/Dashboard/ItTable-finished.vue'
import TransactionTableD from '@/components/Dashboard/ItTable-delivering.vue'
export default {
  data() {
       

      const item = {
       
        los: 'IFS / GTS / IT Support',
        staffname: 'Yilmaz SEN',
        title: 'IT Specialist',
        location:'Beşiktaş',
         date: '2019-02-16',
         cmodel: 'T460',
         pmodel: 'iphone 8',
         explain: 'Kurulum Başlamadı...'
      };
      return {
        tableData: Array(10).fill(item),
          search: '',
          dialogVisible: false,
          status:'true',
          statusI:'true',
          statusD:'true',
          statusF:'true',
           durum: 'not started'
      }
 
    },
  components: {
    CountTo,
    TransactionTable,
    TransactionTableI,
    TransactionTableD,
    TransactionTableF
  },
  methods: {
    handleSetLineChartData(type) {
      this.$emit('handleSetLineChartData', type)
    }
    
 
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
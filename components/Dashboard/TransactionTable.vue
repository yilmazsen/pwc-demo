<template>
<div>
  <el-table

   border
   
    :data="tableData"
    style="width: 100%">

 <el-table-column
      label="#"
        type="index">
    </el-table-column>

    <el-table-column
      label="Staff Name"
      prop="staffname">
    </el-table-column>

 <el-table-column
      label="LOS"
      prop="los">
    </el-table-column>

 <el-table-column
      label="Sub LOS"
      prop="sublos">
    </el-table-column>
 
 <el-table-column
      label="Bottom LOS"
      prop="ssublos">
    </el-table-column>
 <el-table-column
      label="Title"
      prop="title">
    </el-table-column>


  <el-table-column
      label="Location"
      prop="location">
    </el-table-column>
        <el-table-column
      label="Date"
      prop="date">
    </el-table-column>


    
    <el-table-column
      align="right">
      <template slot="header" slot-scope="scope">
        <el-input
          v-model="search"
          size="mini"
          placeholder="Type to search"/>
      </template>
      <template slot-scope="scope">
        <el-button
          size="mini"
            type="primary"
           icon="el-icon-edit" >Edit</el-button>
        <el-button
          size="mini"
          type="danger"
         @click="dialogVisible = true" icon="el-icon-delete">Delete</el-button>
      </template>
    </el-table-column>
  </el-table>


  <el-dialog
  title="Delete Operation"
  :visible.sync="dialogVisible"
  width="30%"
  :before-close="handleClose">
  <span><b>Are you sure that you want to delete this record?</b></span>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">Cancel</el-button>
    <el-button type="success" @click="dialogVisible = false">Confirm</el-button>
  </span>
</el-dialog>

</div>

</template>

<script>
  export default {
    data() {
       

      const item = {
       
        los: 'IFS',
        sublos: 'IT',
        ssublos: 'Support',
        staffname: 'Yilmaz SEN',
        title: 'IT Specialist',
        location:'Beşiktaş',
         date: '2019-02-16'
      };
      return {
        tableData: Array(20).fill(item),
          search: '',
          dialogVisible: false
      }
 
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
      handleClose(done) {
        this.$confirm('Are you sure to close this dialog?')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      }
    },
  }
</script>


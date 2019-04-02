<template>
  <div>
    <el-table border :data="facts" style="width: 100%" v-loading="loading">
      <el-table-column label="#" type="index"></el-table-column>

      <el-table-column label="Staff Name" prop="name" width="100px"></el-table-column>

      <el-table-column label="LOS" prop="los" width="100px"></el-table-column>

      <el-table-column label="Sub LOS" prop="sublos" width="130px"></el-table-column>

      <el-table-column label="Bottom LOS" prop="bottomlos"></el-table-column>
      <el-table-column label="Title" prop="titles"></el-table-column>

      <el-table-column label="Location" prop="location" width="75px"></el-table-column>
      <el-table-column label="Date" prop="date1" width="99px"></el-table-column>

      <el-table-column align="right">
        <template slot="header">
          <el-input size="mini" placeholder="Type to search"/>
        </template>

        <template slot-scope="scope">
          <el-button size="mini" type="primary" icon="el-icon-edit">Edit</el-button>
          <el-button
            size="mini"
            type="danger"
            @click.native.prevent="deleteRow(scope.$index,facts)"
            icon="el-icon-delete"
          >Delete</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog title="Delete Operation" :visible.sync="dialogVisible" width="30%">
      <span>
        <b>Are you sure that you want to delete this record?</b>
      </span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="success" @click="dialogVisible = false">Confirm</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      loading: true,
      items: [],
      facts: [],
      search: "",
      dialogVisible: false
      //   tableData: Array().fill(facts),
      //     search: '',
      //     dialogVisible: false
    };
  },

  async created() {
    await axios
      .get("https://pwcdemo-1c4d3.firebaseio.com/users.json")
      .then(response => {
        (this.loading = false), (this.facts = Object.values(response.data));
      });
  },
  methods: {
    handleClose(done) {
      this.$confirm("Are you sure to close this dialog?")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    deleteRow(index, facts) {
      facts.splice(index, 1);
    }
  }
};
</script>


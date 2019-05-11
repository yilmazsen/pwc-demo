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
      <el-table-column label="Date" prop="Hire_Date" width="99px"></el-table-column>

      <el-table-column align="right">
        <template slot="header">
          <el-input size="mini" placeholder="Type to search"/>
        </template>

        <template slot-scope="scope">
          <el-button
            size="mini"
            type="primary"
            @click="dialogVisible = true;fetchDataFromTable(scope.$index,scope.row.id)"
            icon="el-icon-edit"
          >Edit</el-button>

          <el-button
            size="mini"
            type="danger"
            @click.native.prevent="deleteRow(scope.$index,scope.row.id)"
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

    <el-dialog title="Editing Operation" :visible.sync="dialogVisible" width="50%">
      <el-form :model="sizeFormT" ref="sizeFormT" label-width="120px" size="mini" :rules="rules">
        <el-form-item label="Name Surname" prop="name" required>
          <el-input v-model="sizeFormT.name"></el-input>
        </el-form-item>

        <el-form-item label="LOS" prop="los" required>
          <el-select v-model="sizeFormT.los" placeholder="please select los">
            <el-option label="Assurance" value="Assurance"></el-option>
            <el-option label="Advisory" value="Advisory"></el-option>
            <el-option label="IFS" value="IFS"></el-option>
            <el-option label="Advisory" value="Advisory"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="Sublos" prop="sublos" required>
          <el-select v-model="sizeFormT.sublos" placeholder="please select sublos">
            <el-option label="Finance & Information" value="Finance & Information"></el-option>
            <el-option label="HC" value="HC"></el-option>
            <el-option label="Infrastructure" value="Infrastructure"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="Bottom Los" prop="bottomlos" required>
          <el-select v-model="sizeFormT.bottomlos" placeholder="please select sublos">
            <el-option label="Financial Reporting" value="Financial Reporting"></el-option>
            <el-option label="Internal Finance" value="Internal Finance"></el-option>
            <el-option label="System Reporting" value="System Reporting"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="Category" prop="category" required>
          <el-select v-model="sizeFormT.category" placeholder="please select category">
            <el-option label="CSS" value="CSS"></el-option>
            <el-option label="PSS" value="PSS"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="Location" prop="location" required>
          <el-select v-model="sizeFormT.location" placeholder="please select location">
            <el-option label="BJK" value="BJK"></el-option>
            <el-option label="MAYA" value="MAYA"></el-option>
            <el-option label="ZMIR" value="IZMIR"></el-option>
            <el-option label="ANKARA" value="ANKARA"></el-option>
            <el-option label="BURSA" value="BURSA"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="Tittle" prop="titles" required>
          <el-select v-model="sizeFormT.titles" placeholder="please select sublos">
            <el-option label="Creative Director" value="Creative Director"></el-option>
            <el-option label="Director" value="Director"></el-option>
            <el-option label="Senior Manager" value="Senior Manager"></el-option>
            <el-option label="Manager" value="Manager"></el-option>
            <el-option label="Team Leader" value="Team Leader"></el-option>
            <el-option label="Administrative" value="Administrative"></el-option>
            <el-option label="Project Management Office" value="Project Management Office"></el-option>
            <el-option label="Senior Associate" value="Senior Associate"></el-option>
            <el-option label="Associate" value="Associate"></el-option>
            <el-option label="Specialist" value="Specialist"></el-option>
            <el-option label="Intern" value="Intern"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item prop="status" required>
          <el-switch
            @click.native="show = !show"
            v-model="sizeFormT.status"
            active-text="Intern"
            inactive-text="Staff"
          ></el-switch>
        </el-form-item>
        <el-form-item prop="Hire_Date">
          <el-col :span="11">
            <el-date-picker
              prefix-icon="el-icon-date"
              type="date"
              placeholder="Pick a starting date"
              v-model="sizeFormT.Hire_Date"
              style="width: 100%;"
            ></el-date-picker>
          </el-col>

          <div v-if="show" prop="Expire_Date" label="Termination Date">
            <el-col class="line" :span="2"></el-col>
            <el-col :span="11">
              <el-date-picker
                type="date"
                placeholder="Pick a termination date"
                v-model="sizeFormT.Expire_Date"
                style="width: 100%;"
              ></el-date-picker>
            </el-col>
          </div>
        </el-form-item>
      </el-form>

      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="success" @click="UpdateForm()">Update</el-button>
      </span>
    </el-dialog>
  </div>
</template>









<script>
import axios from "axios";
import _ from "lodash";
import { error } from "util";

export default {
  data() {
    return {
      loading: true,
      items: [],
      facts: [],
      search: "",
      dialogVisible: false,
      status: true,
      show: false,
      jsonID: "",
      Index: "",
      centerDialogVisible: false,
      sizeForm: this.post
        ? { ...this.post }
        : {
            name: "",
            los: "",
            sublos: "",
            bottomlos: "",
            category: "",
            status: "not started",
            process_status: "not started",
             process_status_short: "not started",
            titles: "",
            location: "",
            Hire_Date: "",
            Expire_Date: "false",
            info: "",
            phoneModel: "",
            computerModel: ""
          },
      sizeFormT: this.post
        ? { ...this.post }
        : {
            name: "",
            los: "",
            sublos: "",
            bottomlos: "",
            category: "",
            status: "false",
            process_status: "not started",
             process_status_short: "not started",
            titles: "",
            location: "",
            Hire_Date: "",
            Expire_Date: "false",
            info: ""
          },
      rules: {
        name: [
          {
            required: true,
            message: "Employee name and surname must not be empty.",
            trigger: "blur"
          }
          // { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' }
        ],
        los: [
          {
            required: true,
            message: "Please select activity resource",
            trigger: "change"
          }
        ],
        bottomlos: [
          {
            required: true,
            message: "Please select activity resource",
            trigger: "change"
          }
        ],
        titles: [
          {
            required: true,
            message: "Please select activity resource",
            trigger: "change"
          }
        ],
        location: [
          {
            required: true,
            message: "Please select location",
            trigger: "change"
          }
        ],

        category: [
          {
            required: true,
            message: "Please select category",
            trigger: "change"
          }
        ]
      }
      //   tableData: Array().fill(facts),
      //     search: '',
      //     dialogVisible: false
    };
  },

  async created() {
    await axios
      .get("https://pwcdemo-1c4d3.firebaseio.com/users.json")
      .then(response => {
        const postArray = [];
        for (const key in response.data) {
          postArray.push({ ...response.data[key], id: key });
        }
        (this.loading = false), (this.facts = postArray);
        console.log(this.facts);

        // console.log(this.facts[0]);
      });
  },
  methods: {
    fetchDataFromTable(index, factID) {
      this.sizeFormT = this.facts[index];
      //    this.sizeFormT = this.sizeForm;
      this.jsonID = this.facts[index].id;
    },
    UpdateForm() {
      this.$refs.sizeFormT.validate(valid => {
        if (valid) {
          axios
            .put(
              "https://pwcdemo-1c4d3.firebaseio.com/users/" +
                this.jsonID +
                ".json",
              this.sizeFormT
            )
            .then(response => {
              this.$message({
                message: "Congrats, This user has been updated.",
                type: "success"
              });
              this.dialogVisible = false;
            })
            .catch(error => {
              this.$message({
                message: error,
                type: "error"
              });
            });
        }
      });
    },
    handleClose(done) {
      this.$confirm("Are you sure to close this dialog?")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    deleteRow(index, factID) {
      console.log("index: ", factID);
      axios
        .delete(
          "https://pwcdemo-1c4d3.firebaseio.com/users/" + factID + ".json"
        )
        .then(response => {
          this.facts.splice(index, 1);
          this.$message({
            message: "Congrats, This user has been deleted.",
            type: "success"
          });
        })
        .catch(error => {
          this.$message({
            message: error,
            type: "error"
          });
        });
    }
  }
};
</script>


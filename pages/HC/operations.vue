<template>
  <section class="space">
    <el-form :model="sizeForm" ref="sizeForm" label-width="120px" size="mini" :rules="rules">
      <el-form-item label="Name Surname" prop="name" required>
        <el-input v-model="sizeForm.name"></el-input>
      </el-form-item>

      <el-form-item label="LOS" prop="los" required>
        <el-select v-model="sizeForm.los" placeholder="please select los">
          <el-option label="Assurance" value="Assurance"></el-option>
          <el-option label="Advisory" value="Advisory"></el-option>
          <el-option label="IFS" value="IFS"></el-option>
          <el-option label="Advisory" value="Advisory"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="Sublos" prop="sublos" required>
        <el-select v-model="sizeForm.sublos" placeholder="please select sublos">
          <el-option label="Finance & Information" value="Finance & Information"></el-option>
          <el-option label="HC" value="HC"></el-option>
          <el-option label="Infrastructure" value="Infrastructure"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="Bottom Los" prop="bottomlos" required>
        <el-select v-model="sizeForm.bottomlos" placeholder="please select sublos">
          <el-option label="Financial Reporting" value="Financial Reporting"></el-option>
          <el-option label="Internal Finance" value="Internal Finance"></el-option>
          <el-option label="System Reporting" value="System Reporting"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="Category" prop="category" required>
        <el-select v-model="sizeForm.category" placeholder="please select category">
          <el-option label="CSS" value="CSS"></el-option>
          <el-option label="PSS" value="PSS"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="Location" prop="location" required>
        <el-select v-model="sizeForm.location" placeholder="please select location">
          <el-option label="BJK" value="BJK"></el-option>
          <el-option label="MAYA" value="MAYA"></el-option>
          <el-option label="ZMIR" value="IZMIR"></el-option>
          <el-option label="ANKARA" value="ANKARA"></el-option>
          <el-option label="BURSA" value="BURSA"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="Tittle" prop="titles" required>
        <el-select v-model="sizeForm.titles" placeholder="please select sublos">
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

      <el-form-item prop="status">
        <el-switch
          @click.native="show = !show"
          v-model="sizeForm.status"
          active-text="Intern"
          inactive-text="Staff"
        ></el-switch>
      </el-form-item>
      <el-form-item prop="Hire_Date" required>
        <el-col :span="11">
          <el-date-picker
            prefix-icon="el-icon-date"
            type="date"
            placeholder="Pick a starting date"
            v-model="sizeForm.Hire_Date"
            style="width: 100%;"
          ></el-date-picker>
        </el-col>

        <div v-if="show" prop="Expire_Date" label="Termination Date">
          <el-col class="line" :span="2"></el-col>
          <el-col :span="11">
            <el-date-picker
              type="date"
              placeholder="Pick a termination date"
              v-model="sizeForm.Expire_Date"
              style="width: 100%;"
            ></el-date-picker>
          </el-col>
        </div>
      </el-form-item>

      <el-form-item size="large">
        <el-button class="log-btn" @click="submitForm('sizeForm')">Create</el-button>
        <el-button class="log-btn-red" @click="$refs['sizeForm'].resetFields()">Cancel</el-button>
      </el-form-item>
    </el-form>
  </section>
</template>
<script>
import axios from "axios";

export default {
  layout: "index",
  data() {
    return {
      status: true,
      show: false,
      centerDialogVisible: false,
      sizeForm: this.post
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
            info: "",
            phoneModel: "",
            computerModel: ""
          },
      rules: {
        name: [
          {
            required: true,
            message: "Please input Employee name and surname",
            trigger: "blur"
          }
          // { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' }
        ],
        Hire_Date: [
          {
            type: "date",
            required: true,
            message: "Please pick a date",
            trigger: "change"
          }
        ],
        Expire_Date: [
          {
            type: "date",
            required: true,
            message: "Please pick a time",
            trigger: "change"
          }
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
    };
  },
  methods: {
    selectDevicesModel() {
      if (this.sizeForm.category === "CSS") {
        switch (this.sizeForm.titles) {
          case "Intern":
            this.sizeForm.phoneModel = "NO";
            this.sizeForm.computerModel = "T430";
            break;
          case "Specialist":
            this.sizeForm.phoneModel = "Iphone 6";
            this.sizeForm.computerModel = "T450";
            break;
          case "Associate":
            this.sizeForm.phoneModel = "Iphone 6";
            this.sizeForm.computerModel = "T450";
            break;
          case "Senior Associate":
            this.sizeForm.phoneModel = "Iphone 8";
            this.sizeForm.computerModel = "T450";
            break;
          case "Administrative":
            this.sizeForm.phoneModel = "NO";
            this.sizeForm.computerModel = "T450";
            break;
          case "Manager":
            this.sizeForm.phoneModel = "Iphone 8";
            this.sizeForm.computerModel = "T450";
            break;
          case "Senior Manager":
            this.sizeForm.phoneModel = "Iphone 8";
            this.sizeForm.computerModel = "T450";
            break;
          case "Director":
            this.sizeForm.phoneModel = "Iphone 8";
            this.sizeForm.computerModel = "T470";
            break;
          case "Creative Director":
            this.sizeForm.phoneModel = "Iphone 8";
            this.sizeForm.computerModel = "T470";
            break;
        }
      } else {
        switch (this.sizeForm.titles) {
          case "Intern":
            this.sizeForm.phoneModel = "NO";
            this.sizeForm.computerModel = "T430";
            break;
          case "Specialist":
            this.sizeForm.phoneModel = "No";
            this.sizeForm.computerModel = "T450";
            break;
          case "Executive Secretary":
            this.sizeForm.phoneModel = "No";
            this.sizeForm.computerModel = "T450";
            break;
          case "Senior Associate":
            this.sizeForm.phoneModel = "Iphone 8";
            this.sizeForm.computerModel = "T450";
            break;
          case "Administrative":
            this.sizeForm.phoneModel = "NO";
            this.sizeForm.computerModel = "T450";
            break;
          case "Manager":
            this.sizeForm.phoneModel = "Iphone 8";
            this.sizeForm.computerModel = "T450";
            break;
          case "Senior Manager":
            this.sizeForm.phoneModel = "Iphone 8";
            this.sizeForm.computerModel = "T450";
            break;
          case "Director":
            this.sizeForm.phoneModel = "Iphone 8";
            this.sizeForm.computerModel = "T470";
            break;
          case "Creative Director":
            this.sizeForm.phoneModel = "Iphone 8";
            this.sizeForm.computerModel = "T470";
            break;
        }
      }
    },
    submitForm(formName) {
      this.selectDevicesModel();
      this.$refs[formName].validate(valid => {
        if (valid) {
          axios
            .post(
              "https://pwcdemo-1c4d3.firebaseio.com/users.json",
              this.sizeForm
            )
            .then(response =>
              this.$message({
                message: "Congrats, This user has been added.",
                type: "success"
              })
            )
            .then(response => this.$refs["sizeForm"].resetFields());
        }
      });
    }
  }
};
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.log-btn {
  background: #0ac986;
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

.space {
  margin-top: 50px;
  margin-left: 50px;
  margin-right: 10px;
  height: 500px;

  font-size: 12px;
  position: relative;
  overflow: hidden;
  color: #666;
  background: #fff;

  border-color: rgba(0, 0, 0, 0.05);

  -webkit-box-shadow: -4px 10px 61px 7px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: -4px 10px 61px 7px rgba(0, 0, 0, 0.2);
  box-shadow: 1px 1px 20px 1px rgba(0, 0, 0, 0.2);
  padding: 16px;
  transition: all 0.38s ease-out;
}
</style>

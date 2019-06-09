
<template>
  <div>
    <el-table border :data="facts" v-if="status" :max-height="1000" style="width: 100%">
      <el-table-column align="center" label="#" type="index"></el-table-column>
      <el-table-column
        width="150"
        style="height: 20%"
        align="center"
        label="Staff Name"
        prop="name"
      ></el-table-column>
      <el-table-column width="200" align="center" label="Los" prop="los"></el-table-column>
      <el-table-column width="100" align="center" label="Title" prop="titles"></el-table-column>
      <el-table-column width="100" align="center" label="Location" prop="location"></el-table-column>
      <el-table-column sortable width="150" align="center" label="Phone Model" prop="phoneModel"></el-table-column>
      <el-table-column
        sortable
        width="200"
        align="center"
        label="Computer Model"
        prop="computerModel"
      ></el-table-column>
      <el-table-column width="100" align="center" label="Date" prop="hireDate"></el-table-column>
      <el-table-column width="150" align="center" label="Status" prop="procesStatuShort">
        <el-tag disable-transitions>{{sizeFormT.procesStatuShort}}</el-tag>
      </el-table-column>

      <el-table-column style="height: 20%" align="center">
        <template slot="header">
          <el-input v-model="search" size="mini" placeholder="Type to search"/>
        </template>

        <template slot-scope="scope" style="width: 50% height:20%">
          <el-button
            size="mini"
            type="success"
            @click="fetchingFunction(scope)"
            icon="el-icon-edit"
          >Edit</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog title="Editing Operation" :visible.sync="dialogVisible" width="50%">
      <el-form :model="sizeFormT" ref="sizeFormT" label-width="150px" size="mini" :rules="rules">
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

        <el-form-item label="Phone Model" prop="phoneModel" required>
          <el-select v-model="sizeFormT.phoneModel" placeholder="please select phone model">
            <el-option label="Iphone 5" value="Iphone 5"></el-option>
            <el-option label="Iphone 6" value="Iphone 6"></el-option>
            <el-option label="Iphone 6s" value="Iphone 6s"></el-option>
            <el-option label="Iphone 7" value="Iphone 7"></el-option>
            <el-option label="Iphone 8" value="Iphone 8"></el-option>
            <el-option label="Iphone 8 plus" value="Iphone 8 plus"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="Computer Model" prop="computerModel" required>
          <el-select v-model="sizeFormT.computerModel" placeholder="please select computer model">
            <el-option label="T430" value="T430"></el-option>
            <el-option label="T450" value="T450"></el-option>
            <el-option label="T460" value="T460"></el-option>
            <el-option label="T470s" value="T470s"></el-option>
            <el-option label="T480" value="T480"></el-option>
            <el-option label="x260" value="x260"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="Type Of Report" prop="procesStatus" required>
          <el-select v-model="sizeFormT.procesStatus" placeholder="please select report">
            <el-option
              label=" Bilgisayar Kurulumunun Tamamlanması Bekleniliyor. "
              value=" Bilgisayar Kurulumunun Tamamlanması Bekleniliyor. "
            ></el-option>
            <el-option
              label=" Bilgisayar'in sertifikalarının alınması beklenilmektedir. "
              value=" Bilgisayar'in sertifikalarının alınması beklenilmektedir. "
            ></el-option>
            <el-option
              label=" Kullanıcının lotus hesabının oluşturulması beklenilmektedir. "
              value=" Kullanıcının lotus hesabının oluşturulması beklenilmektedir. "
            ></el-option>
            <el-option
              label=" Kullanıcının windows hesabının oluşturulması beklenilmektedir. "
              value="Kullanıcının windows hesabının oluşturulması beklenilmektedir. "
            ></el-option>
            <el-option
              label=" Kullanıcının guid mail'nin gelmesi beklenilmektedir.  "
              value=" Kullanıcının guid mail'nin gelmesi beklenilmektedir.  "
            ></el-option>
            <el-option
              label=" Bilgisayarın kurulumu yapılırken hata oluştu. Tekrar başlatıldı. "
              value=" Bilgisayarın kurulumu yapılırken hata oluştu. Tekrar başlatıldı. "
            ></el-option>
            <el-option
              label=" Bilgisayar Hazırlandı. Teslim Edilmesi Beklenilmektedir. "
              value=" Bilgisayar Hazırlandı. Teslim Edilmesi Beklenilmektedir. "
            ></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="Type Of Report" prop="procesStatuShort" required>
          <el-select v-model="sizeFormT.procesStatuShort" placeholder="please select report">
            <el-option label="Working progress" value="Working progress"></el-option>
            <el-option label="Ready" value="Ready"></el-option>
            <el-option label="not started" value="not started"></el-option>
          </el-select>
        </el-form-item>
      </el-form>

      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="success" @click="updateForm()">Update</el-button>
      </span>
    </el-dialog>
  </div>
</template>







<script>
import CountTo from "vue-count-to";
import axios from "axios";
import _ from "lodash";
import { error } from "util";
export default {
  props: ["LOS"],
  data() {
    return {
      link: "https://pwcdemo-1c4d3.firebaseio.com/users/",
      fileType: ".json",
      loading: true,
      items: [],
      facts: [],
      dialogVisible: false,
      status: true,
      show: true,
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
            procesStatus: "not started",
            procesStatuShort: "not started",
            titles: "",
            location: "",
            hireDate: "",
            expireDate: "false",
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
            status: "not started",
            procesStatus: "not started",
            procesStatuShort: "not started",
            titles: "",
            location: "",
            hireDate: "",
            expireDate: "false",
            info: "",
            phoneModel: "",
            computerModel: ""
          },
      rules: {
        name: [
          {
            required: true,
            message: "Employee name and surname must not be empty.",
            trigger: "blur"
          }
        ],
        los: [
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
        phoneModel: [
          {
            required: true,
            message: "Please select phone model",
            trigger: "change"
          }
        ],
        computerModel: [
          {
            required: true,
            message: "Please select computer model",
            trigger: "change"
          }
        ]
      },

      search: "",
      dialogVisible: false,
      fullLink: "https://pwcdemo-1c4d3.firebaseio.com/users.json",
      durum: "not started"
    };
  },
  async created() {
    await axios.get(`${this.fullLink}`).then(response => {
      const postArray = [];
      for (const key in response.data) {
        postArray.push({ ...response.data[key], id: key });
      }
      this.loading = false;
      this.facts = postArray;
    });
  },
  methods: {
    fetchDataFromTable(index, factID) {
      this.sizeFormT = this.facts[index];
      this.jsonID = this.facts[index].id;
    },
    processOne() {
      this.dialogVisible = true;
      fetchDataFromTable(scope.$index, scope.row.id);
    },
    fetchingData() {
      return facts.filter(
        data =>
          !search || data.name.toLowerCase().includes(search.toLowerCase())
      );
    },
    fetchingFunction(scope) {
      dialogVisible = true;
      fetchDataFromTable(scope.$index, scope.row.id);
    },
    updateForm() {
      this.$refs.sizeFormT.validate(valid => {
        if (valid) {
          axios
            .put(
              `${this.link}` + this.jsonID + `${this.fileType}`,
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
    }
  },
  components: {
    CountTo
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.test {
  height: 64px;
  width: 64px;
}

.panel-group {
  margin-top: 18px;
  .card-panel-col {
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
    box-shadow: 4px 4px 40px rgba(0, 0, 0, 0.05);
    border-color: rgba(0, 0, 0, 0.05);

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
      background: #34bfa3;
    }
  }

  .icon-message {
    color: #36a3f7;
  }
  .icon-money {
    color: #f4516c;
  }
  .icon-shopping {
    color: #34bfa3;
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

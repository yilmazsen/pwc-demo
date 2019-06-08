
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

      <el-table-column style="height: 20%" align="left">
        <template slot="header">
          <el-input v-model="search" size="mini" placeholder="Type to search"/>
        </template>

        <template style="width: 50% height:20%">
          <el-tooltip type="info" plain class="item" effect="dark" content="name" placement="right">
            <el-button>Info</el-button>
          </el-tooltip>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>







<script>
import countTo from "vue-count-to";
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
      jsonId: "",
      index: "",
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

      dialogVisible: false,
      fullLink: "https://pwcdemo-1c4d3.firebaseio.com/users.json",
      mainStatus: "not started"
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
    fetchDataFromTable(index, factId) {
      this.sizeFormT = this.facts[index];
      this.jsonId = this.facts[index].id;
    },
    fetchingData() {
      facts.filter(
        data =>
          !search || data.name.toLowerCase().includes(search.toLowerCase())
      );
    }
  },
  components: {
    countTo
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

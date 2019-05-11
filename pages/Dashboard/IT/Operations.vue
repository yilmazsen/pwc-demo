
<template>
  <div>
    <el-table border :data="facts" style="width: 100%" v-if="status">
      <el-table-column width="50px" label="#" type="index"></el-table-column>

      <el-table-column width="100px" label="Staff Name" prop="name"></el-table-column>

      <el-table-column width="200px" label="LOS / Sub Los / Bottom Los" prop="LOS"></el-table-column>x
      <el-table-column width="100px" label="Title" prop="titles"></el-table-column>

      <el-table-column width="100px" label="Location" prop="location"></el-table-column>

      <el-table-column width="100px" label="Phone Model" prop="bottomlos"></el-table-column>

      <el-table-column width="150px" label="Computer Model" prop="sublos"></el-table-column>

      <el-table-column width="100px" label="Date" prop="Hire_Date"></el-table-column>

      <el-table-column width="100px" label="Status">
        <el-tag disable-transitions>{{durum}}</el-tag>
      </el-table-column>

      <el-table-column width="200px" label="Explanation" prop="info">
        <el-select placeholder="please select explaination">
          <el-option
            label="Sertifika Alınması Bekleniliyor"
            value="Sertifika Alınması Bekleniliyor"
          ></el-option>
          <el-option
            label="Lotus ve Windows Kullanıcı Hesaplarının Oluşturulması Bekleniliyor"
            value="Director"
          ></el-option>
          <el-option
            label="Bilgisayar Kurulum Aşamasında Hataya Düşmüştür. Tekrardan İşlem Başlatılmıştır"
            value="Bilgisayar Kurulum Aşamasında Hataya Düşmüştür. Tekrardan İşlem Başlatılmıştır"
          ></el-option>
          <el-option label="Çantalanması Beklenilmektedir." value="Çantalanması Beklenilmektedir."></el-option>
          <el-option
            label="Bilgisayar Temin Edilmesi Beklenilmektedir."
            value="Bilgisayar Temin Edilmesi Beklenilmektedir."
          ></el-option>
        </el-select>
      </el-table-column>
    </el-table>
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
      loading: true,
      items: [],
      facts: [],
      search: "",
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
            process_status: "not started",
            titles: "",
            location: "",
            Hire_Date: "",
            Expire_Date: "false"
          },
      search: "",
      dialogVisible: false,

      durum: "not started"
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
    fetchData() {}
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

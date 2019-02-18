<template>
 <el-autocomplete suffix-icon="el-icon-search" :fetch-suggestions="querySearch"  @select="handleSelect" v-model="search" placeholder="Search">
 </el-autocomplete>
</template>

<script>
  export default {
    data() {
      return {
        links: [],
        search: ''
      };
    },
    methods: {
      querySearch(queryString, cb) {
        var links = this.links;
        var results = queryString ? links.filter(this.createFilter(queryString)) : links;
        cb(results);
      },
      createFilter(queryString) {
        return (link) => {
          return (link.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },
      loadAll() {
        return [
          { "value": "Yilmaz" },
          { "value": "Lenovo" },
          { "value": "T450" },
          { "value": "Iphone 8" }
          
         ];
      },
      handleSelect(item) {
        console.log(item);
      },
      handleIconClick(ev) {
        console.log(ev);
      }
    },
    mounted() {
      this.links = this.loadAll();
    }
  }
</script>

<template>
  <div class="app-container">
    <div class="filter-container">
      <el-input placeholder="burada"  style="width: 200px;" class="filter-item" />
      <el-select   clearable style="width: 90px" class="filter-item">
        <el-option  />
      </el-select>
      <el-select  placeholder="ara" clearable class="filter-item" style="width: 130px">
        <el-option />
      </el-select>
      <el-select style="width: 140px" class="filter-item" >
        <el-option />
      </el-select>
      <el-button  class="filter-item" type="primary" icon="el-icon-search" >tek</el-button>
      <el-button class="filter-item" style="margin-left: 10px;" type="primary" icon="el-icon-edit" @click="handleCreate">test</el-button>
      <el-button  class="filter-item" type="primary" icon="el-icon-download" >expoer</el-button>
      <el-checkbox v-model="showReviewer" class="filter-item" style="margin-left:15px;" >tete</el-checkbox>
    </div>

    <el-table
      v-loading="listLoading"
      border
      fit
      highlight-current-row
      style="width: 100%;"
      @sort-change="sortChange">
      <el-table-column label="ID"  sortable="custom" align="center" width="65">
        <template slot-scope="scope">
          <span>{{ scope.row.id }}</span>
        </template>
      </el-table-column>
      <el-table-column label="date" width="150px" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.timestamp | parseTime('{y}-{m}-{d} {h}:{i}') }}</span>
        </template>
      </el-table-column>
      <el-table-column label="title" min-width="150px">
        <template slot-scope="scope">
          <span class="link-type" ></span>
          <el-tag>{{ scope.row.type | typeFilter }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="author" width="110px" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column v-if="showReviewer" label="reviewer" width="110px" align="center">
        <template slot-scope="scope">
          <span style="color:red;">{{ scope.row.reviewer }}</span>
        </template>
      </el-table-column>
      <el-table-column label="onemlui" width="80px">
        <template slot-scope="scope">
          <svg-icon  icon-class="star" class="meta-item__icon"/>
        </template>
      </el-table-column>
      <el-table-column label="reading" align="center" width="95">
        <template slot-scope="scope">
          <span v-if="scope.row.pageviews" class="link-type" >{{ scope.row.pageviews }}</span>
          <span v-else>0</span>
        </template>
      </el-table-column>
      <el-table-column label="druum" class-name="status-col" width="100">
        <template slot-scope="scope">
          <el-tag >{{ scope.row.status }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="actions" align="center" width="230" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button type="primary" size="mini" >Edit</el-button>
          <el-button v-if="scope.row.status!='published'" size="mini" type="success">Pub
          </el-button>
          <el-button v-if="scope.row.status!='draft'" size="mini" >Draft
          </el-button>
          <el-button v-if="scope.row.status!='deleted'" size="mini" type="danger" >Delete
          </el-button>
        </template>
      </el-table-column>
    </el-table>

   
    


  </div>
</template>

<template>
  <el-container class="home-container">
    <el-header>
      <div class="header-font"><span>资格管理系统</span></div>
      <el-button type="info" @click="logout">退出</el-button>
    </el-header>
    <el-container>
      <el-main>
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <el-form
              :inline="true"
              :model="formInline"
              class="demo-form-inline"
            >
              <el-row>
                <el-col :span="6" class="col-rig">
                  <el-form-item label="社员ID">
                    <el-input
                      v-model="formInline.memberid"
                      placeholder="社员ID"
                    ></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="6" class="col-rig">
                  <el-form-item label="姓名">
                    <el-input
                      v-model="formInline.name"
                      placeholder="姓名"
                    ></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="6" class="col-rig"
                  ><el-form-item label="入社年月日">
                    <el-input
                      v-model="formInline.putYmd"
                      placeholder="入社年月日"
                    ></el-input> </el-form-item
                ></el-col>
                <el-col :span="6"></el-col>
              </el-row>
              <el-row>
                <el-col :span="6" class="col-rig">
                  <el-form-item label="资格">
                    <el-input
                      v-model="formInline.city"
                      placeholder="资格"
                    ></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="6" class="col-rig">
                  <el-form-item label="取得日付">
                    <el-input
                      v-model="formInline.getYmd"
                      placeholder="取得日付"
                    ></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="6" class="col-rig"
                  ><el-form-item label="奖励金日付">
                    <el-input
                      v-model="formInline.prizeYmd"
                      placeholder="奖励金日付"
                    ></el-input> </el-form-item
                ></el-col>
                <el-col :span="6">
                  <el-form-item>
                    <el-button type="primary" icon="el-icon-search" @click="onSearch">查询</el-button>
                  </el-form-item>
                  <el-form-item>
                    <el-button type="primary" icon="el-icon-create" @click="onSearch">新建</el-button>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-form>
          </div>
          <el-table :data="tableData" border style="width: 100%">
            <el-table-column type="index" label="#" style="width: 5%"></el-table-column>
            <el-table-column prop="member_id" label="社员ID" sortable style="width: 5%">
            </el-table-column>
            <el-table-column prop="name" label="姓名" style="width: 10%">
            </el-table-column>
            <el-table-column
              prop="putYmd"
              label="入社年月日"
              style="width: 10%"
            >
            </el-table-column>
            <el-table-column prop="city" label="资格" style="width: 30%">
            </el-table-column>
            <el-table-column prop="getYmd" label="取得日付" style="width: 10%">
            </el-table-column>
            <el-table-column
              prop="prizeYmd"
              label="奖励金日付"
              style="width: 10%"
            >
            </el-table-column>
            <el-table-column label="操作" width:120px>
              <template slot-scope="scope">
                <el-button
                  @click="updateClick(scope.row)"
                  type="primary"
                  icon="el-icon-edit"
                  size="mini"
                  >修改</el-button
                >
                <el-button type="danger" icon="el-icon-delete" size="mini">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-card>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      formInline: {
        memberid: "",
        name: "",
        putYmd: "",
        city: "",
        getYmd: "",
        prizeYmd: ""
      },
      tableData: []
    };
  },
  created() {
    console.log('created run Start');
    this.$http.get("/zlist").then((res) => {
      this.tableData = res.data;
    });
    console.log('created run End');
  },
  methods: {
    updateClick(row) {

    },
    onSearch() {
      console.log("Search Start");
      this.$http.get("/search",{params: {formInline: this.formInline}}).then(
        (res) => {
          this.tableData = res.data;
          console.log(res.data);
        }
      );
      console.log("Search End");
    },
    logout(){
      console.log('this is logout');
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home-container {
  height: 100%;
}

.el-header {
  background-color: #545c64;
  color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
}
.header-font{
  display: flex;
  align-items: center;
}
.el-aside {
  background-color: #d3dce6;
  color: #333;
  height: 100%;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  height: 100%;
}

.col-rig{
  text-align: right;
}
</style>

<el-row>
  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
</el-row>


<el-form :inline="true" :model="formInline" class="demo-form-inline">
  <el-form-item label="审批人">
    <el-input v-model="formInline.user" placeholder="审批人"></el-input>
  </el-form-item>
  <el-form-item label="活动区域">
    <el-select v-model="formInline.region" placeholder="活动区域">
      <el-option label="区域一" value="shanghai"></el-option>
      <el-option label="区域二" value="beijing"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">查询</el-button>
    <el-button type="primary" icon="el-icon-search">搜索</el-button>
  </el-form-item>
</el-form>

memberid: "TJ0001",
          name: "王小虎",
          putYmd: "2016-05-04",
          city: "普陀区",
          getYmd: "2016-05-04",
          prizeYmd: "2016-05-04",


          app.get('/apis/searchInfo', function (req, res) {
  if(req.params != null){
    console.log(req.params);
  }
  fs.readFile( __dirname + "/DataJson/" + "dataList.json", 'utf8', function (err, data) {
    var obj = JSON.parse(data);
    for(da in obj.td){
      console.log(data);
    }

    res.data = data;
    console.log(data);
  });
})
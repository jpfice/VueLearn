<template>
  <el-aside width="210px">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>资格情报</span>
        </template>
        <el-menu-item index="1-1">资格一览</el-menu-item>
        <el-menu-item index="1-2">情报新规</el-menu-item>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
    </el-menu>
  </el-aside>
</template>

<script>
export default {
  name: "Aside",
  data() {
    return {
    };
  },
  methods: {
    updateClick(row) {
      console.log(row);
    },
    onSubmit() {
      console.log("this is submit");
    },
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
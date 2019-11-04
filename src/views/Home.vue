<template>
  <el-container class="wrapper">
    <el-aside width="200px">Aside</el-aside>
    <el-container>
      <el-header>
        <img class="avatar" v-if="user.head_img" :src="$axios.defaults.baseURL + user.head_img" />
        <img class="avatar" v-else src="../assets/pic.jpg" alt />
        {{user.nickname}}
      </el-header>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      // 从 localStorage 获取用户数据并转换为对象
      user: JSON.parse(localStorage.getItem("user"))
    };
  }
};
</script>

<style lang="less" scoped>
.wrapper {
  position: absolute;
  width: 100%;
  top: 0;
  bottom: 0;
}
.el-header {
  background-color: #58c9b9;
  color: #333;
  text-align: center;
  line-height: 60px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  .avatar{
    width: 40px;
    height: 40px;
    border-radius: 20px;
    object-fit: cover;
  margin-right: 10px;
  }
}

.el-aside {
  background-color: #519d9e;
  color: #333;
  text-align: center;
  line-height: 260px;
}

.el-main {
  background-color: #9dc8c8;
  color: #333;
  text-align: center;
  line-height: 160px;
}
</style>
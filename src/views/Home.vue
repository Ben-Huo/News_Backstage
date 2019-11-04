<template>
  <el-container class="wrapper">
    <el-aside width="200px">
      <div class="logo">头条News</div>
      <div class="menu">
        <el-menu>
          <el-menu-item index="2" @click="$router.push('/postlist')">
            <i class="el-icon-menu"></i>
            <span slot="title">文章列表</span>
          </el-menu-item>
          <el-menu-item index="4" @click="$router.push('/editpost')">
            <i class="el-icon-setting"></i>
            <span slot="title">发布文章</span>
          </el-menu-item>
        </el-menu>
      </div>
    </el-aside>
    <el-container>
      <el-header>
        <img class="avatar" v-if="user.head_img" :src="$axios.defaults.baseURL + user.head_img" />
        <img class="avatar" v-else src="../assets/pic.jpg" alt />
        {{user.nickname}}
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
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
  .avatar {
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
  .logo {
    height: 60px;
    line-height: 60px;
    color: #fff;
    border-bottom: 1px solid #fff;
  }
}

.el-main {
  background-color: #9dc8c8;
  color: #333;
  text-align: center;
  line-height: 160px;
}

</style>
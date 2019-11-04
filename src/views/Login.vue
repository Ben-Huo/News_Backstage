<template>
  <div>
    <el-row type="flex" justify="center" align="middle" class="row-bg">
      <el-form label-width="80px">
        <el-form-item label="账号">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input type="password" v-model="form.password"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="Login">登录</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    Login() {
      if (!this.form.username || !this.form.password) {
        this.$message.error("请输入账号或密码");
        return;
      }
      this.$axios({
        url: "/login",
        method: "post",
        data: this.form
      }).then(res => {
        console.log(res.data);
        if (res.data.message == "登录成功") {
          localStorage.setItem("token", res.data.data.token);
          localStorage.setItem("user", JSON.stringify(res.data.data.user));
          this.$message.success('登陆成功');
          this.$router.push('/');
        }else{
            this.$message.error(res.data.message);
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
.row-bg {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%
}
</style>
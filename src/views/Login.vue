<template>
  <div class="container">
    <div class="row justify-content-center align-items-center login-page-height">
      <div class="col-md-5">
        <div class="h4 text-center">
        <span style="font-RussoOne'">RelaxWine</span><br>
        管理者登入
        </div>
        <form @submit.prevent="signIn">
          <div class="form-group mt-4">
            <input type="email" class="form-control" id="exampleInputEmail1"
            aria-describedby="emailHelp" placeholder="請輸入電子郵件地址" v-model="user.email" autofocus>
          </div>
          <div class="form-group">
            <input type="password" class="form-control" id="exampleInputPassword1"
            placeholder="請輸入密碼" v-model="user.password">
          </div>
          <div class="d-flex justify-content-center mt-4">
            <router-link to="/products" class="btn btn-outline-dark">返回賣場</router-link>
            <button type="submit" class="btn btn-dark ml-3" :disabled="loadingItem">登入</button>
          </div>
          <p class="mt-4 text-muted text-center">
            <span class="font-RussoOne">RelaxWine</span> 管理後台
          </p>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        email: '',
        password: '',
      },
      loadingItem: false,
    };
  },
  methods: {
    signIn() {
      const url = `${process.env.VUE_APP_APIPATH}api/auth/login`;
      this.loadingItem = true;
      this.$http
        .post(url, this.user)
        .then((res) => {
          const { token } = res.data;
          const { expired } = res.data;
          document.cookie = `relaxWineToken=${token}; expires=${new Date(expired * 1000)}; path=/`;
          this.$bus.$emit('message:push',
            '登入成功!', 'success');
          this.$router.push('/admin/products');
          this.loadingItem = false;
        })
        .catch(() => {
          this.$bus.$emit('message:push',
            '登入失敗！請再試一次！',
            'danger');
          this.loadingItem = false;
        });
    },
  },
};
</script>

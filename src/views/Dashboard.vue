<template>
  <div>
    <Navbar></Navbar>
    <router-view v-if="checkSuccess"/>
  </div>
</template>

<script>
import Navbar from '@/components/backend/BackendNavbar.vue';

export default {
  components: {
    Navbar,
  },
  data() {
    return {
      token: '',
      checkSuccess: false,
    };
  },
  created() {
    this.checkToken();
  },
  methods: {
    checkToken() {
      const url = `${process.env.VUE_APP_APIPATH}api/auth/check`;
      this.token = document.cookie.replace(/(?:(?:^|.*;\s*)relaxWineToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
      this.$http.post(url, {
        api_token: this.token,
      }).then((res) => {
        this.$http.defaults.headers.common.Authorization = `Bearer ${this.token}`;
        this.checkSuccess = true;
        this.$bus.$emit('message:push',
          `${res.data.message}！`,
          'success');
      }).catch((error) => {
        this.$router.push('/login');
        this.$bus.$emit('message:push',
          `${error.response.data.errors.api_token}請重新登入！`,
          'danger');
      });
    },
  },
};
</script>

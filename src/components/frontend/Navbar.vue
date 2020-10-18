<template>
    <div class="bg-dark sticky-top">
      <div class="container">
        <nav class="navbar navbar-expand-md navbar-dark bg-dark">
          <h1 class="logo">
            <router-link class="navbar-brand text-primary" to="/">
              RelaxWine
            </router-link>
          </h1>
          <span class="navbar-nav nav-item ml-auto mr-2 d-md-none">
            <router-link class="nav-link cart-link-width" to="/cart">
              <i class="fas fa-md fa-shopping-cart mt-2 text-primary"></i>
              <span class="badge badge-pill badge-warm  cart-logo-position no-text-shadow"
              v-if="carts.length">
                {{ carts.length }}
              </span>
            </router-link>
          </span>
          <button class="navbar-toggler" type="button" data-toggle="collapse"
          data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
          aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <div class="d-none d-md-block ml-auto">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item is-active">
                  <router-link class="nav-link text-primary" to="/">首頁</router-link>
                </li>
                <li class="nav-item is-active">
                  <router-link class="nav-link ml-md-2 text-primary" to="/about">關於我們</router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link mx-md-2 text-primary"
                   to="/products">美味的酒</router-link>
                </li>
                <li class="nav-item d-flex">
                  <router-link class="nav-link" to="/cart">
                    <i class="fas fa-shopping-cart text-primary"></i>
                    <span class="badge badge-pill badge-primary"
                    style="transform: translateX(-6px) translateY(-11px)" v-if="carts.length">
                    {{ carts.length }}</span>
                  </router-link>
                </li>
              </ul>
            </div>
            <div class="d-md-none">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                  <router-link class="nav-link nav-link-s font-size-m
                  text-center border-top text-primary
                  border-bottom mt-3" to="/" @click="closeNavbar">
                  首頁</router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link nav-link-s ml-md-2
                  font-size-m text-center text-primary
                  border-bottom"
                  to="/about">關於我們</router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link nav-link-s font-size-m
                  text-center border-bottom text-primary"
                  to="/products">美味的酒</router-link>
                </li>
                <li class="nav-item d-none d-md-block">
                  <router-link class="nav-link cart-link-width" to="/cart">
                    <i class="fas fa-md fa-shopping-cart"></i>
                    <span class="badge badge-pill badge-warm cart-logo-position
                    no-text-shadow" v-if="carts.length">
                    {{ carts.length }}</span>
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      carts: [],
    };
  },
  created() {
    this.getCart();
    this.$bus.$on('get-cart', () => {
      this.getCart();
    });
  },
  methods: {
    getCart() {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UUID}/ec/shopping`;
      this.$http.get(url)
        .then((res) => {
          this.carts = res.data.data;
        })
        .catch(() => {
        });
    },
  },
};
</script>

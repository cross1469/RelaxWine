<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div class="jumbotron jumbotron-fluid bg-cover bg-img-height-s-plus mb-0"
    style="background-image:url(https://images.unsplash.com/photo-1529060532150-a0c935a6d6e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80);">
      <div class="container">
        <div class="row">
          <div class="col-md-5 d-none d-md-block">
            <div class="d-flex flex-column align-items-start">
              <h1 class="text-primary font-weight-bold pt-2 font-size-xl">酒是在瓶中的詩
                <br><span class="font-size-m">-克里夫頓。費迪曼-</span>
              </h1>
            </div>
          </div>
          <div class="col-md-5 d-md-none">
            <div class="d-flex justify-content-center align-items-center mt-4 text-shadow">
              <h1 class="text-primary font-weight-bold pt-2 font-size-xl">酒是在瓶中的詩
                <br><span class="font-size-m">-克里夫頓。費迪曼-</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-dark pt-3">
      <div class="container mt-md-5">
        <ul class="nav nav-pills justify-content-center border-white"
        id="pills-tab" role="tablist">
          <li class="nav-item" role="presentation">
            <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home"
            role="tab" aria-controls="pills-home" aria-selected="true"
            @click.prevent="getFilter(filterType = 'all')">全部酒款</a>
          </li>
          <li class="nav-item" role="presentation">
            <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile"
            role="tab" aria-controls="pills-profile" aria-selected="false"
            @click.prevent="getFilter(filterType = 'champagne')">嚴選香檳</a>
          </li>
          <li class="nav-item" role="presentation">
            <a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact"
            role="tab" aria-controls="pills-contact" aria-selected="false"
            @click.prevent="getFilter(filterType = 'white')">經典白葡萄酒</a>
          </li>
          <li class="nav-item" role="presentation">
            <a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact"
            role="tab" aria-controls="pills-contact" aria-selected="false"
            @click.prevent="getFilter(filterType = 'red')">心動紅葡萄酒</a>
          </li>
        </ul>
        <div class="row mt-3">
          <div class="col-md-4 my-3" v-for="item in newProducts" :key="item.id">
            <div class="card box-shadow border-2 mb-2 position-relative position-relative h-100">
              <img :src="item.imageUrl[0]" class="card-img-top rounded-0 card-img-height" alt="...">
              <div class="card-body border-top bg-dark d-flex flex-column align-items-center">
                <h4 class="mb-2 text-primary">{{ item.title }}</h4>
                <p class="card-text text-white mb-0">{{ item.options.summary }}</p>
                <div class="d-none d-md-block">
                  <div class="mt-4 text-center d-lg-flex">
                    <del class="text-white mr-lg-3">
                      <small>原價：{{ item.origin_price | money }}</small>
                    </del>
                    <p class="text-primary mb-0">售價：<strong>{{ item.price | money }}</strong>
                    </p>
                  </div>
                </div>
                <div class="d-md-none">
                  <div class="mt-2 text-center d-flex">
                    <del class="text-white mr-3">
                      <small>原價：{{ item.origin_price | money }}</small>
                    </del>
                    <p class="text-primary h5 mb-0">售價：<strong>{{ item.price | money }}</strong>
                    </p>
                  </div>
                </div>
              </div>
              <div class="card-footer bg-dark border-top d-none d-md-block">
                <div class="d-flex">
                  <router-link :to="`/product/${item.id}`" role="button" class="btn
                  btn-outline-light btn-sm stretched-link">
                  查看更多
                  </router-link>

                  <button type="button" class="btn btn-secondary btn-sm ml-auto
                  d-flex align-items-center stretched-link" style="position: relative;"
                  @click.prevent="addToCart(item.id)"
                  :disabled="status.loadingItem === item.id">加入購物車
                    <i class="ml-2 spinner-grow spinner-grow-sm d-md-none d-lg-block spinner-size-s"
                    v-if="status.loadingItem === item.id"></i>
                  </button>
                </div>
              </div>
              <div class="card-footer border-top d-md-none">
                <div class="d-flex">
                  <router-link :to="`/product/${item.id}`" role="button" class="btn
                  btn-outline-secondary stretched-link">
                    查看更多
                  </router-link>
                  <button type="button" class="btn btn-outline-primary ml-auto
                  d-flex align-items-center stretched-link" style="position: relative;"
                  @click.prevent="addToCart(item.id)"
                  :disabled="status.loadingItem === item.id">加入購物車
                    <i class="ml-2 spinner-grow spinner-grow-sm d-md-none d-lg-block spinner-size-s"
                    v-if="status.loadingItem === item.id"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [],
      newProducts: [],
      filterType: '',
      status: {
        loadingItem: '',
      },
      isLoading: false,
    };
  },
  created() {
    this.getProducts();
  },
  methods: {
    getProducts() {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UUID}/ec/products`;
      this.$http.get(url)
        .then((res) => {
          this.products = res.data.data;
          this.isLoading = false;
          this.newProducts = this.products;
          this.newProducts.sort((a, b) => b.price - a.price);
          const { categoryName } = this.$route.params;
          if (categoryName) {
            this.filterType = categoryName;
          }
        }).catch(() => {
          this.isLoading = false;
        });
    },
    addToCart(id, quantity = 1) {
      this.status.loadingItem = id;
      const url = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UUID}/ec/shopping`;
      this.isLoading = true;
      const cart = {
        product: id,
        quantity,
      };
      this.$http.post(url, cart)
        .then(() => {
          this.status.loadingItem = '';
          this.isLoading = false;
          this.$bus.$emit('get-cart');
          this.$bus.$emit('message:push',
            '商品已成功加入購物車!',
            'success');
        })
        .catch((error) => {
          this.status.loadingItem = '';
          this.$bus.$emit('message:push',
            `加入失敗!${error.response.data.errors}`,
            'danger');
          this.isLoading = false;
        });
    },
    getFilter() {
      switch (this.filterType) {
        case 'all':
          this.newProducts = this.products;
          break;
        case 'champagne':
          this.newProducts = this.products.filter((item) => item.category === '嚴選香檳');
          break;
        case 'white':
          this.newProducts = this.products.filter((item) => item.category === '經典白葡萄酒');
          break;
        case 'red':
          this.newProducts = this.products.filter((item) => item.category === '心動紅葡萄酒');
          break;
        default:
          break;
      }
    },
  },
};
</script>

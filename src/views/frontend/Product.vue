<template>
  <div class="bg-light">
    <div class="container">
      <loading :active.sync="isLoading"></loading>
      <div class="row justify-content-center pt-5">
        <div class="col-md-7">
          <img :src="product.imageUrl[0]" class="img-fluid bg-img-height-m" alt="...">
        </div>
        <div class="col-md-5 d-flex flex-column justify-content-center">
          <p class="h2 mt-3 mt-md-0 text-primary">{{ product.title }}</p>
          <hr class="border-primary mt-0 w-100 hr-border-width">
          <p>{{ product.content }}</p>
          <div class="d-flex">
            <p class="h4 text-primary mb-0 mr-3">
              售價：<strong>{{ product.price | money }}</strong>
            </p>
            <del class="text-muted">
              <small>原價：{{ product.origin_price | money }}</small>
            </del>
          </div>
          <div class="d-flex mt-3">
            <div class="w-50 mr-3">
              <select name="unit" class="form-control mr-3 border border-dark select-text-align"
              v-model="product.num">
                <option class="text-center" :value="num" v-for="num in 10" :key="num">
                  {{ num }} {{ product.unit }}
                </option>
              </select>
            </div>
            <button type="button" class="btn btn-outline-secondary w-50
            d-flex justify-content-center
            align-items-center" @click="addToCart(product.id, product.num)">
              <i class="mr-2 spinner-grow spinner-grow-sm spinner-size-s"
                v-if="status.loadingItem === product.id" ></i>
                加到購物車
            </button>
          </div>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col-md-3">
          <h4 class="text-primary">商品資訊</h4>
        </div>
        <div class="col-md-9">
          <p v-html="product.description"></p>
        </div>
      </div>
      <ProductNotice/>
    </div>
  </div>

</template>

<script>
import ProductNotice from '@/components/frontend/ProductNotice.vue';

export default {
  data() {
    return {
      product: {
        num: 1,
        imageUrl: [],
        options: {},
      },
      status: {
        loadingItem: '',
      },
      isLoading: false,
    };
  },
  components: {
    ProductNotice,
  },
  created() {
    this.getProduct();
  },
  methods: {
    getProduct() {
      this.isLoading = true;
      const { id } = this.$route.params;
      const url = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UUID}/ec/product/${id}`;
      this.$http.get(url)
        .then((res) => {
          this.product = res.data.data;
          this.isLoading = false;
          this.$set(this.product, 'num', 1);
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
          this.$bus.$emit('get-cart');
          this.$bus.$emit('message:push',
            '商品已成功加入購物車!',
            'success');
          this.isLoading = false;
        })
        .catch((error) => {
          this.status.loadingItem = '';
          this.$bus.$emit('message:push',
            `加入失敗!${error.response.data.errors}`,
            'danger');
          this.isLoading = false;
        });
    },
  },
};
</script>

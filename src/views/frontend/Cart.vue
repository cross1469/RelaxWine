<template>
  <div class="bg-dark">
    <loading :active.sync="isLoading"></loading>
    <div class="jumbotron jumbotron-fluid bg-cover mb-0 bg-img-height-s"
    style="background-image:url(https://images.unsplash.com/photo-1510267222691-b90c3f0494d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80);">
      <div class="container">
        <div class="row">
          <div class="col-md-5 d-none d-md-block">
            <div class="d-flex flex-column align-items-start mt-minus-m">
              <h1 class="text-primary font-weight-bold pt-5 font-size-xl font-KaushanScript"
              >Cart</h1>
            </div>
          </div>
          <div class="col-md-5 d-md-none">
            <div class="d-flex justify-content-center align-items-center mt-2 text-shadow">
              <h1 class="text-primary font-weight-bold pt-5 font-size-xl font-KaushanScript"
              >Cart</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container" v-if="carts.length">
      <div class="row justify-content-center">
        <div class="col py-5 page-content-height">
          <div class="d-flex justify-content-center">
            <h2 class="text-white mb-0 font-weight-bold">購物車</h2>
          </div>
          <hr class="border-white mb-0 hr-border-width">
          <div class="d-md-none text-white mt-4 box-shadow"
          v-for="item in carts" :key="item.product.id + 1" >
            <div class="d-flex align-items-center p-3">
              <div class="mr-3">
                <img :src="item.product.imageUrl[0]"
                  alt="" class="h-55">
              </div>
              <div class="d-flex w-100 align-items-center justify-content-between">
                <p class="mb-0 h6">{{ item.product.title }}</p>
                <div class="badge badge-pill badge-primary">
                  {{ item.product.category }}
                </div>
              </div>
            </div>
            <div class="d-flex justify-content-between align-items-center
            px-3 mt-2">
              <div class="input-group input-group-lg mr-5">
                <div class="input-group-prepend">
                  <button class="btn btn-primary d-flex align-items-center"
                  type="button" :disabled="item.quantity === 1"
                  @click="item.quantity --;
                  updateQuantity( item.product.id, item.quantity)">
                  <span v-if="status.loadingUpdateCart === item.product.id"
                  class="spinner-border spinner-border-sm spinner-size-s">
                  </span>
                  <span v-else>-</span>
                  </button>
                </div>
                <input min="1" type="number" class="form-control text-center"
                v-model="item.quantity"
                @keyup="updateQuantity(item.product.id, item.quantity)"
                :disabled="item.quantity === 1">
                <div class="input-group-append">
                  <button class="btn btn-primary d-flex align-items-center"
                  type="button"
                  @click="item.quantity ++;
                  updateQuantity( item.product.id, item.quantity)"
                  :disabled="status.loadingUpdateCart === item.product.id">
                  <span v-if="status.loadingUpdateCart === item.product.id"
                  class="spinner-border spinner-border-sm spinner-size-s">
                  </span>
                  <span v-else>+</span>
                  </button>
                </div>
              </div>
              <div>
                <a role="button" @click.prevent="deleteCartItem(item.product.id)"
                class="btn btn-outline-primary btn-square" href="#">
                  <i class="fas fa-trash-alt pt-2"></i>
                </a>
              </div>
            </div>
            <hr>
            <div class="d-flex justify-content-end px-3 pb-3">
              <p class="h5 mr-2">金額</p>
              <p class="h5">
                {{ item.product.price * item.quantity | money }}
              </p>
            </div>
          </div>
          <div class="table-responsive text-white d-none d-md-block">
            <table class="table table-striped mb-0">
              <thead class="text-white text-center">
                <td>產品圖片</td>
                <td>產品名稱</td>
                <td>數量</td>
                <td>價格</td>
                <td>刪除</td>
              </thead>
              <tbody>
                <tr v-for="item in carts" :key="item.product.id + 1">
                  <td class="text-center px-0 table-width-s">
                    <img :src="item.product.imageUrl[0]"
                  alt="" class="table-img-height-s-plus"></td>
                  <td class="align-middle text-white text-center table-width-s">
                    {{ item.product.title }}
                  </td>
                  <td class="align-middle text-center table-width-m-plus">
                    <div class="input-group w-50">
                      <div class="input-group-prepend">
                        <button class="btn btn-primary d-flex align-items-center"
                        type="button" :disabled="item.quantity === 1"
                        @click=" updateQuantity( item.product.id, item.quantity - 1)">
                        <span v-if="status.loadingUpdateCart === item.product.id"
                        class="spinner-border spinner-border-sm spinner-size-s">
                        </span>
                        <span v-else>-</span>
                        </button>
                      </div>
                      <input min="1" type="number" class="form-control text-center"
                      :value="item.quantity"
                      @keyup.enter="updateQuantity(item.product.id, $event.target.value)"
                      @change="updateQuantity(item.product.id, $event.target.value)"
                      :disabled="item.quantity <= 1">
                      <div class="input-group-append">
                        <button class="btn btn-primary d-flex align-items-center"
                        type="button"
                        @click="updateQuantity( item.product.id, item.quantity + 1)"
                        :disabled="status.loadingUpdateCart === item.product.id">
                        <span v-if="status.loadingUpdateCart === item.product.id"
                        class="spinner-border spinner-border-sm spinner-size-s">
                        </span>
                        <span v-else>+</span>
                        </button>
                      </div>
                    </div>
                  </td>
                  <td class="align-middle text-white text-center table-width-m-plus">
                    {{ item.product.price * item.quantity | money }}</td>
                  <td class="align-middle text-center table-width-s">
                    <a @click.prevent="deleteCartItem(item.product.id)"
                    class="text-danger" href="#">
                      <i class="fas fa-md fa-trash-alt"></i>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
            <hr class="border-white mb-0 hr-border-width">
          </div>
          <div class="container text-white">
            <div class="d-flex justify-content-between
            justify-content-md-end mt-4"  v-if="cartTotal > 0">
              <p class="mb-0 h4 font-weight-bold table-width-xs">總金額</p>
              <p class="mb-0 h4 font-weight-bold">{{ cartTotal | money }}</p>
            </div>
          </div>
          <div class="row d-flex justify-content-between mt-4">
            <div class="col-md-2">
              <router-link class="btn btn-outline-light btn-block"
              to="/products">
              繼續選購
              </router-link>
            </div>
            <div class="col-md-2 mt-3 mt-md-0">
              <router-link class="btn btn-secondary btn-block"
              to="/cart-form">
              下一步
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container page-content-height" v-else>
      <div class="row flex-column justify-content-center align-items-center">
        <div class="col pt-5">
          <div class="d-flex justify-content-center">
            <h2 class="text-white mb-0 font-weight-bold">購物車</h2>
          </div>
          <hr class="border-white mb-0 hr-border-width">
          <div class="d-flex justify-content-center">
            <p class="h3 text-white mt-3">購物車無商品，快去逛逛！</p>
          </div>
        </div>
        <div class="col-md-5">
          <img class="img-fluid mt-3"
        src="https://images.unsplash.com/photo-1511795267602-0424436b99c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3150&q=80" alt="">
        </div>
      </div>
      <div class="row d-flex justify-content-center mt-3 pb-5">
        <div class="col-md-2">
          <router-link class="btn btn-secondary btn-block"
          to="/products">
          繼續選購
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      carts: [],
      cartTotal: 0,
      isLoading: false,
      status: {
        loadingUpdateCart: '',
      },
    };
  },
  created() {
    this.getCart();
  },
  methods: {
    getCart() {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UUID}/ec/shopping`;
      this.$http.get(url)
        .then((res) => {
          this.status.loadingUpdateCart = '';
          this.carts = res.data.data;
          this.updateToTalPrice();
          this.isLoading = false;
        })
        .catch((error) => {
          this.status.loadingItem = '';
          this.$bus.$emit('message:push',
            `取得資料失敗!${error.response.data.errors}`,
            'danger');
          this.isLoading = false;
        });
    },
    updateToTalPrice() {
      let total = 0;
      this.carts.forEach((item) => {
        total += item.product.price * item.quantity;
      });
      this.cartTotal = total;
    },
    updateQuantity(id, num) {
      if (num < 1) {
        this.$bus.$emit('message:push', '數量不可低於1喔!', 'danger');
      } else {
        this.status.loadingUpdateCart = id;
        const url = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UUID}/ec/shopping`;
        const cart = {
          product: id,
          quantity: num,
        };
        this.$http.patch(url, cart)
          .then(() => {
            this.status.loadingUpdateCart = '';
            this.getCart();
            this.$bus.$emit('message:push',
              '商品數量更新成功!',
              'success');
          })
          .catch(() => {
            this.status.loadingUpdateCart = '';
            this.$bus.$emit('message:push',
              '商品數量更新失敗!',
              'danger');
          });
      }
    },
    deleteCartItem(id) {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UUID}/ec/shopping/${id}`;
      this.$http.delete(url)
        .then(() => {
          this.$bus.$emit('get-cart');
          this.getCart();
          this.isLoading = false;
          this.$bus.$emit('message:push',
            '商品已刪除!',
            'success');
        })
        .catch(() => {
          this.isLoading = false;
          this.$bus.$emit('message:push',
            '商品刪除失敗!',
            'danger');
        });
    },
  },
};
</script>

<template>
  <div class="bg-dark">
    <loading :active.sync="isLoading"></loading>
    <div class="jumbotron jumbotron-fluid bg-cover mb-0 bg-img-height-s"
    style="background-image:url(https://images.unsplash.com/photo-1510267222691-b90c3f0494d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80);">
      <div class="container">
        <div class="row">
          <div class="col-md-5 d-none d-md-block">
            <div class="d-flex flex-column align-items-start mt-minus-m">
              <h1 class="text-primary font-weight-bold pt-5 font-size-xl
              font-KaushanScript">Cart</h1>
            </div>
          </div>
          <div class="col-md-5 d-md-none">
            <div class="d-flex justify-content-center align-items-center text-shadow">
              <h1 class="text-primary font-weight-bold pt-5 font-size-xl
              font-KaushanScript">Cart</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="py-5">
      <div class="container">
        <div class="row justify-content-center flex-md-row flex-column-reverse">
          <div class="col-md-7">
            <div class="bg-dark">
              <div class="d-flex justify-content-center justify-content-md-start">
                <h4 class="text-white font-weight-bold mb-0 mt-4 mt-md-0">訂購人資訊</h4>
              </div>
              <hr class="border-white hr-border-width">
              <validation-observer v-slot="{ invalid }">
                <form @submit.prevent="createOrder">
                  <div class="form-group">
                    <validation-provider rules="required|email"
                    v-slot="{ errors, classes, passed }">
                      <label for="email" class="text-white mb-2">
                        <span class="text-danger">*</span>
                        電子郵件
                      </label>
                      <input type="email" class="form-control" id="email" name="Email"
                      v-model.trim=" form.email" :class="classes" placeholder="請輸入 Email">
                      <span v-if="errors[0]" class="invalid-feedback">
                        {{ errors[0] }}
                      </span>
                      <span v-if="passed" class="valid-feedback">
                        Email 輸入正確
                      </span>
                    </validation-provider>
                  </div>
                  <div class="form-group">
                    <validation-provider rules="required" v-slot="{ errors, classes, passed }">
                      <label for="name" class="text-white mb-2">
                        <span class="text-danger">*</span>
                        收件人姓名
                      </label>
                      <input type="name" class="form-control rounded-0" id="name" name="收件人姓名"
                      v-model.trim="form.name" :class="classes" placeholder="請輸入收件人姓名">
                      <span v-if="errors[0]" class="invalid-feedback">
                        {{ errors[0] }}
                      </span>
                      <span v-if="passed" class="valid-feedback">
                        姓名輸入正確
                      </span>
                    </validation-provider>
                  </div>
                  <div class="form-group">
                    <validation-provider rules="required|min:8"
                    v-slot="{ errors, classes, passed }">
                      <label for="tel" class="text-white mb-2">
                        <span class="text-danger">*</span>
                        收件人電話
                      </label>
                      <input type="tel" class="form-control rounded-0" id="tel" name="收件人電話"
                      v-model.trim="form.tel" :class="classes" placeholder="請輸入收件人電話">
                      <span v-if="errors[0]" class="invalid-feedback">
                        {{ errors[0] }}
                      </span>
                      <span v-if="passed" class="valid-feedback">
                        電話輸入正確
                      </span>
                    </validation-provider>
                  </div>
                  <div class="form-group">
                    <validation-provider rules="required" v-slot="{ errors, classes, passed }">
                      <label for="address" class="text-white mb-2">
                        <span class="text-danger">*</span>
                        收件人地址
                      </label>
                      <input type="text" class="form-control rounded-0" id="address" name="收件人地址"
                      v-model.trim="form.address" :class="classes" placeholder="請輸入收件人地址">
                      <span v-if="errors[0]" class="invalid-feedback">
                        {{ errors[0] }}
                      </span>
                      <span v-if="passed" class="valid-feedback">
                        地址輸入正確
                      </span>
                    </validation-provider>
                  </div>
                  <div class="form-group">
                    <validation-provider rules="required" v-slot="{ errors, classes, passed }">
                      <label for="payment" class="text-white mb-2">
                        <span class="text-danger">*</span>付款方式
                      </label>
                      <select class="form-control" id="payment" name="付款方式"
                      v-model.trim="form.payment" :class="classes">
                        <option selected disabled value="">
                          請選擇付款方式
                        </option>
                        <option value="WebATM">
                          WebATM
                        </option>
                        <option value="ATM">
                          ATM
                        </option>
                        <option value="CVS">
                          CVS
                        </option>
                        <option value="Barcode">
                          Barcode
                        </option>
                        <option value="Credit">
                          Credit
                        </option>
                        <option value="ApplePay">
                          ApplePay
                        </option>
                        <option value="GooglePay">
                          GooglePay
                        </option>
                      </select>
                      <span v-if="errors[0]" class="invalid-feedback">
                        {{ errors[0] }}
                      </span>
                      <span v-if="passed" class="valid-feedback">
                        已選擇付款方式
                      </span>
                    </validation-provider>
                  </div>
                  <div class="form-group">
                    <label for="message" class="text-white">
                      其他需求
                    </label>
                    <textarea class="form-control" id="message" rows="5"
                    v-model.trim="form.message" placeholder="若有其他需求，請留言告訴我們">
                    </textarea>
                  </div>
                  <div class="row d-flex justify-content-between mt-5">
                    <div class="col-md-4">
                      <router-link to="/cart" class="btn btn-outline-light btn-block">
                      上一步
                      </router-link>
                    </div>
                    <div class="col-md-4 mt-3 mt-md-0">
                      <button class="btn btn-secondary btn-block d-flex align-items-center
                      justify-content-center" :disabled="invalid"
                      :class="{ disabled: loadingItem }">
                      下一步
                    <i class="ml-2 spinner-grow spinner-grow-sm"
                      v-if="loadingItem">
                    </i>
                      </button>
                    </div>
                  </div>
                </form>
              </validation-observer>
            </div>
          </div>
          <div class="col-md-5">
            <div class="border p-4">
              <h4 class="text-white font-weight-bold mb-3">訂單明細</h4>
              <div v-for="item in carts" :key="item.product.id + 1">
                <div class="d-flex mb-3">
                  <img :src="item.product.imageUrl[0]" alt="" class="mr-2 table-img-width">
                  <div class="w-100">
                    <div class="d-flex justify-content-between text-white font-weight-bold">
                      <p class="mb-0">{{ item.product.title }}</p>
                      <p class="mb-0">X {{ item.quantity }}</p>
                    </div>
                    <div class="d-flex justify-content-between">
                      <small class="mb-0 text-secondary">
                        {{ item.product.price | money }} / {{ item.product.unit }}
                      </small>
                    </div>
                  </div>
                </div>
              </div>
              <hr class="border-white">
              <p v-if="cartTotal > 8000" class="text-muted">
              您的消費金額已達 11,111 元，立即輸入雙 11 限時優惠碼
              <br>
              "
              <span class="text-success">
                double11
              </span>
              "，即享
              <span class="text-success">
                89 折
              </span>
              優惠！
              </p>
              <p v-else class="text-white">
              消費滿 11,111 即可享 89 折優惠，您目前的消費金額尚差
              <span class="text-secondary">
                {{ 11111 - cartTotal }}
              </span>
              元！
              </p>
              <div v-if="cartTotal > 11111" class="input-group mb-3">
                <input v-model="coupon_code" type="text" class="form-control" placeholder="請輸入優惠碼">
                <div class="input-group-append">
                  <button class="btn btn-outline-secondary" type="button" @click="addCouponCode">
                    套用</button>
                </div>
              </div>
              <div v-else class="mb-3">
                <router-link to="/products" class="btn btn-outline-light btn-block">
                  繼續選購
                </router-link>
              </div>
              <ul class="pl-0 mb-0">
                <li class="d-flex text-white justify-content-between">
                  <p class=" font-weight-normal mb-0">小計</p>
                  <p class="mb-0">{{ cartTotal | money }}</p>
                </li>
                <li v-if="coupon.enabled" class="d-flex justify-content-between">
                  <p class="pt-2 mb-0 font-weight-normal text-danger">折扣</p>
                  <p class="pt-2 mb-0 text-danger">
                  - {{ cartTotal - cartTotal * (coupon.percent / 100) | money }}</p>
                </li>
                <li v-if="coupon.enabled" class="d-flex justify-content-between">
                  <p v-if="cartTotal * (coupon.percent / 100) < 8888"
                  class="text-white font-weight-normal mb-0">運費</p>
                  <p v-if="cartTotal * (coupon.percent / 100) < 8888" class="mb-0">
                    {{ 170 | money }}
                  </p>
                </li>
                <li v-else class="text-success d-flex justify-content-between">
                  <p v-if="cartTotal < 8888" class="font-weight-normal mb-0">運費</p>
                  <p class="mb-0">
                    <span v-if="cartTotal < 8888">
                      {{ 170 | money }}
                    </span>
                  </p>
                </li>
              </ul>
              <div v-if="cartTotal < 8888 || cartTotal * (coupon.percent / 100) < 8888"
              class="d-flex justify-content-end">
                <small class="text-secondary">
                  消費金額滿 8,888 元，免運費
                </small>
              </div>
              <hr class="border-white">
              <div class="d-flex justify-content-between text-primary">
                <h4 class="mb-0 font-weight-bold">總金額</h4>
                <h4 v-if="coupon.enabled" class="mb-0 font-weight-bold">
                  <span v-if="cartTotal * (coupon.percent / 100) < 8888">
                      {{ 170 + cartTotal * (coupon.percent / 100) | money }}
                  </span>
                  <span v-else>
                      {{ cartTotal * (coupon.percent / 100) | money }}
                  </span>
                </h4>
                <h4 v-else class="mb-0 font-weight-bold">
                  <span v-if="cartTotal < 8888">
                    {{ 170 + cartTotal | money }}
                  </span>
                  <span v-else>
                    {{ cartTotal | money }}
                  </span>
                </h4>
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
      carts: [],
      cartTotal: 0,
      form: {
        email: '',
        name: '',
        tel: '',
        address: '',
        payment: '',
        message: '',
      },
      coupon_code: '',
      coupon: {},
      isLoading: false,
      loadingItem: false,
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
          this.carts = res.data.data;
          this.updateToTalPrice();
          this.isLoading = false;
        })
        .catch((error) => {
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
    createOrder() {
      this.loadingItem = true;
      const url = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UUID}/ec/orders`;
      const order = { ...this.form };
      this.$http.post(url, order)
        .then((res) => {
          this.$bus.$emit('get-cart');
          this.$router.push(`/cart-check/${res.data.data.id}`);
          this.getCart();
          this.loadingItem = '';
          this.isLoading = false;
          this.$bus.$emit('message:push',
            '訂單已送出!',
            'success');
        }).catch(() => {
          this.loadingItem = '';
          this.isLoading = false;
          this.$bus.$emit('message:push',
            '訂單送出失敗!請再試一次！',
            'danger');
        });
    },
    addCouponCode() {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UUID}/ec/coupon/search`;
      this.$http
        .post(url, { code: this.coupon_code })
        .then((res) => {
          this.getCart();
          this.coupon = res.data.data;
          this.isLoading = false;
          this.$bus.$emit('message:push',
            '優惠碼加入成功！',
            'success');
        }).catch((error) => {
          const errorData = error.response.data.errors;
          if (errorData) {
            errorData.code.forEach((err) => {
              this.$bus.$emit('message:push',
                `加入失敗！${err}`,
                'danger');
            });
            this.isLoading = false;
          } else {
            const { message } = error.response.data;
            this.$bus.$emit('message:push',
              `加入失敗！${message}`,
              'danger');
            this.isLoading = false;
          }
        });
    },
  },
};
</script>

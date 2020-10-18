<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div class="jumbotron jumbotron-fluid bg-cover mb-0 bg-img-height-s"
    style="background-image:url(https://images.unsplash.com/photo-1510267222691-b90c3f0494d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80);" v-if="order.paid === false">
      <div class="container">
        <div class="row">
          <div class="col-md-5 d-none d-md-block">
            <div class="d-flex flex-column align-items-start mt-minus-m">
              <h1 class="text-primary font-weight-bold pt-5 font-size-xl
              font-KaushanScript">Cart</h1>
            </div>
          </div>
          <div class="col-md-5 d-md-none">
            <div class="d-flex justify-content-center align-items-center mt-2 text-shadow">
              <h1 class="text-primary font-weight-bold pt-5 font-size-xl
              font-KaushanScript">Cart</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-light py-3">
      <div class="container">
        <div class="row justify-content-center flex-md-row">
          <div class="col-md-7">
            <div class="bg-light" v-if="order.paid === false">
              <div class="d-flex">
                <h4 class="text-dark mb-0 font-weight-bold">結帳</h4>
              </div>
              <hr class="border-dark hr-border-width">
              <p>
                只差一步了！點選確認付款以完成訂單。<br>我們將在收到您的訂單後， 約 1 ~ 3 個工作天內出貨！
              </p>
              <img class="img-fluid w-100" src="https://images.unsplash.com/photo-1551204320-76f545877f15?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80" alt="">
            </div>
            <div class="bg-light" v-else>
              <div class="d-flex">
                <h4 class="text-dark mb-0 font-weight-bold">訂單完成</h4>
              </div>
              <hr class="border-dark hr-border-width">
              <p>
                感謝您的購買！<br>您的訂單， 將在 1 ~ 3 個工作天內出貨！
              </p>
              <img class="img-fluid w-100" src="https://images.unsplash.com/photo-1551204320-76f545877f15?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80" alt="">
            </div>
          </div>
          <div class="col-md-5 mt-3">
            <div class="border p-4">
              <h4 class="font-weight-bold mb-3 d-flex justify-content-center
            justify-content-md-start">訂單明細</h4>
              <div v-for="( product, i ) in order.products" :key="i">
                <div class="d-flex mb-3">
                  <img :src="product.product.imageUrl[0]" alt="" class="mr-2 table-img-width">
                  <div class="w-100">
                    <div class="d-flex justify-content-between">
                      <p class="mb-0 font-weight-bold">
                        {{ product.product.title }}
                      </p>
                      <p class="mb-0 font-weight-bold">
                        {{ product.quantity }}
                      </p>
                    </div>
                    <div class="d-flex justify-content-between">
                      <small class="mb-0 text-muted">
                        {{ product.product.price | money }} / {{ product.product.unit }}
                      </small>
                    </div>
                  </div>
                </div>
              </div>
              <table class="table mt-4 border-top border-bottom text-muted">
                <tbody>
                  <tr>
                    <th scope="row" class="border-0 px-0 pt-4 pb-0 font-weight-normal">電子郵件</th>
                    <td class="text-right border-0 px-0 pt-4 pb-0">{{ order.user.email }}</td>
                  </tr>
                  <tr>
                    <th scope="row" class="border-0 px-0 font-weight-normal">收件人姓名</th>
                    <td class="text-right border-0 px-0">{{ order.user.name }}</td>
                  </tr>
                  <tr>
                    <th scope="row" class="border-0 px-0 pt-0 font-weight-normal">收件人電話</th>
                    <td class="text-right border-0 px-0 pt-0">{{ order.user.tel }}</td>
                  </tr>
                  <tr>
                    <th scope="row" class="border-0 px-0 pt-0 font-weight-normal">收件人地址</th>
                    <td class="text-right border-0 px-0 pt-0">{{ order.user.address }}</td>
                  </tr>
                </tbody>
              </table>
              <table class="table mt-4 text-muted">
                <tbody>
                  <tr>
                    <th scope="row" class="border-0 px-0 pt-4 pb-0 font-weight-normal">付款金額</th>
                    <td class="text-right border-0 px-0 pt-4 pb-0">{{ order.amount | money }}</td>
                  </tr>
                  <tr>
                    <th scope="row" class="border-0 px-0 font-weight-normal">付款方式</th>
                    <td class="text-right border-0 px-0">{{ order.payment }}</td>
                  </tr>
                  <tr>
                    <th scope="row" class="border-0 px-0 pt-0 font-weight-normal">付款狀態</th>
                    <td v-if="!order.paid" class="text-right border-0 px-0 pt-0 text-danger
                    font-weight-bold">
                      尚未付款
                    </td>
                    <td v-else class="text-right border-0 px-0 pt-0 text-success
                    font-weight-bold">
                      付款完成
                    </td>
                  </tr>
                </tbody>
              </table>
              <hr v-if="order.paid === false">
            <div class="row justify-content-end">
              <div class="col-md-6">
                <div v-if="order.paid === false">
                  <a @click.prevent="backHome" class="btn btn-outline-dark d-none d-md-block" >
                  回到首頁
                  </a>
                </div>
                <div v-if="order.paid === false">
                  <a @click.prevent="backHome" class="mb-3 btn btn-outline-dark btn-block
                  d-md-none">
                  回到首頁
                  </a>
                </div>
              </div>
              <div class="col-md-6">
                <div v-if="order.paid === false">
                  <a class="btn btn-secondary d-flex align-items-center justify-content-center"
                  @click.prevent="payOrder" :disabled="loadingItem">
                  確認付款
                  <span v-if="loadingItem" class="spinner-grow spinner-grow-sm ml-2
                  spinner-size-s">
                  </span>
                  </a>
                </div>
              </div>
            </div>
            </div>
            <router-link to="/products" class="btn btn-outline-dark mt-3 d-none d-md-block w-50"
            v-if="order.paid === true">
            繼續選購
            </router-link>
            <router-link to="/products" class="btn btn-outline-dark mt-3 btn-block d-md-none"
            v-if="order.paid === true">
            繼續選購
            </router-link>
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
      order: {
        user: {},
      },
      orderId: '',
      isLoading: false,
      loadingItem: false,
    };
  },
  created() {
    this.orderId = this.$route.params.orderId;
    this.getOrder();
  },
  methods: {
    getOrder() {
      const url = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UUID}/ec/orders/${this.orderId}`;
      this.isLoading = true;
      this.$http
        .get(url)
        .then((res) => {
          this.order = res.data.data;
          this.isLoading = false;
        })
        .catch(() => {
          this.$bus.$emit('message:push',
            '無法取得資料！請稍後再試！',
            'danger');
          this.isLoading = false;
        });
    },
    payOrder() {
      const url = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UUID}/ec/orders/${this.orderId}/paying`;
      this.loadingItem = true;
      this.$http
        .post(url)
        .then((res) => {
          if (res.data.data.paid) {
            this.getOrder();
          }
          this.$bus.$emit('message:push',
            '已完成付款！',
            'success');
          this.loadingItem = false;
        })
        .catch(() => {
          this.$bus.$emit('message:push',
            '付款失敗！請再試一次！',
            'danger');
          this.loadingItem = false;
        });
    },
    backHome() {
      this.$router.push('/');
      this.$bus.$emit('message:push',
        '尚未付款！訂單已放棄，請重新下單。',
        'danger');
    },
  },
};
</script>

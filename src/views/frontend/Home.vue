<template>
  <div>
    <section class="jumbotron jumbotron-fluid bg-cover mb-0 bg-img-height-l"
    style="background-image:url(https://images.unsplash.com/photo-1562601579-599dec564e06?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80);">
      <div class="container">
        <div class="row">
          <div class="col-md-5 d-none d-md-block">
            <div class="d-flex flex-column align-items-start">
              <p class="h3 text-primary mt-5 font-size-l">
                您只需細心品嚐！
              </p>
              <h1 class="text-primary font-weight-bold pt-2 font-size-xl">
                找酒的事，
                <br>
                就交給我們！
              </h1>
              <router-link class="btn btn-outline-primary mt-4" to="/products">美味的酒</router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="d-md-none mt-3 pt-2">
        <div class="d-flex justify-content-center">
          <section class="p-4 bg-alpha-dark d-flex flex-column align-items-start">
            <p class="text-primary font-size-l text-shadow">您只需細心品嚐！</p>
            <h1 class="text-primary font-weight-bold pt-2 font-size-xl text-shadow">
              找酒的事，
              <br>
              就交給我們！
            </h1>
            <router-link class="btn btn-outline-primary mt-4 box-shadow"
              to="/products">
              美味的酒
            </router-link>
          </section>
        </div>
      </div>
    </section>

    <section class="container mt-4">
      <div class="row">
        <div class="col-md-7 pr-0 d-none d-md-block">
          <div class="bg-cover-left bg-img-height-l-plus" style="background-image:url(https://images.unsplash.com/photo-1578911373434-0cb395d2cbfb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80);"></div>
        </div>
        <div class="col-md-5 d-flex flex-column align-items-center justify-content-center">
          <p class="h2 text-dark text-center font-weight-bold d-md-none d-lg-block mt-3 mt-md-0">
            關於我們
            <br>
            <span class="h1 font-RussoOne line-height-m">
            RelaxWine
            </span>
          </p>
          <p>
            我們是一群喜愛喝酒，對休閒生活充滿熱情的同好。我們樂於自己尋找喜愛的酒類。
            所以，我們開始提供給喜愛喝酒的同好，並給予多元及好的服務給我們的消費者，
            於是 RelaxWine 就誕生了。
          </p>
          <p>
            當您在忙碌的工作結束後，在睡前或晚餐後，想要來一杯犒賞自己。
            這個時候，您只需要從冰櫃拿出一瓶 RelaxWine 的酒，絕對能滿足您的味蕾及喜好。
          </p>
          <router-link class="btn btn-primary mt-3" to="/about">了解更多</router-link>
        </div>
      </div>
    </section>
    <section class="container my-4">
      <div class="form-row mb-4 bg-light">
        <div class="col-md-4 py-5">
          <div class="bg-gray h-100 d-flex flex-column justify-content-center">
            <p class="h3 font-weight-bold text-dark text-center px-3 font-size-m-plus">
            優秀的團隊
            </p>
            <p class="text-dark px-3">
              我們的團隊具備豐富的實務經驗，更重視顧客的需求，而我們的理想，就是以優異的品質，來征服顧客的味蕾。
            </p>
          </div>
        </div>
        <div class="col-md-8">
          <div class="bg-cover d-md-none bg-img-height-s" style="background-image:url(https://images.unsplash.com/photo-1516600164266-f3b8166ae679?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80);">
          </div>
          <div class="bg-cover h-100 d-none d-md-block" style="background-image:url(https://images.unsplash.com/photo-1516600164266-f3b8166ae679?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80)"></div>
        </div>
      </div>
      <div class="form-row mt-gutter-s">
        <div class="col-md-8 d-none d-md-block">
          <div class="bg-cover h-100" style="background-image:url(https://images.unsplash.com/photo-1541971897566-308cf7ad0934?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80)"></div>
          <div class="bg-cover d-md-none bg-img-height-s" style="background-image:url(https://images.unsplash.com/photo-1541971897566-308cf7ad0934?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80);">
          </div>
        </div>
        <div class="col-md-4 d-none d-md-block">
          <div class="bg-gray h-100 d-flex flex-column justify-content-center">
            <p class="h3 font-weight-bold text-dark text-center pt-3 px-3 font-size-m-plus">
              專屬顧問
            </p>
            <p class="text-dark px-3">
              我們知道每位顧客有不同酒類喜好，而當您購買後，我們會記錄您喜愛的酒項，並提供您建議，有任何疑問，歡迎您在上班時間，透過 Email 連絡我們我們會請專屬顧問團隊服務您。
            </p>
            <p class="text-dark px-3">
              我們的顧問團隊將提供您保存酒的基本觀念及酒項購買指南，迅速建立應有的基本概念，協助您在品酒過程中，能更享受。
            </p>
          </div>
        </div>
        <div class="col-md-4 d-md-none">
          <div class="bg-gray h-100 d-flex flex-column justify-content-center">
            <p class="h3 font-weight-bold text-dark text-center pt-3 px-3 font-size-m-plus">
            專屬顧問
            </p>
            <p class="text-dark px-3">
              我們知道每位顧客有不同酒類喜好，而當您購買後，我們會記錄您喜愛的酒項，並提供您建議，有任何疑問，歡迎您在上班時間，透過 Email 連絡我們我們會請專屬顧問團隊服務您。
            </p>
            <p class="text-dark px-3">
              我們的顧問團隊將提供您保存酒的基本觀念及酒項購買指南，迅速建立應有的基本概念，協助您在品酒過程中，能更享受。
            </p>
          </div>
        </div>
        <div class="col-md-8 d-md-none">
          <div class="bg-cover bg-img-height-s" style="background-image:url(https://images.unsplash.com/photo-1541971897566-308cf7ad0934?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80);">
          </div>
        </div>
      </div>
    </section>
    <!-- 聯絡我們 -->
    <section class="contact bg-light py-5">
      <div class="container-Contact">
        <h2 class="text-center font-weight-bold mb-3">聯絡我們</h2>
        <p class="text-center">
          我們相當重視您的意見，若您有任何疑問，請填妥以下資料，我們會在近期與您聯繫。
        </p>
        <form class="contactForm">
          <div class="contactFormGroup">
            <label for="name">姓名</label>
            <input type="text" id="name" name="name" placeholder="陳小明" />
          </div>
          <div class="contactFormGroup">
            <label for="phone">聯絡電話</label>
            <input type="tel" id="phone" name="phone" placeholder="0912-345-678" />
          </div>
          <div class="contactFormGroup">
            <label for="mail">電子郵件</label>
            <input type="email" id="mail" name="mail" placeholder="example@email.com" />
          </div>
          <div class="contactFormGroup">
            <label for="issue">意見反應</label>
            <textarea
              id="issue"
              name="issue"
              rows="10"
              placeholder="請輸入您的意見"
            ></textarea>
          </div>
          <div class="contactFormGroup d-flex align-items-baseline">
            <input type="checkbox" />
            <p>
              我同意隱私權政策，並同意依隱私權政策中所述的方式處理自己的資料。
            </p>
          </div>
          <div class="d-flex justify-content-center">
            <button class="btn btn-primary" type="submit">確認送出</button>
          </div>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

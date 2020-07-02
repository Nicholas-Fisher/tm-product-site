<template>
  <div class="home">
    <div id="nav">
      <div class="nav-inner not-on-mobile">
        <a href="#app">
          <img class="logo" alt="logo" src="../assets/images/logo.png" />
        </a>
        <div class="nav-links">
          <a href="#customers">
            <span>Why Tap Menu</span>
          </a>
          <a href="#how-it-works">
            <span>How It Works</span>
          </a>
          <a href="#contact">
            <span>Contact Us</span>
          </a>
        </div>
      </div>
    </div>
    <div class="main-content">
      <div ref="cardSection" class="scene" :class="{'is-tapping': cardTapping}">
        <div class="card" :class="{'is-flipped': cardFlipped}" @click="cardFlip">
          <div class="card-face card-face-front">
            <img class="qr" :src="qr" />
          </div>
          <div class="card-face card-face-back">
            <img class="logo" :src="img" />
          </div>
        </div>
      </div>
      <div ref="deviceSection" class="device-section">
        <div class="device-text" v-show="cardTapFinished">
          <div class="inner-text" v-if="siema.currentSlide === 0">
            <p class="big-text">
              Just
              <span class="clickable-text" @click="cardTap">tap</span> or
              <span class="clickable-text" @click="cardFlip">scan</span> to order with your phone.
            </p>
            <p>No app to download or sign in required.</p>
          </div>
          <div class="inner-text" v-if="siema.currentSlide === 1">
            <p class="big-text">See more detail.</p>
            <p>Pictures, calorie counts, portion sizes, descriptions. It's all here.</p>
          </div>
          <div class="inner-text" v-if="siema.currentSlide === 2">
            <p class="big-text">Filter by preferences.</p>
            <p>Already have an idea of what you want? Narrow the list down.</p>
          </div>
          <div class="inner-text" v-if="siema.currentSlide === 3">
            <p class="big-text">Send messages.</p>
            <p>Why wave down servers when we have these high tech communication devices?</p>
          </div>
          <div class="inner-text" v-if="siema.currentSlide === 4">
            <p class="big-text">Pay and leave at your leisure.</p>
            <p>You no longer have to wait for the payment terminal. Pay through your phone and head out at your leisure.</p>
          </div>
          <div class="inner-text" v-if="siema.currentSlide === 5">
            <p class="big-text">Want it in your place?</p>
            <p>Tap Menu is free until Oct 1st 2020!</p>
            <small>Normally it's $9/month for takeout/delivery ordering and $49/month for tableside ordering.</small>
            <p>
              <a class="clickable-text" href="#contact">Contact</a> us to find out how to get it in your restaurant.
            </p>
          </div>
          <!-- <div class="carousel-dots" v-if="images.length > 1">
            <div
              class="carousel-dot"
              v-for="(i, index) in images"
              :key="index"
              @click="siemaDotClick(index)"
              :class="{'active' : siema.currentSlide == index}"
            />
          </div>-->
          <button
            v-if="siema.currentSlide === 5"
            class="device-btn"
            v-text="'Restart'"
            @click="restart"
          />
          <button v-else class="device-btn" v-text="'Next'" @click="siema.next();" />
        </div>
        <div class="device-container">
          <div class="device device-iphone-x">
            <div class="device-frame">
              <div class="slide how" v-show="!turnOnPhone">
                <div class="icon-container multiple">
                  <fa :icon="['fad', 'typewriter']" />
                  <fa :icon="['fad', 'angle-right']" />
                  <fa :icon="['fad', 'laptop']" />
                </div>
                <p>The paper menu is great, but...</p>
                <p>
                  Wouldn't be nice if it could materialize in your customers hands, instantly update, send orders straight to your staff, present options based on customer preferences, raise turnover during busy hours, explain the food, translate to multiple languages, increase tips, provide analytics, take payments, and
                  <span
                    class="illuminate"
                  >illuminate in the dark?</span>
                  Well now it can.
                </p>
                <p class="tap-here" @click="screenTap">Tap here to see how it works.</p>
              </div>
              <div
                id="phone-siema"
                :class="{'turn-on': turnOnPhone}"
                :style="{'visibility': turnOnPhone ? 'visible' : 'hidden'}"
              >
                <div v-for="(i, index) in images" :key="index">
                  <div :class="'slide img ' + i.image" @click="siema.next();" />
                </div>
                <div class="slide how">
                  <div class="icon-container multiple">
                    <fa :icon="['fad', 'book-open']" />
                    <fa :icon="['fad', 'angle-right']" />
                    <fa :icon="['fad', 'mobile-android']" />
                  </div>
                  <p>
                    Using our cards, plaques, stands or posters, customers can order and pay using their own mobile devices. It's similar to the table-side tablet ordering you see in sushi buffets or the kiosk terminal ordering in fast food places but without the insane costs, hefty space requirements, maintenance, or line ups.
                    <span
                      class="tap-here"
                      @click="openTapMenu"
                    >Press here to try it out</span> and see how it looks in your browser (looks best on mobile).
                  </p>
                </div>
              </div>
            </div>
            <div class="device-stripe"></div>
            <div class="device-header"></div>
            <div class="device-sensors"></div>
            <div class="device-btns"></div>
            <div class="device-power"></div>
          </div>
        </div>
      </div>
      <p
        class="widget-text"
      >We're excited to announce that Tap Menu now offers online ordering directly on your website via a small widget!</p>
      <button class="widget-btn std-btn" @click="loadWidget">See how it works</button>
      <div class="anchor-point" id="customers" />

      <div class="lt-container">
        <div class="large-text second">
          <span class="right">Help in the COVID-19 era</span>
          <img
            class="decorative-image"
            alt="People Sitting"
            src="../assets/images/covid.svg"
          />
        </div>
      </div>
      <div class="reasons">
        <div class="reason-block" data-aos="fade-left">
          <div class="big">
            <div class="icon-container">
              <fa :icon="['fad', 'chart-network']" />
            </div>
            <span>Contact tracing built in</span>
          </div>
          <div
            class="small"
          >You can optionally prompt customers in-app for contact info for contact tracing purposes. This information is automically stored for you should you ever need to use it.</div>
        </div>
        <div class="reason-block" data-aos="fade-left">
          <div class="big">
            <div class="icon-container">
              <fa :icon="['fad', 'book-open']" />
            </div>
            <span>No menu/terminal sanitation needed</span>
          </div>
          <div
            class="small"
          >With Tap Menu, customers view the menu, order, and pay with their own devices. For payment you just need to link your own Stripe account. Or, you can forgo payment and still use your regular methods if you prefer.</div>
        </div>
        <div class="reason-block" data-aos="fade-left">
          <div class="big">
            <div class="icon-container">
              <fa :icon="['fad', 'head-side-cough']" />
            </div>
            <span>Social distancing</span>
          </div>
          <div
            class="small"
          >Tap Menu also customers to make requests in the app beyond just food and drink orders. Like requesting the bill, napkins, water, asking questions, or giving feedback. It's a way for your staff and customers to chat digitally.</div>
        </div>
      </div>

      <div class="lt-container">
        <div class="large-text second">
          <span class="left">Why your customers will love it</span>
          <img
            class="decorative-image"
            alt="People Sitting"
            src="../assets/images/people-at-table.svg"
          />
        </div>
      </div>
      <div class="reasons">
        <div class="reason-block" data-aos="fade-left">
          <div class="big">
            <div class="icon-container">
              <fa :icon="['fad', 'concierge-bell']" />
            </div>
            <span>No need to wait</span>
          </div>
          <div class="small">
            Either tap your phone to the NFC card, scan the QR code, or enter the code shown at
            <span
              class="site"
            >tapmenu.app</span>. From there you can order food instantly without waiting for a server.
          </div>
        </div>
        <div class="reason-block" data-aos="fade-left">
          <div class="big">
            <div class="icon-container">
              <fa :icon="['fad', 'search']" />
            </div>
            <span>Get more information</span>
          </div>
          <div
            class="small"
          >See pictures of the food you're interested in, or other tidbits like their calorie content and portion size.</div>
        </div>
        <div class="reason-block" data-aos="fade-left">
          <div class="big">
            <div class="icon-container">
              <fa :icon="['fad', 'check']" />
            </div>
            <span>See what you care about</span>
          </div>
          <div
            class="small"
          >Use filters to see just the menu items you care about based on parameters like price and calories, or categories like vegetarian and halal.</div>
        </div>
        <div class="reason-block" data-aos="fade-left">
          <div class="big">
            <div class="icon-container">
              <fa :icon="['fad', 'mobile-android']" />
            </div>
            <span>Pay through your phone</span>
          </div>
          <div
            class="small"
          >Pay and leave at your leisure without waiting for service and handling payment machines.</div>
        </div>
        <div class="reason-block" data-aos="fade-left">
          <div class="big">
            <div class="icon-container">
              <fa :icon="['fad', 'comments']" />
            </div>
            <span>Chat with the restaurant</span>
          </div>
          <div
            class="small"
          >Request napkins, water refills, give feedback, or ask questions about the food easily through the app.</div>
        </div>
        <div class="reason-block" data-aos="fade-left">
          <div class="big">
            <div class="icon-container">
              <fa :icon="['fad', 'smile']" />
            </div>
            <span>Simple and easy</span>
          </div>
          <div
            class="small"
          >No sign up or app download required. It just works! Tap Menu supports all modern browsers</div>
        </div>
      </div>
      <div class="anchor-point" id="restaurants" />
      <div class="lt-container">
        <div class="large-text third">
          <img class="decorative-image" alt="People Sitting" src="../assets/images/chef.svg" />
          <span class="right">Why your restaurant will love it</span>
        </div>
      </div>
      <div class="reasons">
        <div class="reason-block" data-aos="fade-right">
          <div class="big">
            <div class="icon-container">
              <fa :icon="['fad', 'dollar-sign']" />
            </div>
            <span>Digital menus for free</span>
          </div>
          <div
            class="small"
          >No need to buy and maintain expensive tablets to reap the benefits of digital ordering. Customers instead use their own devices.</div>
        </div>
        <div class="reason-block" data-aos="fade-right">
          <div class="big">
            <div class="icon-container">
              <fa :icon="['fad', 'comment-alt-smile']" />
            </div>
            <span>Get feedback</span>
          </div>
          <div
            class="small"
          >Get feeback on your service and dishes so you'll know what keeps them coming back. Tap Menu will also prompt customers for a google review if they've had a positive experience.</div>
        </div>
        <div class="reason-block" data-aos="fade-right">
          <div class="big">
            <div class="icon-container">
              <fa :icon="['fad', 'door-open']" />
            </div>
            <span>Enjoy faster turnover</span>
          </div>
          <div
            class="small"
          >Free up tables during busy hours by allowing customers to order and pay faster without having to wait.</div>
        </div>
        <div class="reason-block" data-aos="fade-right">
          <div class="big">
            <div class="icon-container">
              <fa :icon="['fad', 'puzzle-piece']" />
            </div>
            <span>It fits with your brand</span>
          </div>
          <div
            class="small"
          >Customize the look and feel of your menu from colors to fonts to ensure it fits with your aesthetic.</div>
        </div>
        <div class="reason-block" data-aos="fade-right">
          <div class="big">
            <div class="icon-container">
              <fa :icon="['fad', 'analytics']" />
            </div>
            <span>Analytics</span>
          </div>
          <div
            class="small"
          >Find out where your customers are focusing their attention on your menu so you can see what entices them about your selection. You can also see metrics such as response time to costumer requests.</div>
        </div>
        <div class="reason-block" data-aos="fade-right">
          <div class="big">
            <div class="icon-container">
              <fa :icon="['fad', 'tree-alt']" />
            </div>
            <span>Living menus</span>
          </div>
          <div
            class="small"
          >The menus update in real time, which means that items can be removed as soon as they're sold out and menus can self-update when the breakfast period switches to lunch.</div>
        </div>
        <div class="reason-block" data-aos="fade-right">
          <div class="big">
            <div class="icon-container">
              <fa :icon="['fad', 'coffee-togo']" />
            </div>
            <span>Streamline take-out</span>
          </div>
          <div
            class="small"
          >If you're a QSR, food truck, or any restaurant with take out services, you can use Tap Menu to enable kiosk style ordering. Any customer can tap their phone to make an order and pay immediately. It's like having a full kiosk terminal for free!</div>
        </div>
        <div class="reason-block" data-aos="fade-right">
          <div class="big">
            <div class="icon-container">
              <fa :icon="['fad', 'exclamation-square']" />
            </div>
            <span>Cutdown on errors</span>
          </div>
          <div
            class="small"
          >Since customers place their orders directly, their order will always be correct. Less errors means less waste, less wasted labour, and less irritation.</div>
        </div>
        <div class="reason-block" data-aos="fade-right">
          <div class="big">
            <div class="icon-container">
              <fa :icon="['fad', 'surprise']" />
            </div>
            <span>Impress your customers</span>
          </div>
          <div
            class="small"
          >Tap Menu allows your customers to learn about menu items in greater detail, filter by preferences, make requests, ask questions, give feedback, order food, and pay their bill. Empower and delight them. What's not to like?</div>
        </div>
      </div>
      <div class="anchor-point" id="wait-staff" />
      <div class="lt-container">
        <div class="large-text fourth">
          <span class="left">Why your wait staff will love it</span>
          <img class="decorative-image" alt="People Sitting" src="../assets/images/waitress.svg" />
        </div>
      </div>
      <div class="reasons">
        <div class="reason-block" data-aos="fade-right">
          <div class="big">
            <div class="icon-container">
              <fa :icon="['fad', 'coins']" />
            </div>
            <span>More tips</span>
          </div>
          <div
            class="small"
          >Tap Menu highlights when your wait staff is doing well and will incentivise higher tips for exceptional performance. The app also increases turnover and more customer turnover means more tips during busy hours!</div>
        </div>
        <div class="reason-block" data-aos="fade-right">
          <div class="big">
            <div class="icon-container">
              <fa :icon="['fad', 'tasks']" />
            </div>
            <span>Tracked upselling</span>
          </div>
          <div
            class="small"
          >Your wait staff can now earn commission based bonuses on how much they are able to upsell on an order. Since Tap Menu enables customers to make their own orders you can accurately track upsells.</div>
        </div>
        <div class="reason-block" data-aos="fade-right">
          <div class="big">
            <div class="icon-container">
              <fa :icon="['fad', 'balance-scale-left']" />
            </div>
            <span>Reduced workload</span>
          </div>
          <div
            class="small"
          >Your front-end staff can enjoy a lower workload since Tap Menu can take care of the ordering, and payment aspects of front end service. It also answers most questions customers have before they ask them.</div>
        </div>
      </div>
      <div class="anchor-point" id="how-it-works" />
      <div class="lt-container">
        <div class="large-text fifth">
          <img
            class="decorative-image"
            alt="People Sitting"
            src="../assets/images/how-it-works.svg"
          />
          <span class="right">How it works</span>
        </div>
      </div>
      <div class="reason-block long-block" data-aos="fade-left">
        <img src="../assets/images/methods-min.jpg" />
        <div
          class="small"
        >For dine-in restaurants, Either a Tap Menu card is given to guests, or tables will have a Tap Menu plaque preplaced on them. For QSR locations or food trucks, a Tap Menu poster or Tap Menu stand is prominently placed somewhere guests can access them. All options have three things on them: an NFC chip, QR code, and a web link. The customer can choose one of these three methods to open the menu on their phone. From there they can make orders, send requests, ask questions, and pay for their order. You can watch the video below for an overview of the experience.</div>
      </div>
      <div class="video-outer youtube">
        <div class="video-container youtube-container">
          <iframe
            src="https://www.youtube.com/embed/lwFsHSKWzlw?rel=0&amp;showinfo=0"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div class="lt-container">
        <div class="large-text sixth">
          <span class="left">Some possible menu designs</span>
          <img
            class="decorative-image"
            alt="People Sitting"
            src="../assets/images/menu-designs.svg"
          />
        </div>
      </div>
      <div class="wrap-container">
        <div class="reason-block" data-aos="fade-right">
          <div
            class="small"
          >Tap Menu is a white label solution that stays out of the way of your branding. Our menu is highly customizable so you can maintain your restaurant's unique look and feel.</div>
        </div>
        <div class="possible-designs">
          <div class="mobile-only">Swipe to see more</div>
          <div class="siema-container">
            <div id="siema">
              <div>
                <img src="../assets/images/screens/caribbean-min.png" />
              </div>
              <div>
                <img src="../assets/images/screens/classy-min.png" />
              </div>
              <div>
                <img src="../assets/images/screens/default-min.png" />
              </div>
              <div>
                <img src="../assets/images/screens/nouvelleBlanc-min.png" />
              </div>
              <div>
                <img src="../assets/images/screens/nouvelleNoir-min.png" />
              </div>
              <div>
                <img src="../assets/images/screens/healthy-min.png" />
              </div>
              <div>
                <img src="../assets/images/screens/cyberpunk-min.png" />
              </div>
            </div>
            <div class="carousel-buttons not-on-mobile">
              <button class="icon-btn" @click="themeSiema.prev()">
                <fa :icon="['fad', 'arrow-left']" />
              </button>
              <button class="icon-btn" @click="themeSiema.next()">
                <fa :icon="['fad', 'arrow-right']" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="anchor-point" id="contact" />
      <div class="lt-container">
        <div class="large-text seventh">
          <img
            class="decorative-image contact-lady"
            alt="People Sitting"
            src="../assets/images/chat.svg"
          />
          <span class="right">How to get us in your restaurant</span>
        </div>
      </div>
      <div class="contact-us">
        <div class="contact-section">
          <p>Tap Menu is free until Oct 1st 2020!</p>
          <small>Normally it's $9/month for takeout/delivery ordering and $49/month for tableside ordering.</small>
          <p>
            To request a demo or find out how you can get Tap Menu in your restaurant, reach us at
            <a
              href="mailto:contact@tapmenu.ca"
              target="_top"
            >contact@tapmenu.ca</a>.
          </p>
          <p>Alternatively, use the form below.</p>
          <div class="form-container">
            <form action="https://formspree.io/contact@tapmenu.ca" method="POST">
              <input class="form-input" type="text" name="Name" placeholder="Name" required />
              <input class="form-input" type="email" name="Email" placeholder="Email" required />
              <textarea class="form-input" rows="5" name="Message" placeholder="Message" required />
              <input class="std-btn" type="submit" value="SEND" />
            </form>
          </div>
        </div>
      </div>
      <div class="bottom-section">
        <router-link to="/privacy-policy">Privacy policy</router-link>
        <div class="footer">&copy; Tap Menu {{new Date().getFullYear()}}</div>
      </div>
    </div>
    <div class="nav-control mobile-only" :class="{'full': isFullNav}">
      <div class="nav-dimmer" @click="isFullNav = false" />
      <div class="nav-touchable">
        <button class="nav-btn" @click="isFullNav = !isFullNav">
          <div class="label" v-show="!isFullNav">
            <fa :icon="['fad', 'bars']" />
          </div>
          <div class="label" v-show="isFullNav">
            <fa :icon="['fad', 'times']" />
          </div>
        </button>
        <div @click="isFullNav = !isFullNav">
          <a href="#customers" class="nav-btn">
            <div class="label">
              <span>Why Tap Menu</span>
            </div>
          </a>
          <a href="#how-it-works" class="nav-btn">
            <div class="label">
              <span>How it Works</span>
            </div>
          </a>
          <a href="#contact" class="nav-btn">
            <div class="label">
              <span>Contact Us</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import Siema from "siema";
import img from "./../assets/images/tapMenuLogoWhite.png";
import qr from "./../assets/images/qr.png";

export default {
  name: "home",
  data() {
    return {
      img,
      qr,
      currIndex: 0,
      animationTimeout: 0,
      cardFlipped: false,
      cardTapping: false,
      cardTapFinished: false,
      turnOnPhone: false,
      addedWidget: false,
      isSoldOut: true,
      notifyForSaleEmail: "",
      siema: {},
      images: [
        { image: "img-1" },
        { image: "img-2" },
        { image: "img-3" },
        { image: "img-4" },
        { image: "img-5" }
      ],
      isFullNav: false,
      themeSiema: {}
    };
  },
  mounted() {
    const self = this;
    Vue.nextTick(() => {
      self.$data.siema = new Siema({
        selector: "#phone-siema",
        duration: 200,
        easing: "ease-out",
        perPage: 1,
        startIndex: 0,
        draggable: true,
        multipleDrag: true,
        threshold: 20,
        loop: false,
        onInit: () => {
          return;
        },
        onChange: () => {
          return;
        }
      });
    });
    self.cardFlip();
    self.$data.themeSiema = new Siema({
      selector: "#siema",
      duration: 200,
      easing: "ease-out",
      perPage: 1,
      startIndex: 0,
      threshold: 20,
      loop: true,
      onInit: () => {
        return;
      },
      onChange: () => {
        return;
      }
    });
  },
  methods: {
    openTapMenu() {
      window.open("https://tapmenu.app/?c=000", "_blank");
    },
    loadWidget() {
      if (this.$data.addedWidget) {
        return;
      }
      this.$data.addedWidget = true;
      this.addWidget();
      this.un;
    },
    addWidget() {
      const script = document.createElement("script");
      script.setAttribute("code", "0ZT");
      // script.setAttribute("src", "tm-embed-new.js");
      script.setAttribute("src", "https://api.nickfish.net/js/tm-embed.js");
      script.setAttribute("bottom", "70");
      script.setAttribute("z-index", "99");
      document.head.appendChild(script);
    },
    restart() {
      this.$data.siema.goTo(0);
      this.$data.cardTapping = false;
      this.$data.cardTapFinished = false;
      this.$data.turnOnPhone = false;
    },
    siemaDotClick(index) {
      this.$data.siema.goTo(index);
    },
    cardFlip() {
      window.scrollTo(0, 0);
      this.$data.cardFlipped = !this.$data.cardFlipped;
    },
    cardTap() {
      window.scrollTo(0, 0);
      this.$data.cardTapping = true;
      clearTimeout(this.$data.animationTimeout);
      this.$data.animationTimeout = setTimeout(() => {
        this.$data.cardTapping = false;
      }, 2000);
    },
    scrollIntoViewWithOffset(element, headerOffset) {
      const documentTop = document.documentElement.scrollTop || window.scrollY;
      const elementPosition = element.getBoundingClientRect().top + documentTop;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    },
    screenTap() {
      if (!this.$data.cardTapping) {
        window.scrollTo(0, 0);
        this.$data.cardTapping = true;
        this.$data.turnOnPhone = true;
        clearTimeout(this.$data.animationTimeout);
        this.$data.animationTimeout = setTimeout(() => {
          this.$data.cardTapping = false;
          this.$data.cardTapFinished = true;
          Vue.nextTick(() => {
            this.scrollIntoViewWithOffset(this.$refs.deviceSection, 50);
          });
        }, 2000);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./scss/_devices.scss";
$initial-device-height: 868px;
.device-btn {
  margin: 10px 0 20px 0;
  color: #000;
  font-size: 30px;
  padding: 10px;
  color: #fff;
  border: none;
  background-color: #399;
  font-family: h;
  border-radius: 5px;
  border: none;
  text-transform: uppercase;
  cursor: pointer;
  &:focus,
  &:hover {
    outline: none;
    opacity: 0.75;
  }
}
#phone-siema {
  border-radius: 45px;
  animation-duration: 2000ms;
  &.turn-on {
    animation-name: turn-on;
  }
}
.device-text {
  line-height: 35px;
  max-width: 310px;
  width: 95vw;
}
.contact-section {
  line-height: 30px;
}
@keyframes turn-on {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.card-face .logo {
  width: 60%;
}
.qr {
  width: 50%;
}
.img {
  @include background-image();
}
.img-1 {
  background-position: 0 0px;
  background-image: url("./../assets/images/iphoneMenu.png");
}
.img-2 {
  background-image: url("./../assets/images/iphoneMenuItem.png");
}
.img-3 {
  background-image: url("./../assets/images/iphoneFilter.png");
}
.img-4 {
  background-image: url("./../assets/images/iphoneMessages.png");
}
.img-5 {
  background-image: url("./../assets/images/iphonePay.png");
}
.scene {
  width: 100%;
  margin-top: 40px;
  max-width: 250px;
  height: 398px;
  perspective: 600px;
  position: relative;
  animation-duration: 2s;
  &.is-tapping {
    animation-name: example;
  }
}
@keyframes example {
  0% {
    top: 0px;
  }
  50% {
    top: 290px;
    transform: rotateZ(10deg);
  }
  100% {
    top: 0px;
  }
}
.card {
  width: 100%;
  height: 100%;
  position: relative;
  transition: transform 1s;
  transform-style: preserve-3d;
}
.card-face {
  position: absolute;
  height: 100%;
  width: 100%;
  backface-visibility: hidden;
  @include flex-center;
  border-radius: 15px;
}
.card-face-back {
  background: #111;
  transform: rotateY(180deg);
}
.card-face-front {
  background: #fff;
}
.card.is-flipped {
  transform: rotateY(180deg);
}
.highlight {
  font-weight: bold;
}
.tap-here {
  font-size: 21px;
  font-family: b;
  margin-left: 0px;
  color: scale-color(#399, $lightness: 50%);
  display: inline-block;
  cursor: pointer;
}
.phone-big {
  font-family: b;
  font-size: 25px;
}
.device-section {
  padding-top: 40px;
  max-width: $max-width;
  display: flex;
  .slide {
    height: 812px;
    max-width: 375px;
    p {
      font-size: 20px;
      width: 100%;
      margin: 10px 0;
    }
    svg {
      color: scale-color(#399, $lightness: 50%);
    }
  }
  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  .how {
    color: #fff;
    line-height: 40px;
    padding: 30px;
    @include flex-center();
    flex-direction: column;
  }
  .device-text {
    font-size: 25px;
    padding: 30px;
    color: #111;
    z-index: 1;
    .big-text {
      font-size: 30px;
      font-family: b;
    }
    .std-btn {
      align-self: flex-end;
    }
  }
  .inner-text {
    animation-duration: 300ms;
    animation-name: fade-in;
  }
  .device-container {
    flex: 0 0 auto;
    max-width: 100vw;
    margin-bottom: 40px;
    overflow: hidden;
    height: $initial-device-height;
    @include flex-center();
  }
}
svg {
  color: #399;
}
.image-examples {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.large-text {
  font-family: b;
  font-size: 50px;
  padding: 20px 40px 30px 40px;
  display: inline-flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  max-width: $max-width;
  span {
    padding-bottom: 20px;
    border-bottom: 5px solid;
    border-color: #399;
  }
  span.right {
    margin-left: 30px;
    text-align: left;
    order: 1;
  }
  span.left {
    margin-right: 30px;
    text-align: right;
    order: -1;
  }
  @media #{$mobile} {
    align-items: center;
    span {
      order: 1 !important;
    }
  }
}
.lt-container {
  width: 100vw;
  display: flex;
  justify-content: center;
}
.bottom-section {
  width: 100vw;
  margin-top: 100px;
  background-color: #33333e;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  a {
    color: #fff;
    padding: 20px 0;
    text-decoration: none;
    &:hover {
      color: #ddd;
    }
  }
}
.footer {
  height: $nav-height;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.main-content {
  padding-top: $nav-height;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.nav-control {
  z-index: $nav-z;
  bottom: -1 * (($nav-number-of-buttons - 1) * $nav-button-height);
  transition: all 0.1s ease-in;
  width: 100%;
  position: fixed;
  left: 0;
  border-top: 1px solid #ccc;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.075);
  .nav-dimmer {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    display: none;
  }
  &.full {
    bottom: 0;
    .nav-dimmer {
      display: initial;
      background-color: $dimmer-color;
    }
  }
  .nav-touchable {
    position: relative;
  }
  .nav-btn {
    color: #333;
    font-family: h;
    text-transform: uppercase;
    background-color: #fff;
    border: none;
    width: 100%;
    text-decoration: none;
    height: $nav-button-height;
    @include flex-center();
    &:focus {
      outline: none;
    }
    .label > span {
      text-align: center;
    }
  }
}
#nav {
  position: fixed;
  z-index: 999;
  width: 100%;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.075);
  display: flex;
  justify-content: center;
  background-color: #fff;
  top: 0;
  left: 0;
  text-transform: uppercase;
}
.nav-inner {
  width: 100%;
  max-width: $max-width;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: $nav-height;
  padding: 0 30px;
  .logo {
    margin-top: -8px;
    height: 40px;
    flex: 0 0 auto;
  }
  .nav-links {
    height: 100%;
  }
  a {
    color: #555;
    font-family: h;
    height: 100%;
    display: inline-flex;
    align-items: center;
    text-decoration: none;
    transition: all linear 0.1s;
    &:hover,
    &:focus {
      opacity: 0.65;
    }
    > span {
      padding: 0 20px;
    }
    &:not(:first-child) {
      > span {
        border-left: 1px solid $theme-color1;
      }
    }
  }
}
.contact-section {
  position: relative;
  text-align: center;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 400px;
  margin: 0px auto;
}
.reasons {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  max-width: 1200px;
  margin-top: 10px;
}
.icon-container {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-bottom: 20px;
  &.multiple {
    svg {
      font-size: 50px;
      margin: 0 10px;
    }
  }
}
.reason-block {
  @include card-style();
  padding: 40px 20px;
  border-radius: 30px;
  max-width: 370px;
  margin: 15px;
  .big {
    font-size: 25px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    min-height: 100px;
    text-align: center;
    margin-bottom: 20px;
    border-radius: 20px;
    svg {
      font-size: 50px;
    }
  }
  .small {
    line-height: 30px;
    text-align: center;
    color: #555;
  }
}
.reason-block.long-block {
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 30px;
  margin-bottom: 10px;
  max-width: 820px !important;
  img {
    margin-bottom: 50px;
    width: 100%;
    max-width: 500px;
    border: 1px solid #ccc;
    border-radius: 15px;
  }
  .small {
    text-align: left !important;
    padding: 0 20px;
  }

  a {
    color: theme-color1;
  }
}
.illuminate {
  display: inline;
  color: #fff;
  text-shadow: -1px -1px 4px #000, 1px -1px 4px #fff, -1px 1px 4px #fff,
    1px 1px 4px #fff;
}
.center {
  @include flex-center();
}
.contact-us {
  margin-top: 20px;
  padding: 0px 30px 215px;
  width: 100%;
  max-width: 700px;
  background: rgb(55, 71, 79);
  background: linear-gradient(
    180deg,
    rgba(55, 153, 153, 1) 0%,
    rgba(222, 222, 222, 1) 100%
  );
  clip-path: polygon(
    0% 0%,
    100% 0%,
    100% 75%,
    75% 75%,
    75% 100%,
    50% 75%,
    0% 75%
  );
  @media #{$mobile} {
    clip-path: polygon(
      0% 0%,
      100% 0%,
      100% 85%,
      85% 85%,
      85% 100%,
      50% 85%,
      0% 85%
    );
    padding: 0 0 130px;
  }
  color: #fff;
  a {
    color: #fff;
  }
  .form-input {
    margin: 20px;
    padding: 10px;
    display: block;
    border-radius: $std-border-radius;
    border: none;
    background-color: #fff;
    max-width: 215px;
    width: 100%;
  }
}
$placeholder-color: #333;
::-webkit-input-placeholder {
  /* Chrome/Opera/Safari */
  color: $placeholder-color;
}
::-moz-placeholder {
  /* Firefox 19+ */
  color: $placeholder-color;
}
:-ms-input-placeholder {
  /* IE 10+ */
  color: $placeholder-color;
}
:-moz-placeholder {
  /* Firefox 18- */
  color: $placeholder-color;
}
video {
  width: 100%;
  height: auto;
}
.video-outer {
  @include card-style();
  padding: 20px;
  margin: 25px auto;
  width: 100%;
}
.video-outer.webm {
  max-width: 820px;
}
.video-outer.youtube {
  max-width: 1165px;
  margin-top: 30px;
}
.youtube-container {
  box-shadow: $std-shadow;
  padding-bottom: 56.25%;
}
.webm-container {
  max-width: 780px;
  padding-bottom: 83%;
}
.video-container {
  margin-left: auto;
  margin-right: auto;
  position: relative;
  width: 100%;
  height: 0;
  display: table;
  > iframe,
  > video {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
  }
}
.video-outer {
  z-index: 100;
  position: relative;
}
.style-band {
  padding: 50px 0;
}
.carousel-buttons {
  display: flex;
  justify-content: space-between;
  svg {
    color: #fff;
  }
}
.icon-btn {
  margin: 20px;
  background-color: #333;
  color: #fff;
  border-radius: 50%;
  border: none;
  height: 50px;
  width: 50px;
  box-shadow: $std-shadow;
  cursor: pointer;
  &:focus,
  &:hover {
    outline: none;
    opacity: 0.75;
  }
}
.siema-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
#siema {
  width: 291px;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.075);
  img {
    max-height: 500px;
    margin-bottom: -4px;
  }
}
.possible-designs {
  max-width: 600px;
  margin: 30px auto;
  text-align: center;
  .mobile-only {
    margin-bottom: 30px;
  }
}
.std-btn {
  background-color: $theme-color1;
  color: #fff;
  border: none;
  font-family: h;
  padding: 10px;
  border-radius: 4px;
  margin-top: 15px;
  cursor: pointer;
  transition: all linear 0.1s;
  text-decoration: none;
  text-transform: uppercase;
  margin: 0 10px;
  &:focus,
  &:hover {
    outline: none;
    opacity: 0.75;
  }
  > span {
    padding: 0 20px;
  }
}
.hero-right-side {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  img {
    width: 400px;
    margin-bottom: 20px;
  }
}
.decorative-image {
  width: 240px;
}
.contact-lady {
  margin-top: -150px;
}
.order-lady {
  margin-bottom: -30px;
}
@media #{$tablet} {
  .large-text {
    font-size: 35px;
  }
  .decorative-image {
    width: 150px;
  }
}
@media #{$mobile} {
  .device-text {
    line-height: 35px;
    max-width: 500px;
    width: 95vw;
  }
  .large-text {
    font-size: 25px;
    padding: 10px 20px;
    flex-direction: column;
    align-items: center;
    .order-lady {
      margin-bottom: 0;
    }
    .contact-lady {
      margin-top: 0;
    }
    span {
      max-width: 280px;
      text-align: left !important;
      margin: 20px 0 0 0 !important;
    }
  }
  .icon-container svg {
    font-size: 25px !important;
  }
  #nav {
    position: initial;
    padding: 0;
    box-shadow: none;
  }
  .nav-inner {
    justify-content: center;
    padding: 0;
  }
  .decorative-image {
    width: 100px;
  }
  .reason-block {
    max-width: 500px;
    margin: 20px 15px;
    padding: 30px 20px 20px 20px;
    .big {
      font-size: 22px;
      min-height: 60px;
      flex-direction: column;
      justify-content: space-between;
      margin-bottom: 20px;
      svg {
        font-size: 30px;
        margin-right: 0;
      }
    }
    .small {
      text-align: left;
      padding: 0 !important;
    }
  }
  .main-content {
    padding-top: 20px;
    padding-bottom: 50px;
  }
}
.anchor-point {
  position: relative;
  top: -30px;
}
.clickable-text {
  color: #399;
  font-family: b;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    opacity: 0.75;
  }
}
.widget-text {
  font-size: 20px;
  font-family: b;
  max-width: 650px;
  padding: 0 20px;
  text-align: center;
  line-height: 30px;
}
.widget-btn {
  margin-bottom: 50px;
}
.wrap-container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  .reason-block {
    position: relative;
    bottom: 50px;
    margin-right: 80px !important;
  }
  @media #{$mobile} {
    .reason-block {
      position: initial;
      bottom: 0;
      margin-right: 15px !important;
      margin-bottom: 0 !important;
    }
  }
}
.form-container {
  padding-bottom: 40px;
}
@media #{$mobile} {
  $shrink-factor: 0.9;
  .device-section {
    overflow: hidden;
    flex-direction: column;
    align-items: center;
    .device-container {
      height: $initial-device-height * $shrink-factor;
    }
    .device-text {
      @include flex-center();
      flex-direction: column;
      width: 100%;
      font-size: 20px;
      padding: 0 30px;
      color: #111;
      z-index: 1;

      .big-text {
        font-size: 25px;
      }
      .std-btn {
        align-self: center;
        margin: 10px 0 20px 0;
      }
      p {
        margin: 10px;
      }
    }
    .inner-text {
      height: auto;
      display: flex;
      text-align: center;
      flex-direction: column;
    }
    .device {
      margin: 0;
      transform: scale($shrink-factor);
    }
  }
  .scene {
    margin-top: 20px;
    max-width: 235px * $shrink-factor;
    height: 375px * $shrink-factor;
  }
  .inner-text {
    line-height: 30px;
  }
}
@media #{$mega-small} {
  $shrink-factor: 0.7;
  .device-section {
    .device-text {
      font-size: 15px;
      .big-text {
        font-size: 20px;
      }
    }
    .device {
      transform: scale($shrink-factor);
    }
    .device-container {
      height: $initial-device-height * $shrink-factor;
    }
  }
  .scene {
    max-width: 235px * $shrink-factor;
    height: 375px * $shrink-factor;
  }
}
</style>

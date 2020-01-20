<template>
  <div class="home">
    <div id="nav">
      <div class="nav-inner">
        <a href="#app">
          <img class="logo" alt="logo" src="../assets/images/logo.png" />
        </a>
        <div class="nav-links not-on-mobile">
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
      <div class="lt-container">
        <div class="large-text first">
          <img
            class="decorative-image order-lady"
            alt="People Sitting"
            src="../assets/images/tap-to-order.svg"
          />
          <span class="right">Just tap to order with your phone</span>
        </div>
      </div>
      <div class="video-outer webm">
        <div class="video-container webm-container">
          <video autoplay muted loop poster="../assets/images/tap-menu-min.png">
            <source src="../assets/videos/slim.webm" type="video/webm" />Your browser does not support HTML5 video.
          </video>
        </div>
      </div>
      <div class="reason-block intro-block">
        <div class="big">
          <div class="icon-container multiple">
            <fa :icon="['far', 'typewriter']" />
            <fa :icon="['far', 'angle-right']" />
            <fa :icon="['far', 'laptop']" />
          </div>
          <span>The paper menu is great, but...</span>
        </div>
        <div class="small">
          Wouldn't be nice if it could materialize in your customers hands, instantly update, send orders straight to your staff, present options based on customer preferences, raise turnover during busy hours, explain the food, translate to multple languages, increase tips, provide analytics, take payments, and
          <span
            class="illuminate"
          >illuminate in the dark?</span>
        </div>
      </div>
      <div class="reason-block intro-block">
        <div class="big">
          <div class="icon-container multiple">
            <fa :icon="['far', 'book-open']" />
            <fa :icon="['far', 'angle-right']" />
            <fa :icon="['far', 'mobile-android']" />
          </div>
          <span>Introducing Tap Menu</span>
        </div>
        <div
          class="small"
        >A digital menu solution that leverages the powerful communication device in everyone's pocket. Using our cards, stickers, or posters, customers can order and pay using their own mobile devices. It's similar to the table-side tablet ordering you see in sushi buffets or the kiosk terminal ordering in fast food places but without the insane costs, hefty space requirements, maintainence, or line ups. Try it now to see what it looks like in your browser (looks best on mobile).</div>
        <br />
        <div class="center">
          <a class="std-btn dark" target="_blank" href="https://tapmenu.app?c=000">Try it now</a>
        </div>
      </div>

      <div class="anchor-point" id="customers" />
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
              <fa :icon="['far', 'concierge-bell']" />
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
              <fa :icon="['far', 'search']" />
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
              <fa :icon="['far', 'check']" />
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
              <fa :icon="['far', 'mobile-android']" />
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
              <fa :icon="['far', 'comments']" />
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
              <fa :icon="['far', 'smile']" />
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
              <fa :icon="['far', 'dollar-sign']" />
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
              <fa :icon="['far', 'comment-alt-smile']" />
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
              <fa :icon="['far', 'door-open']" />
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
              <fa :icon="['far', 'puzzle-piece']" />
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
              <fa :icon="['far', 'analytics']" />
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
              <fa :icon="['far', 'tree-alt']" />
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
              <fa :icon="['far', 'coffee-togo']" />
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
              <fa :icon="['far', 'exclamation-square']" />
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
              <fa :icon="['far', 'surprise']" />
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
              <fa :icon="['far', 'coins']" />
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
              <fa :icon="['far', 'tasks']" />
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
              <fa :icon="['far', 'balance-scale-left']" />
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
      <div class="reason-block intro-block" data-aos="fade-left">
        <div
          class="small"
        >For dine-in restaurants, it works by having a card or sticker placed on each table that is uniquely linked to that table. For QSR locations or food trucks, a poster is placed on a prominent surface. Both the cards/stickers and the poster have three things on them: an NFC chip, QR code, and a web link. The customer can choose one of these three methods to open the menu on their phone. From there they can make orders, send requests, ask questions, and pay for their order. You can watch the video below for an overview of the experience.</div>
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
      <div class="reason-block intro-block" data-aos="fade-right">
        <div
          class="small"
        >Tap Menu is a white label solution that stays out of the way of your branding. Our menu is highly customizable so uou can maintain your restaurant's unique look and feel.</div>
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
            <button class="icon-btn" @click="mySiema.prev()">
              <fa :icon="['far', 'arrow-left']" />
            </button>
            <button class="icon-btn" @click="mySiema.next()">
              <fa :icon="['far', 'arrow-right']" />
            </button>
          </div>
        </div>
      </div>
      <div class="anchor-point" id="contact" />
      <div class="lt-container">
        <div class="large-text seventh">
          <img class="decorative-image contact-lady" alt="People Sitting" src="../assets/images/chat.svg" />
          <span class="right">How to get us in your restaurant</span>
        </div>
      </div>
      <div class="contact-us">
        <div class="contact-section">
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
            <fa :icon="['far', 'bars']" />
          </div>
          <div class="label" v-show="isFullNav">
            <fa :icon="['far', 'times']" />
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
import Siema from "siema";

export default {
  name: "home",
  data() {
    return {
      isFullNav: false,
      mySiema: {}
    };
  },
  mounted() {
    this.$data.mySiema = new Siema({
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
  }
};
</script>

<style lang="scss" scoped>
.image-examples {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.large-text {
  font-family: hero;
  font-size: 55px;
  padding: 20px 40px 30px 40px;
  display: inline-flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  max-width: $max-width;
  span {
    padding-bottom: 20px;
    border-bottom: 5px solid;
  }
  &.first span {
    border-color: #4285f4;
  }
  &.second span {
    border-color: #6c63ff;
  }
  &.third span {
    border-color: #ff6347;
  }
  &.fourth span {
    border-color: #38d39f;
  }
  &.fifth span {
    border-color: #6c63ff;
  }
  &.sixth span {
    border-color: #ffc107;
  }
  &.seventh span {
    border-color: #009688;
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
.reason-block {
  @include card-style();
  padding: 40px 20px;
  border-radius: 30px;
  max-width: 370px;
  margin: 15px;
  .icon-container {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-bottom: 20px;
    &.multiple {
      svg {
        margin: 0 10px;
      }
    }
  }
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
      font-size: 40px;
    }
  }
  .small {
    line-height: 30px;
    text-align: center;
    color: #555;
  }
}
.reason-block.intro-block {
  border-radius: 30px;
  margin-bottom: 10px;
  max-width: 820px !important;
  .small {
    text-align: left !important;
    padding: 0 20px;
  }

  a {
    color: theme-color1;
  }
}
.illuminate {
  color: #fff;
  text-shadow: -1px -1px 4px #000, 1px -1px 4px #000, -1px 1px 4px #000,
    1px 1px 4px #000;
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
  &.dark {
    background-color: #333;
  }
  &:hover {
    opacity: 0.65;
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
  .large-text {
    font-size: 28px;
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
</style>

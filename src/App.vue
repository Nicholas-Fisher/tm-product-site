<template>
  <div id="app" ref="app">
    <div id="nav">
      <div class="nav-inner">
        <a href="#app">
          <img class="logo" alt="logo" src="./assets/images/logo.png" />
        </a>
        <div class="nav-links not-on-mobile">
          <a href="#customers">
            <span>For Customers</span>
          </a>
          <a href="#restaurants">
            <span>For Restaurants</span>
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
      <div>
        <div class="large-text one">
          <span>Order from your table with your phone</span>
        </div>
        <div class="video-outer webm">
          <div class="video-container webm-container">
            <video autoplay muted loop poster="./assets/images/tap-menu-min.png">
              <source src="./assets/videos/slim.webm" type="video/webm" />Your browser does not support HTML5 video.
            </video>
          </div>
        </div>
        <div class="anchor-point" id="customers" />
        <div class="large-text two">
          <span>Why your customers will love it</span>
        </div>
        <div class="reasons readable-max-width">
          <div class="reason-block" data-aos="fade-left" >
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
          <div class="reason-block" data-aos="fade-left" >
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
          <div class="reason-block" data-aos="fade-left" >
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
          <div class="reason-block" data-aos="fade-left" >
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
          <div class="reason-block" data-aos="fade-left" >
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
          <div class="reason-block" data-aos="fade-left" >
            <div class="big">
              <div class="icon-container">
                <fa :icon="['far', 'smile']" />
              </div>
              <span>Simple and easy</span>
            </div>
            <div class="small">No sign up or app download required. It just works!</div>
          </div>
        </div>
        <div class="anchor-point" id="restaurants" />
        <div class="large-text three">
          <span>Why your restaurant will love it</span>
        </div>
        <div class="reasons readable-max-width">
          <div class="reason-block" data-aos="fade-right" >
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
          <div class="reason-block" data-aos="fade-right" >
            <div class="big">
              <div class="icon-container">
                <fa :icon="['far', 'balance-scale-left']" />
              </div>
              <span>Reduce workload</span>
            </div>
            <div
              class="small"
            >Your front-end staff can enjoy a lower workload since Tap Menu can take care of the ordering, and payment aspects of front end service. It also answers most questions customers have before they ask them</div>
          </div>
          <div class="reason-block" data-aos="fade-right" >
            <div class="big">
              <div class="icon-container">
                <fa :icon="['far', 'exclamation-square']" />
              </div>
              <span>Cutdown on errors</span>
            </div>
            <div
              class="small"
            >Since customers place their orders directly, their order will always be correct.</div>
          </div>
          <div class="reason-block" data-aos="fade-right" >
            <div class="big">
              <div class="icon-container">
                <fa :icon="['far', 'comment-alt-smile']" />
              </div>
              <span>Get feedback</span>
            </div>
            <div
              class="small"
            >You can optionally get feeback on your service and dishes so you'll know what keeps them coming back.</div>
          </div>
          <div class="reason-block" data-aos="fade-right" >
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
          <div class="reason-block" data-aos="fade-right" >
            <div class="big">
              <div class="icon-container">
                <fa :icon="['far', 'puzzle-piece']" />
              </div>
              <span>It fits with your brand</span>
            </div>
            <div
              class="small"
            >Customize the look and feel of your menu from colors to fonts to ensure it fits with your aesthetic. Tap Menu is a white label solution that allows you to use your own branding on the NFC cards or in the app.</div>
          </div>
          <div class="reason-block" data-aos="fade-right" >
            <div class="big">
              <div class="icon-container">
                <fa :icon="['far', 'analytics']" />
              </div>
              <span>Analytics</span>
            </div>
            <div
              class="small"
            >Find out where your customers are focusing their attention on your menu so you can see what entices them about your selection.</div>
          </div>
          <div class="reason-block" data-aos="fade-right" >
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
          <div class="reason-block" data-aos="fade-right" >
            <div class="big">
              <div class="icon-container">
                <fa :icon="['far', 'smile']" />
              </div>
              <span>Impress your customers</span>
            </div>
            <div
              class="small"
            >Tap Menu allows your customers to learn about menu items in greater detail, filter by preferences, make requests, ask questions, give feedback, order food, and pay their bill. Empower and delight them. What's not to like?</div>
          </div>
        </div>
        <div class="anchor-point" id="how-it-works" />
        <div class="large-text">How it works</div>
        <div class="video-outer youtube">
          <div class="video-container youtube-container">
            <iframe
              src="https://www.youtube.com/embed/lwFsHSKWzlw?rel=0&amp;showinfo=0"
              frameborder="0"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div class="possible-designs">
          <div class="medium-text designs-text">Here are some possible menu designs</div>
          <div class="mobile-only">Swipe to see more</div>
          <div class="siema-container">
            <div id="siema">
              <div>
                <img src="./assets/images/screens/caribbean-min.png" />
              </div>
              <div>
                <img src="./assets/images/screens/classy-min.png" />
              </div>
              <div>
                <img src="./assets/images/screens/default-min.png" />
              </div>
              <div>
                <img src="./assets/images/screens/nouvelleBlanc-min.png" />
              </div>
              <div>
                <img src="./assets/images/screens/nouvelleNoir-min.png" />
              </div>
              <div>
                <img src="./assets/images/screens/healthy-min.png" />
              </div>
              <div>
                <img src="./assets/images/screens/cyberpunk-min.png" />
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
        <div class="card test-drive">
          Click
          <a target="_blank" href="https://tapmenu.app?c=000">here</a> to test drive the menu for yourself! Looks best on mobile.
        </div>
        <div class="anchor-point" id="contact" />
        <div class="contact-us">
          <div class="title">How to get us in your restaurant</div>
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
                <textarea
                  class="form-input"
                  rows="5"
                  name="Message"
                  placeholder="Message"
                  required
                />
                <input class="std-btn" type="submit" value="SEND" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">&copy; Tap Menu {{new Date().getFullYear()}}</div>
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
              <span>For Customers</span>
            </div>
          </a>
          <a href="#restaurants" class="nav-btn">
            <div class="label">
              <span>For Restaurants</span>
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
  name: "app",
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
<style lang="scss">
$mobile: "(max-width: 768px)";
$not-mobile: "(min-width: 769px)";
$nav-height: 60px;
$mobile-text-size: 16px;
$desktop-text-size: 18px;
$dimmer-color: rgba(0, 0, 0, 0.5);
$std-shadow: 0 3px 6px rgba(#000, 0.15);
$nav-z: 151;
$nav-number-of-buttons: 5;
$nav-button-height: 50px;
$max-width: 1250px;
$theme-color1: #333;
$theme-color2: #fff;
$theme-color3: #49a;
$std-border-radius: 5px;

@mixin flex-center() {
  display: flex;
  align-items: center;
  justify-content: center;
}
@mixin card-style() {
  background-color: #fff;
  box-shadow: $std-shadow;
  padding: 40px 20px;
  border-radius: $std-border-radius;
}
.not-on-mobile {
  @media #{$mobile} {
    display: none !important;
  }
}
.mobile-only {
  @media #{$not-mobile} {
    display: none !important;
  }
}
html {
  scroll-behavior: smooth;
  overflow-y: auto;
  overflow-x: hidden;
  max-width: 100vw;
}
body {
  display: flex;
  justify-content: center;
  font-size: $desktop-text-size;
  overflow-x: hidden;
  max-width: 100vw;
  background-color: #eee;
}
*,
*:before,
*:after {
  box-sizing: border-box;
}
@font-face {
  font-family: p;
  src: url(assets/fonts/Quicksand/Quicksand-Medium.ttf);
}
@font-face {
  font-family: h;
  src: url(assets/fonts/Oswald-Regular.ttf);
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
  font-family: p;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.footer {
  height: $nav-height;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.main-content {
  position: relative;
  top: $nav-height;
  margin-bottom: $nav-height;
  min-height: calc(100vh - #{$nav-height * 2});
  max-width: $max-width;
  width: 100%;
}
.readable-max-width {
  max-width: $max-width;
  margin: 0 auto;
  position: relative;
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
    &:hover, &:focus {
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
@media #{$mobile} {
  #nav {
    position: initial;
    padding: 0;
    box-shadow: none;
  }
  .nav-inner {
    justify-content: center;
    padding: 0;
  }
  .main-content {
    margin: 0;
    min-height: 0;
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
.splash-image {
  height: 50vw;
  max-height: 650px;
  border-radius: $std-border-radius;
}
.reasons {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  margin-top: 10px;
}
.reason-block {
  @include card-style();
}
.reason-block {
  max-width: 370px;
  margin: 15px;
  .icon-container {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-bottom: 20px;
  }
  .big {
    font-size: 25px;
    font-family: h;
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
}

.small {
  line-height: 30px;
  text-align: center;
  color: #555;
}
.large-text {
  font-size: 40px;
  font-weight: bold;
  font-family: p;
  text-align: center;
  padding-top: 50px;
  margin: 20px 0;
  color: #fff;
  padding-bottom: 370px;
  margin-bottom: -360px;
  position: relative;
  background: rgb(55, 71, 79);
  background: linear-gradient(
    180deg,
    rgba(55, 71, 79, 1) 0%,
    rgba(222, 222, 222, 1) 100%
  );
  svg {
    margin-left: 20px;
    font-size: 100px;
  }
  &:first-child {
    margin-top: 0;
  }
  .jazz-icon {
    position: absolute;
    font-size: 100px;
    &.one {
      top: 100px;
      left: 50px;
      transform: rotate(-20deg);
    }
  }
  &.one {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
  &.two {
    clip-path: polygon(0 0, 100% 0, 100% 40%, 0% 100%);
    border-bottom-left-radius: 0;
  }
  &.three {
    clip-path: circle(50% at 50% 50%);
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 40%);
  }
  @media #{$mobile} {
    clip-path: none !important;
    border-radius: 0;
  }
}
.contact-us {
  .title {
    font-size: 40px;
    font-weight: bold;
    font-family: p;
    text-align: center;
    padding: 0 30px;
  }
  background: rgb(55, 71, 79);
  background: linear-gradient(
    180deg,
    rgba(55, 71, 79, 1) 0%,
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
  padding: 50px 30px 230px;
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
    padding: 50px 0 130px;
    .title {
      font-size: 30px;
    }
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
.medium-text {
  text-align: center;
  font-size: 25px;
  padding: 0 50px;
}
.card {
  @include card-style();
}
.test-drive {
  text-align: center;
  padding: 50px;
  margin: 30px 0;
  a {
    color: $theme-color3;
  }
}
video {
  width: 100%;
  height: auto;
}
.video-outer {
  @include card-style();
  padding: 20px;
  margin: 25px auto;
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
.splash-image-outer {
  @include flex-center();
  margin: 15px 0;
}
.splash-image-container {
  @include card-style();
  width: 100%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  max-width: 1007px;
  border-radius: $std-border-radius;
}
.video-outer {
  z-index: 100;
  position: relative;
}
.style-band {
  padding: 50px 0;
}
p {
  text-align: center;
}
.carousel-buttons {
  display: flex;
  justify-content: space-between;
}
.icon-btn {
  margin: 20px;
  background-color: $theme-color1;
  color: #fff;
  border-radius: 50%;
  border: none;
  height: 50px;
  width: 50px;
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
.designs-text {
  margin-bottom: 30px;
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
  &:hover {
    opacity: 0.65;
  }
  > span {
    padding: 0 20px;
  }
}
@media #{$mobile} {
  body {
    font-size: $mobile-text-size;
    padding-bottom: $nav-button-height;
  }
  .splash-image {
    border-radius: $std-border-radius;
  }
  .large-text {
    font-size: 28px;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 170px;
    margin-bottom: -160px;
  }
  .medium-text {
    font-size: 19px;
    padding: 0 30px;
  }
  .big {
    font-size: 18px;
    min-height: 60px;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 20px;
    svg {
      font-size: 30px;
      margin-right: 0;
    }
  }
  .reason-block {
    margin: 20px 0;
  }
  .small {
    line-height: 20px;
  }
  .main-content {
    top: 0;
  }
}
.anchor-point {
  position: relative;
  top: -30px;
}

#customers.anchor-point {
  top: -60px;
}
</style>

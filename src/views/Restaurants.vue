<template>
  <div class="home">
    <div class="large-text">Streamline your service and delight your customers.</div>
    <div
      class="medium-text"
    >Whether you're a small or large space, Tap Menu can supplement your service.</div>
    <div class ="video-outer youtube">
      <div class="video-container youtube-container">
        <iframe
          src="https://www.youtube.com/embed/lwFsHSKWzlw?rel=0&amp;showinfo=0"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
    </div>
    <div class="reasons">
      <div class="reason-block">
        <div class="big">
          <div class="icon-container">
            <fa :icon="['far', 'dollar-sign']"/>
          </div>
          <span>Digital menus for free</span>
        </div>
        <div
          class="small"
        >No need to buy and maintain expensive tablets to reap the benefits of digital ordering. Customers instead use their own devices.</div>
      </div>
      <div class="reason-block">
        <div class="big">
          <div class="icon-container">
            <fa :icon="['far', 'balance-scale-left']"/>
          </div>
          <span>Reduce workload</span>
        </div>
        <div
          class="small"
        >Your front-end staff can enjoy a lower workload since Tap Menu can take care of the ordering, and payment aspects of front end service. It also answers most questions customers have before they ask them</div>
      </div>
      <div class="reason-block">
        <div class="big">
          <div class="icon-container">
            <fa :icon="['far', 'exclamation-square']"/>
          </div>
          <span>Cutdown on errors</span>
        </div>
        <div
          class="small"
        >Since customers place their orders directly, their order will always be correct.</div>
      </div>
      <div class="reason-block">
        <div class="big">
          <div class="icon-container">
            <fa :icon="['far', 'comment-alt-smile']"/>
          </div>
          <span>Get feedback</span>
        </div>
        <div
          class="small"
        >You can optionally get feeback on your service and dishes so you'll know what keeps them coming back.</div>
      </div>
      <div class="reason-block">
        <div class="big">
          <div class="icon-container">
            <fa :icon="['far', 'door-open']"/>
          </div>
          <span>Enjoy faster turnover</span>
        </div>
        <div
          class="small"
        >Free up tables during busy hours by allowing customers to order and pay faster without having to wait.</div>
      </div>
      <div class="reason-block">
        <div class="big">
          <div class="icon-container">
            <fa :icon="['far', 'puzzle-piece']"/>
          </div>
          <span>It fits with your brand</span>
        </div>
        <div
          class="small"
        >Customize the look and feel of your menu from colors to fonts to ensure it fits with your aesthetic. Tap Menu is a white label solution that allows you to use your own branding on the NFC cards or in the app.</div>
      </div>
      <div class="reason-block">
        <div class="big">
          <div class="icon-container">
            <fa :icon="['far', 'smile']"/>
          </div>
          <span>Impress your customers</span>
        </div>
        <div
          class="small"
        >Tap Menu allows your customers to learn about menu items in greater detail, filter by preferences, make requests, ask questions, give feedback, order food, and pay their bill. Empower and delight them. What's not to like?</div>
      </div>
    </div>
    <div class="medium-text designs-text">Here are some possible menu designs</div>
    <p class="mobile-only">Swipe to see more</p>
    <div class="siema-container">
      <div id="siema">
        <div>
          <img src="../assets/images/screens/caribbean-min.png">
        </div>
        <div>
          <img src="../assets/images/screens/classy-min.png">
        </div>
        <div>
          <img src="../assets/images/screens/default-min.png">
        </div>
        <div>
          <img src="../assets/images/screens/nouvelleBlanc-min.png">
        </div>
        <div>
          <img src="../assets/images/screens/nouvelleNoir-min.png">
        </div>
        <div>
          <img src="../assets/images/screens/healthy-min.png">
        </div>
        <div>
          <img src="../assets/images/screens/cyberpunk-min.png">
        </div>
      </div>
      <div class="carousel-buttons not-on-mobile">
        <button class="icon-btn" @click="mySiema.prev()">
          <fa :icon="['far', 'arrow-left']"/>
        </button>
        <button class="icon-btn" @click="mySiema.next()">
          <fa :icon="['far', 'arrow-right']"/>
        </button>
      </div>
    </div>
    <div class="contact-text card">
      To request a demo or find out how you can get Tap Menu in your restaurant, reach us at
      <a
        href="mailto:contact@tapmenu.ca"
        target="_top"
      >contact@tapmenu.ca</a>.
    </div>
  </div>
</template>
<script>
import Siema from "siema";
export default {
  data() {
    return {
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
      // draggable: true,
      // multipleDrag: true,
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
p {
  text-align: center;
}
.carousel-buttons {
  display: flex;
  justify-content: space-between;
}
.icon-btn {
  margin: 20px;
  background-color: #555;
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
.contact-text {
  padding: 30px;
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
  margin: 30px 0;
}
</style>

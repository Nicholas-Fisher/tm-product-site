<template>
  <div class="home">

    <div class="large-text">Order from your table with your phone.</div>

    <div class ="video-outer webm">
      <div class="video-container webm-container">
        <video autoplay muted loop>
          <source src="../assets/videos/slim.webm" type="video/webm">Your browser does not support HTML5 video.
        </video>
      </div>
    </div>

    <div class="reasons">
      <div class="reason-block">
        <div class="big">
          <div class="icon-container"><fa :icon="['far', 'concierge-bell']"/></div>
          <span>No need to wait</span>
        </div>
        <div class="small">
          Just tap your phone to the NFC card or enter the code shown at
          <span
            class="site"
          >tapmenu.app</span>. From there you can order food instantly without waiting for a server.
        </div>
      </div>
      <div class="reason-block">
        <div class="big">
          <div class="icon-container"><fa :icon="['far', 'search']"/></div>
          <span>Get more information</span>
        </div>
        <div
          class="small"
        >See pictures of the food you're interested in, or other tidbits like their calorie content and portion size.</div>
      </div>
      <div class="reason-block">
        <div class="big">
          <div class="icon-container"><fa :icon="['far', 'check']"/></div>
          <span>See what you care about</span>
        </div>
        <div
          class="small"
        >Use filters to see just the menu items you care about based on parameters like price and calories, or categories like vegetarian and halal.</div>
      </div>
      <div class="reason-block">
        <div class="big">
          <div class="icon-container"><fa :icon="['far', 'mobile-android']"/></div>
          <span>Pay through your phone</span>
        </div>
        <div
          class="small"
        >Pay and leave at your leisure without waiting for service and handling payment machines.</div>
      </div>
      <div class="reason-block">
        <div class="big">
          <div class="icon-container"><fa :icon="['far', 'comments']"/></div>
          <span>Chat with the restaurant</span>
        </div>
        <div
          class="small"
        >Request napkins, water refills, give feedback, or ask questions about the food easily through the app.</div>
      </div>
      <div class="reason-block">
        <div class="big">
          <div class="icon-container"><fa :icon="['far', 'smile']"/></div>
          <span>Simple and easy</span>
        </div>
        <div class="small">No sign up or app download required. It just works!</div>
      </div>
    </div>
    <div class="splash-image-outer">
      <div class="splash-image-container">
        <img class="splash-image" alt="Splash Image" src="../assets/images/tap-menu-min.png">
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
</style>

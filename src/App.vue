<template>
  <div id="app">
    <div id="nav">
      <div class="nav-inner">
        <img class="logo" alt="logo" src="./assets/images/logo.png">
        <div class="nav-links not-on-mobile">
          <router-link to="/home">
            <span>For Guests</span>
          </router-link>
          <router-link to="/restaurants">
            <span>For Restaurants</span>
          </router-link>
          <router-link to="/demo">
            <span>Demo</span>
          </router-link>
          <router-link to="/contact">
            <span>Contact us</span>
          </router-link>
        </div>
      </div>
    </div>
    <router-view class="router-view"/>
    <div class="footer">&copy; Tap Menu {{new Date().getFullYear()}}</div>
    <div class="nav-control mobile-only" :class="{'full': isFullNav}">
      <div class="nav-dimmer" @click="isFullNav = false"/>
      <div class="nav-touchable">
        <button class="nav-btn" @click="isFullNav = !isFullNav">
          <div class="label" v-show="!isFullNav">
            <fa :icon="['far', 'bars']"/>
          </div>
          <div class="label" v-show="isFullNav">
            <fa :icon="['far', 'times']"/>
          </div>
        </button>
        <router-link to="/home" class="nav-btn">
          <div class="label">
            <span>For Guests</span>
          </div>
        </router-link>
        <router-link to="/restaurants" class="nav-btn">
          <div class="label">
            <span>For Restaurants</span>
          </div>
        </router-link>
        <router-link to="/demo" class="nav-btn">
          <div class="label">
            <span>Demo</span>
          </div>
        </router-link>
        <router-link to="/contact" class="nav-btn">
          <div class="label">
            <span>Contact us</span>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "app",
  data() {
    return {
      isFullNav: false
    };
  },
  watch: {
    $route(to, from) {
      this.$data.isFullNav = false;
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    }
  }
};
</script>
<style lang="scss">

// Normalize:
/*! normalize.css v8.0.0 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}

@import "./scss/_globals.scss";

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
.router-view {
  position: relative;
  top: $nav-height;
  margin-bottom: $nav-height;
  min-height: calc(100vh - #{$nav-height * 2});
  max-width: $max-width;
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
    &.router-link-active {
      color: #5ab;
    }
  }
}
#nav {
  position: fixed;
  z-index: 100;
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
    &:hover {
      opacity: 0.65;
    }
    > span {
      padding: 0 20px;
    }
    &.router-link-active {
      color: #5ab;
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
  .router-view {
    position: initial;
    top: 0;
    margin-bottom: 0;
    min-height: 0;
  }
}
</style>

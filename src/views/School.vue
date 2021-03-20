<template>
  <div class="button-list">
    <img class="logo-row" alt="logo" src="../assets/images/school-min.png" />
      <a class="std-btn" href="https://firebasestorage.googleapis.com/v0/b/table-tap.appspot.com/o/manualUploads%2Fpdfs%2FWeekdayAllDay_SCHOOLNov182020.pdf?alt=media&token=f4604eb5-16a0-4427-944f-37f3e39ef8d0" download>
        <div class="big-text">Food PDF</div>
        <fa :icon="['fad', 'file-pdf']" />
      </a>
      <a class="std-btn" href="https://firebasestorage.googleapis.com/v0/b/table-tap.appspot.com/o/manualUploads%2Fpdfs%2FSCHOOLDrinkMenu.pdf?alt=media&token=e88c0262-f6e8-4931-9dbd-78c3ee28434f" download>
        <div class="big-text">Drink PDF</div>
        <fa :icon="['fad', 'file-pdf']" />
      </a>
    <!-- <a class="std-btn digital-menu-btn" href="https://tapmenu.app/?c=PZZ">
      <div class="big-text">View the Digital Menu</div>
      <div class="small-text" v-text="'Interactive full menu with pictures'" />
      <fa :icon="['fad', 'mobile']" />
    </a> -->
    <div class="info"> Want digital menus at your place? Check us out at <a href="https://tapmenu.ca">https://tapmenu.ca</a></div>
  </div>
</template>

<style lang="scss" scoped>
$btn-margin: 15px;
.button-list {
  position: relative;
  top: $btn-margin/2;
  height: calc(100% - #{$btn-margin});
  width: calc(100% - #{$btn-margin});
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 500px;
  .info {
    text-align: center;
  }
}
.logo-row {
  height: 100px;
  padding: $btn-margin * 2;
}
.digital-menu-btn {
  flex: 1 1 auto;
}
.std-btn {
  border-radius: 20px;
  background: #ffffff;
  box-shadow: 20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff;
  width: calc(100% - #{$btn-margin * 2});
  margin: $btn-margin;
  @include flex-center();
  flex-direction: column;
  color: #333;
  text-decoration: none;
  padding: 20px;
  svg {
    margin-top: 20px;
    font-size: 90px;
    color: #399;
  }
  .big-text {
    font-family: b;
    text-transform: uppercase;
    font-size: 30px;
  }
}
</style>

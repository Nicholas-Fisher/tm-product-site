<template>
  <div class="center">
    <div class="card">
      <p>
        To request a demo or find out how you can get Tap Menu in your restaurant, reach us at
        <a href="mailto:contact@tapmenu.ca" target="_top">contact@tapmenu.ca</a>.
      </p>
      <p>Alternatively, use the form below.</p>
      <div class="form-container">
        <form action="https://formspree.io/contact@tapmenu.ca" method="POST">
          <div class="form-pair">
            <div class="label">Name</div>
            <input type="text" name="Name" required />
          </div>
          <div class="form-pair">
            <div class="label">Email</div>
            <input type="email" name="Email" required />
          </div>
          <div class="form-pair">
            <div class="label">Message</div>
            <textarea rows="5" name="Message" required />
          </div>
          <input class="std-btn" type="submit" value="SEND" />
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
p {
  max-width: 400px;
  text-align: center;
}
.form-container {
  display: flex;
  justify-content: center;
}
form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.form-pair {
  .label {
    font-family: h;
    margin: 20px 0 5px 0;
  }
  &:first-child .label {
    margin-top: 10px;
  }
  input,
  textarea {
    min-width: 200px;
  }
}
.std-btn {
  background-color: #7aa;
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
</style>

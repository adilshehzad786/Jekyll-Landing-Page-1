<div id="contact" class="modal">
  <div class="form__contact">
    <h1 class="uppercase white">Let's talk!</h1>
    <form id="ajax-contact" method="post" action="mailer.php">
      <div class="group__input--float">
        <input class="input--float" type="text" id="name" name="name" required>
        <span class="input--highlight"></span>
        <span class="input--bar"></span>
        <label>Name?</label>
      </div>
      <div class="group__input--float">
        <input class="input--float" type="text" id="email" name="email" required>
        <span class="input--highlight"></span>
        <span class="input--bar"></span>
        <label>Email?</label>
      </div>
      <div class="group__input--float">
        <textarea class="input--float" type="text" required rows="2" id="message" name="message"></textarea>
        <span class="input--highlight"></span>
        <span class="input--bar"></span>
        <label>What's going on?</label>
      </div>
      <button class="button button--contact" type="submit">Message me</button>
    </form>
    <div id="form-messages" class="form--success"></div>
  </div>
</div>

<?php include("assets/includes/head.php"); ?>
  <body>
    <main>
      <div class="grid-container full sky">
        <?php include("assets/includes/home-header.php"); ?>


<!-- ABOUT --------------------------------------------------------------->
<!----------------------------------------------------------------------->
        <section id="about" class="padding--offset content--padding">
          <div class="grid-x grid-padding-x grid-container">
            <div class="large-6 cell text-center about__photo">
              <img src="assets/img/about-photo-blue.png" alt="At the aquarium">
            </div>
            <div class="large-6 cell">
              <p class="white text-left larger"><span class="big-first-letter">H</span>owdy. My name is Matt Trice and I am a designer that loves to make cool stuff. My focus is on visual web design, UI &amp; UX design, and good ol fashioned illustration, print, and logo design.<br><br><a href="#contact">Let's work on a project</a>.</p>
              <ul class="text-left social-icons">
                <li><a href="https://dribbble.com/trice" title="Follow me on Dribbble"><img src="assets/img/icon-dribbble.svg" alt="Dribbble"></a></li>
                <li><a href="https://www.linkedin.com/in/matt-trice-5053b325/" title="Serious as fuck"><img src="assets/img/icon-linkedin.svg" alt="LINKED FUCKING IN"></a></li>
                <li><a href="https://www.instagram.com/trice.design/" title="Follow me on Instagram"><img src="assets/img/icon-instagram.svg" alt="Instagram"></a></li>
                <!-- <li><a href="https://medium.com/@matttrice" target="_blank"><img src="assets/img/icon-medium.svg" alt="Medium"></a></li> note to self: publish more blog posts before un-commenting this... -->
              </ul>
            </div>
          </div>
        </section>


<!-- WORK ---------------------------------------------------------------->
<!----------------------------------------------------------------------->
        <section id="work" class="padding--offset content--padding">
          <section id="work--freshtix">
            <div class="grid-x grid-padding-x grid-container">
              <div class="cell hide-for-desktop show-for-tablet-mobile">
                <img src="assets/img/ft-2up-angled.png" class="freshtix__home">
              </div>
              <div class="large-6 cell z--1">
                <h1 class="work__header uppercase white">
                  <img src="/assets/img/freshtix-logo-white.png" alt="Freshtix" width="270" style="padding:12px 0" />
                  <span>Product Design, Mobile App Design, UI &amp; UX, Prototyping</span>
                </h1>
                <p class="larger">This project was a redesign and rebuild of their attendee check in app. As part of their free ticketing software, this app allows an event organizer to check in participants and provides the organizer with attendance data.</p>
                <a href="projects/freshtix/" class="white button--outline">Read Case Study</a>
              </div>
              <div class="large-6 cell show-for-desktop hide-for-tablet-mobile">
                <img src="assets/img/ft-2up-angled.png" class="freshtix__home">
              </div>
            </div>
          </section>

          <section id="work--robit">
            <div class="grid-x grid-padding-x grid-container">
              <div class="large-4 cell show-for-desktop hide-for-tablet-mobile">
                <img src="assets/img/robit-angled-mobile.png" class="robit-home__image" alt="Robit">
              </div>
              <div class="large-8 cell z--1 robit-home__desc--padding">
                <h1 class="work__header uppercase white">
                  <img src="/assets/img/robit-head-color-1.png" alt="Robit" width="60" /> ROBIT
                  <span>APP CONCEPT, PRODUCT DESIGN, UI &amp; UX, PROTOTYPE</span>
                </h1>
                <div class="cell hide-for-desktop show-for-tablet-mobile">
                  <img src="assets/img/robit-angled-mobile.png" class="robit-home__image">
                </div>
                <p class="white larger">Robit is an app that aims to introduce design thinking with board style organization. Being able to see where your idea sits in it’s creative lifecycle will help move it to completion.</p>
                <a href="projects/robit/" class="white button--outline">Read Case Study</a>
              </div>
            </div>
          </section>

          <section id="work--fintech">
            <div class="grid-x grid-padding-x grid-container">
              <div class="cell hide-for-desktop show-for-tablet-mobile">
                <img src="assets/img/fintech-2up-iso.png" class="fintech__home">
              </div>
              <div class="large-6 cell z--1">
                <h1 class="work__header uppercase white">
                  <img src="/assets/img/payscape-logo-white.svg" alt="Payscape" width="240" style="padding:12px 0" />
                  <span>Website Design, UI &amp; UX, WordPress Design</span>
                </h1>
                <p class="white larger">Payscape is an Atlanta based Financial Technology company that provides small to mid-size business owners with financial technologies that allow them to accept payments, streamline their business, and increase cash flow.</p>
                <a href="projects/fintech/" class="white button--outline">Read Case Study</a>
              </div>
              <div class="large-6 cell show-for-desktop hide-for-tablet-mobile">
                <img src="assets/img/fintech-2up-iso.png" class="fintech__home">
              </div>
            </div>
          </section>

          <div class="grid-x grid-padding-x">
            <div class="large-12 cell" style="text-align:center;">
              <a href="https://dribbble.com/trice" title="Follow me on Dribbble" class="desktop white button--outline"><img src="assets/img/icon-dribbble.svg" style="width: 48px; padding: 12px 12px 12px 0;">More work at Dribbble</a>
            </div>
          </div>
        </section>

<!-- OCEAN --------------------------------------------------------------->
<!----------------------------------------------------------------------->

        <section id="ocean" class="section__padding-bottom--zero">
          <div class="clouds-03">
            <img src="/assets/img/cloud-big-foreground-01.svg" alt="" width="2500" height="305" />
          </div>
          <div class="cloud__foreground--bigger"></div>
          <div class="ocean">
            <!-- Ocean element img here -->
            <div class="wave-5">
              <div class="wave-4">
                <img src="assets/img/wave-4.svg" alt="Ride the wave" width="100%">
              </div>
            </div>
          </div>
        </section>

      </div><!-- div class="grid-container full sky" -->
      <?php include("assets/includes/ocean.php"); ?>
      <?php include("assets/includes/contact.php"); ?>
      <?php include("assets/includes/global.php"); ?>
      <!-- Scroll on homepage only -->
      <script src="assets/js/scroll.js"></script>
      </main>
    </body>
  </html>

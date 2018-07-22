<?php include("assets/includes/head-gsap.php"); ?>
  <body>
    <main>
      <div class="grid-container full sky">
        <?php include("assets/includes/home-header.php"); ?>


<!-- ABOUT --------------------------------------------------------------->
<!----------------------------------------------------------------------->
        <section id="about" class="padding--offset content--padding">
          <div class="grid-x grid-padding-x">
            <div class="cloud__background--smaller01"></div>
            <div class="large-6 cell text-center about__photo">
              <img src="assets/img/about-photo-blue.png">
            </div>
            <div class="large-6 cell">


              <div id="demo">
  <div id="logo"></div>
</div>


              <p class="white text-left"><span class="big-first-letter">H</span>owdy. My name is Matt Trice and I am a designer living in Atlanta. My focus is on visual web design, UI &amp; UX design, and some of the more traditional disciplines such as illustration, print, and logo design. I love a good challenge and that payoff of the A-HA! moment.<br><br>You can find me here and Dribbble. I’m always interested in fun projects and cool opportunities <a href="#contact">so don’t be shy</a>.</p>
              <ul class="text-left social-icons">
                <li><a href="https://dribbble.com/trice" target="_blank"><img src="assets/img/icon-dribbble.svg"></a></li>
                <li><a href="https://www.linkedin.com/in/matt-trice-5053b325/" target="_blank"><img src="assets/img/icon-linkedin.svg"></a></li>
                <!-- <li><a href="https://medium.com/@matttrice" target="_blank"><img src="assets/img/icon-medium.svg"></a></li> -->
              </ul>
            </div>
          </div>
        </section>


<!-- WORK ---------------------------------------------------------------->
<!----------------------------------------------------------------------->
        <section id="work" class="padding--offset content--padding">
          <section id="work--freshtix">
            <div class="grid-x grid-padding-x">
              <div class="cell hide-for-desktop show-for-tablet-mobile">
                <img src="assets/img/ft-2up-angled.png" class="freshtix__home">
              </div>
              <div class="large-6 cell z--1">
                <h1 class="work__header uppercase">Freshtix<br><span>Product Design, Mobile App Design, UI &amp; UX, Prototyping</span></h1>
                <!-- <p>Freshtix makes is easier to sell tickets online with their free ticketing software. "Easily register and sell tickets online or at the door. Freshtix enables anyone to post, promote, and track event registration."</p> -->
                <p>This project was a redesign and rebuild of their attendee check in app. As part of their free ticketing software, this app is admin facing. The purpose of this app is to allow an event organizer to check in attendees by either scanning their ticket’s QR code or manually checking them in through the app’s search function.</p>
                <a href="projects/freshtix/" class="button button--work">Read Case Study</a>
              </div>
              <div class="large-6 cell show-for-desktop hide-for-tablet-mobile">
                <img src="assets/img/ft-2up-angled.png" class="freshtix__home">
              </div>
            </div>
          </section>

          <section id="work--fintech">
            <div class="grid-x grid-padding-x">
              <div class="cell hide-for-desktop show-for-tablet-mobile">
                <img src="assets/img/fintech-2up-iso.png" class="fintech__home">
              </div>
              <div class="large-6 cell z--1">
                <h1 class="work__header uppercase">Fintech Website<br><span>Visual Design, UX Design, WordPress</span></h1>
                <p>Payscape is an Atlanta based Financial Technology company that offers a suite of FinTech solutions for companies of all sizes. "Our dedication to payment technology and industry innovation is consistent; our mission is clear: to make it simple for business owners to collect money."</p>
                <a href="projects/fintech/" class="button button--work">Read Case Study</a>
              </div>
              <div class="large-6 cell show-for-desktop hide-for-tablet-mobile">
                <img src="assets/img/fintech-2up-iso.png" class="fintech__home">
              </div>
            </div>
          </section>

          <!-- <section id="work--regdash">
            <div class="grid-x grid-padding-x">
              <div class="cell hide-for-desktop show-for-tablet-mobile">
                <img src="assets/img/mockup-macbook-dashboard.png" class="registration__home">
              </div>
              <div class="large-6 cell z--1">
                <h1 class="work__header">Registration Dashboard<br><span>SaaS Registration</span></h1>
                <h3 class="work__sub-header">Visual Design, UI &amp; UX, Prototyping</h3>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis.</p>
                <a href="projects/regdash/" class="button button--work">Read Case Study</a>
              </div>
              <div class="large-6 cell show-for-desktop hide-for-tablet-mobile">
                <img src="assets/img/mockup-macbook-dashboard.png" class="registration__home">
              </div>
            </div>
          </section> -->
        </section>


<!-- OCEAN --------------------------------------------------------------->
<!----------------------------------------------------------------------->
<div class="container">
<img src="http://trice.design/assets/img/wave-4.svg" alt="" width="1500" height="300" />
</div>
<script src='http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>
<script src='https://cdnjs.cloudflare.com/ajax/libs/gsap/1.16.1/TweenMax.min.js'></script>

        <section id="ocean" class="section__padding-bottom--zero">
          <div class="cloud__foreground--bigger"></div>
          <div class="ocean">
            <!-- Ocean element img here -->

            <div class="wave-6">
              <div class="wave-5">
                <div class="wave-4"></div>
              </div>
            </div>

        </section>

      </div><!-- div class="grid-container full sky" -->
      <?php include("assets/includes/ocean.php"); ?>
      <?php include("assets/includes/contact.php"); ?>
      <?php include("assets/includes/global-gsap.php"); ?>
      <!-- Scroll on homepage only -->
      <script src="assets/js/scroll.js"></script>
      </main>
    </body>
  </html>

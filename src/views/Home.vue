<template>
  <div>
    <!-- ======= Header ======= -->
    <header id="header" class="fixed-top d-flex align-items-center">
      <div class="container d-flex align-items-center">
        <div class="logo mr-auto">
          <h1 class="text-light">
            <a href="#"><span>Karani</span></a>
          </h1>
          <!-- Uncomment below if you prefer to use an image logo -->
          <!-- <a href="index.html"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>-->
        </div>

        <nav class="nav-menu d-none d-lg-block">
          <ul>
            <li class="active"><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><router-link :to="{ name: 'login' }">Login</router-link></li>

            <li class="get-started">
              <router-link :to="{ name: 'signup' }">Sign Up</router-link>
            </li>
          </ul>
        </nav>
        <!-- .nav-menu -->
      </div>
    </header>
    <!-- End Header -->

    <!-- ======= Hero Section ======= -->
    <section id="hero" class="d-flex align-items-center">
      <div class="hero-cont">
        <div class="row">
          <div
            class="col-lg-3 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center"
          >
            <h1 data-aos="fade-up">Blockchain Land Registry</h1>
            <h2 data-aos="fade-up" data-aos-delay="400">
              Using blockchain technology to secure land transactions.
            </h2>

            <a class="btn btn-get-started mr-5" href="https://bob.africa/2020/04/06/deep-dive-karani-tech-blockchain-land-registry-for-kenya/" target="_blank" >How and Why?</a>

          </div>
          <div
            class="col-lg-9 order-1 order-lg-2 hero-img"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <img
              src="/home-assets/img/part6.svg"
              class="img-fluid animated"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
    <!-- End Hero -->

    <main id="main">
      <!-- ======= About Us Section ======= -->
      <section id="about" class="about">
        <div class="container">
          <div class="section-title" data-aos="fade-up">
            <h2>About Us</h2>
          </div>

          <div class="row content">
            <div class="col-lg-6" data-aos="fade-up" data-aos-delay="150">
              <p>
                Karani is a land registry system powered by blockchain
                technology.
              </p>
              <ul>
                <li>
                  <i class="ri-check-double-line"></i> Decentralised Trust
                </li>
                <li><i class="ri-check-double-line"></i> Sovreign Identity</li>
                <li>
                  <i class="ri-check-double-line"></i> Verifiable Transactions
                </li>
                <li>
                  <i class="ri-check-double-line"></i> Transparent Processes
                </li>
              </ul>
            </div>
            <div
              class="col-lg-6 pt-4 pt-lg-0"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <p>
                All land transactions are now secured on a distributed ledger
                (DLT) offering non-repudiation and a secure environment for all
                your land transactions.
              </p>
              <a
                target="_blank"
                href="https://github.com/landsavvy/sahihi"
                class="btn-learn-more"
                >Learn More</a
              >
            </div>
          </div>
        </div>
      </section>
      <!-- End About Us Section -->

      <!-- ======= Services Section ======= -->
      <section id="services" class="services">
        <div class="container">
          <div class="section-title" data-aos="fade-up">
            <h2>Services</h2>
          </div>

          <div class="row">
            <div
              class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0"
            >
              <div class="icon-box" data-aos="fade-up" data-aos-delay="100">
                <div class="icon"><i class="fas fa-exchange-alt"></i></div>
                <h4 class="title"><a href="">Title Transfers</a></h4>
                <p class="description">
                  Authorise title transfers using your digital signature
                </p>
              </div>
            </div>

            <div
              class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0"
            >
              <div class="icon-box" data-aos="fade-up" data-aos-delay="200">
                <div class="icon"><i class="fas fa-search"></i></div>
                <h4 class="title"><a href="">Title Search</a></h4>
                <p class="description">
                  Verify ownership by exploring our records on the distributed
                  ledger
                </p>
              </div>
            </div>

            <div
              class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0"
            >
              <div class="icon-box" data-aos="fade-up" data-aos-delay="300">
                <div class="icon"><i class="fas fa-cut"></i></div>
                <h4 class="title"><a href="">Title Subdivision</a></h4>
                <p class="description">
                  Authorise subdivision of your land, and have the record stored
                  on the blockchain
                </p>
              </div>
            </div>

            <div
              class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0"
            >
              <div class="icon-box" data-aos="fade-up" data-aos-delay="400">
                <div class="icon"><i class="fas fa-user-shield"></i></div>
                <h4 class="title"><a href="">Digital Identity</a></h4>
                <p class="description">
                  All transactions are secured using your public-private key
                  pair. To ensure authenicity of transactions
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- End Services Section -->

      <!-- ======= F.A.Q Section ======= -->
      <section id="faq" class="faq">
        <div class="container">
          <div class="section-title" data-aos="fade-up">
            <h2>Frequently Asked Questions</h2>
          </div>

          <div
            class="row faq-item d-flex align-items-stretch"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div class="col-lg-5">
              <i class="ri-question-line"></i>
              <h4>What is blockchain?</h4>
            </div>
            <div class="col-lg-7">
              <p>
                Blockchain is a distributed ledger (a type of diary or
                spreadsheet) containing information about transactions which are
                secured cryptographically. Meaning that once something is
                recorded on the blockchain it cannot be changed or removed.
              </p>
            </div>
          </div>
          <!-- End F.A.Q Item-->

          <div
            class="row faq-item d-flex align-items-stretch"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div class="col-lg-5">
              <i class="ri-question-line"></i>
              <h4>How do I get started?</h4>
            </div>
            <div class="col-lg-7">
              <p>
                See our user guide here to help you register and use our
                platform.
                <router-link :to="{ name: 'userHelp' }">User Guide</router-link>
              </p>
            </div>
          </div>
          <!-- End F.A.Q Item-->

          <div
            class="row faq-item d-flex align-items-stretch"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div class="col-lg-5">
              <i class="ri-question-line"></i>
              <h4>What is a digital signature?</h4>
            </div>
            <div class="col-lg-7">
              <p>
                A Digital Signature is a mathematical technique used to validate
                the authenticity and integrity of of a digital document, they
                are like electronic “fingerprints.”
              </p>
            </div>
          </div>
          <!-- End F.A.Q Item-->
          <div
            class="row faq-item d-flex align-items-stretch"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div class="col-lg-5">
              <i class="ri-question-line"></i>
              <h4>How do I view and verify data on the Blockchain?</h4>
            </div>
            <div class="col-lg-7">
              <p>
                You can use our open source tool - <b>Sahihi</b> available
                <a
                  target="_blank"
                  href="https://github.com/landsavvy/sahihi"
                  class="btn-learn-more"
                  >here</a
                >
                to view and verify blocks on the blockchain. Sahihi can also be
                used to digitally sign documents and should be made available by
                your legal counsel.
              </p>
            </div>
          </div>
          <!-- End F.A.Q Item-->
          <div
            class="row faq-item d-flex align-items-stretch"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div class="col-lg-5">
              <i class="ri-question-line"></i>
              <h4>How do you contact us?</h4>
            </div>
            <div class="col-lg-7">
              <p>
                If you have any query please do not hesitate to contact us. See
                our contact information <a href="#contact">below</a>
              </p>
            </div>
          </div>
          <!-- End F.A.Q Item-->
        </div>
      </section>
      <!-- End F.A.Q Section -->

      <!-- ======= Contact Section ======= -->
      <section id="contact" class="contact">
        <div class="container">
          <div class="section-title" data-aos="fade-up">
            <h2>Contact Us</h2>
          </div>

          <div class="row">
            <div
              class="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div class="contact-about">
                <h3>Karani</h3>
                <p>Using blockchain technology to secure land transactions.</p>
              </div>
            </div>

            <div
              class="col-lg-3 col-md-6 mt-4 mt-md-0"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div class="info">
                <div>
                  <i class="ri-team-line"></i>
                  <p>By<br /><ul><li>Bob Kimani</li><li>Peninah Naserian</li></ul></p>
                </div>

                <div>
                  <i class="ri-mail-send-line"></i>
                  <p>
                    <ul>
                      <li><a href="mailto:dev@bob.africa">dev@bob.africa</a></li>
                      <li><a href="mailto:peshnase@gmail.com">peshnase@gmail.com</a></li>
                    </ul>
                  </p>

                </div>

              </div>
            </div>

            <div
              class="col-lg-5 col-md-12"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <form
                action="forms/contact.php"
                method="post"
                role="form"
                class="php-email-form"
              >
                <div class="form-group">
                  <input
                    type="text"
                    name="name"
                    class="form-control"
                    id="name"
                    placeholder="Your Name"
                    data-rule="minlen:4"
                    data-msg="Please enter at least 4 chars"
                  />
                  <div class="validate"></div>
                </div>
                <div class="form-group">
                  <input
                    type="email"
                    class="form-control"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    data-rule="email"
                    data-msg="Please enter a valid email"
                  />
                  <div class="validate"></div>
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                    data-rule="minlen:4"
                    data-msg="Please enter at least 8 chars of subject"
                  />
                  <div class="validate"></div>
                </div>
                <div class="form-group">
                  <textarea
                    class="form-control"
                    name="message"
                    rows="5"
                    data-rule="required"
                    data-msg="Please write something for us"
                    placeholder="Message"
                  ></textarea>
                  <div class="validate"></div>
                </div>
                <div class="mb-3">
                  <div class="loading">Loading</div>
                  <div class="error-message"></div>
                  <div class="sent-message">
                    Your message has been sent. Thank you!
                  </div>
                </div>
                <div class="text-center">
                  <button type="submit">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <!-- End Contact Section -->
    </main>
    <!-- End #main -->

    <!-- ======= Footer ======= -->
    <footer id="footer">
      <div class="container">
        <div class="row d-flex align-items-center">
          <div class="col-lg-6 text-lg-left text-center">
            <div class="copyright">
              &copy; Copyright <strong>Karani</strong>. All Rights Reserved
            </div>
            <!-- <div class="credits"> -->
            <!-- All the links in the footer should remain intact. -->
            <!-- You can delete the links only if you purchased the pro version. -->
            <!-- Licensing information: https://bootstrapmade.com/license/ -->
            <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/vesperr-free-bootstrap-template/ -->
            <!-- Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a> -->
            <!-- </div> -->
          </div>
          <div class="col-lg-6">
            <nav class="footer-links text-lg-right text-center pt-2 pt-lg-0">
              <a href="#intro" class="scrollto">Home</a>
              <a href="#about" class="scrollto">About</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Use</a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
    <!-- End Footer -->

    <a href="#" class="back-to-top"><i class="icofont-simple-up"></i></a>
  </div>
</template>

<script>
export default {
  mounted() {},
};
</script>

<style scoped>
@import "../../public/home-assets/vendor/icofont/icofont.min.css";
@import "../../public/home-assets/vendor/remixicon/remixicon.css";
@import "../../public/home-assets/vendor/boxicons/css/boxicons.min.css";

@import "../../public/home-assets/vendor/venobox/venobox.css";

@import "../../public/home-assets/vendor/aos/aos.css";
@import "../../public/home-assets/css/style.css";
@import url("https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i");
</style>

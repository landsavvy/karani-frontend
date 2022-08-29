<template>
  <div class="body">
    <section class="py-0">
      <div class="container-fluid">
        <div class="row justify-content-between">
          <!-- navigation -->
          <aside class="col-lg-3 col-xxl-2 doc-sidebar">
            <div class="sticky is_stuck left-bar">
              <div>
                <router-link :to="{ name: '' }" class="navbar-brand mx-3"
                  ><i class="fas fa-map-marker-alt"></i
                  ><span class="badge badge-green ml-2"
                    >Karani Help Page</span
                  ></router-link
                >
                <button
                  class="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="navbar-toggler-icon"></span>
                </button>
              </div>
              <nav class="navbar navbar-vertical navbar-expand-lg navbar-light">
                <div
                  class="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul id="page-nav" class="nav flex-column nav-vertical-2">
                    <li class="nav-item active">
                      <a
                        class="nav-link"
                        data-toggle="collapse"
                        href="#menu-1"
                        role="button"
                        aria-expanded="true"
                        aria-controls="menu-1"
                        >Registration</a
                      >
                      <div
                        class="collapse show"
                        id="menu-1"
                        data-parent="#page-nav"
                      >
                        <ul class="nav flex-column">
                          <li class="nav-item">
                            <a class="nav-link active" href="#section-signup">Sign Up</a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" href="#section-keySubmission">Public Key Sumbission</a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link"
                        data-toggle="collapse"
                        href="#menu-2"
                        role="button"
                        aria-expanded="false"
                        aria-controls="menu-2"
                        >Search</a
                      >
                      <div class="collapse" id="menu-2" data-parent="#page-nav">
                        <div>
                          <ul class="nav flex-column">
                            <li class="nav-item">
                              <a class="nav-link" href="#section-submitSearch">Submiting a Search</a>
                            </li>
                            <li class="nav-item">
                              <a class="nav-link" href="#section-searchResults">Search Results</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link"
                        data-toggle="collapse"
                        href="#menu-3"
                        role="button"
                        aria-expanded="false"
                        aria-controls="menu-3"
                        >Title Transfer</a
                      >
                      <div class="collapse" id="menu-3" data-parent="#page-nav">
                        <div>
                          <ul class="nav flex-column">
                            <li class="nav-item">
                              <a class="nav-link" href="#section-submitTransfer">Submitting Transfer</a>
                            </li>
                            <li class="nav-item">
                              <a class="nav-link" href="#section-transferResults">Tranfer Results</a>
                            </li>

                          </ul>
                        </div>
                      </div>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link"
                        data-toggle="collapse"
                        href="#menu-4"
                        role="button"
                        aria-expanded="false"
                        aria-controls="menu-4"
                        >Block Chain</a
                      >
                      <div class="collapse" id="menu-4" data-parent="#page-nav">
                        <div>
                          <ul class="nav flex-column">
                            <li class="nav-item">
                              <a class="nav-link" href="#section-blockSearch">Block Search</a>
                            </li>
                            <li class="nav-item">
                              <a class="nav-link" href="#section-blockVerify">Block Verify</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link"

                        href="#section-contactus"
                        role="button"

                        >Contact Us</a
                      >

                    </li>
                    <li class="nav-item">
                      <router-link
                        class="help-exit"
                        data-toggle="collapse"
                        :to="{name:'userHome'}"
                        role="button"
                        aria-expanded="false"
                        aria-controls="menu-4"
                        >Exit Help</router-link
                      >

                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </aside>
          <!-- / navigation -->

          <!-- content -->
          <article class="col-lg-9 col-xxl-10 doc-content">
            <div class="row justify-content-between doc-content-body">
              <article class="col-md-9 col-xxl-8">
                <h1 class="h2 font-weight-light">
                  Hi, use the menu on the right and on the left to navigate
                  through our <b>User Guide.</b>
                </h1>
                <hr />
                <!-- typogrpahy -->
                <section id="section-signup">
                  <h2 class="section-title-2">
                    Registration

                  </h2>

                  <p>
                    To use karani services, you are required to register on the
                    platform. Click on the link below to register, details such
                    as your ID number and other personal information will be
                    required.
                    <router-link :to="{ name: 'signup' }"
                      >Registration Link</router-link
                    >
                  </p>

                  <img
                    class="tut-image"
                    src="/doc_files/user/signup.png"
                    alt=""
                  />
                  <h3 id="section-keySubmission">Public Key Sumbission</h3>
                  <p>Using our open-source tool <a href="https://github.com/landsavvy/sahihi" target="_blank" rel="noopener noreferrer"> Sahihi</a> . Create a Private-Public key pair using the Keygen Menu.


                  Once created upload your public key here <router-link :to="{ name: 'keySubmission' }"
                      >Public Key Sumbission Link</router-link></p>
                    <div class="alert alert-danger" role="alert">
                        <h4>Tip</h4>
                        <p>
                         NEVER share your PRIVATE KEY with anyone.
                        </p>
                        <i class="icon-alert-circle"></i>
                      </div>
                    <br>
                  <img
                    class="tut-image"
                    src="/doc_files/user/keygen.png"
                    alt=""
                  />
                </section>
                <!-- / typography -->

                <!-- colors -->
                <section id="section-submitSearch">
                  <h2 class="section-title-2">
                    Search

                  </h2>
                  <p>
                    Submit Title Searches, on Karani
                    <router-link :to="{ name: 'userTitleSearch' }"
                      >here.</router-link
                    >Once Submitted you will get a page showing a block chain
                    confirmation.
                  </p>
                  <h3 id="section-searchResults">Search Results</h3>
                  <p>
                    To view the results of the search, navigate to
                    <router-link :to="{ name: 'userSearchResults' }">
                      search results.</router-link
                    >
                    Download the respective documents:
                    <ul>
                      <li>Title Deed</li>
                      <li>Search Certificate</li>
                      <li>Survey Map</li>
                    </ul>
                  </p>

                  <img
                    class="tut-image"
                    src="/doc_files/user/searchResults.png"
                    alt=""
                  />
                </section>
                <!-- / colors -->

                <!-- file tree -->
                <section id="section-submitTransfer">
                  <h2 class="section-title-2">
                    Title Transfer

                  </h2>
                  <p>
                    Title Transfers are secured using your private key, meaning one can only transfer land with a matching private key. Hence the importance of keeping your private key securely. Use the <a href="https://github.com/landsavvy/sahihi" target="_blank" rel="noopener noreferrer"> Sahihi</a> tool to authorise a land/title transfer. The file will create a transfer document.
                  </p>
                 <img
                    class="tut-image"
                    src="/doc_files/user/transferSahihi.png"
                    alt=""
                  />
                  <p>
                    Once the file is created upload it here:<router-link :to="{ name: 'userTransfer' }">
                      Submit Transfer</router-link
                    >
                  </p>
                  <h3 id="section-transferResults">Transfer Results</h3>
                  <p>Then get the reference number from this page <router-link :to="{ name: 'transferResults' }">
                      Transfer Results</router-link
                    ><br>
                    The transfer refrence number will be needed in the meeting with the land control board. Kindly schedule with the respective local registrar office, to attend the land control board meeting.</p>
                    <p>
                      The next process involves, the Land Control Board and Land Registrar approving the transfer. Once the transfer is approved the status of the transfer will change to approved
                    </p>
                </section>
                <!-- / file tree -->


                <!-- block tree -->
                <section id="section-blockSearch">
                  <h2 class="section-title-2">
                    BlockChain

                  </h2>
                  <p>
                    Blockchain is a distributed ledger (a type of diary or spreadsheet) containing information about transactions which are secured cryptographically. Meaning that once something is recorded on the blockchain it cannot be changed or removed.
                  </p>
                  <h3>Block Search</h3>
                  <p>Use our <a href="https://github.com/landsavvy/sahihi" target="_blank" rel="noopener noreferrer"> Sahihi</a> tool to explore the blockchain and search for particular blocks</p>
                 <img
                    class="tut-image"
                    src="/doc_files/user/blockSearch.png"
                    alt=""
                  />

                  <h3 id="section-blockVerify">Block Verify</h3>
                  <p>Using <a href="https://github.com/landsavvy/sahihi" target="_blank" rel="noopener noreferrer"> Sahihi</a>, search for a block. Then click verify block. The Verify block buttons confirms the cryptographic signatures of the peers on the Karani blockchain network. You can try to change the block data part of the block and see how this affects the verification. Any edit from the orginal block, will result in a fail of the verification signatures.</p>
                    <img
                    class="tut-image"
                    src="/doc_files/user/blockVerify.png"
                    alt=""
                  />
                </section>
                <!-- / file tree -->


                <!-- lists -->
                <section id="section-contactus">
                  <h2 class="section-title-2">
                    Contact Us

                  </h2>
                  <p>
                    If you have any questions, please do not hesitate to contact us using on of the channels below
                  </p>
                  <div class="row">
                    <div class="col-md-6 col-xxl-4">
                      <ul class="list-group list-group-lines">
                        <li
                          class="list-group-item d-flex align-items-center boxed"
                        >
                          <i class="icon-check2 mr-2 text-primary fs-24"></i>
                          <b>Bob Kimani</b>
                        </li>
                        <li class="list-group-item d-flex align-items-center">
                          <i class="icon-check2 mr-2 text-primary fs-24"></i>
                          <a href="mailto:dev@bob.africa">dev@bob.africa</a>
                        </li>
                      </ul>
                    </div>
                    <div class="col-md-6 col-xxl-4">
                      <ul class="list-group list-group-lines">
                        <li class="list-group-item d-flex align-items-center">
                          <i class="icon-check2 mr-2 text-primary fs-24"></i>
                          <b>Peninah Naserian</b>
                        </li>
                        <li class="list-group-item d-flex align-items-center">
                          <i class="icon-check2 mr-2 text-primary fs-24"></i>
                          <a href="mailto:peshnase@gmail.com">peshnase@gmail.com</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>
                <!-- / lists -->
              </article>

              <aside class="col-md-3 col-xxl-3 d-none d-md-block">
                <div
                  class="sticky is_stuck"
                  style="position: fixed; top: 0px; width: 223.85px;padding-top:40px;"
                >
                  <ul id="toc" class="nav flex-column toc">
                    <li class="nav-item">
                      <a data-scroll="" class="nav-link" href="#section-signup"
                        >Sign Up</a
                      >
                    </li>
                    <li class="nav-item">
                      <a data-scroll="" class="nav-link" href="#section-keySubmission"
                        >Public Key Sumbission</a
                      >
                    </li>
                    <li class="nav-item">
                      <a data-scroll="" class="nav-link" href="#section-submitSearch"
                        >Submitting A Search</a
                      >
                    </li>
                    <li class="nav-item">
                      <a data-scroll="" class="nav-link" href="#section-searchResults"
                        >Search Results</a
                      >
                    </li>
                    <li class="nav-item">
                      <a data-scroll="" class="nav-link" href="#section-submitTransfer"
                        >Submitting Transfer</a
                      >
                    </li>
                    <li class="nav-item">
                      <a data-scroll="" class="nav-link" href="#section-transferResults"
                        >Transfer Results</a
                      >
                    </li>
                    <li class="nav-item">
                      <a data-scroll="" class="nav-link" href="#section-blockSearch"
                        >Block Search</a
                      >
                    </li>
                    <li class="nav-item">
                      <a data-scroll="" class="nav-link" href="#section-blockVerify"
                        >Block Verification</a
                      >
                    </li>
                    <li class="nav-item">
                      <a data-scroll="" class="nav-link" href="#section-contactus"
                        >Contact Us</a
                      >
                    </li>

                  </ul>
                </div>
                <div
                  style="
                    position: static;
                    width: 223.85px;
                    height: 368px;
                    display: block;
                    vertical-align: baseline;
                    float: none;
                  "
                ></div>
              </aside>
            </div>
          </article>
          <!-- / content -->
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
/* @import url("../../../public/doc_files/vendor.css"); */
/* @import url("../../../public/doc_files/doc.css"); */
/* @import url("../../../public/doc_files/styles.css"); */
.help-exit {
  background: #ff7d7d;
  color: white;
  display: block;
  border-right: 2px solid transparent;
  border-right-width: 2px;
  border-right-style: solid;
  border-right-color: transparent;
  padding: 0.5rem 1rem;
}
.help-exit:hover {
  background: rgb(255, 65, 65);
  color: white;
}
.nav .nav-link {
  -webkit-transition: all 0.2s;
  -moz-transition: all 0.2s;
  transition: all 0.2s;
  -webkit-transition-delay: 0s;
  -moz-transition-delay: 0s;
  transition-delay: 0s;
  display: inline-block;
  color: #999999;
}
.nav .nav-link.active {
  color: #111111;
}
.nav .lavalamp-object {
  display: none;
  z-index: 1;
}

.nav-pills {
  display: inline-flex;
  background: #e5e5e5;
  border-radius: 0.25rem;
  padding: 2px;
}
.nav-pills .nav-link {
  text-transform: uppercase;
  font-size: 0.875rem;
  font-weight: 600;
  color: #999;
}
.nav-pills .nav-link.active {
  background: transparent;
}
.nav-pills .lavalamp-object {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  background: #fff;
  border-radius: 0.25rem;
}

.nav-tabs .nav-link {
  border: 0;
}

.nav-tabs .nav-link.active,
.nav-tabs .nav-item.show .nav-link {
  background-color: transparent;
}

.nav-tabs .lavalamp-object {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  background: transparent;
  border-bottom: 2px solid #064cdb;
  border-radius: 0;
}
.body {
  background: #f8f8f8;
}

.doc-content-header {
  margin-left: -($card-spacer-x / 2);
  margin-right: -($card-spacer-x / 2);
  margin-bottom: $grid-gutter-width;
  padding: $grid-gutter-width / 2;
  border-bottom: $border-width solid $border-color;

  @include media-breakpoint-up(lg) {
    margin-bottom: 0;
    padding: $card-spacer-x 3.125rem;
  }

  @include media-breakpoint-down(md) {
    border-top: $border-width solid $border-color;
    background: $white;
  }

  .breadcrumb {
    margin: 0;
    padding: 0;
    border: 0;
  }
}

.doc-sidebar {
  padding: 0;
  padding-top: 50px;
  border-right: 1px solid #e5e5e5;
}

.doc-content-header {
  margin-left: -15px;
  margin-right: -15px;
  margin-bottom: 30px;
  padding: 15px;
  border-bottom: 1px solid #e5e5e5;
}
@media (min-width: 992px) {
  .doc-content-header {
    margin-bottom: 0;
    padding: 30px 3.125rem;
  }
}
@media (max-width: 991.98px) {
  .doc-content-header {
    border-top: 1px solid #e5e5e5;
    background: #fff;
  }
}
.doc-content-header .breadcrumb {
  margin: 0;
  padding: 0;
  border: 0;
}

.doc-content-body {
  margin-top: 0 !important;
}
.doc-content-body > article {
  padding: 15px;
}
.doc-content-body > aside {
  padding: 15px;
  border-left: 1px solid #e5e5e5;
}
@media (min-width: 992px) {
  .doc-content-body > article {
    padding: 3.125rem;
  }
  .doc-content-body > aside {
    padding: 3.125rem 30px;
  }
}
.doc-content-body .toc {
  margin-left: -30px;
  margin-right: -30px;
}

.toc .nav-link {
  -webkit-transition: all 0.2s;
  -moz-transition: all 0.2s;
  transition: all 0.2s;
  -webkit-transition-delay: 0s;
  -moz-transition-delay: 0s;
  transition-delay: 0s;
  position: relative;
  width: 100%;
  color: #999999;
  font-size: 0.875rem;
  border-left: 2px solid transparent;
  padding: 0.5rem 30px;
}
.toc .nav-link:hover {
  color: #000;
  border-color: #adb5bd;
}
.toc .nav-link.active {
  color: #064cdb;
  border-color: #064cdb;
}
.toc .nav-link.active + ul {
  display: block;
}

.toc ul {
  border-left: 2px solid #064cdb;
  display: none;
  padding-left: 30px;
}
.toc ul .nav-link {
  font-size: 0.875rem;
  border-color: #e5e5e5;
}
/* nav :start */
.nav-vertical-2 .nav-link:hover {
  background: rgba(0, 0, 0, 0.05);
}
.nav-vertical-2 .nav .nav-link.active {
  color: #064cdb;
}
.nav-vertical-2 .nav .nav-link {
  padding: 0.5rem 1.25rem 0.5rem 1.875rem;
  font-size: 0.875rem;
  color: #555555;
}
.nav-vertical-2 .nav-link {
  color: #000;
  display: block;
  border-right: 2px solid transparent;
  border-right-width: 2px;
  border-right-style: solid;
  border-right-color: transparent;
}
/* end nav css */
.left-bar {
  position: fixed;
  top: 0;
  padding-top: 3em;
}
#page-nav {
  width: 15em;
}
@media (min-width: 992px) {
  .navbar .dropdown-menu.show {
    animation: dropdown 0.2s ease forwards;
  }
}

@keyframes dropdown {
  0% {
    opacity: 0;
    transform: translateY(1rem);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.nav {
  position: relative;
}
.nav .nav-item {
  display: inline-block;
}
.fa-map-marker-alt {
  font-size: 3em;
}
.tut-image {
  margin: 1em 0em;
  width: 100%;
}
section > h3 {
  padding-top: 1em;
}
</style>

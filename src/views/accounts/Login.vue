<template>
  <div class="container">
    <!-- Outer Row -->
    <div class="row justify-content-center">
      <div class="col-xl-10 col-lg-12 col-md-9">
        <div class="card o-hidden border-0 shadow-lg my-5">
          <div class="card-body p-0">
            <!-- Nested Row within Card Body -->
            <div class="row">
              <div class="col-lg-6 d-none d-lg-block bg-login-image"></div>
              <div class="col-lg-6">
                <div class="p-5">
                  <div class="text-center">
                    <h1 class="h4 text-gray-900 mb-4">Welcome Back!</h1>
                  </div>
                  <form class="user">
                    <div class="form-group">
                      <input
                        type="email"
                        v-model="user.email"
                        class="form-control form-control-user"
                        id="exampleInputEmail"
                        aria-describedby="emailHelp"
                        placeholder="Enter Email Address..."
                      />
                    </div>
                    <div class="form-group">
                      <input
                        type="password"
                        v-model="user.password"
                        class="form-control form-control-user"
                        id="exampleInputPassword"
                        placeholder="Password"
                      />
                    </div>
                    <div class="form-group">
                      <div class="custom-control custom-checkbox small">
                        <input
                          type="checkbox"
                          class="custom-control-input"
                          id="customCheck"
                        />
                        <label class="custom-control-label" for="customCheck"
                          >Remember Me</label
                        >
                      </div>
                    </div>
                    <div
                      @click="login"
                      class="btn btn-primary btn-user btn-block"
                    >
                      Login
                    </div>
                    <hr />
                    <router-link
                      :to="{ name: 'signup' }"
                      class="btn btn-google btn-user btn-block"
                    >
                      Signup, Create an Account!
                    </router-link>
                  </form>
                  <hr />
                  <div class="text-center">
                    <router-link class="small" :to="{ name: 'home' }"
                      >Home</router-link
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
    };
  },
  mounted() {
    //check redirects
    this.redirect();
  },
  methods: {
    async redirect() {
      console.log("Role", state.user.role);
      if (state.user.role == "user") {
        return this.$router.push({ name: "userHome" });
      }
      if (state.user.role == "registrar") {
        return this.$router.push({ name: "adminHome" });
      }
      if (state.user.role == "board") {
        return this.$router.push({ name: "adminHome" });
      }
    },
    async login() {
      this.errors = [];
      this.loading = true;
      try {
        var response = await this.$axios.post(config.url.user.login, {
          user: this.user,
        });
      } catch (ex) {
        console.error(ex);
        this.loading = false;
        return;
      }

      let errors = response.data.errors;
      this.errors = errors;
      if (this.errors.length != 0) {
        this.loading = false;
        return;
      }

      console.log(errors);
      state.authToken = response.data.token;
      if (state.authToken && state.authToken != "") {
        await local.saveToken(state.authToken);

        if (state.user.role != "user") {
          return this.$router.push({ name: "adminHome" });
        }
        return this.$router.push({ name: "userHome" });
      }
      this.loading = false;
    },
  },
};
</script>

<style scoped>
.bg-login-image {
  background: url("/img/juan4.jpg");
  background-size: cover;
}
</style>

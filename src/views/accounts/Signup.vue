<template>
  <div class="container">
    <!-- Outer Row -->
    <div class="row justify-content-center">
      <div class="col-xl-10 col-lg-12 col-md-9">
        <div class="card o-hidden border-0 shadow-lg my-5">
          <div class="card-body p-0">
            <!-- Nested Row within Card Body -->
            <div class="row">
              <div class="col-lg-5 d-none d-lg-block bg-register-image"></div>
              <div class="col-lg-7">
                <div class="p-5">
                  <div class="text-center">
                    <h1 class="h4 text-gray-900 mb-4">Create an Account!</h1>
                  </div>
                  <div class="errors">
                    <div v-for="error in errors" class="text-danger">
                      {{ error }}
                    </div>
                  </div>
                  <form class="user">
                    <div class="form-group row">
                      <div class="col-sm-6 mb-3 mb-sm-0">
                        <input
                          type="text"
                          v-model="user.firstName"
                          class="form-control form-control-user"
                          id="exampleFirstName"
                          placeholder="First Name"
                        />
                      </div>
                      <div class="col-sm-6">
                        <input
                          type="text"
                          v-model="user.lastName"
                          class="form-control form-control-user"
                          id="exampleLastName"
                          placeholder="Last Name"
                        />
                      </div>
                    </div>
                    <div class="form-group">
                      <input
                        type="number"
                        v-model="user.idNum"
                        class="form-control form-control-user"
                        id="exampleInputEmail"
                        placeholder="ID number"
                      />
                    </div>
                    <div class="form-group">
                      <input
                        type="email"
                        v-model="user.email"
                        class="form-control form-control-user"
                        id="exampleInputEmail"
                        placeholder="Email Address"
                      />
                    </div>
                    <div class="form-group row">
                      <div class="col-sm-6 mb-3 mb-sm-0">
                        <input
                          type="password"
                          v-model="user.password"
                          class="form-control form-control-user"
                          id="exampleInputPassword"
                          placeholder="Password"
                        />
                      </div>
                      <div class="col-sm-6">
                        <input
                          type="password"
                          v-model="user.confirm"
                          class="form-control form-control-user"
                          id="exampleRepeatPassword"
                          placeholder="Repeat Password"
                        />
                      </div>
                    </div>
                    <div
                      @click="signUp"
                      class="btn btn-primary btn-user btn-block"
                    >
                      Register Account
                    </div>
                    <hr />
                    <router-link
                      :to="{ name: 'login' }"
                      class="btn btn-google btn-user btn-block"
                    >
                      Already have an account? Login!
                    </router-link>
                  </form>
                  <hr />
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
      errors: [],
      user: {
        email: "",
        password: "",
        confirm: "",
        idNum: "",
        firstName: "",
        lastName: "",
      },
    };
  },
  methods: {
    async signUp() {
      console.log("sign up");
      this.loading = true;
      this.errors = [];
      try {
        var response = await this.$axios.post(config.url.user.signup, {
          user: this.user,
        });
      } catch (ex) {
        console.error(ex);
        this.loading = false;
        return;
      }

      let errors = response.data.errors;
      this.errors = errors;
      console.log(errors);
      if (this.errors.length != 0) {
        this.loading = false;
        return;
      }
      state.authToken = response.data.token;
      if (state.authToken && state.authToken != "") {
        //save token =
        await local.saveToken(state.authToken);
        return this.$router.push({ name: "userHome" });
      }
      this.loading = false;
    },
  },
};
</script>

<style scoped>
.bg-register-image {
  background: url("/img/juan5.jpg");
  background-size: cover;
}
</style>

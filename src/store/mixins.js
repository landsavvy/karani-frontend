import local from "./local";

const mixins = {
  methods: {
    print() {
      window.print();
    },
    async swalMessage(text) {
      swal({
        title: "Success",
        text,
        icon: "success",
        button: "Dismiss",
      });
    },
    async logout() {
      state = {
        authToken: "",
        user: {
          id: "",
          username: ""
        }
      }
      await local.removeToken()
      this.$router.push({ name: "login" })
    },
    translate,
    async waitForGoogle() {
      if (window.google) {
        return;
      }
      await sleep(1000);
      return this.waitForGoogle();
    },

  },
}
export default mixins

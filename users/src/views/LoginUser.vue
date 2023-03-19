<template>
  <div>
    <h2>Registro de usuário!</h2>
    <hr />

    <div class="columns is-centered">
      <div class="column is-half">
        <div v-if="error != undefined">
          <div class="notification is-danger">
            {{ error }}
          </div>
        </div>

        <hr />
        <button class="button is-success" @click="login">Login</button>
      </div>
    </div>
  </div>
</template>

<script>
//import axios from "axios";
export default {
  data() {
    return {
      password: "",
      email: "",
      error: undefined,
    };
  },
  methods: {
    login() {
      console.log("login");
    },
  },
};
</script>

<style scoped></style>

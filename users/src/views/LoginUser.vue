<template>
  <div>
    <h2>Registro de usuário!</h2>
    <p>E-mail</p>
    <input
      type="email"
      placeholder="email@email.com"
      class="input"
      v-model="email"
    />
    <p>Senha</p>
    <input
      type="password"
      placeholder="******"
      class="input"
      v-model="password"
    />
    <div class="columns is-centered">
      <div class="column is-half">
        <div v-if="error != undefined">
          <div class="notification is-danger">
            {{ error }}
          </div>
          <input
            type="email"
            placeholder="email@email.com"
            class="input"
            v-model="email"
          />
          <p>Senha</p>
          <input
            type="password"
            placeholder="******"
            class="input"
            v-model="password"
          />
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

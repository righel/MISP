<template>
  <form @submit.prevent="createUser">
    <legend>Admin Add User</legend>
    <fieldset>
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input
          type="email"
          class="form-control"
          id="email"
          placeholder="name@example.com"
          v-model="user.email"
          autocomplete="username"
          @blur="v$.user.email.$touch"
        />
        <div
          class="invalid-feedback d-block"
          v-for="error of v$.user.email.$errors"
          :key="error.$uid"
        >
          {{ error.$message }}
        </div>
      </div>
      <div class="mb-3 form-check">
        <label class="form-check-label" for="setPassword">Set password</label>
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="setPassword"
          v-model="setPassword"
        />
      </div>
      <div v-if="setPassword" class="row g-3">
        <div class="col">
          <label for="email" class="form-label">Password</label>
          <input
            type="password"
            class="form-control"
            id="password"
            autocomplete="new-password"
            v-model="user.password"
          />
        </div>
        <div class="col">
          <label for="email" class="form-label">Confirm Password</label>
          <input
            type="password"
            class="form-control"
            id="confirmPassword"
            autocomplete="new-password"
            v-model="confirmPassword"
          />
        </div>
      </div>
      <div class="mb-3">
        <label class="form-check-label" for="organisation">Organisation</label>
        <Organisations
          :id="'organisation'"
          :value="organisations"
          v-model:id="user.org_id"
        />
      </div>
      <div class="mb-3">
        <label class="form-check-label" for="organisation">Role</label>
        <Roles :id="'role'" :value="roles" v-model:id="user.role_id" />
      </div>
      <div class="mb-3">
        <label for="authKey" class="form-label">Authkey</label>
        <input
          type="text"
          class="form-control"
          id="authKey"
          readonly
          v-model="user.authkey"
        />
      </div>
      <div class="mb-3">
        <label for="nids_sid" class="form-label">NIDS SID</label>
        <input
          type="number"
          class="form-control"
          id="nids_sid"
          v-model="user.nids_sid"
        />
      </div>
      <div class="mb-3">
        <label class="form-check-label" for="organisation">Sync user for</label>
        <Servers :id="'server'" :value="servers" v-model:id="user.server_id" />
      </div>
      <div class="mb-3">
        <label for="gpgkey" class="form-label">PGP key</label>
        <textarea
          class="form-control"
          id="gpgkey"
          rows="5"
          placeholder="Paste the user's PGP key here or try to retrieve it from the CIRCL key server by clicking on 'Fetch PGP key' below."
          v-model="user.gpgkey"
        ></textarea>
      </div>
      <div class="mb-3 form-check">
        <label class="form-check-label" for="autoalert">
          Receive email alerts when events are published
        </label>
        <input
          class="form-check-input"
          type="checkbox"
          checked="checked"
          id="autoalert"
          v-model="user.autoalert"
        />
      </div>
      <div class="mb-3 form-check">
        <label class="form-check-label" for="contactalert">
          Receive email alerts from "Contact reporter" requests
        </label>
        <input
          class="form-check-input"
          type="checkbox"
          checked="checked"
          id="contactalert"
          v-model="user.contactalert"
        />
      </div>
      <div class="mb-3 form-check">
        <label class="form-check-label" for="disabled">
          Immediately disable this user account
        </label>
        <input
          class="form-check-input"
          type="checkbox"
          id="disabled"
          v-model="user.disabled"
        />
      </div>
      <div class="mb-3 form-check">
        <label class="form-check-label" for="notify">
          Send credentials automatically
        </label>
        <input
          class="form-check-input"
          type="checkbox"
          checked="checked"
          id="notify"
          v-model="user.notify"
        />
      </div>
    </fieldset>
    <div class="mb-3">
      <button
        :disabled="v$.user.$invalid"
        type="submit"
        class="btn btn-primary"
      >
        Create user
      </button>
    </div>
  </form>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import RandomMixin from "../../mixins/random";
import useVuelidate from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";
import Organisations from "../forms/select/Organisations";
import Roles from "../forms/select/Roles";
import Servers from "../forms/select/Servers";

export default {
  name: "Add",
  components: {
    Organisations,
    Roles,
    Servers,
  },
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      user: {
        authkey: this.randomString(40),
      },
      setPassword: false,
      confirmPassword: "",
    };
  },
  methods: {
    ...mapActions([
      "fetchOrganisations",
      "fetchRoles",
      "fetchServers",
      "addUser",
    ]),
    createUser() {
      // TODO: check password confirmation
      this.addUser(this.user).then(
        (response) => {
          console.log(response.data);
          this.$router.push({ name: "IndexUsers" });
        },
        (error) => {
          console.error(error.response.data);
        }
      );
    },
  },
  computed: mapGetters(["organisations", "roles", "servers"]),
  created() {
    this.fetchOrganisations("local");
    this.fetchRoles();
    this.fetchServers();
  },
  mixins: [RandomMixin],
  validations() {
    return {
      user: {
        email: {
          required,
          email,
        },
      },
    };
  },
};
</script>

<style scoped>
form {
  max-width: 500px;
  font-size: 14px;
}
</style>
<template>
  <div class="content">
    <!-- TODO pagination component -->
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item"><a class="page-link" href="#">Previous</a></li>
        <li class="page-item active"><a class="page-link" href="#">1</a></li>
        <li class="page-item"><a class="page-link" href="#">Next</a></li>
        <li class="page-item"><a class="page-link" href="#">Last</a></li>
      </ul>
    </nav>
    <table class="table table-striped table-responsive">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Org</th>
          <th scope="col">Role</th>
          <th scope="col">Email</th>
          <th scope="col">Authkey</th>
          <th scope="col">Event alert</th>
          <th scope="col">Contact alert</th>
          <th scope="col">PGP Key</th>
          <th scope="col">NIDS SID</th>
          <th scope="col">Terms Accepted</th>
          <th scope="col">Last Login</th>
          <th scope="col">Created</th>
          <th scope="col">Disabled</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr :key="user.User.id" v-for="user in users">
          <th scope="row">{{ user.User.id }}</th>
          <td>{{ user.Organisation.name }}</td>
          <td>{{ user.Role.name }}</td>
          <td>{{ user.User.email }}</td>
          <td>{{ user.User.authkey }}</td>
          <td><Boolean :value="user.User.autoalert" /></td>
          <td><Boolean :value="user.User.contactalert" /></td>
          <td><Boolean :value="user.User.gpgkey !== ''" /></td>
          <td>{{ user.User.nids_sid }}</td>
          <td><Boolean :value="user.User.termsaccepted" /></td>
          <td>{{ user.User.last_login }}</td>
          <td>{{ user.User.date_created }}</td>
          <td><Boolean :value="user.User.disabled" /></td>
          <td></td>
        </tr>
      </tbody>
    </table>
    <!-- TODO pagination component -->
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item"><a class="page-link" href="#">Previous</a></li>
        <li class="page-item active"><a class="page-link" href="#">1</a></li>
        <li class="page-item"><a class="page-link" href="#">Next</a></li>
        <li class="page-item"><a class="page-link" href="#">Last</a></li>
      </ul>
    </nav>
  </div>
</template>

<script>
import Boolean from "../generic/Boolean";
export default {
  name: "Index",
  components: { Boolean },
  props: {
    users: Array,
  },
};
</script>

<style scoped>
</style>
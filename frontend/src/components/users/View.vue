<template>
  <div class="row-fluid">
    <div class="span8" style="margin: 0px">
      <h2>User {{ user.User.email }}</h2>
      <table class="meta_table table table-striped table-condensed">
        <tbody>
          <tr>
            <td class="meta_table_key" title="">ID</td>
            <td class="meta_table_value">{{ user.User.id }}</td>
          </tr>
          <tr>
            <td class="meta_table_key" title="">Email</td>
            <td class="meta_table_value">{{ user.User.email }}</td>
          </tr>
          <tr>
            <td class="meta_table_key" title="">Organisation</td>
            <td class="meta_table_value">
              {{ user.Organisation.name }}
            </td>
          </tr>
          <tr>
            <td class="meta_table_key" title="">Role</td>
            <td class="meta_table_value">
              <Role :value="user.Role" />
            </td>
          </tr>
          <tr>
            <td class="meta_table_key" title="">Event alert enabled</td>
            <td class="meta_table_value">
              <Boolean :value="user.User.autoalert" />
            </td>
          </tr>
          <tr>
            <td class="meta_table_key" title="">Contact alert enabled</td>
            <td class="meta_table_value">
              <Boolean :value="user.User.contactalert" />
            </td>
          </tr>
          <tr>
            <td class="meta_table_key" title="">Auth key</td>
            <td class="meta_table_value">
              <AuthKey :value="user.User.authkey" />
            </td>
          </tr>
          <!-- <tr>
              <td class="meta_table_key" title="">Invited By</td>
              <td class="meta_table_value">N/A</td>
            </tr> -->
          <tr>
            <td class="meta_table_key" title="">NIDS Start SID</td>
            <td class="meta_table_value">{{ user.User.nids_sid }}</td>
          </tr>
          <tr>
            <td class="meta_table_key" title="">PGP key</td>
            <td class="meta_table_value">
              <PGPKey :value="user.User.gpgkey" />
            </td>
          </tr>
          <tr>
            <td class="meta_table_key" title="">Created</td>
            <td class="meta_table_value">
              <Time :value="user.User.date_created" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import Boolean from "../generic/Boolean";
import AuthKey from "../generic/AuthKey";
import PGPKey from "../generic/PGPKey";
import Time from "../generic/Time";
import Role from "../generic/Role";

export default {
  name: "View",
  components: {
    Boolean,
    AuthKey,
    PGPKey,
    Time,
    Role,
  },
  props: {
    user: Object,
  },
};
</script>

<style scoped>
</style>
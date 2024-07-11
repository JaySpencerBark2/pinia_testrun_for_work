<template>
  <v-app>
    <v-main>
      <v-row>
        <v-col cols="12">
          <h1>Pinia vuetify examples test</h1>
        </v-col>
      </v-row>
      <v-row>
        <HelloWorld />
      </v-row>
      <v-row>
        <CustsTable />
      </v-row>
      <v-row>
        <SupDataTable />
      </v-row>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import CustsTable from "./components/CustomerDataTable.vue";
import SupDataTable from "./components/SuppliersDataTable.vue";

export default {
  name: "App",

  components: {
    HelloWorld,
    CustsTable,
    SupDataTable,
  },

  data: () => ({
    //
  }),
};
</script>

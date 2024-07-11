<template>
  <v-container fluid>
    <v-row>
      <v-data-table
        :headers="headers"
        :items="storeCustomer.customers"
        hide-default-footer
      >
        <template v-slot:[`item.actions`]="{ item }">
          <v-btn
            small
            color="error"
            @click="storeCustomer.deleteCustomer(item)"
          >
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </template>
      </v-data-table>
    </v-row>
    <v-row>
      <v-btn color="primary" @click="openDialog">Add Customer</v-btn>
    </v-row>
  </v-container>
  <v-dialog v-model="showDialog">
    <v-card>
      <v-card-title> Add Customer </v-card-title>
      <v-card-text>
        <v-text-field label="Name" v-model="custs.custName"></v-text-field>
        <v-text-field
          label="Address"
          v-model="custs.custAddress"
        ></v-text-field>
        <v-text-field
          label="Post Code"
          v-model="custs.custPostCode"
        ></v-text-field>
        <v-text-field
          label="Contact Number"
          v-model="custs.custContactNumber"
        ></v-text-field>
        <v-text-field label="Email" v-model="custs.custEmail"></v-text-field>
        <v-text-field label="VAT Code" v-model="custs.custVat"></v-text-field>
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" @click="saveData">Save</v-btn>
        <v-btn color="primary">Cancel</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { useCustomerStore } from "@/stores/customer";
export default {
  data: () => ({
    headers: [
      { title: "Name", value: "custName" },
      { title: "Address", value: "custAddress" },
      { title: "Post Code", value: "custPostCode" },
      { title: "Contact Number", value: "custContactNumber" },
      { title: "Email", value: "custEmail" },
      { title: "VAT Code", value: "custVat" },
      { title: "", value: "actions" },
    ],
    showDialog: false,
    storeCustomer: useCustomerStore(),
    custs: {
      custName: null,
      custAddress: null,
      custPostCode: null,
      custContactNumber: null,
      custEmail: null,
      custVat: null,
    },
  }),

  methods: {
    openDialog() {
      this.showDialog = true;
    },
    saveData() {
      this.storeCustomer.addCustomer(this.custs);
      this.showDialog = false;
    },
  },
};
</script>

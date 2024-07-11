<template>
  <v-container fluid>
    <v-row>
      <v-data-table
        :headers="headers"
        hide-default-footer
        :items="storeSupplier.suppliers"
      >
        <template v-slot:[`item.actions`]="{ item }">
          <v-btn
            small
            color="error"
            @click="storeSupplier.deleteSupplier(item)"
          >
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </template>
      </v-data-table>
    </v-row>
    <v-row>
      <v-btn color="primary" @click="openDialog">Add Supplier</v-btn>
    </v-row>
  </v-container>
  <v-dialog v-model="showDialogSup">
    <v-card>
      <v-card-title> Add Supplier </v-card-title>
      <v-card-text>
        <v-text-field label="Name" v-model="suppliers.supName"></v-text-field>
        <v-text-field
          label="Address"
          v-model="suppliers.supAddress"
        ></v-text-field>
        <v-text-field
          label="Post Code"
          v-model="suppliers.supPostCode"
        ></v-text-field>
        <v-text-field
          label="Contact Number"
          v-model="suppliers.supContactNumber"
        ></v-text-field>
        <v-text-field label="Email" v-model="suppliers.supEmail"></v-text-field>
        <v-text-field
          label="VAT Code"
          v-model="suppliers.supVat"
        ></v-text-field>
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" @click="saveSupData">Save</v-btn>
        <v-btn color="primary">Cancel</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
import { useSupplierStore } from "@/stores/suppliers";

export default {
    setup(){
       const  storeSupplier = useSupplierStore();
        return {storeSupplier}
    },
  data: () => ({
    headers: [
      { title: "Name", value: "supName" },
      { title: "Address", value: "supAddress" },
      { title: "Post Code", value: "supPostCode" },
      { title: "Contact Number", value: "supContactNumber" },
      { title: "Email", value: "supEmail" },
      { title: "VAT Code", value: "supVat" },
      { title: "", value: "actions" },
    ],
    showDialogSup: false,
    suppliers: {
      supName: null,
      supAddress: null,
      supPostCode: null,
      supContactNumber: null,
      supEmail: null,
      supVat: null,
    },
  }),
  methods: {
    openDialog() {
      this.showDialogSup = true;
      console.log(this.storeSupplier.suppliers);
    },
    saveSupData() {
      this.storeSupplier.addSupplier(this.suppliers);
      this.showDialogSup = false;
    },
  },
};
</script>

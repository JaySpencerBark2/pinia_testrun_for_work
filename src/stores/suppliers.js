import { defineStore } from "pinia";

export const useSupplierStore = defineStore("suppliers", {
  state: () => ({
    suppliers: [],
  }),
  actions: {
    addSupplier(supplier) {
      this.suppliers.push(supplier);
    },
    deleteSupplier(index) {
      this.suppliers.splice(index, 1);
    },
  },
});

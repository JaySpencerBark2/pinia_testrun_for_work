import { defineStore } from "pinia";

//local storage way of saving data
// export const useCustomerStore = defineStore('custs', {
//     state: () => {
//         // Initialize the state from localStorage if available
//         const savedCustomers = localStorage.getItem('customers');
//         return { customers: savedCustomers ? JSON.parse(savedCustomers) : [] };
//       },
//     actions: {
//         addCustomer(customer) {
//             this.customers.push(customer);
//             // Save the updated customers to localStorage
//             localStorage.setItem('customers', JSON.stringify(this.customers));
//         }

//     },
// })

//local forage/indexed DB way

export const useCustomerStore = defineStore("custs", {
  state: () => ({
    // Initialize customers with an empty array; persisted state will be loaded automatically
    customers: [],
  }),
  actions: {
    addCustomer(customer) {
      this.customers.push(customer);
      // No need to manually save to localStorage; the persisted state plugin handles it
    },
    deleteCustomer(index) {
      this.customers.splice(index, 1);
    },
  },
});

/**
 * So we are ussing pinia-plugin-persistedstate-2 and a custom storage plugin to save the data to indexedDB
 * This is why we dont need to expressly say what storage to use in the store as its being handled by the plugin
 * So we are telling pinia I want to use this sotrage location now and we dont need to worry about it
 */

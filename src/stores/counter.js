import { defineStore } from 'pinia'

//a store acts like a class with behavior but is a reactive object that can be shared between components
//the store is defined with a name and an object with state, getters, and actions
//state is a function that returns an object with the initial state of the store
//getters is an object with functions that return derived state
//actions is an object with functions that can modify the state
//the store is exported to be used in components




//To put it short gettes are just computed values
//actions are just methods that can modify the state
//state is just the data that the store holds

export const useCounterStore = defineStore('counter', {
  state: () => {
    // Initialize state from localStorage if available
    const savedCount = localStorage.getItem('count');
    return { count: savedCount ? parseInt(savedCount, 10) : 0 }
  },
  actions: {
    increment() {
      this.count++;
      // Save the updated count to localStorage
      localStorage.setItem('count', this.count.toString());
    },
    decrement() {
      this.count--;
      // Save the updated count to localStorage
      localStorage.setItem('count', this.count.toString());
    },
    reset() {
      this.count = 0;
      // Save the updated count to localStorage
      localStorage.setItem('count', this.count.toString());
    },
    $reset() {
      this.count = 0;
      // Optionally, clear the count from localStorage or reset it to a default value
      localStorage.removeItem('count');
    }
  },
  getters: {
    // automatically infers the return type as a number
    doubleCount(state) {
      return state.count * 2
    },
    // the return type **must** be explicitly set
    doublePlusOne() {
      // autocompletion and typings for the whole store ✨
      return this.doubleCount + 1
    },
  },
})
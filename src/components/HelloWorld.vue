<template>
  <v-container>
    <v-row>
      <div>Current Count: {{ counter.count }}</div>
      &nbsp;
      <div>Getter Count: {{ counter.doubleCount }}</div>
      &nbsp;
      <div>Getter Count PlusOne !: {{ counter.doublePlusOne }}</div>
    </v-row>
    <v-row>
      <v-btn @click="counter.increment()">Increment</v-btn>
      <v-btn @click="counter.decrement()">Decrement</v-btn>
      <v-btn @click="counter.$reset()">Reset</v-btn>
    </v-row>
  </v-container>
</template>

<script setup>
import { useCounterStore } from "@/stores/counter";
// import { storeToRefs } from 'pinia'

const counter = useCounterStore();

//example of using storeToRefs which creates refs of every rteactive property in the store

// const counter = useCounterStore()

//creates refs for all reactive properties in the store
// const { count } = storeToRefs(counter)

// Destructure methods directly from the store
// const { increment, decrement, reset } = counter
</script>

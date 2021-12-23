<template>
  <div
    class="w-11/12 mt-12 sm:w-full flex-wrap mx-auto flex justify-around items-center"
  >
    <div
      @click="updateBit(i)"
      v-for="(b, i) in byte"
      :key="i"
      class="text-coolGray-600 self-end bg-coolGray-200 font-bold text-2xl px-3 py-2 hover:bg-orange-200 cursor-pointer rounded-md"
    >
      {{ b }}
    </div>
    <p
      class="w-full self-start mt-6 text-center font-bold text-white font-sans text-7xl"
    >
      {{ number }}
    </p>
  </div>
</template>
<script>
import Vue from "vue";
export default {
  data() {
    return {
      byte: [0, 0, 0, 0, 0, 0, 0, 0],
    };
  },
  computed: {
    number() {
      return parseInt(this.byte.join(""), 2);
    },
  },
  methods: {
    updateBit(i) {
      if (this.byte[i]) Vue.set(this.byte, i, 0);
      else Vue.set(this.byte, i, 1);
    },
  },
};
</script>

<template>
  <div class="w-full">
    <div
      class="
        sticky
        w-full
        text-center
        top-0
        h-10
        flex
        items-center
        justify-center
        bg-orange-600
      "
    >
      <strong class="font-mono text-1xl text-orange-200 font-light">
        <slot>Cộng trừ số nhị phân</slot>
      </strong>
    </div>
    <div class="w-full mx-auto sm:max-w-lg mt-9">
      <div class="w-full flex justify-around">
        <div
          v-for="(b, i) in byte1"
          :key="`byte1${i}`"
          @click="updateBit(byte1, i)"
          class="
            px-2
            py-2
            font-mono
            bg-coolGray-200
            rounded-md
            font-bold
            text-2xl text-coolGray-600
            mb-9
          "
        >
          {{ b }}
        </div>
      </div>
      <p class="font-bold ml-4 font-mono text-2xl text-coolGray-200">{{ sign }}</p>
      <div class="w-full flex justify-around mt-9">
        <div
          v-for="(b, i) in byte2"
          :key="`byte1${i}`"
          @click="updateBit(byte2, i)"
          class="
            px-2
            py-2
            font-mono
            bg-coolGray-200
            rounded-md
            font-bold
            text-2xl text-coolGray-600
          "
        >
          {{ b }}
        </div>
      </div>
      <div class="w-full my-9 py-0.5 bg-coolGray-200"></div>
      <div class="w-full flex justify-around mt-9">
        <div
          v-for="(b, i) in byte2"
          :key="`byte1${i}`"
          @click="updateBit(byte2, i)"
          class="
            px-2
            py-2
            font-mono
            bg-coolGray-200
            rounded-md
            font-bold
            text-2xl text-coolGray-600
          "
        >
          {{ b }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  data() {
    return {
      byte1: [0, 0, 0, 0, 0, 0, 0, 0],
      byte2: [0, 0, 0, 0, 0, 0, 0, 0],
      sign_: 1,
    };
  },
  computed: {
    sign() {
      return this.sign_ ? "+" : "-";
    },
    result() {
      let result = [0, 0, 0, 0, 0, 0, 0, 0];
      let reminder = 0;
      let i = 7;
      while(i >= 0) {
        let r = this.byte1[i] + this.byte2[i];
        if (r > 1){
          result[i] = 0;
          reminder = 1;
        }
        reminder
        i--;
      }
      return result;
    },
  },
  methods: {
    updateBit(byte, i) {
      Vue.set(byte, i, 1 - byte[i]);
    },
  },
};
</script>
<template>
  <div class="w-full">
    <div class="flex font-mono font-semibold justify-center items-baseline">
      <select
        v-model="type"
        class="
          bg-orange-300
          text-sky-600 text-right
          py-2
          w-auto
          px-2
          rounded-lg
        "
        name=""
        id=""
      >
        <option v-for="t in types" :value="t" :key="`option-${t}`">
          {{ t }}
        </option>
      </select>
      <span class="px-1 text-coolGray-800">a</span>
      <span class="px-1">=</span>
      <span
        :class="[
          'px-1',
          type === 'char' ? 'text-orange-700' : 'text-teal-800',
        ]"
        >{{ value }}</span
      >
      <span class="px-1">;</span>
    </div>
    <code class="w-full font-mono font-semibold text-coolGray-800 flex justify-center items-baseline mt-3">
      sizeof(a); <span class="text-emerald-800 mx-1">// {{ size }}</span>
    </code>
  </div>
</template>
<script>
export default {
  data() {
    return {
      types: ["char", "short", "int", "long long", "float", "double"],
      type: "char",
    };
  },
  computed: {
    value() {
      switch (this.type) {
        case "char":
          return ["'a'", "'b'", "'c'", "'d'", "'e'"][
            Math.floor(Math.random() * 3)
          ];
        case "float":
        case "double":
            return  (Math.random() * (7498 + 7498) - 7498).toFixed(3);
        default:
          return Math.floor(Math.random() * (32767 + 32768) - 32768);
      }
    },
    size() {
      switch (this.type) {
        case "char":
          return 1;
        case "short":
          return 2;
        case "int":
        case "float":
          return 4;
        case "long long":
        case "double":
          return 8;
        default:
          return 0;
      }
    },
  },
};
</script>
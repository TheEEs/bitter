<template>
  <div class="w-full flex flex-wrap">
    <code class="w-full text-center mt-7">
      a = [<template v-for="(v, i) in a">
        <span
          :key="`a${i}`"
          :class="[i == index ? 'bg-orange-200' : '', 'px-0.5']"
          >{{ v }}</span
        >
        <span v-if="i < a.length - 1" :key="`a-${i}`">,</span> </template
      >]
    </code>
    <code class="w-full text-center mt-4 mb-16">
      b = [<template v-for="(v, i) in b">
        <span :key="`b${i}`" :class="['px-0.5']">{{ v }}</span>
        <span v-if="i < b.length - 1" :key="`b-${i}`">,</span> </template
      >]
    </code>
    <section class="w-full flex justify-center self-end">
      <svg
        @click="addMax"
        xmlns="http://www.w3.org/2000/svg"
        class="h-12 w-12 text-orange-200"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4"
        />
      </svg>
    </section>
  </div>
</template>

<script>
import swal from "sweetalert";
export default {
  mounted() {
    this.index = this.a.indexOf(Math.min(...this.a));
    console.log(this.index);
  },
  data() {
    return {
      a: Array.from({ length: 10 }, () => Math.floor(Math.random() * 20)),
      b: [],
      index: -1,
    };
  },
  methods: {
    addMax() {
      if (!this.a.length) {
        swal({
          title: "Ví dụ đã hoàn tất",
          text: "Bạn có muốn bắt đầu lại",
          icon: "info",
          buttons: ["Chưa vội", "Ok"],
        }).then((ok) => {
          if (ok) {
            this.a = Array.from({ length: 10 }, () => Math.floor(Math.random() * 20))
            this.index = this.a.indexOf(Math.min(...this.a))
            this.b= []
          }
        });
        return;
      }
      const max = this.a.at(this.index);
      this.b.push(max);
      this.a.splice(this.index, 1);
      this.index = this.a.indexOf(Math.min(...this.a));
    },
  },
};
</script>

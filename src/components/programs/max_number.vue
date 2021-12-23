<template>
  <div class="flex flex-wrap h-5/6 mt-6">
    <section class="w-full flex flex-wrap">
      <code class="flex justify-around w-full">
        <span
          :class="[
            'px-1 rounded-md w-6 text-center py-2 mx-1',
            index == i ? 'bg-orange-700 text-orange-200' : 'bg-orange-200',
          ]"
          v-for="(n, i) in number"
          :key="i"
          >{{ n }}</span
        >
      </code>
      <code
        class="w-full text-center mt-10 mb-5 text-5xl font-bold font-mono text-orange-200"
      >
        max = {{ max }}
      </code>
    </section>
    <section class="w-full flex items-center justify-center text-orange-200">
      <svg
        @click="moveToNext"
        xmlns="http://www.w3.org/2000/svg"
        class="h-12 w-12"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </section>
  </div>
</template>

<script>
import swal from "sweetalert";
export default {
  mounted() {
    this.max = this.number[0];
  },
  data() {
    return {
      number: Array.from({ length: 10 }, () => Math.floor(Math.random() * 20)),
      max: 0,
      index: 0,
    };
  },
  methods: {
    moveToNext() {
        if(this.index == this.number.length -1){
            swal({
                title:"Ví dụ đã hoàn tất",
                text: "Bạn có muốn bắt đầu lại",
                icon: "info",
                buttons:[
                    "Chưa vội",
                    "Ok"
                ]
            }).then((ok) => {
                if(ok){
                    this.number = Array.from({ length: 10 }, () => Math.floor(Math.random() * 20));
                    this.index = 0
                    this.max = this.number[0]
                }
            })
            return;
        }
      if (this.number[++this.index] > this.max) {
        swal("Tìm thấy số lớn hơn max").then(() => {
          this.max = this.number[this.index];
        });
      }
    },
  },
};
</script>

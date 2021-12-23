<template>
  <div class="w-full">
    <Slide>
      <template v-slot:title> Hệ nhị phân </template>
      <template v-slot:description>
        "Mỗi bit dữ liệu trong máy tính chỉ thể hiện được một trong hai số
        <Badge>1</Badge> hoặc <Badge>0</Badge>. Các bit liền kề nhau, luôn phiên
        bật/tắt sẽ tạo ra những số khác nhau. Do đặc tính chỉ có 2 chữ số để
        biểu diễn giá trị, các số này được gọi là các
        <Badge>số nhị phân</Badge>"
      </template>
      <template v-slot:direction>
        Nhấn vào một bit bất kỳ để thay đổi giá trị của bit đó
      </template>
      <template v-slot:program>
        <SingleByte />
      </template>
    </Slide>
    <Slide>
      <template v-slot:default> Số có dấu và số không dấu </template>
      <template v-slot:title> Số có dấu và số không dấu </template>
      <template v-slot:description>
        "Với số không dấu, mọi bit đều được sử dụng để biểu diễn giá trị. Với số
        có dấu, nếu bit đầu tiên là <badge>1</badge>, số đó là số âm".
        <blockquote class="pl-4 text-gray-400 border-l-4 border-gray-400 mt-2">
          Để chuyển số âm sang số dương hoặc số dương sang số âm, ta thực hiện
          phép <badge>not</badge> và cộng kết quả của phép not với 1.
        </blockquote>
      </template>
      <template v-slot:direction>
        Nhấn vào một bit bất kỳ để thay đổi giá trị của bit đó
      </template>
      <template v-slot:program>
        <signed-byte />
      </template>
    </Slide>
    <Slide>
      <template v-slot:default> Tìm số lớn nhất </template>
      <template v-slot:title>Tìm số lớn nhất </template>
      <template v-slot:description>
        Tips: Dùng một biến <badge>a</badge> để chứa số lớn nhất. Nếu tìm được một số lớn hơn, ta sẽ gán số đó cho
        <badge>a</badge> 
      </template>
      <template v-slot:direction>
        Click vào mũi tên để thấy các bước tiếp theo
      </template>
      <template v-slot:program>
        <MaxNumber />
      </template>
    </Slide>
  </div>
</template>

<script>
import Slide from "./components/slide.vue";
import SingleByte from "./components/programs/byte.vue";
import SignedByte from "./components/programs/signed_byte.vue";
import MaxNumber from "./components/programs/max_number.vue"
import Badge from './components/supports/badge.vue';
export default {
  name: "App",
  components: {
    Slide,
    SingleByte,
    SignedByte,
    MaxNumber,
    Badge
  },
  data() {
    return {};
  },
};
</script>

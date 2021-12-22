<template>
  <div>
    <Slide>
    <template v-slot:title>
      Hệ nhị phân
    </template>
    <template v-slot:description>
      "Mỗi bit dữ liệu trong máy tính chỉ thể hiện được một trong hai số <Badge>1</Badge> hoặc <Badge>0</Badge>.
      Các bit liền kề nhau, luôn phiên bật/tắt sẽ tạo ra những số khác nhau"
    </template>
    <template v-slot:direction>
      Nhấn vào một bit bất kỳ để thay đổi giá trị của bit đó
    </template>
    <template v-slot:program>
      <SingleByte />
    </template>
  </Slide>
  <Slide>
    <template v-slot:title>
      Số có dấu và số không dấu
    </template>
    <template v-slot:description>
      "Với số không dấu, mọi bit đều được sử dụng để biểu diễn giá trị. Với số có dấu, bit đầu tiên được dùng để biểu diễn dấu"
    </template>
    <template v-slot:direction>
      Nhấn vào một bit bất kỳ để thay đổi giá trị của bit đó
    </template>
    <template v-slot:program>
      <signed-byte />
    </template>
  </Slide>
  </div>
  
</template>

<script>
import Slide from './components/slide.vue';
import SingleByte from "./components/programs/byte.vue"
import SignedByte from "./components/programs/signed_byte"
export default {
  name: "App",
  components: {
    Slide,
    SingleByte,
    SignedByte
  },
  data(){
    return {

    }
  }
};
</script>
<script>
import Byte from "./byte.vue";
export default {
  extends: Byte,
  components: {
    Byte,
  },
  computed: {
    number() {
      const v = this.byte.slice(1);
      const s = this.byte[0];
      if (s) {
        const flip = v.map((e) => 1 - e);
        return -(parseInt(flip.join(""), 2) + 1);
      } else {
        return parseInt(v.join(""), 2);
      }
    },
  },
};
</script>
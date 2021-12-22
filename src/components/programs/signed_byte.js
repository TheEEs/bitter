import Vue from "vue"
import Byte from "./byte.vue"

export default Vue.component("SignedByte",{
    extend: Byte,
    render: h => h(Byte)
})
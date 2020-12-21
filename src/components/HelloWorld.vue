<template>
  <UserData></UserData>
</template>

<script>
import axios from "axios";
import UserData from "@/components/UserData.vue";

export default {
  name: "HelloWorld",
  components: {
    UserData,
  },
  data() {
    return {
      datos: null,
    };
  },
  mounted() {},
};
</script>

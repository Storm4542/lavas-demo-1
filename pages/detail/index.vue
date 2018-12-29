<template>
  <div>
    <h1 @click="change">点击换书</h1>
    <p>type : {{type}}</p>
    <p>effect : {{pageTransitionEffect}}</p>
    {{book}}---{{price}}
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "detail",
  computed: {
    ...mapState("pageTransition", {
      pageTransitionEffect: state => state.effect,
      type: state => state.type
    }),
    ...mapState("test", {
      book: state => state.book,
      price: state => state.price
    })
  },
  created() {},
  methods: {
    ...mapMutations("pageTransition", ["setType", "setEffect"]),
    ...mapMutations("test", ["changeBookName", "changePrice"]),
    change() {
      this.changeBookName("西游记");
      this.changePrice("$1000");
    }
  }
};
</script>

<style>
</style>

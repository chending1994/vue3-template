<template>
  <div>
    <div>{{ count }}</div>
    <van-button @click="increment">增加</van-button>
    <div>
      <van-button type="primary" to="home">home</van-button>
    </div>
  </div>
</template>

<script>
import { reactive, onMounted, computed, toRefs, nextTick } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'about',
  components: {
  },
  setup() {
    const store = useStore();

    onMounted(() => {
      console.log('onMounted');
    })

    const count = computed(() => {
      return store.state.count
    })

    const increment = () => {
      store.commit('increment', {
        count: 1
      })
    };

    return {
      increment,
      count
    }
  }
}
</script>

<style>

</style>

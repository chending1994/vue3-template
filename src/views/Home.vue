<template>
  <div>
    <van-button @click="increment">增加</van-button>
    <div class="count">{{ count }}</div>
    <van-button @click="descrement">减少</van-button>
    <van-button type="primary" to="about">about</van-button>
  </div>
</template>

<script>
import { reactive, onMounted, computed, toRefs, nextTick } from 'vue'
import { getAgentList } from '@/api/home.js';
import { useStore } from 'vuex'

export default {
  name: 'home',
  components: {
  },
  setup() {
    const store = useStore()

    onMounted(() => {
      getAgentList({
        page: 1,
        pageSize: 10
      }).then(() => {
        console.log('getAgentList');
      })
    });

    const count = computed(() => {
      return store.state.count
    })
    
    const increment = () => {
      store.commit('increment', {
        count: 10
      })
    }

    const descrement = () => {
      store.commit('descrement', {
        count: 5
      })
    }

    return {
      increment,
      descrement,
      count
    }
  }
}
</script>

<style lang="scss" scoped>
.count {
  color: $main-color;
}
</style>

export default {
  increment(state, payload) {
    state.count += payload.count
  },
  descrement(state, payload) {
    state.count -= payload.count
  }
}
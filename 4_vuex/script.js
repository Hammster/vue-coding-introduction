// Creating the Store
const store = new Vuex.Store({
  // The state is a container for all values we
  // want to be handled by the store
  state: {
    count: 0
  },
  // Mutation handler
  // A mutation is when a variable changes this
  // is very close to the concept of setter
  // with the benefit of preventing race conditions!
  mutations: {
    increment (state) {
      state.count++
    },
    decrement (state) {
      state.count--
    }
  }
})

// make sure to call Vue.use(Vuex) if using a module system
// eg: require or import

// Vue Root Instance
new Vue({
  el: '#app',
  data: {
    message: 'Hello World from Vue!'
  },
  // This is important! The store has to be made available to the Vue instance
  store,
  template: 
  `<div>
    <div>Counter: {{$store.state.count}}</div>
    <button v-on:click="$store.commit('increment')">Add</button>
    <button v-on:click="$store.commit('decrement')">Remove</button>
  </div>`
})

new Vue({
  el: '#app',
  data: {
    myFavoriteFood: [
      'Roasted Chicken',
      'Hawaii Toast',
      'Borek',
      'Ćevapčići'
    ]
  },
  methods: {
    // ES6 Shorthand for
    // function alert () { code }
    alert (event) {
      // Native events - as pure as it gets
      console.log(event)
      alert('Tasty!')
    }
  },
  // Vue offers own attributes that are used when the V-DOM is generated, 
  // in the docs those are called directives

  // Most basic directives
  // v-for - Loops elements
  // v-if - conditional rendering
  // v-else - conditional rendering if the previous v-if sibling returned false
  // v-on:eventname - for example v-on:click, adds a event listener to this V-DOM element
  
  // <template> - is a blak container tag for advanced usage, normally to nest or group elements when using conditional rendering

  // Template literal
  template: 
  `<ul>
    <template v-for="food in myFavoriteFood">
      <li v-if="food != 'Borek'">{{food}}</li>
      <li v-else v-on:click="alert">{{food}}! Click me</li>
    </template>
  </ul>`
})
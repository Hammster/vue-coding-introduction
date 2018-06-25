// Example of a render function which is the result of
// parsing any template either by builder or run-time
new Vue({
  el: '#app',
  data: {
    message: 'Hello World from Vue!'
  },
  //template: '<p>{{message}}</p>'
  render(createElement) {
    return createElement(
      'p',
        {},
        [ this.message ]
    );
  }
})

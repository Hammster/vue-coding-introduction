const MenuComponent = Vue.component('MenuComponent', {
  props: [
    'items'
  ],
  data: function () {
    return {
      count: 0
    }
  },
  template: 
  `<div class="menu">
    <div>The Menu Component:</div>
    <ul>
      <li v-for="item in items">
        <a v-bind:href="item.link">{{item.title}}</a>
      </li>
    </ul>
  </div>`
})

new Vue({
  el: '#app',
  components: {
    MenuComponent
  },
  data: {
    menuItems: [
      {
        title: 'google',
        link: 'http://google.de'
      },
      {
        title: 'bing',
        link: 'https://www.bing.com/'
      },
      {
        title: 'duckduckgo',
        link: 'https://duckduckgo.com/'
      }
    ]
  },
  template: `
    <!-- Any template need exactly one root, you can wrap them in a div -->
    <!-- this is the perfect spot for appling a class to your component or app -->
    <div class="app">
      <menu-component v-bind:items="menuItems"></menu-component>
      <hr />
      <menu-component v-bind:items="menuItems.slice(0,1)"></menu-component>
      <hr />
      <menu-component v-bind:items="menuItems.slice(1,3)"></menu-component>
      <hr />
      Parsed Data:
      <pre v-text="menuItems"></pre>
    </div>
  `
})
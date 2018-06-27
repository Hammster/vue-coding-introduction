// Defining a Component Instance, this is also the instance Object you would export
// for modular loader.
const MenuComponent = Vue.component('MenuComponent', {
  // A parsed binding, these are meant to be read-only
  // if you want to have a local copy of them they can be accessed within data
  // Vue will only warn you via a console warning if you change them!
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
  // A component needs to be linked to a Vue instance.
  // the name is also corresponding the the tag you need 
  //to use to call the Component from within the template. 
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
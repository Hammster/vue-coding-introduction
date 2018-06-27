// Vue Root Instance
new Vue({
  // Root Element
  el: '#app',
  // Instanced Data (Adds reactive magic to the variable)
  // These are bound to this Vue Instance, or Vue Component instance
  data: {
    message: 'Hello World from Vue!'
  },
  // Template data, if this is not set it reads the content of #app.
  //
  // Variables can be accessed by using double curly brackets {{}}
  // everything inside the brackets is evaluated so you can also write 
  // JS inside of them.
  //
  // We use the Template literal style exlusive in this example repo, 
  // there are in fact 7 methods to use templates 
  // (https://vuejsdevelopers.com/2017/03/24/vue-js-component-templates/)
  //
  // To name them:
  // - String 
  //    - Parsing them via '' or ""
  //    - No multiline!
  // - Template literal 
  //    - Parsing them via backticks ``
  //    - Allows multiline!
  // - X-Templates 
  //    - <script type="text/x-template" id="template-name"></script>
  // - Inline 
  //    - Same as X-templates but placed in the HTML instead of script
  // - Render functions 
  //    - This uses a AST to generate the DOM, very advanced and this should be only used by tools)
  //    - For the curious i added a example in the extra_hello-world folder
  // - JSX  
  //    - Same as Template literal but without the need for backticks
  //    - A format that requires transpiling/building though a tool, since it is no JS standard
  // - Single page components  
  //    - A file that needs to be build it is seperated in template, script and style
  //    - Most widely used method!
  template: '<p>{{message}}</p>'
})
export default {
  h1:'Getting Started',
  description:'Vuesax is a library of vue js components that facilitates the frontend and streamlines the work with great visual quality.',
  codes:[
    {
      title:'Introduction',
      text:'We are excited that you are interested in contributing to Vuesax. Before submitting your contribution though, please make sure to take a moment and read through the following guidelines.',

    },
    {
      title:'Quick-start CDN',
      text:'Start a project quickly through cdn and let vuesax do the magic.',
    },
    {
      title:'Install in project NPM - YARN',
      text:"To install Vuesax, run the commands below in your project with npm and you're done!.",
      code:`
      # npm
      npm install vuesax


      # yarn
      yarn add vuesax
      `,
    },
    {
      title:'Use',
      text:'Vuesax is a vue js library. In order to use it, you have to add the code below:',
      code:`
      import Vue from 'vue'
      import Vuesax from 'vuesax'

      import 'vuesax/dist/vuesax.css' //vuesax styles
      Vue.use(Vuesax)`
    },
    {
      title:'Lusaxweb',
      text:'This library was created and is supported by <a href="http://www.lusaxweb.com/">Lusaxweb</a>',
    }
  ]
}

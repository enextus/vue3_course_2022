import {createApp} from 'vue'
import App from './App'

import components from '@/components/UI';

// console.log(components);

const app = createApp(App)

components.forEach(component => { // lambda or arrow function
  app.component(component.name, component) // register of each component in App and name comes from the component name
})

app.mount('#app')

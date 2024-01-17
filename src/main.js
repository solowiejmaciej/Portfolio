import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './plugins/router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser, faBook, faCodeBranch, faEnvelopeOpen, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUser, faBook, faCodeBranch, faEnvelopeOpen,faExclamationTriangle)
const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)

app.use(router).mount('#app')
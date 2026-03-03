/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Composables
import { createApp } from 'vue'
import { createPinia } from 'pinia'
// Plugins
import { registerPlugins } from '@/plugins'
import { router } from '@/router'
// Components
import App from './App.vue'

// Styles
import 'unfonts.css'

const app = createApp(App)

registerPlugins(app)
app.use(createPinia())
app.use(router)
app.mount('#app')

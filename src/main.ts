import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './assets/main.css'

import App from './App.vue'
import router from './router'
import { getHealth } from './services/api'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

// Confirma a comunicação com o Nest sem acrescentar dados à tela inicial.
void getHealth()
  .then((response) => console.info('AeroClima API:', response))
  .catch((error: unknown) => console.error('Não foi possível acessar a API:', error))

// src/main.js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css' // 加上 Tailwind 樣式

import GoogleLogin from 'vue3-google-login'

const app = createApp(App)

app.use(router)

app.use(GoogleLogin, {
  clientId: '224583412435-mr756gti6j05voqt73mfbfjaia6t4f7j.apps.googleusercontent.com'
})

// 綁定 Google 回傳處理函式（如果你有用 GSI button）
window.handleCredentialResponse = (response) => {
  console.log('🔥 Google 回傳 response:', response)
  alert('✅ 拿到 token：' + response.credential.slice(0, 30) + '...')
}

app.mount('#app')

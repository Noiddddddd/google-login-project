<template>
  <div class="flex items-center justify-center min-h-screen bg-pink-100">
    <div class="bg-white shadow-xl rounded-2xl p-10 w-[600px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <h2 class="text-2xl font-bold text-center text-pink-600 mb-6">我想睡覺 💖</h2>

      <form @submit.prevent="handleLogin" class="space-y-6">
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700">帳號</label>
          <input
            id="email"
            type="email"
            v-model="email"
            required
            class="text-black mt-1 w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-pink-400 focus:border-pink-400"
          />
        </div>

        <div>
          <label for="password" class="block text-sm font-medium text-gray-700">密碼</label>
          <input
            id="password"
            type="password"
            v-model="password"
            required
            class="text-black mt-1 w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-pink-400 focus:border-pink-400"
          />
        </div>
        <br>
        <button
          type="submit"
          class="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-xl transition"
        >
          登入
          
        </button>
        <div class="mt-4">
          <div
            id="g_id_onload"
            data-client_id="742225736851-duban4t1g73ouiv1t49lmotksuprh8ho.apps.googleusercontent.com"
            data-callback="handleCredentialResponse"
            data-auto_prompt="false"
          ></div>

          <div
            class="g_id_signin"
            data-type="standard"
            data-size="large"
            data-theme="outline"
            data-text="signin_with"
            data-shape="rectangular"
            data-logo_alignment="left"
          ></div>
        </div>
      </form>

      <div class="mt-6 text-center text-sm text-gray-600">
        還沒有帳號嗎？
        <button
          class="text-pink-500 hover:underline font-semibold"
        >
          註冊一個帳號
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

const router = useRouter()

const email = ref('')
const password = ref('')

const handleLogin = () => {
  console.log('帳號:', email.value)
  console.log('密碼:', password.value)
  alert('你按了登入（這裡可以接後端驗證功能）')
}

onMounted(() => {
  window.handleCredentialResponse = async (response) => {
    console.log('✅ Google 回傳:', response)
    const token = response.credential
    console.log('Google token:', token)

    try {
      const res = await axios.post('http://localhost:3000/auth/google', {
        token,
      })

      if (res.data.success) {
        alert('✅ 驗證信已寄出，請到 Gmail 收信！')
        localStorage.setItem('userEmail', res.data.email) 
        router.push('/verify')
      } else {
        alert('❌ 驗證失敗，請稍後再試')
      }
    } catch (err) {
      console.error(err)
      alert('🚨 發送失敗，後端連不上')
    }
  }

  if (window.google && window.google.accounts && window.google.accounts.id) {
    window.google.accounts.id.initialize({
      client_id: '742225736851-duban4t1g73ouiv1t49lmotksuprh8ho.apps.googleusercontent.com',
      callback: window.handleCredentialResponse,
    })

    window.google.accounts.id.renderButton(
      document.querySelector('.g_id_signin'),
      {
        theme: 'outline',
        size: 'large',
        type: 'standard',
      }
    )
  }
})
</script>
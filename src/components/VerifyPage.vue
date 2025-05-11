<template>
  <div class="flex items-center justify-center min-h-screen bg-pink-100">
    <div class="bg-white shadow-xl rounded-2xl p-8 w-[400px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <h2 class="text-2xl font-bold text-center text-pink-600 mb-4">請輸入你的驗證碼 ✉️</h2>

      <form @submit.prevent="submitCode" class="space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-700">驗證碼</label>
          <input
            type="text"
            v-model="code"
            required
            class=" text-black mt-1 w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-pink-400 focus:border-pink-400"
          />
        </div>
        <br>
        <button
          type="submit"
          class="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-xl transition"
        >
          確認驗證碼
        </button>
        
        <p class="text-center text-sm text-gray-500 mt-2">✉️ 驗證碼已寄到你的 Gmail，請去收信</p>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'

// 假設 email 是從登入頁帶過來的，這邊先手動寫死（之後改）
const email = 'test@example.com'
const code = ref('')

const submitCode = async () => {
  try {
    const res = await axios.post('http://localhost:3000/check-code', {
      email,
      code: code.value
    })

    if (res.data.success) {
      alert('✅ 驗證成功，登入完成！')
    } else {
      alert('❌ 驗證碼錯誤，請再試一次')
    }
  } catch (err) {
    alert('後端連線失敗！')
    console.error(err)
  }
}
</script>

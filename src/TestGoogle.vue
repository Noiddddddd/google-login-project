<!-- components/TestGoogle.vue -->
<template>
  <div class="flex items-center justify-center min-h-screen bg-pink-50">
    <div class="text-center space-y-4">
      <h1 class="text-xl font-bold text-pink-600">原生 Google 登入測試</h1>
      <div id="g_id_onload"
        data-client_id="64757400585-bt9oo0jp4q7u8jpahf5upsq4uibr579p.apps.googleusercontent.com"
        data-callback="handleCredentialResponse"
        data-auto_prompt="false">
      </div>

      <div class="g_id_signin"
        data-type="standard"
        data-size="large"
        data-theme="outline"
        data-text="signin_with"
        data-shape="rectangular"
        data-logo_alignment="left">
      </div>
    </div>
  </div>
</template>

<script setup>
// nothing here
</script>

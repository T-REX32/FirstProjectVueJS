<template>
    <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div class="bg-white p-8 rounded-lg w-96">
        <h2 class="text-2xl font-bold mb-4">Cadastre-se</h2>
        <form @submit.prevent="handleSubmit">
          <div class="mb-4">
            <label for="firstName" class="block mb-2">Nome</label>
            <input v-model="firstName" id="firstName" type="text" class="w-full border p-2 rounded" required>
          </div>
          <div class="mb-4">
            <label for="lastName" class="block mb-2">Sobrenome</label>
            <input v-model="lastName" id="lastName" type="text" class="w-full border p-2 rounded" required>
          </div>
          <div class="mb-4">
            <label for="email" class="block mb-2">E-mail</label>
            <input v-model="email" id="email" type="email" class="w-full border p-2 rounded" required>
          </div>
          <div class="flex justify-between">
            <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Cadastrar</button>
            <button @click="$emit('close')" class="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400">Fechar</button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import axios from 'axios'
  
  const firstName = ref('')
  const lastName = ref('')
  const email = ref('')
  
  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:3000/api/users', {
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value
      })
      console.log('Usuário cadastrado:', response.data)
      alert('Cadastro realizado com sucesso!')
      firstName.value = ''
      lastName.value = ''
      email.value = ''
    } catch (error) {
      console.error('Erro ao cadastrar:', error)
      alert('Erro ao realizar o cadastro. Por favor, tente novamente.')
    }
  }
  </script>
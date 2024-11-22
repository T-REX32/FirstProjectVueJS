<template>
  <nav class="bg-gray-800 text-white p-4">
    <ul class="flex justify-between">
      <li><a href="#home" class="hover:text-gray-300">Início</a></li>
      <li><a href="#about" class="hover:text-gray-300">Sobre</a></li>
      <li>
        <button
          @click="$emit('open-modal')"
          class="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded">
          Cadastre-se
        </button>
      </li>
    </ul>
  </nav>
</template>

<script setup></script>

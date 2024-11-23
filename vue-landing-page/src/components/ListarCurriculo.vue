<template>
    <div class="p-10">
      <h1 class="text-2xl font-bold mb-4">Currículos Cadastrados</h1>
      <div v-for="curriculo in curriculos" :key="curriculo._id" class="border p-4 mb-4">
        <h2 class="text-xl font-bold">{{ curriculo.nomeCompleto }}</h2>
        <p>Email: {{ curriculo.email }}</p>
        <p>Telefone: {{ curriculo.telefone }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        curriculos: [],
      };
    },
    async mounted() {
      try {
        const response = await fetch('http://localhost:5000/curriculos');
        this.curriculos = await response.json();
      } catch (error) {
        console.error('Erro ao buscar currículos:', error);
      }
    },
  };
  </script>
  
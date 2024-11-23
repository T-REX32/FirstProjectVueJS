<template>
    <div class="p-10">
      <h1 class="text-2xl font-bold mb-4">Cadastrar Currículo</h1>
      <form @submit.prevent="cadastrarCurriculo" class="space-y-4">
        <input v-model="curriculo.nomeCompleto" placeholder="Nome Completo" class="input" required />
        <input v-model="curriculo.email" placeholder="E-mail" type="email" class="input" required />
        <input v-model="curriculo.telefone" placeholder="Telefone" class="input" required />
        <textarea v-model="curriculo.objetivoProfissional" placeholder="Objetivo Profissional" class="input"></textarea>
        <button type="submit" class="btn btn-primary">Cadastrar</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        curriculo: {
          nomeCompleto: '',
          email: '',
          telefone: '',
          objetivoProfissional: '',
        },
      };
    },
    methods: {
      async cadastrarCurriculo() {
        try {
          await fetch('http://localhost:5000/curriculos', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.curriculo),
          });
          alert('Currículo cadastrado com sucesso!');
        } catch (error) {
          console.error('Erro ao cadastrar currículo:', error);
        }
      },
    },
  };
  </script>
  
  <style>
  .input {
    display: block;
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
  </style>
  
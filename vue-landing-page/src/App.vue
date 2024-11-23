<template>
  <div>
    <nav class="bg-blue-600 text-white p-4 flex justify-between">
      <div class="text-xl font-bold">Sistema de Currículos</div>
      <div>
        <router-link class="mx-2" to="/">Início</router-link>
        <router-link class="mx-2" to="/cadastrar">Cadastrar Currículo</router-link>
        <router-link class="mx-2" to="/curriculos">Ver Currículos</router-link>
      </div>
    </nav>
    <router-view />
    <footer class="bg-gray-800 text-white text-center p-4 mt-4">
      © 2024 Sistema de Currículos - Todos os direitos reservados
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
body {
  font-family: Arial, sans-serif;
}
</style>

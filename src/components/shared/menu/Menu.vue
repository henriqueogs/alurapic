<template>
    <nav>
      <ul>
        <li v-for="rota in rotas" :key="rota.path">
          <router-link :to="rota.path ? rota.path : '/'">{{
            rota.title
          }}</router-link>
        </li>
      </ul>
    </nav>
</template>

<script>
export default {
  props:['rotas'],
}
</script>

<style>
</style>
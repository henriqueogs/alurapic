
<template >
  <div class="corpo">
    <meu-menu :rotas="routes" />
    <transition name="pagina">
      <router-view />
    </transition>
  </div>
</template>

<script>
import Menu from "./components/shared/menu/Menu.vue";
import { routes } from "./routes";
export default {
  components: {
    "meu-menu": Menu,
  },
  data() {
    return {
      routes : routes.filter(route => route.menu)
    };
  },
};
</script>

<style>
.corpo {
  font-family: Helvetica, sans-serif;
  width: 90%;
  margin: 0 auto;
}
.pagina-enter,
.pagina-leave-active {
  opacity: 0;
}
.pagina-enter-active,
.pagina-leave-active {
  transition: opacity 0.4s;
}
</style>

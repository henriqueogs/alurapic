<template>
  <el-button @click="disparaAcao()" class="botao" :class="estiloDoBotao" :type="tipo">
    {{ rotulo }}
  </el-button>
</template>
<script>
export default {

  props: {
      tipo:{
          required: true,
          type: String,
      },
      rotulo:{
          required: true,
          type: String,
      },
      confimacao: Boolean,
      estilo: String,
  },
  methods: {
    disparaAcao() {
      if (this.confirmacao) {
        if (confirm("Confirma operação?")) {
          this.$emit("botaoAtivado");
        }
        return;
      }
      this.$emit("botaoAtivado");
    },
  },
  computed: {
    // eslint-disable-next-line vue/return-in-computed-property
    estiloDoBotao() {
      if (this.estilo == "padrao" || !this.estilo) return "botao-padrao";
      if (this.estilo == "perigo") return "botao-perigo";
    },
  },
};
</script>
<style scoped>
.botao {
  display: inline-block;
  padding: 10px;
  border-radius: 3px;
  margin: 10px;
  font-size: 1.2em;
}

.botao-perigo {
  background: firebrick;
  color: white;
}

.botao-padrao {
  background: darkcyan;
  color: white;
}
</style>
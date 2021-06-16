<template>
  <div>
    <h1 class="centralizado">Cadastro</h1>
    <h2 class="centralizado">{{ foto.titulo }}</h2>
    <h2 v-if="foto._id" class="centralizado">Alterando</h2>
    <h2 v-else class="centralizado">Incluindo</h2>
    <el-form ref="foto" :model="foto">
      <div class="controle">
        <el-form-item label="Titulo">
          <el-input
            id="titulo"
            placeholder="Titulo"
            autocomplete="off"
            v-model="foto.titulo"
          ></el-input>
        </el-form-item>
      </div>
      <div class="controle">
        <el-form-item label="URL">
          <el-input
            id="url"
            input
            placeholder="URL"
            autocomplete="off"
            v-model="foto.url"
          ></el-input>
        </el-form-item>
        <imagem-responsiva :url="foto.url" :titulo="foto.titulo" />
      </div>

      <div class="controle">
        <el-form-item label="Descrição">
          <el-input
            id="descricao"
            type="textarea"
            :rows="2"
            placeholder="Descrição"
            v-model="foto.descricao"
            autocomplete="off"
          >
          </el-input>
        </el-form-item>
      </div>

      <div class="centralizado">
        <el-button type="success" @click="grava">CRIAR</el-button>
        <router-link :to="{name : 'home'}"
          ><meu-botao rotulo="VOLTAR" tipo="button"
        /></router-link>
      </div>
    </el-form>
  </div>
</template>

<script>
import ImagemResponsiva from "../shared/imagem-responsiva/ImagemResponsiva.vue";
import Botao from "../shared/botao/Botao.vue";
import Foto from "../domain/foto/Foto";
import FotoService from "../domain/foto/FotoService";

export default {
  components: {
    "imagem-responsiva": ImagemResponsiva,
    "meu-botao": Botao,
  },
  data() {
    return {
      foto: new Foto(),
      id: this.$route.params.id
    };
  },
  methods: {
    grava() {
      console.log(this.foto);
      this.service.cadastra(this.foto).then(
        () => {
          if(this.id) this.$router.push({name: 'home'});
          
          this.foto = new Foto()
          },
        (err) => console.log(err)
      );
      // this.$http.post("v1/fotos", this.foto).then(
      //   () => (this.foto = new Foto()),
      //   (err) => console.log(err)
      // );
    },
  },
  created() {
   this.service = new FotoService(this.$resource);
   if(this.id){
     this.service.busca(this.id).then(foto => this.foto = foto);
   }
  },
};
</script>

<style scoped>
.centralizado {
  text-align: center;
}
.controle {
  font-size: 1.2em;
  margin-bottom: 20px;
}
.controle label {
  display: block;
  font-weight: bold;
}

.controle label + input,
.controle textarea {
  width: 100%;
  font-size: inherit;
  border-radius: 5px;
}

.centralizado {
  text-align: center;
}
</style>

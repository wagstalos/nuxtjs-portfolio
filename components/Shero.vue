<template>
  <div class="d-flex s-hero">

    <div class="s-hero--text">
      <h1>Olá prazer, sou<br>

        <span>Wagner Silva</span>
        👋
      </h1>
      <p>
        Atuação em projetos web, trabalhando no desenvolvimento de Landing Pages, PWAs, Wordpress, SFCC (Salesforce
        Commerce
        Cloud), sites corporativos, e-mails de marketing e Blogs.
      </p>

      <SectionMidias />
    </div>

    <div class="s-hero--img">
      <img src="~/assets/images/avatar.png" alt="Minha Imagem" width="550px">
    </div>

  </div>
</template>

<style scoped>
.s-hero {
  align-items: center;
  justify-content: center;
  height: 70vh;
}

span {
  font-size: 68px;
  background: -webkit-linear-gradient(315deg, #5ffcd2 25%, #647eff);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

p {
  line-height: 25px;
  color: rgb(175, 175, 175);
}

.s-hero--text {
  width: 50%;
}

@media (max-width: 767px) {
  .s-hero {
    flex-direction: column;
    height: auto;
  }

  .d-flex{
    text-align: center;
  }

  span {
    font-size: 48px;
  }

  .s-hero--text, .s-hero--img{
    width: 100%;
  }

  img{
    max-width: 100%;
  }
}
</style>

<script>
import SectionMidias from '~/components/Smidias.vue';
export default {
  components: {
    SectionMidias,
  },
  data() {
    return {
      mensagem: 'Wagner Silva'
    };
  }
};
</script>

<template>
  <div>
    <h2 class="gradient">Projetos</h2>
    <div class="d-flex">
      <div class="card" v-for="article in articles" :key="article.id">
        <h2 class="gradient"> {{ article.attributes.title }} </h2>
        <p> {{ article.attributes.description }} </p>
        <!-- <p>{{ article.attributes.body }}</p> -->
        <small>{{ article.attributes.date }}</small>

        <hr>

        <a :href="article.attributes.link" class="btn-link">Link <svg xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-arrow-up-right" width="18" height="18" viewBox="0 0 24 24"
            stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M17 7l-10 10"></path>
            <path d="M8 7l9 0l0 9"></path>
          </svg></a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  width: 27%;
  background-color: #00040a;
  margin: 10px;
  border-radius: 8px;
  padding: 16px;
}

.d-flex {
  display: flex;
  flex-wrap: wrap;
}

.btn-link {
  color: aqua;
  /* border: aqua 1px solid; */
  /* width: 100%; */
  /* padding: 16px; */
  border-radius: 4px;
  text-decoration: none;

}

hr{
  border-color: #040c18;
}

a {
  margin-top: 16px;
  display: flex;
  align-items: center;
}
</style>

<script>
import { allArticlesQuery } from '~/graphql/queries'
import SectionHero from '~/components/Shero.vue';

export default {
  name: 'IndexPage',
  components: {
    SectionHero
  },

  head: {
    link: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap',
      },
    ],
  },

  data() {
    return {
      articles: [],
    }
  },
  apollo: {
    articles: {
      prefetch: true,
      query: allArticlesQuery,
      result({ data }) {
        this.articles = data.articles.data
      },
    }
  },
  computed: {
    hasArticles() {
      return this.articles && this.articles.length > 0
    },
  },
}
</script>


<template>
  <div>
    <h2 class="gradient">Projetos</h2>
    <div class="d-flex">
      <div class="card" v-for="article in articles" :key="article.id">
        <img :src="`${$config.baseURL}${article.attributes.img.data.attributes.url}`"
          alt="article.attributes.img.data.attributes.alternativeText">
        <h2 class="gradient"> {{ article.attributes.title }} </h2>
        <p> {{ article.attributes.description }} </p>
        <!-- <p>{{ article.attributes.body }}</p> -->
        <small>{{ article.attributes.date }}</small>

        <hr>
        <a :href="article.attributes.link" class="button-49" role="button">Ver projeto
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-up-right" width="18"
            height="18" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
            stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M17 7l-10 10"></path>
            <path d="M8 7l9 0l0 9"></path>
          </svg>
        </a>
        <!-- <a :href="article.attributes.link" class="btn-link">Link <svg xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-arrow-up-right" width="18" height="18" viewBox="0 0 24 24"
            stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M17 7l-10 10"></path>
            <path d="M8 7l9 0l0 9"></path>
          </svg></a> -->
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

img {
  width: 100%;
  height: 130px;
  object-fit: cover;
  object-position: center top;
  border-radius: 4px;
}

.d-flex {
  display: flex;
  flex-wrap: wrap;
}

.btn-link {
  color: aqua;
  border-radius: 4px;
  text-decoration: none;

}

hr {
  border-color: #040c18;
}

a {
  margin-top: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  /* padding: 8px 0; */
  border: 1px solid aqua;
  text-align: center;
}

/* CSS */
.button-49,
.button-49:after {
  width: calc(100% - 8px);
  height: 45px;
  line-height: 45px;
  font-size: 16px;
  font-family: 'Bebas Neue', sans-serif;
  background: linear-gradient(45deg, transparent 5%, #7f7dfc 5%);
  border: 0;
  color: #fff;
  letter-spacing: 3px;
  box-shadow: 6px 0px 0px #00E6F6;
  outline: transparent;
  position: relative;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.button-49:after {
  --slice-0: inset(50% 50% 50% 50%);
  --slice-1: inset(80% -6px 0 0);
  --slice-2: inset(50% -6px 30% 0);
  --slice-3: inset(10% -6px 85% 0);
  --slice-4: inset(40% -6px 43% 0);
  --slice-5: inset(80% -6px 5% 0);

  content: 'ALTERNATE TEXT';
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, transparent 3%, #00E6F6 3%, #00E6F6 5%, #7f7dfc 5%);
  text-shadow: -3px -3px 0px #F8F005, 3px 3px 0px #00E6F6;
  clip-path: var(--slice-0);
}

.button-49:hover:after {
  animation: 1s glitch;
  animation-timing-function: steps(2, end);
}

@keyframes glitch {
  0% {
    clip-path: var(--slice-1);
    transform: translate(-20px, -10px);
  }

  10% {
    clip-path: var(--slice-3);
    transform: translate(10px, 10px);
  }

  20% {
    clip-path: var(--slice-1);
    transform: translate(-10px, 10px);
  }

  30% {
    clip-path: var(--slice-3);
    transform: translate(0px, 5px);
  }

  40% {
    clip-path: var(--slice-2);
    transform: translate(-5px, 0px);
  }

  50% {
    clip-path: var(--slice-3);
    transform: translate(5px, 0px);
  }

  60% {
    clip-path: var(--slice-4);
    transform: translate(5px, 10px);
  }

  70% {
    clip-path: var(--slice-2);
    transform: translate(-10px, 10px);
  }

  80% {
    clip-path: var(--slice-5);
    transform: translate(20px, -10px);
  }

  90% {
    clip-path: var(--slice-1);
    transform: translate(-10px, 0px);
  }

  100% {
    clip-path: var(--slice-1);
    transform: translate(0);
  }
}

/* @media (min-width: 768px) {

  .button-49,
  .button-49:after {
    width: 200px;
    height: 86px;
    line-height: 88px;
  }
} */


@media (max-width: 767px) {
  .card {
    width: 100%;
  }

  h2 {
    text-align: center;
  }
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

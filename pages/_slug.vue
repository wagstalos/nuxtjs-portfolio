<template>
  <div class="container">
    <h1>{{ article.attributes.title }}</h1>
    <section class="sections">
      <div class="group">
        <p>{{ article.attributes.body }}</p>

      </div>

      <NuxtLink to="/" class="back"> back</NuxtLink>

    </section>
    <!-- <div v-for="article in articles" :key="article.id">
      <h2> {{ article.attributes.title }} </h2>
      <p> {{ article.attributes.description }} </p>
      <p>{{ article.attributes.body }}</p>
      <p>{{ article.attributes.date }}</p>
    </div> -->
  </div>
</template>

<style>
.back {
  color: #42b883;
}
</style>

<script>
import { singleArticleQuery } from '~/graphql/queries'
export default {
  name: 'IndexPage',

  data() {
    return {
      article: [],
    }
  },
  apollo: {
    article: {
      prefetch: true,
      query: singleArticleQuery,
      result({ data }) {
        this.article = data.article.data
      },
      variables() {
        return {
          id: this.$route.query.id
        }
      }
    }
  },

}
</script>

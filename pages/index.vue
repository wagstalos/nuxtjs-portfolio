<template>
  <div class="container">
    <section class="sections">
      <!-- <div class="group">
        <div v-for="article in articles" :key="article.id" class="section">

          <div class="entry">
            <NuxtLink :to="{ path: article.attributes.slug, query: { id: article.id } }">
              <h3>
                {{ article.attributes.title }}
                <p class="subtitle"> {{ article.attributes.date }}</p>
              </h3>
            </NuxtLink>

            <p>{{ article.attributes.description }}</p>
          </div>

        </div>

      </div> -->

    </section>

    <SectionHero />
    <SectionProjects />

    <!-- <h2 class="gradient">Projetos</h2>
    <div class="d-flex">
      <div class="card" v-for="article in articles" :key="article.id">
        <h2 class="gradient"> {{ article.attributes.title }} </h2>
        <p> {{ article.attributes.description }} </p>
        <p>{{ article.attributes.body }}</p>
        <p>{{ article.attributes.date }}</p>
        <a :href="article.attributes.link">Link</a>
      </div>
    </div> -->
  </div>
</template>

<style>
body {
  font-family: 'Roboto', sans-serif;
  background: radial-gradient(circle at 3% 25%, #002853 0, #040c18 25%);
  color: white;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.d-flex {
  display: flex;
  width: 100%;
}

.gradient {
  background: -webkit-linear-gradient(315deg, #5ffcd2 25%, #647eff);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>

<script>
import SectionHero from '~/components/Shero.vue';
import SectionProjects from '~/components/Sprojects.vue';

export default {
  name: 'IndexPage',
  components: {
    SectionHero,
    SectionProjects
  },

  // head: {
  //   link: [
  //     {
  //       rel: 'stylesheet',
  //       href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap',
  //     },
  //   ],
  // },

}
</script>

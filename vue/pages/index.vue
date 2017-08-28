<template>

 <div class="title">
    <h2>Vue2 on Total.js Platform</h2>

  <v-carousel>
    <v-carousel-item v-for="(src, i) in images" v-bind:src="src" :key="i"></v-carousel-item>
  </v-carousel>
    </div>
</template>

<script>
export default {
  data: () => ({
    images: [
      'https://vuetifyjs.com/static/doc-images/carousel/squirrel.jpg',
      'https://vuetifyjs.com/static/doc-images/carousel/sky.jpg',
      'https://vuetifyjs.com/static/doc-images/carousel/bird.jpg',
      'https://vuetifyjs.com/static/doc-images/carousel/planet.jpg'
    ]
  })
}
</script>
<template>
  <div class="__nuxt-error-page">
    <div class="container">

        <div class="row">
          <div class="column">
            <h1>{{ statusCode }} </h1>
            <h3> {{ message }} </h3>
            <p v-if="statusCode === 404">
              <nuxt-link class="error-link" to="/">Back to the home page</nuxt-link>
            </p>
            
            <small v-else>
              Open developer tools to view stack trace
            </small>
            
          </div>
        </div>

        <div class="row">
          <div class="column">
            <div class="poweredby">
              <small> Powered by <a href="https://nuxtjs.org" target="_blank" rel="noopener">Nuxt.js</a> </small>
            </div>
          </div>
        </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'nuxt-error',
  props: ['error'],
  head () {
    return {
      title: this.statusCode + ' - ' + this.message,
      link: [
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css', type: 'text/css', media: 'all' },
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/milligram/1.3.0/milligram.min.css', type: 'text/css', media: 'all' }
      ]
    }
  },
  
  data () {
    return {
      mounted: false
    }
  },
  mounted () {
    this.mounted = true
  },
  
  computed: {
    statusCode () {
      return (this.error && this.error.statusCode) || 500
    },
    message () {
      return this.error.message || 'Nuxt Server Error'
    }
  }
}
</script>

<style>
.__nuxt-error-page {
  background: #F5F7FA;
  font-size: 14px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  text-align: center;
}
.__nuxt-error-page .container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  margin: 0 auto;
  max-width: 70%;
}
.__nuxt-error-page .poweredby {
  text-align: center;
  margin-top: 10%;
}
.__nuxt-error-page a {
  color: #42b983 !important;
}
</style>

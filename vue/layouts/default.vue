<template>
  <v-app>
   <v-navigation-drawer
      class="pb-0"
      persistent
      absolute
      height="100%"
      clipped
      enable-resize-watcher
      v-model="drawer"
    >
      <v-list dense>
        <v-list-tile v-for="item in items" :key="item.text">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              {{ item.text }}
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-subheader class="mt-3 grey--text text--darken-1">SUBSCRIPTIONS</v-subheader>
        <v-list>
          <v-list-tile v-for="item in items2" :key="item.text" avatar>
            <v-list-tile-avatar>
              <img :src="`https://randomuser.me/api/portraits/men/${item.picture}.jpg`" alt="">
            </v-list-tile-avatar>
            <v-list-tile-title v-text="item.text"></v-list-tile-title>
          </v-list-tile>
        </v-list>
        <v-list-tile class="mt-3">
          <v-list-tile-action>
            <v-icon class="grey--text text--darken-1">add_circle_outline</v-icon>
          </v-list-tile-action>
          <v-list-tile-title class="grey--text text--darken-1">Browse Channels</v-list-tile-title>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon class="grey--text text--darken-1">settings</v-icon>
          </v-list-tile-action>
          <v-list-tile-title class="grey--text text--darken-1">Manage Subscriptions</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar>
      <v-toolbar-side-icon @click.stop="drawer = !drawer" />
      <v-toolbar-logo>Vue 2 on Total.js Platform</v-toolbar-logo>
   
    <v-sidebar left fixed drawer v-model="sidebar">
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat router nuxt href="/">Home</v-btn>
        <v-btn flat router nuxt href="/about">Buttons</v-btn>
    </v-toolbar-items>
    </v-sidebar>
    <v-spacer></v-spacer>
      <v-text-field
        label="Search..."
        single-line
        append-icon="search"
        
        hide-details
      ></v-text-field>
     </v-toolbar>
    <main>
      <v-content>
        <v-container fluid>
          <nuxt/>
        </v-container>
      </v-content>
    </main>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
       sidebar: false,
      drawer: true,
      items: [
        { icon: 'trending_up', text: 'Most Popular' },
        { icon: 'subscriptions', text: 'Subscriptions' },
        { icon: 'history', text: 'History' },
        { icon: 'featured_play_list', text: 'Playlists' },
        { icon: 'watch_later', text: 'Watch Later' }
      ],
      items2: [
        { picture: 28, text: 'Joseph' },
        { picture: 38, text: 'Apple' },
        { picture: 48, text: 'Xbox Ahoy' },
        { picture: 58, text: 'Nokia' },
        { picture: 78, text: 'MKBHD' },
      ]
    })
  }
</script>
<style scoped>
  .title {
    padding-left: 20px;
  }
  #e3, #e3 .container {
    min-height: 700px;
    overflow: hidden;
    z-index: 0;
  }
  #e3 .input-group__details:after {
    background-color: rgba(255,255,255,0.32) !important;
  }
  #e3 .input-group--focused .input-group__append-icon {
    color: inherit !important;
  }
</style>


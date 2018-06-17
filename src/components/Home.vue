<template>
  <div>
    <v-container fluid>
      <v-layout row>
        <v-flex xs12>
          <v-parallax src="https://vuetifyjs.com/static/doc-images/parallax/material.jpg" height="500">
            <v-layout column align-center justify-center>
              <h1 class="white--text">Vuetify.js</h1>
              <h4 class="white--text">Build your application today!</h4>
            </v-layout>
          </v-parallax>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container
    grid-list-lg
    >
      <v-layout row wrap>
        <v-flex
          xs12
          sm6
          md4
          v-for="ad in ads"
          :key="ad.id"
        >
          <v-card>
            <v-card-media :src="ad.imageSrc" height="200px">
            </v-card-media>
            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0">{{ad.title}}</h3>
                <div>{{ad.description}}</div>
              </div>
            </v-card-title>
            <v-card-actions>
              <v-btn flat >Open</v-btn>
              <v-btn raised dark color="light">Buy</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
    export default {
      data () {
        return {
          ads: [
            {
              title: 'First Ad',
              description: 'Hello is a first ad',
              imageSrc: 'https://vuetifyjs.com/static/doc-images/carousel/squirrel.jpg',
              id: '1',
              promo: false
            },
            {
              title: 'Second Ad',
              description: 'Hello is a second ad',
              imageSrc: 'https://vuetifyjs.com/static/doc-images/carousel/bird.jpg',
              id: '2',
              promo: true
            },
            {
              title: 'Three Ad',
              description: 'Hello is a three ad',
              imageSrc: 'https://vuetifyjs.com/static/doc-images/carousel/sky.jpg',
              id: '3',
              promo: true
            }
          ]
        }
      }
    }
</script>


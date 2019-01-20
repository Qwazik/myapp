<template>
  <v-container>
    <v-layout row>
      <v-flex></v-flex>
      <v-flex>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla harum, culpa quidem perferendis cumque aliquid quasi adipisci, qui iusto, vero odit accusantium error doloremque in expedita corporis quaerat sint! Molestiae.
        <ul>
          <li v-for="video in videos" :key="video.first">{{video.last}}</li>
        </ul>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { db } from "../main";
export default {
  name: "Videos",
  data: () => ({
    videos: []
  }),
  firestore: () => ({
    videos: db.collection("videos").orderBy("createdAt")
  })
};
</script>
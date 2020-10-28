<template>
  <b-container>
    <b-row>
      <b-col>
        <ul>
          <!-- testing -->
          <li v-for="post in posts" :key="post._id">
            <p>{{ post.title }}</p>
            <p>{{ post.content }}</p>
          </li>
        </ul>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  layout: 'navbar',
  async asyncData({ $axios }) {
    return { posts: await $axios.$get('/post') }
  },
  data: () => ({
    posts: [],
  }),
}
</script>

<template>
  <b-container>
    <b-row align-h="center">
      <b-col cols="8">
        <b-card
          v-for="post in posts"
          :key="post._id"
          class="mb-3 bg-light"
          :title="post.title"
          :sub-title="formatDate(post.createdAt)"
          sub-title-tag="small"
          border-variant="dark"
        >
          <b-card-text class="pt-4 text-block">
            {{ post.content }}
          </b-card-text>
          <div slot="footer" class="d-flex">
            <b-button variant="success" :to="post._id">
              Edit
              <b-icon icon="pencil-square" class="ml-1" />
            </b-button>
            <form class="ml-2" @submit.prevent="onSubmit(post._id)">
              <b-button variant="danger" type="submit">
                Delete
                <b-icon icon="trash" class="ml-1" />
              </b-button>
            </form>
          </div>
        </b-card>
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
  methods: {
    onSubmit(id) {
      fetch('http://localhost:9000/api/post', {
        method: 'delete',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          window.location.reload()
        })
        .catch((err) => err)

      // this.$axios.$delete('/post', { data: { id } }) does not work...
    },
    formatDate(date) {
      return new Date(date).toLocaleString().replace(',', ' at')
    },
  },
}
</script>

<style>
.text-block {
  white-space: pre-line;
}
</style>

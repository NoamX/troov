<template>
  <ValidationObserver v-slot="{ handleSubmit }">
    <form class="mx-3" @submit.prevent="handleSubmit(onSubmit)">
      <b-form-group>
        <ValidationProvider v-slot="{ errors }" name="title" rules="required">
          <label for="title">
            <b>Title</b>
            <span class="text-danger">*</span>
          </label>
          <b-form-input id="title" v-model="post.title" type="text" />
          <span class="text-danger">{{ errors[0] }}</span>
        </ValidationProvider>
      </b-form-group>
      <b-form-group>
        <ValidationProvider v-slot="{ errors }" name="content" rules="required">
          <label for="content">
            <b>Content</b>
            <span class="text-danger">*</span>
          </label>
          <b-form-textarea id="content" v-model="post.content" rows="5" />
          <span class="text-danger">{{ errors[0] }}</span>
        </ValidationProvider>
      </b-form-group>
      <b-button type="submit" variant="outline-success">update</b-button>
    </form>
  </ValidationObserver>
</template>

<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate'

export default {
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  async asyncData({ $axios }) {
    // await $axios.$get('/post')
  },
  data: () => ({
    post: {
      title: '',
      content: '',
    },
  }),
  methods: {
    onSubmit() {
      this.$axios.$put('/post', {
        title: this.title,
        content: this.content,
      })

      window.location.reload()
    },
  },
}
</script>

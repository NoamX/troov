<template>
  <b-container>
    <b-row align-h="center">
      <b-col cols="8">
        <ValidationObserver v-slot="{ handleSubmit }">
          <form class="mx-3" @submit.prevent="handleSubmit(onSubmit)">
            <b-form-group>
              <ValidationProvider
                v-slot="{ errors }"
                name="title"
                rules="required"
              >
                <label for="title">
                  <b>Title</b>
                  <span class="text-danger">*</span>
                </label>
                <b-form-input id="title" v-model="post.title" type="text" />
                <span class="text-danger">{{ errors[0] }}</span>
              </ValidationProvider>
            </b-form-group>
            <b-form-group>
              <ValidationProvider
                v-slot="{ errors }"
                name="content"
                rules="required"
              >
                <label for="content">
                  <b>Content</b>
                  <span class="text-danger">*</span>
                </label>
                <b-form-textarea id="content" v-model="post.content" rows="5" />
                <span class="text-danger">{{ errors[0] }}</span>
              </ValidationProvider>
            </b-form-group>
            <b-button type="submit" variant="outline-success">Update</b-button>
          </form>
        </ValidationObserver>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate'

export default {
  layout: 'navbar',
  components: {
    ValidationObserver,
    ValidationProvider,
  },
  async asyncData({ $axios, params }) {
    const { id } = params

    return { post: await $axios.$get(`/post/${id}`) }
  },
  data: () => ({
    post: {
      title: '',
      content: '',
    },
  }),
  methods: {
    onSubmit() {
      const { id } = this.$root.context.params

      fetch(`http://localhost:9000/api/post/${id}`, {
        method: 'post',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: this.post.title,
          content: this.post.content,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (!data.error) {
            this.$router.push('/')
          }
        })
        .catch((err) => err)
    },
  },
  head() {
    return {
      title: 'Troov | Edit post',
    }
  },
}
</script>

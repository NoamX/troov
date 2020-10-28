<template>
  <div>
    <b-navbar variant="dark" type="dark">
      <b-navbar-brand to="/">Troov</b-navbar-brand>
      <b-navbar-nav class="ml-auto">
        <b-button
          v-b-toggle.sidebar
          class="d-flex align-items-center"
          variant="light"
        >
          <b-icon icon="arrow-bar-left" />
        </b-button>
      </b-navbar-nav>
    </b-navbar>
    <b-sidebar id="sidebar" title="Post something" backdrop shadow right>
      <SideBarForm />
    </b-sidebar>
    <nuxt />
  </div>
</template>

<script>
import { BIconArrowBarLeft } from 'bootstrap-vue'
import SideBarForm from '../components/SideBarForm'

export default {
  component: {
    BIconArrowBarLeft,
    SideBarForm,
  },
}
</script>

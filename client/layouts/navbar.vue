<template>
  <div>
    <b-navbar variant="dark" type="dark" class="fixed-top">
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
      <b-sidebar id="sidebar" title="Post something" backdrop shadow right>
        <SideBarForm />
      </b-sidebar>
    </b-navbar>
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

<style>
body {
  padding-top: 4.5rem;
}

::-webkit-scrollbar {
  width: 12px;
  background-color: #f5f5f5;
}

::-webkit-scrollbar-thumb {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #555;
}
</style>

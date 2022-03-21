<template>
    <div id="wrapper" class="d-flex align-items-stretch">
        <div id="sidebar" v-if="loggedIn">
            <layout-navigation-sidebar/>
        </div>
    
        <div id="content" class="flex-fill">
          <div class="container-fluid">
            <router-view/>
          </div>
        </div>
    </div>
</template>

<script>
import LayoutNavigationSidebar from './components/sidebar/Sidebar.vue';
export default {
  name: 'App',
  components: {
    LayoutNavigationSidebar
  },
  computed: {
    loggedIn()
    {
      return this.$store.state.auth.status.loggedIn;
    }
  },
}
</script>
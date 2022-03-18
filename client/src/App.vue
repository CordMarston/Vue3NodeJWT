<template>
    <div class="wrapper d-flex align-items-stretch">
        <div class="sidebar" v-if="loggedIn">
            <layout-navigation-sidebar/>
        </div>
    
        <div class="content flex-fill my-3">
          <router-view/>
        </div>
    </div>
</template>

<script>
// import AuthLogin from '../components/auth/Login.vue';
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
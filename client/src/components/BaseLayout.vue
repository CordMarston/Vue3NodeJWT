<template>
    <div class="wrapper d-flex align-items-stretch">

        <div class="sidebar">
            <layout-navigation-sidebar/>
        </div>
    
        <div class="content flex-fill">
        Test
            <router-view name="content"/>
        </div>
    </div>
</template>
<script>
import LayoutNavigationSidebar from './layout/navigation/Sidebar.vue';
export default {
  components: {
      LayoutNavigationSidebar
  }
}
</script>
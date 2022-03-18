<template>
    Logging out
</template>
<script>
export default {
  name: 'AuthLogout',
  created()
  {
      this.$store.dispatch('auth/logout');
      this.$router.push('/login');
  }
}
</script>
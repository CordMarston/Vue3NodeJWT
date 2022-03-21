<template>
    <div></div>
</template>
<script>
export default {
    name: 'AuthHome',
    data() {
        return {
            loggedIn: this.$store.state.auth.status.loggedIn,
        }
    },
    mounted() {
        if(this.loggedIn)
        {
            this.$router.push('/dashboard');
        } else {
            this.$router.push('/login');
        }
    }
}
</script>
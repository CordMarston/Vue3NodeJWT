<template>
    <div class="container">
        <div class="row vh-100 align-items-center">
            <div class="col-md-6 offset-md-3">
                <div class="row p-2 bg-white shadow border-success">
                    <div class="col p-3">
                        <div class="row h-100">
                            <div class="col pt-4">
                                <div class="row mb-4">
                                    <div class="form-group col">
                                        <h3 class="text-success text-uppercase">Account Register</h3>
                                    </div>
                                </div>
                                <div v-if="message" class="alert" :class="successful ? 'alert-success' : 'alert-danger'">
                                    {{message}}
                                </div>
                                <form @submit.prevent="handleRegister">
                                    <div class="row">
                                        <div class="col">
                                            <div class="form-floating mb-3">
                                                <input type="text" class="form-control" v-model="user.firstname" placeholder="First name">
                                                <label>First Name</label>
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="form-floating mb-3">
                                                <input type="text" class="form-control" v-model="user.lastname" placeholder="Last name">
                                                <label>Last Name</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-floating mb-3">
                                        <input type="email" class="form-control" v-model="user.email" placeholder="name@example.com">
                                        <label for="floatingInput">Email address</label>
                                    </div>
                                    <div class="form-floating mb-3">
                                        <input type="password" class="form-control" v-model="user.password" placeholder="Password">
                                        <label for="floatingPassword">Password</label>
                                    </div>
                                    <div class="form-floating mb-3">
                                        <input type="password" class="form-control" placeholder="Password">
                                        <label for="floatingPassword">Confirm Password</label>
                                    </div>
                                    <div class="row mb-4">
                                        <div class="col">
                                            <button type="submit" class="w-100 btn btn-lg btn-success">Submit</button>
                                        </div>
                                    </div>
                                </form>
                                <div class="row">
                                    <div class="col text-center">
                                        Already a member? <router-link to="login">Login</router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import User from '../../models/user';
export default {
  name: 'AuthRegister',
  data() {
    return {
      user: new User('', '', ''),
      message: '',
      successful: false
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    }
  },
  mounted() {
    if (this.loggedIn) {
      this.$router.push('/profile');
    }
  },
  methods: {
      handleRegister() {
          this.$store.dispatch('auth/register', this.user).then(
            data => {
                this.successful = true;
                this.message = data.message;
            },
            error => {
                this.successful = false;
                this.message = error.response.data.message;
            }
          )
      }
  },
}
</script>
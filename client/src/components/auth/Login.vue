<template>
  <div class="container">
    <div class="row vh-100 align-items-center">
      <div class="col-md-6 offset-md-3">
        <div class="row p-2 bg-white shadow border-primary">
            <div class="col p-3">
              <div class="row h-100">
                <div class="col pt-4">
                  <div class="row mb-4">
                    <div class="form-group col">
                    <h3 class="text-primary text-uppercase">Account Login</h3>
                    </div>
                  </div>
                  <div class="alert alert-danger" v-if="message">
                    {{ message }}
                  </div>
                  <form @submit.prevent="handleLogin">
                    <div class="form-floating mb-3">
                      <input type="email" class="form-control" v-model="user.email" placeholder="name@example.com" @input="message=''">
                      <label for="floatingInput">Email Address</label>
                    </div>
                    <div class="form-floating mb-3">
                      <input type="password" class="form-control" v-model="user.password" placeholder="Password" @input="message=''">
                      <label for="floatingPassword">Password</label>
                    </div>
                    <div class="row mb-4">
                      <div class="col">
                        <button type="submit" class="btn-lg w-100 btn btn-primary">Submit</button>
                      </div>
                    </div>
                  </form>
                  <div class="row">
                    <div class="col text-center">
                      Not a member? <router-link to="register" class="text-success">Signup Now</router-link>
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
import useVuelidate from '@vuelidate/core'
import { required } from '@vuelidate/validators'
export default {
  name: 'AuthLogin',
  setup: () => ({ v$: useVuelidate() }),
  data() {
    return {
      user: new User('', '', '', ''),
      message: ''
    }
  },
  computed: {
    loggedIn()
    {
      return this.$store.state.auth.status.loggedIn;
    }
  },
  watch: {
    loggedIn(loggedIn)
    {
      if(loggedIn) {
        this.$router.push({ name: 'dashboard'});
      }
    }
  },
  created()
  {
    if(this.loggedIn)
    {
      this.$router.push({ name: 'dashboard' });
    }
  },
  methods: {
    handleLogin() {
      this.v$.$validate();
      if(this.v$.$validate())
      {
        this.$store.dispatch('auth/login', this.user).then(
          (data) => {
            console.log(data);
            console.log(this.$store);
          },
          (error) => {
            console.log(error);
            this.message = error.response.data.message;
          }
        )
      }
    }
  },
  validations() {
    return {
      user: { 
        email : {required }
      }
    }
  }
}
</script>
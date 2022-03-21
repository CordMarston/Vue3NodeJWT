<template>
  <nav class="nav flex-column p-3 bg-dark text-white w-100" :class="[!display_nav ? 'collapsed-nav' : 'vh-100']">
    <div class="d-flex flex-row align-items-center justify-content-between">
      <div>
        <a href="/" class="navbar-brand text-white">
            <font-awesome-icon icon="cookie" class="mx-2 align-middle fs-4"/>
            <span class="fs-4 align-middle">Cookie Cord</span>
        </a>
      </div>
      <div>
        <button @click="toggle" class="d-sm-none navbar-toggler text-white d-inline btn-sm" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
          <font-awesome-icon icon="bars"/>
        </button>
      </div>
    </div>
    <hr class="nav-content">
    <ul class="nav nav-pills flex-column mb-auto nav-content">
      <li class="nav-item">
        <router-link :to="{ name: 'dashboard'}" class="nav-link text-white" active-class="active">
          <font-awesome-icon icon="house" class="me-2"/>
          Home
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'sites'}" class="nav-link text-white" active-class="active"> 
          <font-awesome-icon icon="globe" class="me-2"/>
          Sites
        </router-link>
      </li>
      <li>
        <a href="#" class="nav-link text-white">
          <font-awesome-icon icon="magnifying-glass" class="me-2"/>
          Scan
        </a>
      </li>
      <li>
        <a href="#" class="nav-link text-white">
          <font-awesome-icon icon="magnifying-glass" class="me-2"/>
          Users
        </a>
      </li>
      <li>
        <a href="#" class="nav-link text-white">
          <font-awesome-icon icon="chart-bar" class="me-2"/>
          Logs
        </a>
      </li>
      <li>
        <a href="#" class="nav-link text-white">
          <font-awesome-icon icon="credit-card" class="me-2"/>
          Billing
        </a>
      </li>
      <li>
        <a href="#" class="nav-link text-white">
          <font-awesome-icon icon="envelope-open-text" class="me-2"/>
          Contact Us
        </a>
      </li>
    </ul>
    <hr class="nav-content">
    <ul class="nav nav-pills flex-column mb-0 nav-content">
      <li class="nav-item">
        <router-link :to="{ name: 'logout'}" class="nav-link text-white" active-class="active"> 
          <font-awesome-icon icon="arrow-right-from-bracket" class="me-2"/>
          Logout
        </router-link>
      </li>
    </ul>
    <div class="dropdown d-none">
      <a href="#" class="d-flex align-items-center text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
        <img src="https://github.com/mdo.png" alt="" width="32" height="32" class="rounded-circle me-2">
        <strong>mdo</strong>
      </a>
      <ul class="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
        <li><a class="dropdown-item" href="#">New project...</a></li>
        <li><a class="dropdown-item" href="#">Settings</a></li>
        <li><a class="dropdown-item" href="#">Profile</a></li>
        <li><hr class="dropdown-divider"></li>
        <li><a class="dropdown-item" href="#">Sign out</a></li>
      </ul>
    </div>
  </nav>
</template>
<script>
export default {
  name: 'LayoutNavigationSidebar',
  data() {
    return {
      display_nav: false
    }
  },
  methods: {
    toggle()
    {
      this.display_nav = !this.display_nav;
    }
  }
}
</script>
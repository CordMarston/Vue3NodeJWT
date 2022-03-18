<template>
<div class="d-flex flex-column flex-shrink-0 p-3 bg-dark text-white vh-100" style="width: 240px;">
    <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-decoration-none text-white">
        <font-awesome-icon icon="cookie" class="mx-2" size="2x"/>
        <span class="fs-4">Cookie Cord</span>
    </a>
    <hr>
    <ul class="nav nav-pills flex-column mb-auto">
      <li class="nav-item">
        <a href="#" class="nav-link active" aria-current="page">
          <font-awesome-icon icon="house" class="me-2"/>
          Home
        </a>
      </li>
      <li>
        <a href="#" class="nav-link text-white">
          <font-awesome-icon icon="globe" class="me-2"/>
          Sites
        </a>
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
    <hr>
    <ul class="nav nav-pills flex-column mb-0">
      <li class="nav-item">
        <router-link :to="{ name: 'logout'}" class="nav-link text-white"> 
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
  </div>
</template>
<script>
export default {
  name: 'LayoutNavigationSidebar'
}
</script>
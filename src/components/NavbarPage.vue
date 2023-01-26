<template>
    <div>
      <nav class="navbar navbar-expand-lg navbar-white bg-white">
        <a class="navbar-brand" href="#">My App</a>
        <button class="navbar-toggler" type="button" @click.prevent="isNavbarOpen = !isNavbarOpen" :aria-expanded="isNavbarOpen" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" :class="{ 'show': isNavbarOpen }">
          <ul class="navbar-nav m-auto">
            <li class="nav-item">
              <router-link class="nav-link " to="/login"><button>Log In</button></router-link>
            </li>
            <li class="nav-item ">
            <button >Log Out</button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isNavbarOpen: false
      }
    },
  }
  </script>
  
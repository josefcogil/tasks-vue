<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-container>
        <b-navbar-brand to="/">TaskManager</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item
              class="app-nav-link"
              :to="{ path: '/tasks' }"
              :class="{ active: $route.name === 'tasks' }"
              >Tasks</b-nav-item
            >
            <b-nav-item
              class="app-nav-link"
              :to="{ path: '/deleted' }"
              :class="{ active: $route.name === 'deleted' }"
              >Deleted</b-nav-item
            >
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
  </div>
</template>

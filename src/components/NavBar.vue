<template>
  <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
    <div class="navbar-brand has-text-weight-bold">
      <div class="navbar-item">
        <img src="../assets/logo.png" alt="Logo">
        Health and Trust
      </div>

      <a role="button" class="navbar-burger has-text-black" :class="{ 'is-active': active }" aria-label="menu"
        aria-expanded="false" @click="active = !active">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div class="navbar-menu" :class="{ 'is-active': active }">
      <div class="navbar-start">
        <router-link :to="page[0].toLowerCase() == 'home' ? '/' : '/' + page[0].toLowerCase()"
          v-for="page in ungroupedPages" :key="page[0]" class="navbar-item"
          :class="{ 'has-background-primary-35': page[0] == ($route.params.page || 'home') }">
          {{ formatName(page[0]) }}
        </router-link>

        <div v-for="page in groupedPages" :key="page[0]" class="navbar-item has-dropdown is-hoverable">
          <span class="navbar-link">
            {{ formatName(page[0]) }}
          </span>
          <div class="navbar-dropdown">
            <router-link :to="p[0].toLowerCase() == 'home' ? '/' : '/' + p[0].toLowerCase()" v-for="p in page[1]"
              :key="p[0]" class="navbar-item" :class="{ 'is-selected': p[0] == ($route.params.page || 'home') }">
              {{ formatName(p[0]) }}
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  props: ["pages"],
  data() { return { active: false } },
  computed: {
    ungroupedPages() {
      return [...this.pages].filter(page => !(page[1] instanceof Map))
    },
    groupedPages() {
      return [...this.pages].filter(page => page[1] instanceof Map)
    }
  },
  methods: {
    formatName(name) { return name.split('_').map(w => w[0].toUpperCase() + w.slice(1)).join(' ') }
  }
}
</script>

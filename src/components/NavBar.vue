<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand has-text-weight-bold">
      <div class="navbar-item">
        <img src="../assets/logo.png" alt="Logo">
        Health and Trust
      </div>

      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="NavBar">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="NavBar" class="navbar-menu">
      <div class="navbar-start">
        <div v-for="page in pages" :key="page[0]" style="display: contents;">
          <a v-if="ungroupedPages.includes(page)" class="navbar-item"
            :class="{ 'is-selected': page[0] == this.activePage, 'has-text-white': page[0] == this.activePage }">
            {{ page[0] }}
          </a>

          <div v-if="groupedPages.includes(page)" class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
              {{ page[0] }}
            </a>
            <div class="navbar-dropdown">
              <a v-for="p in page[1]" :key="p[0]" class="navbar-item"
                :class="{ 'is-selected': p[0] == this.activePage, 'has-text-white': p[0] == this.activePage }">
                {{ p[0] }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  props: ["pages", "activePage"],
  computed: {
    ungroupedPages() {
      return this.pages.filter(page => !Array.isArray(page[1]))
    },
    groupedPages() {
      return this.pages.filter(page => Array.isArray(page[1]))
    }
  }
}
</script>

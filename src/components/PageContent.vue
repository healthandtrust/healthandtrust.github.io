<template>
  <section class="section">
    <!-- TODO: look into render functions? -->
    {{ content }}
  </section>
</template>

<script>
export default {
  props: ["pages", "activePage"],
  data() {
    return {
      content: "Page not found."
    }
  },
  methods: {
    loadPageContent() {
      this.pages.forEach((pageContent, page) => {
        if (page == this.activePage) {
          this.content = pageContent
        }
        if (pageContent instanceof Map) {
          pageContent.forEach((groupPageContent, groupPage) => {
            if (groupPage == this.activePage) {
              this.content = groupPageContent
            }
          })
        }
      })
    }
  },
  mounted() {
    this.loadPageContent()
  },
  watch: {
    activePage() {
      this.loadPageContent()
    }
  }
}
</script>

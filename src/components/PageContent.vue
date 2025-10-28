<template>
  <section class="section">
    <!-- TODO: look into render functions? -->
    <p style="white-space: pre-line">{{ content }}</p>
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
    },
    processContent() {
    }
  },
  mounted() {
    this.loadPageContent()
    this.processContent()
  },
  watch: {
    activePage() {
      this.loadPageContent()
      this.processContent()
    }
  }
}
</script>

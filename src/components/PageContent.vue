<template>
  <section class="section py-5" v-for="section in content" :key="section">
    <p style="white-space: pre-line">{{ section }}</p>
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
      this.content = this.content.split("\n\n")
    },
    formatName(name) { return name.split('_').map(w => w[0].toUpperCase() + w.slice(1)).join(' ') }
  },
  mounted() {
    this.loadPageContent()
    this.processContent()
    document.title = `${this.formatName(this.activePage)} - Health and Trust`
  },
  watch: {
    activePage() {
      this.loadPageContent()
      this.processContent()
      document.title = `${this.formatName(this.activePage)} - Health and Trust`
    }
  }
}
</script>

<template>
  <NavBar :pages="pages" />
  <div class="is-flex is-justify-content-center" v-if="!pagesLoaded">
    <label for="fileInput" class="button">Upload Pages</label>
    <input type="file" webkitdirectory directory multiple hidden id="fileInput" @change="uploadPages">
  </div>
  <router-view v-if="pagesLoaded" :pages="pages" :activePage="$route.params.page || 'home'" />
</template>

<script>
import NavBar from "./components/NavBar.vue"

export default {
  name: 'App',
  components: { NavBar },
  data() {
    return {
      pagesLoaded: false,
      pages: new Map()
    }
  },
  methods: {
    formatUrl(url) { return url.toLowerCase().replace(" ", "_") },
    uploadPages(e) {
      this.pages = new Map([])

      const files = Array.from(e.target?.files || []);
      let loadedFiles = 0
      for (const file of files) {
        let reader = new FileReader
        reader.readAsText(file, "UTF-8")
        reader.onload = (f) => {
          const fileContent = [file.webkitRelativePath.slice(6, -4), f.target.result]
          if (fileContent[0].indexOf("/") == -1) {
            this.pages.set(this.formatUrl(fileContent[0]), fileContent[1])
          } else {
            const split = fileContent[0].split("/")
            if (!this.pages.has(this.formatUrl(split[0]))) {
              this.pages.set(this.formatUrl(split[0]), new Map())
            }
            this.pages.get(this.formatUrl(split[0])).set(this.formatUrl(split[1]), fileContent[1])
          }
          loadedFiles++
          if (loadedFiles == files.length) {
            this.pagesLoaded = true
          }
        }
      }
    }
  }
}
</script>

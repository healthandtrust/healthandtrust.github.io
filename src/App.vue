<template>
  <NavBar :pages="pages" :activePage="activePage" />
  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta explicabo ea quia illo! Eum aliquid illum vel animi
    aperiam facere. Corrupti qui facilis animi tempore iste distinctio architecto id sint.</p>
</template>

<script>
import NavBar from "./components/NavBar.vue"

export default {
  name: 'App',
  components: { NavBar },
  data() {
    return {
      pages: [
        ["A", "A.txt"],
        ["B", "B.txt"],
        ["C", "C.txt"],
        ["D", [
          ["E", "D/E.txt"],
          ["F", "D/F.txt"]
        ]],
        ["G", "G.txt"]
      ],
      activePage: "E"
    }
  }
}
</script>

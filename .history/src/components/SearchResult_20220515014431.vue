<template>
  <div id="SearchResult">
    <NavMenu></NavMenu>

    <div id="searchbar">
      
    </div>

  </div>
</template>

<script>
import NavMenu from "./NavMenu.vue"
export default {
  name: "SearchResult",
  components: {NavMenu}

}
</script>

<style scoped>
@import "../styles/result.css";
</style>

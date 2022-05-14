<template>
  <div id="SearchResult">
    <NavMenu></NavMenu>
    <div id="searchbar" type="text">
      <input id="searchbartext" type="text" value="computer engineering mutex concept" />
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
@import "../styles/result.css"
</style>

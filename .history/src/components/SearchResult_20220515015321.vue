<template>
  <div id="SearchResult">
    <NavMenu></NavMenu>
    <div id="searchbar" type="text">
      <input id="searchbartext" type="text" value="computer engineering mutex concept" />
      <button id="searchbarbutton">
      <svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
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
@import "../styles/result.css"
</style>

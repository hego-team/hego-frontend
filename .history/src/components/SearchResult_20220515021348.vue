<template>
  <div id="SearchResult">
    <NavMenu></NavMenu>
    <div id="searchbar" type="text">
      <input id="searchbartext" type="text" value="computer engineering mutex concept" />
      <button id="searchbarbutton">search</button>


    </div>
    <div id="searchresultsarea">
        <p id="searchresultsnumber">About 155,000 results (0.56 seconds) </p>
        <div class="searchresult">
            <h2>Lock (computer science) - Wikipedia</h2>
            <a>https://en.wikipedia.org/wiki/Lock_(computer_science)</a> <button>▼</button>
            <p>In computer science, a lock or mutex (from mutual exclusion) is a synchronization mechanism for enforcing limits on access to a resource in an</p>
            <p> environment where there are many threads of execution.</p>
        </div>

        <div class="searchresult">
            <h2>Mutual exclusion - Wikipedia</h2>
            <a>https://en.wikipedia.org/wiki/Mutual_exclusion</a> <button>▼</button>
            <p>For the concept in logic and probability theory, see Mutual exclusivity. Two nodes, i and i + 1, being removed simultaneously</p>
            <p>results in node i + 1 not being removed. In computer science, mutual exclusion is a property of concurrency control, which is instituted ...</p>
        </div>
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

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

    <div class="relatedsearches">
            <h3>Searches related to computer engineering mutex concept</h3>
            <div class="relatedlists">
                <ul class="relatedleft">
                    <li>what is <b>mutex</b> and semaphore</li>
                    <li><b>mutex</b> lock c++</li>
                    <li><b>mutex</b> java</li>
                    <li><b>mutex</b> c++</li>
                </ul>
                <ul class="relatedright">
                    <li><b>mutex</b> vs lock</li>
                    <li><b>mutex</b> semaphore example</li>
                    <li><b>mutex</b> and semaphore example in c</li>
                    <li><b>mutex</b> c#</li>
                </ul>
            </div>
    </div>

    <div class="pagebar">
            <ul class="pagelist">
                <li class="pagelistprevious">Previous</li>
                <li class="pagelistfirst">1</li>
                <li class="pagelistnumber">2</li>
                <li class="pagelistnumber">3</li>
                <li class="pagelistnumber">4</li>
                <li class="pagelistnumber">5</li>
                <li class="pagelistnumber">6</li>
                <li class="pagelistnumber">7</li>
                <li class="pagelistnumber">8</li>
                <li class="pagelistnumber">9</li>
                <li class="pagelistnumber">10</li>
                <li class="pagelistnext">Next</li>
            </ul>
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

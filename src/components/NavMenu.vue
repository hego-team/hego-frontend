<template>
    <div id="searchEngine">
        <nav class="navbar navbar-light bg-light">
            <a class="navbar-brand" href="home">
                HUGO
            </a>
            <ul class="nav justify-content-end">
                <li class="nav-item">
                <a class="nav-link" href="images_search">Images</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="adv_search">Advanced Search</a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
  export default {
    name: 'NavMenu'
  }
</script>

<style scoped>
@import "../styles/search.css";
@import "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css";
@import "https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css";
</style>

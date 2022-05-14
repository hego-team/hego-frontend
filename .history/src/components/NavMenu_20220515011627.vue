<template>
    <div id="searchEngine">
        <nav class="navbar navbar-light bg-light">
            <a class="navbar-brand" href="search.html">
                <img src="../assets/img/google-logo.png" width="30" height="30" class="d-inline-block align-top" alt="" loading="lazy">
                Google
            </a>
            <ul class="nav justify-content-end">
                <li class="nav-item">
                <a class="nav-link" href="images_search.html">Images</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="adv_search.html">Advanced Search</a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
  export default {
    name: 'navMenu'
  }
</script>

<style scoped>
@import "../styles/search.css";
@import "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css";
@import "https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css";
</style>

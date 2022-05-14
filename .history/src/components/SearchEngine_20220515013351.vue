<template>

  <div id="searchEngine">

    <div class="search">
      <a href="#" >
          <img class="center" src="../assets/img/googlelogo_color.png" alt="Google-Logo" id="big-logo">
      </a>

      <div class="form-group" style="margin-top: 15px;">
        <input type="text center" class="form-control col-6" id="q" name="q" placeholder="Search" v-model="query">
      </div>
      <div class="form-group center padding">
          <button type="submit" class="btn btn-primary" id="google-button" v-on:click="submit">Google Search</button>
      </div>
    </div>
  </div>
</template>

<script>
import NavMenu from './NavMenu.vue'

export default {
    name: "SearchEngine",
    components: {Na}
    data() {
        return {
            query: "",
            resp: []
        };
    },
    methods: {
        submit() {
          this.$router.replace({ path: '/search' });
            /**
            var _this = this;
            var query = this.query;
            var url = "search/" + query;
            this.$axios.get(url).then(resp => {
                if (successResponse.data.code == 200) {
                    this.$router.replace({ path: url });
                }
            });
            */
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../styles/search.css";
@import "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css";
@import "https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css";
</style>

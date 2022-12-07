<template>
  <div class="container">
    <navigation to="/project-detail/1"></Navigation>
    <div class="row">
        <div class="col-xl-12 mt-2">
            <div class="alert alert-danger" role="alert">
                Your project-related details Our team update within 7 days please wait.
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import Navigation from './Navigation.vue'
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name : "Database",
    components: { Navigation }
}
</script>

<style>

</style>
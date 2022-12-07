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
    name: "TimeSheet",
    components: { Navigation },
}
</script>
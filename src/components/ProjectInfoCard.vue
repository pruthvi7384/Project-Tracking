<template>
  <div class="container">
    <Navigation></Navigation>
    <div class="row project_details">
        <div class="col-xl-12">
            <div class="col-xl-12 mt-2">
                <div class="alert alert-danger" role="alert">
                    Your project-related details Our team update within 7 days please wait.
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import Navigation from './Navigation'
export default {
    name: "ProjectInfoCard",
    methods: {
        auth(){
          const token = localStorage.getItem("token");
          if(token == null){
              this.$router.push('/')
          }
      }
    },
    components: { Navigation },
    mounted(){
        this.auth();
    }
}
</script>

<style>

</style>
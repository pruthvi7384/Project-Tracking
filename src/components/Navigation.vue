<template>
  <div class="row navigation">
      <div>   
          <router-link v-if="this.not != '/project-detail'" :to="this.to"><button class="btn m-2" style="background-color: #1da5ca">Back</button></router-link>
          <button class="btn m-2" @click="logOut()">LogOut</button>
        </div>
      </div>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name : "Navigation",
    props:{
      to : String,
      not : String
    },
    methods : {
        logOut(){
        localStorage.clear();
        this.$router.push('/');
      }
    }
}
</script>

<style>

</style>
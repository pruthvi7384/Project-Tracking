<template>
  <div class="row navigation">
          <div> 
            <button class="btn" @click="logOut()">LogOut</button>
          </div>
        </div>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name : "Navigation",
    methods : {
        logOut(){
        localStorage.clear();
        this.$router.push('/');
        this.auth();
      }
    }
}
</script>

<style>

</style>
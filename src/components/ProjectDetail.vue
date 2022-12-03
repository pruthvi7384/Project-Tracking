<template>
    <div class="container-fluid">
        <div class="row navigation">
          <div> 
            <button class="btn" @click="logOut()">LogOut</button>
          </div>
        </div>
    </div>
    <div class="container project_details mt-2">
      <div class="row deatil">
        <div class="col-xl-12">
          <h2>Project Details</h2>
          <ul>
            <li>
              <span>Title : </span> STAY - FIT Application With Real Time Simulator.
            </li>
            <li>
              <span>Type : </span> Sport And Fitness
            </li>
            <li>
              <span>Total Cost : </span> 7000/-
            </li>
            <li>
              <span>Booking Amount : </span> 2000/-
            </li>
            <li>
              <span>Status : </span> <strong style="color: green"> Active</strong>
            </li>
          </ul>
        </div>
        <div class="col-xl-12 mt-2">
            <div class="alert alert-danger" role="alert">
                Your project-related details Our team update within 7 days please wait.
            </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    name : "ProjectDetails",
    methods :{
      logOut(){
        localStorage.clear();
        this.$router.push('/');
      }
    }
}
</script>

<style>

</style>
<template>
  <div class="container">
    <Navigation to="/project-detail"></Navigation>
    <div class="row project_dashboard mt-3">
        <div class="col-xl-12">
            <h2>Dashboard</h2>
        </div>
        <div class="col-xl-4 card_dashboard" v-for="(Data, index) in dashbard" :key="index">
            <i :class="Data.icon"></i>
            <h3>{{Data.title}}</h3>
            <p>{{Data.description}}</p>
            <router-link :to="Data.to"><button class="btn">Track More</button></router-link>
        </div>
    </div>
  </div>
</template>

<script>
import Navigation from './Navigation'
import JSON from "../jsonData/dashboard.json"
export default {
    name: "ProjectInfoCard",
    data(){
        return{
            dashbard : JSON
        }
    },
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
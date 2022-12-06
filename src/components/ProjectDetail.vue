<template>
    <div class="container-fluid">
        <Navigation></Navigation>
    </div>
    <div class="container project_details">
      <div class="row justify-content-center">
        <div class="col-xl-12 mt-3">
          <h2>Project Details</h2>
          <p>Your all projects</p>
        </div>
        <div class="col-xl-4 deatil" v-for="(data,index) in projectInfo" :key="index">
          <ul>
            <li>
              <span>Title : </span> {{data.title !="" ? data.title : ""}}
            </li>
            <li>
              <span>Type : </span> {{data.type != "" ? data.type : ""}}
            </li>
            <li>
              <span>Application Type : </span> {{data.ApplicationType != "" ? data.ApplicationType : ""}}
            </li>
            <li>
              <span>Total Cost : </span> {{data.cost != "" ? data.cost : ""}}
            </li>
            <li>
              <span>Status : </span> <strong :style="data.status === 'Active' ? 'color: green' : 'color: blue'"> {{data.status}}</strong>
            </li>
            <li>
              <span>Start Date : </span> {{data.startDate != "" ? data.startDate : ""}}
            </li>
            <li>
              <span>End Date : </span> {{data.endDate != "" ? data.endDate : ""}}
            </li>
          </ul>
            <div>
              <router-link :to="{name: 'ProjectInfoCard', params: { id: data.id }}"><button class="btn">Track More</button></router-link>
            </div>
        </div>
      </div>
    </div>
</template>

<script>
import Navigation from './Navigation'
import JSON from "../jsonData/projectInfo.json"
export default {
    name : "ProjectDetails",
    data(){
      return{
          userId : "",
          projectInfo : []
      }
    },
    methods :{
      auth(){
          const token = localStorage.getItem("token");
          if(token == null){
              this.$router.push('/')
          }else{
            this.userId = token;
            JSON.find(x => {
              x.userId == this.userId ? this.projectInfo.push(x) : (console.log("No Data Found"))
            })
            console.log(this.projectInfo)
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
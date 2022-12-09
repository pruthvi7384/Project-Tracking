<template>
  <div class="container">
    <navigation :to="{ name: 'ProjectInfoCard', params: { id: this.$route.params.id } }"></Navigation>
    <div class="row timesheet">
        <div class="col-xl-12 mt-2">
            <h2>Time Sheet</h2>
        </div>
        <div class="table-responsive mt-2 timesheet_card">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col" style="width:5%">#</th>
                  <th scope="col" style="width:15%">Category</th>
                  <th scope="col" style="width:20%">Sub Category</th>
                  <th scope="col" style="width:30%">Task</th>
                  <th scope="col" style="width:15%">Start Date</th>
                  <th scope="col" style="width:15%">End Date</th>
                  <th scope="col" style="width:10%">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(data, index) in timesheet" :key="index">
                  <th scope="row" style="width:5%">{{++index}}</th>
                  <td style="width:15%">{{data.Category !='' ? data.Category+"/-" : ""}}</td>
                  <td style="width:20%">{{data.SubCategory !='' ? data.SubCategory : ""}}</td>
                  <td style="width:30%">{{data.task != '' ? data.task : ""}}</td>
                  <td style="width:15%">{{data.startDate !='' ? data.startDate : ""}}</td>
                  <td style="width:15%">{{data.endDate !='' ? data.endDate : ""}}</td>
                  <td :style="['width:10%',data.status == 'Done' ? 'color: green' : 'color: red']">{{data.status ? data.status : ""}}</td>
                </tr>
              </tbody>
            </table>
        </div>
    </div>
  </div>
</template>

<script>
import Navigation from './Navigation.vue'
import JSON from '../jsonData/timeSheet.json'
export default {
    name: "TimeSheet",
    data(){
      return{
        projectId : this.$route.params.id,
        timesheet : []
      }
    },
    methods:{
      getPayment(){
        console.log("JSON = ",JSON);
        JSON.find(x => {
              x.projectId == this.projectId ? this.timesheet.push(x) : []
            })
      }
    },
    mounted(){
      this.getPayment()
    },
    components: { Navigation },
}
</script>
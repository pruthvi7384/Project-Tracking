<template>
  <div class="container">
    <navigation :to="{ name: 'ProjectInfoCard', params: { id: this.$route.params.id } }"></Navigation>
    <div class="row database">
        <div class="col-xl-12 mt-2">
            <h2>Database Structure</h2>
        </div>
        <div class="col-xl-3 database_card" v-for="(data, index) in database" :key="index">
            <h3>{{data.table}}</h3>
            <ul> 
              <li v-for="(attr, ind) in data.attributes" :key="ind"><span>{{attr.name != '' ? attr.name : ''}}</span> {{attr.type != '' ? attr.type : ''}} {{attr.size != '' ? "("+attr.size+")" : ''}}</li>
            </ul>
        </div>
    </div>
  </div>
</template>

<script>
import Navigation from './Navigation.vue'
import JSON from '../jsonData/databaseStructure.json'
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name : "Database",
    data(){
      return{
        projectId : this.$route.params.id,
        database : []
      }
    },
    methods:{
      getPayment(){
        console.log("JSON = ",JSON);
        JSON.find(x => {
              x.projectId == this.projectId ? this.database.push(x) : []
            })
      }
    },
    mounted(){
      this.getPayment()
    },
    components: { Navigation }
}
</script>

<style>

</style>
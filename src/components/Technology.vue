<template>
  <div class="container">
    <navigation :to="{ name: 'ProjectInfoCard', params: { id: this.$route.params.id } }"></Navigation>
    <div class="row technology">
        <div class="col-xl-12 mt-2">
            <h2>Technology Details</h2>
        </div>
        <div class="col-xl-3 card_technology" v-for="(data, index) in this.technology" :key="index">
            <h3>{{data.title}}</h3>
            <ul v-for="(lan, ind) in data.languages" :key="ind">
              <li>{{lan}}</li>
            </ul>
        </div>
    </div>
  </div>
</template>

<script>
import Navigation from './Navigation.vue';
import JSON from "../jsonData/projectTechnology.json";
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Technology",
    data(){
      return{
        technology : {}
      }
    },
    methods:{
      getTechnology(){
        JSON.find(x => x.projectId == this.$route.params.id ? this.technology = x.technologies : {});
      }
    },
    mounted(){
      this.getTechnology()
    },
    components: { Navigation }
}
</script>

<style>

</style>
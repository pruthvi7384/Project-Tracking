<template>
  <div class="container">
    <navigation :to="{ name: 'ProjectInfoCard', params: { id: this.$route.params.id } }"></Navigation>
    <div class="row payment">
        <div class="col-xl-12 mt-2">
           <h2>Payment Details</h2>
        </div>
        <div class="table-responsive mt-2 payment_card">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col" style="width:5%">#</th>
                  <th scope="col" style="width:10%">Amount</th>
                  <th scope="col" style="width:20%">Payer Name</th>
                  <th scope="col" style="width:20%">Payment Type</th>
                  <th scope="col" style="width:20%">Transaction Id</th>
                  <th scope="col" style="width:15%">Date</th>
                  <th scope="col" style="width:20%">Description</th>
                  <th scope="col" style="width:10%">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(data, index) in payment" :key="index">
                  <th scope="row" style="width:5%">{{++index}}</th>
                  <td style="width:10%">{{data.rupes ? data.rupes+"/-" : ""}}</td>
                  <td style="width:20%">{{data.PayerName ? data.PayerName : ""}}</td>
                  <td style="width:20%">{{data.type ? data.type : ""}} {{data.Platform ? "("+data.Platform+")" : ""}}</td>
                  <td style="width:20%">{{data.TransactionId ? data.TransactionId : ""}}</td>
                  <td style="width:15%">{{data.date ? data.date : ""}}</td>
                  <td style="width:20%">{{data.description ? data.description : ""}}</td>
                  <td :style="['width:10%',data.status == 'Done' ? 'color: green' : 'color: red']">{{data.status ? data.status : ""}}</td>
                </tr>
              </tbody>
            </table>
        </div>
    </div>
  </div>
</template>

<script>
import Navigation from './Navigation.vue';
import JSON from "../jsonData/projectPayment.json";
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Payment",
    data(){
      return{
        projectId : this.$route.params.id,
        payment : []
      }
    },
    methods:{
      getPayment(){
        console.log("JSON = ",JSON);
        JSON.find(x => {
              x.projectId == this.projectId ? this.payment.push(x) : []
            })
      }
    },
    mounted(){
      this.getPayment()
    },
    components: { Navigation }
}
</script>

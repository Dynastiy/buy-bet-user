<template>
  <div class="">
    <!-- Footer -->
<footer class="page-footer font-small indigo mt-5">

  <!-- Footer Links -->
  <div class="container">

    <!-- Grid row-->
    <div class="row text-center d-flex  justify-content-center pt-3">

      <!-- Grid column -->
      <div class=" text-dark col-md-2 mb-3">
        <h6 class="text-uppercase font-weight-bold">
          <router-link to="/works">How it Works</router-link>
        </h6>
      </div>
      <!-- Grid column -->

      <!-- Grid column -->
      <div class="col-md-2 mb-3">
        <h6 class="text-uppercase font-weight-bold">
          
          <router-link to="/deposit">Depositing</router-link>
        </h6>
      </div>
      <!-- Grid column -->

      <!-- Grid column -->
      <div class="col-md-2 mb-3">
        <h6 class="text-uppercase font-weight-bold">
          
          <router-link to="/withdrawal">Withdrawal</router-link>
        </h6>
      </div>
      <!-- Grid column -->

      <!-- Grid column -->
      <div class="col-md-2 mb-3">
        <h6 class="text-uppercase font-weight-bold">
          <router-link to="/commission">Commission</router-link>
        </h6>
      </div>
      <!-- Grid column -->


    </div>
    <!-- Grid row-->
    <hr class="rgba-white-light" style="margin: 0 15%;">

    <!-- Grid row-->
    <div class="row d-flex text-center justify-content-center mb-md-0 mb-4">

      <!-- Grid column -->
      <div class="col-md-8 col-12 mt-3">
        <h6 class="text-uppercase font-weight-bold">
          Contact Us
        </h6>
        <p>To Contact our call center, dial <span class="font-weight-bold">07084685810</span> (Operating hours are 08:00 to 17:00)

Have a quick question for us?
Get in touch through our Twitter customer
service here: <a class="font-weight-bold" href="https://twitter.com/­BuybetNG">https://twitter.com/­BuybetNG</a>
</p>
      </div>
      <!-- Grid column -->

    </div>
    <!-- Grid row-->
    <hr class="rgba-white-light" style="margin: 0 15%;">

    <!-- Grid row-->
  </div>
  <!-- Footer Links -->

  <!-- Copyright -->
  <div class="footer-copyright text-center py-3">© 2020 Copyright:
    <router-link to=""> Houlert Technologies</router-link>
  </div>
  <!-- Copyright -->

</footer>
  </div>
</template>

<script>
import axios from 'axios'

export default {
 data () {
    return {
      data: []
    }
  },

}
</script>

<style scoped>
footer {
  background-color: #ffb20f !important;
  margin: 0 0;
}
a {
  color: #000 !important;
}
</style>

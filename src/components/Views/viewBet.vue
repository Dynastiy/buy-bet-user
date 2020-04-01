<template>
  <div class="">
    <h4 class="text-center text-white mt-4">Events List</h4>

    <div class="hr mt-4"></div>

    <div class="container mt-4">
        <div class="row mt-5" v-for="posts in data" :key="posts">
            <div class="col-lg-9 col-sm-12 col-md-12">
                <h4 class="text-white"> {{ posts.home-team }} Match: Arsenal - Chelsea</h4>
                <p class="text-secondary"> {{ posts.away-team }}  Odd Type: Home Win </p>
            </div>
            <div class="col-lg-3 col-sm-12 col-md-12">
                <p class="text-secondary">Date: 02/10/2020</p>
                <p class="text-secondary">Time: 09-04</p>
                <h4 class="text-white">Winning: &#8358; 10, 000</h4>
                <button>View More</button>
            </div>
            
           
        </div>
        <!-- <div class="row mt-5">
            <div class="col-lg-9 col-sm-12 col-md-12">
                <h4 class="text-white"> Match: Arsenal - Chelsea</h4>
                <p class="text-secondary">  Odd Type: Home Win </p>
            </div>
            <div class="col-lg-3 col-sm-12 col-md-12">
                <p class="text-secondary">Date: 02/10/2020</p>
                <p class="text-secondary">Time: 09-04</p>
                <h4 class="text-white">Winning: &#8358; 10, 000</h4>
                <button>View More</button>
            </div>
            
           
        </div> -->
    </div>
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

  // Fetches data when the component is created.
  created () {    
    axios.get(`http://api.buybet.com.ng/api/posts`).then(response => {
    // JSON responses are automatically parsed.
      this.data = response.data
    })
  }

}
</script>

<style scoped>
p {
    line-height: 0.5rem !important;
}

</style>

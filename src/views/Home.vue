<template>
  <div class="home">
    <!-- <div> -->
    <div class="firework">
      <div class="before"></div>
      <div class="after"></div>
    </div>
    <h3>오늘의 메뉴</h3>
    <MenuFilter />
    <p class="today__menu" v-show="!clicked">"오늘 점심 메뉴는?"</p>
    <p class="today__menu" v-show="clicked">{{ menu }}</p>
    <button class="menuBtn" @click="getMenu">Click!</button>
    <!-- <video width="400" controls Autoplay="autoplay">
        <source src="../assets/Cannon.mov" type="video/mp4" />
      </video> -->
  </div>
  <!-- </div> -->
</template>

<script>
// @ is an alias to /src
import axios from "axios"
import MenuFilter from "@/components/MenuFilter.vue"
import "./Home.scss"

export default {
  name: "Home",
  components: { MenuFilter },

  data() {
    return {
      menu: "",
      dummyMenu: this.$store.state.dummyMenu,
      clicked: false,
    }
  },
  methods: {
    //단순 랜덤으로 메뉴고르는 함수
    getMenu() {
      setTimeout(() => {
        const randomNum = Math.floor(Math.random() * this.dummyMenu.length)
        this.menu = this.dummyMenu[randomNum].name
        console.log(this.menu)
        this.clicked = true
      }, 1000)
    },
  },
  computed: {},
  async mounted() {
    const res = await axios.get("http://localhost:3000/menus")
    this.$store.state.dummyMenu = res.data
    // .then((res) => (this.$store.state.dummyMenu = res.data))
  },
}
</script>

<style scoped>
.today__menu {
  animation: rotate_text 0.15s linear 5;
}
.menuBtn:click .today__menu {
  color: red;
  animation: rotate_text 0.15s linear 5;
}
@keyframes rotate_text {
  from {
    transform: rotateX(0deg);
  }

  to {
    transform: rotateX(360deg);
  }
}
</style>

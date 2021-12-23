<template>
  <div class="home">
    <div class="firework">
      <div class="before"></div>
      <div class="after"></div>
    </div>
    <h3>오늘의 메뉴</h3>
    <MenuFilter v-bind:filterForm="filterForm" />
    <p class="today__menu">"오늘 점심 메뉴는?"</p>
    <p class="today__menu">{{ menu }}</p>
    <div>
      <button class="menuBtn" v-if="menu" @click="decidePlace">결정!</button>
    </div>
    <button class="menuBtn" @click="getMenu">Click!</button>
    <!-- <p v-for="list in this.$store.state.dummyMenu" :key="list.id">
      {{ list.name }}
    </p> -->
  </div>
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
      dummyMenu: [],
      clicked: false,
      filterForm: {
        category: "",
        rice: "",
        distance: "",
      },
    }
  },
  methods: {
    //pick randomly menu in filteredList
    async getMenu() {
      const res = await axios.get("http://localhost:3000/menus", {
        params: this.filterForm,
      })
      this.$store.commit("setMenus", res.data)
      const randomNum = Math.floor(
        Math.random() * this.$store.state.dummyMenu.length
      )
      this.menu = this.$store.state.dummyMenu[randomNum].name
    },

    //update lastVisit data
    decidePlace() {
      this.$store.commit("letsgo", this.menu)
    },
  },
  computed: {},
  async mounted() {},
}
</script>

<style scoped>
.today__menu {
  /* animation: rotate_text 0.15s linear 5; */
}

.menuBtn:hover .today__menu {
  color: red;
  /* animation: rotate_text 0.15s linear 5; */
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

<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/register">Register</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Do+Hyeon&family=Kirang+Haerang&family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap");
body {
  height: 100vh;
}
#app {
  height: 100%;
  font-family: "Kirang Haerang", cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 2.5rem;
  /* display: flex;
  flex-direction: column;
  justify-content: center; */
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: rgba(0, 173, 255, 0.9);
}
button {
  margin-top: 1rem;
  width: 15%;
  padding: 10px 20px;
  border: none;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  transition: all 0.3s ease-in-out;
  font-size: 2rem;
  font-weight: 700;
  font-family: "Kirang Haerang", cursive;
}
button:hover {
  cursor: pointer;
  background-color: rgba(0, 173, 255, 0.9);
  color: white;
  transform: translateY(-7px);
}
</style>

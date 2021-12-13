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
    const bcrypt = {}
    bcrypt.hash = function (s, salt, callback, progressCallback) {
      function _async(callback) {
        if (typeof s === "string" && typeof salt === "number")
          bcrypt.genSalt(salt, function (err, salt) {
            _hash(s, salt, callback, progressCallback)
          })
        else if (typeof s === "string" && typeof salt === "string")
          _hash(s, salt, callback, progressCallback)
        else
          nextTick(
            callback.bind(
              this,
              Error("Illegal arguments: " + typeof s + ", " + typeof salt)
            )
          )
      }

      if (callback) {
        if (typeof callback !== "function")
          throw Error("Illegal callback: " + typeof callback)
        _async(callback)
      } else
        return new Promise(function (resolve, reject) {
          _async(function (err, res) {
            if (err) {
              reject(err)
              return
            }
            resolve(res)
          })
        })
    }
    console.log("[From App]", bcrypt)
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

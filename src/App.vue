<template>
  <div class="container">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from './components/Navbar'


export default {
  name: "App",
  components : {
    Navbar
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC&display=swap');
* { margin:0; padding:0; box-sizing:border-box; }
body {
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  line-height: 1.6;
  background-color: black;
}
a:hover, h4 {
    color : #0d6efd;
}
a {
    text-decoration: none;
    color : white;
}
.container {
    max-width: 1100px;
}
</style>

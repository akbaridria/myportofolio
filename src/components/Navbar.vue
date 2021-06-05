<template>
    <div class="navbar">
        <div class="flex">
            <ul>
                <li><router-link :to="{ name : 'Home' }">Home</router-link></li>
                <li><router-link :to="{ name : 'Work' }">Work</router-link></li>
                <li><router-link :to="{ name : 'Contact' }">Contact</router-link></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>
<style scoped>
li {
    list-style-type: none;
    padding: 0 20px;;
}

.router-link, a {
    text-decoration: none;
    color : white
}


.router-link-exact-active, .active, a:hover {
    border-bottom: 2px #0d6efd solid;
    color : #0d6efd;
}

.navbar {
    height: 70px;
    width : 1100px;
    max-width: 1100px;
    background-color: black;

    position: fixed;
    top : 0;

}

.navbar .flex {
    display: flex;
    justify-content: baseline;
    align-items: center;
    height: 100%;
}

ul {
    display: flex;
}
</style>
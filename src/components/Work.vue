<template>
    <div class="work">
        <div class="title">
            <h1>My Own Projects & Competition</h1>
        </div>
        <div class="cards">
            <div class="card">
                <div class="image" style="margin-right : 20px">
                    <img :src="require('../assets/AvatarMaker.png')" width="100" />
                </div>
                <div class="textImage">
                    <h4>Project Name</h4>
                    <p>Etherman</p>
                    <h4>Purpose</h4>
                    <p>Web apps that can check matic and ethereum wallet address</p>
                    <h4>Tools and Requirements</h4>
                    <p>Vue Js, Covalent API</p>
                </div>
            </div>
            <hr />
            <div class="card">
                <div class="image" style="margin-right : 20px">
                    <img :src="require('../assets/AvatarMaker.png')" width="100" />
                </div>
                <div class="textImage">
                    <h4>Project Name</h4>
                    <p>Etherman</p>
                    <h4>Purpose</h4>
                    <p>web apps that can check matic and ethereum wallet address</p>
                    <h4>Tools and Requirements</h4>
                    <p>Vue Js, Covalent API</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name : 'Work'
}
</script>
<style scoped>
.work {
    margin: 100px 100px;
    color : white;
}

.card {
    display: flex;
    flex-direction: row;
    align-items: center;
    line-height: 1.2;
    margin:0;
    padding:0;
}

h4 {
    color : #0d6efd;
}
</style>
<template>
    <div class="home">
        <h1 >Hi, I am <span class="blue">Akbar Idria</span></h1>
        <h3>But, you can call me <span class="blue">akbar</span> or <span class="blue">idria</span></h3>
        <h4>I am a Software Engineer, who have some experiences in building mobile or web aplication using javascript framework like <span class="blue">Vue</span> Or <span class="blue">ReactJs</span>.</h4>
        <p>Sometimes, i have an interest in processing data using <span class="blue">python</span> and make a visualization in it using <span class="blue">google data studio</span></p>
        <p>Always eager to learn something new, and a very adaptable person</p>
        <p>And currently looking for new oppurtinity.</p>
        <div class="about">
            <div class="title">
                <h4>Former Jobs</h4>
            </div>
            <div class="cards">
                <div class="card">
                    <img :src="require(`../assets/download-removebg-preview.png`)" width="100" />
                </div>
                <div class="card">
                    <img :src="require(`../assets/grab-removebg-preview.png`)" width="100" />
                </div>
                <div class="card">
                    <img :src="require(`../assets/eceos-removebg-preview.png`)" width="100" />
                </div>
            </div>   
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.home {
    color : white;

    line-height: 2;

    margin : 100px 100px;
    max-width: 600px;
}
.blue {
    color : #0d6efd;
}

.about {
    display: flex;
    flex-direction: column;
    margin-top : 90px;
}

.about .cards {
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
}

.card {
    margin-right : 10px;
}

img {
    filter: grayscale(100%);
}
</style>
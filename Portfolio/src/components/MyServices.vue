<script>
export default {
    
}
</script>

<template>
    <div class="bold_text"
        style="text-align: center; color: #e4e2e2; margin: 5rem 0rem 2rem 0rem; ">My Services</div>
    <div class="services_block" >
        <div class="block_container normal_text">
            <div>Java Script</div>
            <div style="font-size: 18px;">I provide services for creating reliable and scalable applications. From the look of the site to its hidden features, I have everything you need.</div>
        </div>
        <div class="block_container normal_text">
            <div>HTML/CSS</div>
            <div style="font-size: 18px;">I specialize in crafting responsive and visually appealing web designs using the latest HTML and CSS technologies. Elevate your online presence with my design services.</div>
        </div>
        <div class="block_container normal_text">
            <div class="describe">
                <div >Python</div>
                <div style="font-size: 18px;">I will help you create custom create software using Python</div>
            </div>
            <div><img src="./icons/Python.png" alt="" class="python_bg"></div>
            <div class="python_dark"></div>
        </div>
    </div>
</template>

<style>
.services_block{
    display: flex;
    flex-direction: row;
    justify-content: center;
}
.block_container{
    position: relative;
    width: 30%;
    height: 35rem;
    background-color: #232328;
    margin: 1rem;
    padding: 0.5rem;
    border: 1px solid #44434c;
    border-radius: 1rem;
    text-align: center;
    font-size: 30px;
}

.describe{
    z-index: 3;
}
.python_bg{
    width: 100%;
}

.python_dark{
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    z-index: 0;
    border-radius: 1.3rem;
    background: rgb(0,0,0);
    background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0, 0, 0, 0.532) 76%, rgba(0, 0, 0, 0.358) 100%);
}

</style>
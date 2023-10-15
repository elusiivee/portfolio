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
        </div>
        <div class="block_container normal_text">
            <div>HTML/CSS</div>
        </div>
        <div class="block_container normal_text">
            <div>Python</div>
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
    width: 30%;
    height: 35rem;
    background-color: #1c1c24;
    margin: 1rem;
    padding: 0.5rem;
    border: 1px solid #44434c;
    border-radius: 1rem;
    text-align: center;
    font-size: 30px;
}


</style>
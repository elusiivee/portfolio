<script>
export default {
    
}
</script>

<template>
    <div class="bold_text"
        style="text-align: center; color: #e4e2e2; margin: 5rem 0rem 2rem 0rem; ">My Projects</div>
    <div class="services_block" >
        <div class="block_container normal_text">
            <div>GalaxyGlance</div>
            <div style="font-size: 18px;">I provide services for creating reliable and scalable applications. From the look of the site to its hidden features, I have everything you need.</div>
        </div>
        <div class="block_container normal_text">
            <div class="describe">
                <div>Culinary Odyssey</div>
                <div style="font-size: 18px;">I will help you create custom create software using Python
                    <p>https://elusive.pythonanywhere.com/</p>
                </div>
            </div>
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
    width: 45%;
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


</style>
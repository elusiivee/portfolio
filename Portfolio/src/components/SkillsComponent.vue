<script>
    import piechart from './PieChart.vue'
    
</script>

<template>
    <div class="bold_text"
        style="text-align: center; color: #e4e2e2; text-decoration: underline; margin: 5rem 0rem 2rem 0rem; ">My skills</div>
    <div class="row">
        <div class="col-6 ">
            <piechart></piechart>  
            
        </div>
        <div class="col-6 center">
            <img src="./icons/programingicon.png" class="programing" alt=""></div>
        </div>


</template>

<style>

.center{
    display: flex;
    justify-content: center;
    align-items: center;
}

.programing {
    width: 80%;
}

</style>
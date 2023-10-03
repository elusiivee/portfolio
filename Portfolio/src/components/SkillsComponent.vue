<script>
    import piechart from './PieChart.vue'
</script>

<template>
    <div class="bold_text"
        style="text-align: center; color: #33363c; text-decoration: underline; margin: 4rem 0rem 2rem 0rem;">My skills</div>
    <div class="row">
        <div class="col-6 ">
            <piechart></piechart>  
            
        </div>
        <div class="col-6 center">
            <img src="./icons/programingicon.png" class="programing" alt=""></div>
        </div>


</template>

<style>
.poly_container {
    display: flex;
    justify-content: center;
    align-items: center;
}
.center{
    display: flex;
    justify-content: center;
    align-items: center;
}

.programing {
    width: 80%;
}
/*
    @keyframes moon-move {
        from {
            transform: translateX(0%) translateY(-5%);

        }

        50% {
            transform: translateX(10%) translateY(-20%);
        }

        to {
            transform: translateX(0%) translateY(-5%);
        }
    } */
</style>
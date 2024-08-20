<script>
document.addEventListener("DOMContentLoaded", function () {
        // Add the 'appear' class to trigger the animation
        setTimeout(function () {
            document.querySelector(".line").classList.add("appear");
        }, 2500); // You can adjust the delay (in milliseconds) before the line appears
    });
</script>

<template>
    <div class="normal_text" style=" color: #f9a602; margin: 5rem 0rem 0rem 0rem; text-align: center; ">abilities</div>
    <div class="bold_text" style=" color: #e4e2e2; margin: 0rem 0rem 0rem 0rem; text-align: center; ">The main skills I have right now</div>
    <div class="line" style="margin-bottom: 1rem;"></div>
    <div class="row">
        <div class="col-sm-12 col-lg-6 piechart" >
            <piechart></piechart>  
        </div>
        <div class="col-sm-12 col-lg-6 center prog_icon">
            <img src="./icons/programingicon.png" class="programing" alt=""></div>
        </div>


</template>

<style>
.piechart{
    margin-top: 1rem;
    font-family: Kanit;
    font-weight: 300;  
}
.line{
    margin: auto;
    text-align: center;
    width: 0; 
    height: 4px;
    background-color: orange;
    transition: width 1s ease;
}

.appear{
    height: 4px;
    width: 40%;
}

.programing {
    width: 80%;
}
@media screen and (max-width: 1000px) {
    .prog_icon{
        display: none;
    }
}
</style>
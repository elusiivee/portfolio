<script>
import piechart from './PieChart.vue'   
document.addEventListener('mousemove', parallax);
function parallax(e){
    document.querySelectorAll('.object').forEach(function(move){
        var moving_value = move.getAttribute('data-value');
        var x = e.clientX * moving_value;
        var y = e.clientY * moving_value;

        move.style.transform = 'translateX('+x+'px) translateY(' + y +'px)';
    })
}

</script>

<template>
    <div class="my_body">
        <div class="main_bg">
        <div class="main_container row">
            <div class="col-3">
                <div class="layer1 object" data-value="0.03"><img src="./icons/IMG_20230927_130243_242.jpg" style="right: -53px; top: 50px; z-index: 1;"></div>
                <div class="layer1 object" data-value="0.02"><img src="./icons/image_2023-09-27_19-36-44.png" ></div>
                <div class="layer1 object" data-value="0.01"><img src="./icons/IMG_20230927_130530_740.jpg" style="right: -52px; top: -83px;"></div>
            </div>
            <div class="col-6">
                <div class="object" data-value="0.01">
                    <h2 class="main_text bold_text">My</h2>
                    <h2><span>Profile</span></h2>
                </div>
                
            </div>
            <div class="col-3">
                <div class="layer2 object" data-value="0.03"><img src="./icons/IMG_20230927_130541_952.jpg"  style="right: 43px; top: 50px; z-index: 1;"></div>
                <div class="layer2 object" data-value="0.02"><img src="./icons/image_2023-09-27_19-37-16.png" ></div>
                <div class="layer2 object" data-value="0.01"><img src="./icons/IMG_20230927_130808_779.jpg" style="right: 38px; top: -60px;" ></div>
            </div>
        </div>
        <div class="line" style="margin-top: 2rem;"></div>
    </div>
        <div class="container">
            <div class="bold_text" style="text-align: center; color: #33363c; text-decoration: underline; margin-bottom: 2rem;">My skills</div>
            <div class="row">
                <div class="col-6"><piechart/></div>
                <div class="col-6 poly_container"><img src="./icons/brain.png" class="brain"  alt=""></div>
            </div>
            
        </div>
    </div>
    
</template>

<style>

@import url('https://fonts.googleapis.com/css2?family=Kanit:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Kanit:wght@300&display=swap');
.normal_text{
    font-family: Kanit;
    font-weight: 300;  
}

.bold_text{
    font-family: Kanit;
    font-weight: 700; 
    font-size: 50px; 
}

.my_body {
    min-width: 900px;
  margin: 0;
  padding: 0;
  background-color: #fff0d3;
  justify-content: center; 
  align-items: center;
  color: white;
}
.main_bg{
    background-color: #FFCC70;
}
.main_container{
    position: relative;
    justify-content: center; 
    align-items: center;
    max-width: 100%; 
    width: 80%;
    height: 85vh;
    margin: 0 auto;
    padding: 0 20px;
}
.container{
    position: relative;
    justify-content: center; 
    align-items: center;
    max-width: 100%; 
    width: 80%;
}
.layer1{
    top:0;
    left: 0;
    object-fit: contain;

}
.layer2{
    top:0;
    right:  0;
    object-fit: contain;

}

.main_container img{
    position: relative;
    width: 60%;
    height: 50%;
    object-fit: cover;
    border-radius: 1rem;
}
.main_container h2{
    
    text-align: center;
    z-index: 1;
    position: relative;
    font-size: 90px;
    text-transform: uppercase;
    
    line-height: 50px;
    
}
.main_container h2 span{
    font-size: 48px;
    letter-spacing: 10px;

}
.line{
    height: 2px;
  width: 100%; 
  background-color:  #ed902e;
}
.poly_container{
    display: flex;
    justify-content: center; 
  align-items: center;
}
.brain{
    width: 70%;
    animation: moon-move 10s infinite ease-in-out;
}

@keyframes moon-move {
    from{
        transform: translateX(0%) translateY(-5%);
        
    }

    50%{
        transform: translateX(0%) translateY(-15%);
    }

    to{
        transform: translateX(0%) translateY(0%);
    }
}

</style>
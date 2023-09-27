<script>
const parallax = document.querySelector('.parallax')
const parallax_value = document.querySelectorAll('.par_value')


parallax.addEventListener('mousemove', e => {
    const x = e.clientX;
    const y = e.clientY;

    font.style.transform ='translate(${x/ parallax_value}%)'
})
</script>

<template>
    <div class="my_body">
        <section class="parallax"></section>
        <div class="main_container row">
            <div class="col-3 par_value">
                <div class="layer1"><img src="./icons/IMG_20230927_130243_242.jpg" style="right: -53px; top: 54px; z-index: 1;"></div>
                <div class="layer1"><img src="./icons/image_2023-09-27_19-36-44.png" ></div>
                <div class="layer1"><img src="./icons/IMG_20230927_130530_740.jpg" style="right: -52px; top: -57px;"></div>
            </div>
            <div class="col-6">
                <h2 class="main_text bold_text">My</h2>
                <h2><span>Profile</span></h2>
            </div>
            <div class="col-3 par_value">
                <div class="layer2"><img src="./icons/IMG_20230927_130541_952.jpg"  style="right: 43px; top: 54px; z-index: 1;"></div>
                <div class="layer1"><img src="./icons/image_2023-09-27_19-37-16.png" ></div>
                <div class="layer2"><img src="./icons/IMG_20230927_130808_779.jpg" style="right: 38px;top: -57px;" ></div>
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
}

.my_body {
    min-width: 900px;
  margin: 0;
  padding: 0;
  background-color: #cd914f;
  justify-content: center; 
  align-items: center;
  color: white;
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
    width: 150px;
    height: 220px;
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
/* .layer:nth-child(1){
    background-image: url(icons/IMG_20230927_130516_271.jpg);
}
.layer:nth-child(2){
    background-image: url(icons/IMG_20230927_130530_740.jpg);
}
.layer:nth-child(3){
    background-image: url(icons/IMG_20230927_130541_952.jpg);
}
.layer:nth-child(4){
    background-image: url(icons/IMG_20230927_130808_779.jpg);
} */
</style>
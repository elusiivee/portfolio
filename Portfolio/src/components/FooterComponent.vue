<template>
<section id="contact">
    <footer>
        <div class="line"></div>
        <div class="footer_container" style="display: flex; align-items: center; justify-content: space-between;">
            <div style="flex-grow: 1;">
                <span class="name normal_text" style="font-size: 2.5rem;">Andrii Udodenko</span>
                <div class="contact-info" style="margin-top: 2rem; font-size: 1.2rem;">
                    <div style="margin-bottom: 1rem;">
                        <img class="email" src="./icons/mail.png" alt="" style="vertical-align: middle;"> 
                        andri.udodenko@gmail.com
                    </div>
                    <div>
                        <img class="telegram" src="./icons/telegram.png" alt="" style="vertical-align: middle;"> 
                        t.me/elus1ive
                    </div>
                </div>
            </div>
            <div style="margin-left: 2rem;">
                <img class="me" src="./icons/me.jpg" alt="" style="max-width: 150px; border-radius: 50%;">
            </div>
        </div>
    </footer>
</section>
</template>

<style>
span{
    position: relative;
}
.footer_container{
    padding-bottom: 0;
}
.grid-container {
  display: grid;
  grid-template-columns: auto auto;
  padding: 10px;
}
.name:after{
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    border: 1.5px solid rgb(207, 134, 0);
    width: 60%;
}
.email{
    width: 1.5rem;
}
.telegram{
    width: 1.5rem;
    
}
.me{
    width: 10rem;
    height: 10rem;
    object-fit: cover;
    border-radius: 50%;
}
.line{
    border: 1px solid rgb(207, 134, 0);
    width: 50%;
    margin-top: 0;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 1rem;
}

</style>
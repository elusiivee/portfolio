<template>
<section id="work">
    <div class="normal_text" style=" color: rgb(207, 134, 0); margin: 1rem 0rem 0rem 0rem; text-align: center; ">portfolio</div>
    <div class="bold_text" style="text-align: center; color: #e4e2e2; margin: 0rem 0rem 2rem 0rem; ">My works</div>
    <div class="normal_text" style="text-align: center; color: #8a8a8a; margin: 0rem 8rem 2rem 8rem; ">Discover my portfolio showcasing a variety of works across different fields. Each piece reflects my dedication to delivering high-quality and impactful results, demonstrating my expertise and creativity.
    </div>
    <div class="gallery-container">
      <!-- Button Group -->
      <div class="button-group normal_text">
        <button class="underline" @click="currentSection = 'backend'">Backend</button>
        <button class="underline" @click="currentSection = 'frontend'">Frontend</button>
        <button class="underline" @click="currentSection = 'design'">Design</button>
      </div>
  
      <!-- Gallery Content Sections -->
      <div v-if="currentSection === 'backend'" class="gallery-content">
        <a href="https://galaxyglance.netlify.app/" class="normal_text"  style=" color: rgb(207, 134, 0); margin: 0.5rem 0rem 0.5rem 0rem; text-align: center; font-size: 2rem;">GalaxyGlance</a>
          <div class="album">
            <div class="responsive-container-block bg">
                <div class="responsive-container-block img-cont">
                <img class="img" src="../components/icons/bk1.jpg">
                <img class="img" src="../components/icons/bk2.jpg">
                <img class="img img-last" src="../components/icons/bk3.jpg">
                </div>
                <div class="responsive-container-block img-cont">
                <img class="img img-big" src="../components/icons/bk4.jpg">
                <img class="img img-big img-last" src="../components/icons/bk5.jpg">
                <img class="img img-big img-last" src="../components/icons/bk6.jpg">
                </div>
                <div class="responsive-container-block img-cont">
                <img class="img" src="../components/icons/bk7.jpg">
                <img class="img" src="../components/icons/bk8.jpg">
                <img class="img" src="../components/icons/bk9.jpg">
                </div>
            </div>
            </div>

      </div>
  
      <div v-if="currentSection === 'frontend'" class="gallery-content">

        <div class="album">
          <a href="https://elusive.pythonanywhere.com/" class="normal_text"  style=" color: rgb(207, 134, 0); margin: 0.5rem 0rem 0.5rem 0rem; text-align: center; font-size: 2rem;">Culinary Odissey</a>
            <div class="responsive-container-block bg">
                <div class="responsive-container-block img-cont">
                <img class="img" src="../components/icons/fr1.jpg">
                <img class="img" src="../components/icons/fr2.jpg">
                <img class="img img-last" src="../components/icons/fr3.jpg">
                </div>
                <div class="responsive-container-block img-cont">
                <img class="img img-big" src="../components/icons/fr4.jpg">
                <img class="img img-big img-last" src="../components/icons/fr5.jpg">
                <img class="img img-big img-last" src="../components/icons/fr9.jpg">
                </div>
                <div class="responsive-container-block img-cont">
                <img class="img" src="../components/icons/fr6.jpg">
                <img class="img" src="../components/icons/fr7.jpg">
                <img class="img" src="../components/icons/fr8.jpg">
                </div>
            </div>
            </div>
      </div>
  
      <div v-if="currentSection === 'design'" class="gallery-content">

        <div class="album">
            <div class="responsive-container-block bg">
                <div class="responsive-container-block img-cont">
                <img class="img" src="../components/icons/ph1.jpg">
                <img class="img" src="../components/icons/ph8.jpg">
                <img class="img img-last" src="../components/icons/ph3.jpg">
                </div>
                <div class="responsive-container-block img-cont">
                <img class="img img-big" src="../components/icons/ph4.jpg">
                <img class="img img-big img-last" src="../components/icons/ph5.png">
                <img class="img img-big img-last" src="../components/icons/ph6.jpg">
                </div>
                <div class="responsive-container-block img-cont">
                <img class="img" src="../components/icons/ph7.jpg">
                <img class="img" src="../components/icons/ph2.jpg">
                <img class="img" src="../components/icons/ph9.jpg">
                </div>
            </div>
            </div>
      </div>
    </div>
</section>
</template>

<script>
export default {
name: 'Gallery',
data() {
    return {
    currentSection: 'backend' // Default section to show
    };
}
};
</script>

<style scoped>
/* General Styles */
.gallery-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    padding: 20px;
}

.button-group {
    margin-bottom: 20px;
}

.button-group button {
    padding: 10px 20px;
    margin: 5px;
    border: none;
    background-color: transparent;
    cursor: pointer;
    border-radius: 5px;
    color: #8a8a8a;
}

.underline {
    display: inline-block;
    position: relative;
}

.underline::after {
    content: '';
    position: absolute;
    width: 80%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: rgb(207, 134, 0);
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
}

.underline:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
}

.gallery-content {
    text-align: center;

}





.album .responsive-container-block {
  min-height: 75px;
  height: fit-content;
  width: 100%;
  padding-top: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  display: flex;
  flex-wrap: wrap;
  margin-top: 0px;
  margin-right: auto;
  margin-bottom: 0px;
  margin-left: auto;
  justify-content: flex-start;
}

.album .responsive-container-block.bg {
  max-width: 1320px;
  margin: 0 0 0 0;
  justify-content: space-between;
}

.album .img {
  width: 100%;
  margin: 0 0 20px 0;
}

.album #i9rb {
  color: black;
}

.album #ir6i {
  color: black;
}

.album #ikz3b {
  color: black;
}

.album .responsive-container-block.img-cont {
  flex-direction: column;
  max-width: 33.3%;
  min-height: auto;
  margin: 0 0 0 0;
  height: 100%;
}

.album #ipix {
  color: black;
}

.album #ipzoh {
  color: black;
}

.album #ig5q8 {
  color: black;
}

.album #imtzl {
  color: black;
}

.album #i53es {
  color: black;
}

.album .img.img-big {
  height: 50%;
  margin: 0 0 16px 0;
}

@media (max-width: 1024px) {
  .album .img {
    margin: 0 0 18px 0;
  }
}

@media (max-width: 768px) {
  .album .img {
    max-width: 32.5%;
    margin: 0 0 0 0;
  }

  .album .responsive-container-block.bg {
    flex-direction: column;
  }

  .album .responsive-container-block.img-cont {
    max-width: 100%;
    flex-direction: row;
    justify-content: space-between;
  }

  .album .img.img-big {
    max-width: 49%;
    margin: 0 0 0 0;
  }
}

@media (max-width: 500px) {
  .album .img {
    max-width: 94%;
    margin: 0 0 25px 0;
  }

  .album .responsive-container-block.img-cont {
    flex-direction: column;
    align-items: center;
    padding: 10px 10px 10px 10px;
  }

  .album .img.img-big {
    max-width: 94%;
    margin: 0 0 25px 0;
  }

  .album .img.img-last {
    margin: 0 0 5px 0;
  }
}
</style>

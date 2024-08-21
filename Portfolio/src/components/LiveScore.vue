<script>

</script>




<template>
<section id="cv">
    <div class="livecontainer">
    <section class="timeline">
        <div class="bold_text" style=" color: #e4e2e2; margin: 5rem 0rem 0rem 0rem; text-align: center;">Curriculum vitae</div>
        <div class="event" id="school"><div class="date">September 2011- Juni 2022</div> <div class="school">Certificate of complete secondary education at school №31, Vinnytsia-Ukraine (grade 11)</div></div>
        <div class="event" id="school"><div class="date">August 2021 - November 2021</div> <div class="school">Language academy in Karlsruhe
            <p>● Communication</p>
            <p>● Working with photos</p>
        </div></div>
        <div class="event" id="school"><div class="date">July 2022- December 2022</div> <div class="school">Basic knowledge of the Photoshop course
            <p>● German up to level B1</p>
        </div></div>
        <div class="event" id="school"><div class="date">March 2023- June 2023</div> <div class="school">Language course at the Studienkolleg at KIT
            <p>● German up to level B1-B2</p>
        </div></div>
        <div class="event" id="school"><div class="date">April 2023- August 2023</div> <div class="school">Courses for Front-End programming
            <p>● Junior level in the Front-End</p>
            <p>● Development of web design</p>
            <p>● Knowledge of Javascript, HTML, CSS, Bootstrap, Vue.js</p>
            <div><img class="certificate" src="../components/icons/js_certificate.png" alt="Italian Trulli"></div>
        </div></div>
        <div class="event" id="school"><div class="date">October 2023- December 2023</div> <div class="school">Courses for Back-End Programming
            <p>● Junior level in the Back_End</p>
            <p>● Development of web applications</p>
            <p>● Kenntnisse in Python, Django, GIT</p>
            <div> <img class="certificate" src="../components/icons/python_certificate.png" alt="Italian Trulli"> </div>
        </div></div>
        <div class="event" id="school"><div class="date">October 2023- 2024 June</div> <div class="school">Vorbereitungskurs für FSP-Test beim Studienkolleg am KIT (2 Semester)</div></div>
        <div class="event" id="school"><div class="date">September 2024 - ...</div> <div class="school">DevOps courses</div></div>
    </section>
  </div>
</section>
</template>



<style>

@keyframes appear{
    from{
        opacity: 0;
        scale: 0.5;
    }
    to{
        opacity: 1;
        scale: 1;
    }
}
.event{
    display: flex;
    align-items: flex-start; /* Align items to the top */
    justify-content: flex-start;
    gap: 10px;
    animation: appear linear;
    animation-timeline: view();
    animation-range: entry 0 cover 40%;
    
}


.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
  font-size: 1.5rem;
}

.timeline {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.event {
  padding: 20px;

}

.event.visible {
  opacity: 1;
  transform: translateY(0);
}
.date {
    padding-right: 2rem;
    max-width: 20%;
    font-weight: bold;
}
.certificate{
    width: 40%;
}

</style>
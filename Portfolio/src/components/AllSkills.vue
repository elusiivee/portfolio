<script>

</script>

<template>
    <div class="bold_text"
        style="text-align: center; color: #e4e2e2; margin: 5rem 0rem 2rem 0rem; ">Knowledge</div>
    <div class="services_block" >
        <div class="block_container normal_text">
            <span><img class="skill_icon" src="../components/icons/coding.png" alt=""></span>
            
            <div>Back-End Developer</div>
            <div style="font-size: 18px; color: orange;">Server logic, databases.</div>
        </div>
        <div class="block_container normal_text">
            <span><img class="skill_icon" src="../components/icons/web-design.png" alt=""></span>
            <div>Front-End Develower</div>
            <div style="font-size: 18px; color: orange;">Web interfaces, user experience.
            </div>
        </div>
        <div class="block_container normal_text">
            <span><img class="skill_icon" src="../components/icons/paint-brush.png" alt=""></span>
            <div>Photo editor</div>
            <div style="font-size: 18px; color: orange;">Graphics, visual design.
            </div>
        </div>
        <div class="block_container normal_text">
            <span><img class="skill_icon" src="../components/icons/devops.png" alt=""></span>
            <div>DevOps Engineer</div>
            <div style="font-size: 18px; color: orange;">Infrastructure, automation, CI/CD.<p>Soon...</p>
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
    height: 25rem;
    background-color: #2c2d32;
    border: none;
    box-shadow: 6px 9px 12px -2px #1a1b1e;
    margin: 1rem;
    padding: 0.5rem;
    text-align: center;
    font-size: 30px;
    border-radius: 0px;
}
.skill_icon{
    padding: 1rem 0rem 1rem 0rem;
    text-align: center;
    width: 60%;
}



</style>
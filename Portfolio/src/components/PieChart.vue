<template>
    <div>
        <canvas id="myChart"></canvas>
    </div>
</template>

<script setup="setup">

    import Chart from 'chart.js/auto';
    import {onMounted} from 'vue';

    onMounted(() => {
        const ctx = document.getElementById('myChart');
        new Chart(ctx, {
            type: 'doughnut',
            data: {
                
                labels: [
                    'Java Script', 'Python', 'HTML/CSS'
                ],
                datasets: [
                    {
                        label: 'My First Dataset',
                        data: [40, 35, 25],

                        backgroundColor: [
                            'rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(176, 208, 0)'
                        ],
                        hoverOffset: 4
                    }
                ]
            },
            options: {
                        indexAxis: 'y',
                    },
        });
        
    });
</script>
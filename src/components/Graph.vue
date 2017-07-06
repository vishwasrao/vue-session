<template>
  <div >
    <h1>{{ msg }}</h1>
    <IEcharts :option="gauge"  style="width: 600px; height: 450px;" ></IEcharts>
    <small class="space"><b>Tip</b> This is sample graph!</small>
  </div>
</template>

<script>
import IEcharts from 'vue-echarts-v3/src/full.vue'

export default {
  name: 'graph',
  components: { IEcharts },
  data () {
    return {
      loading: true,
      temp: 0,
      msg: 'Sample Graph', 
      gauge: {
        tooltip: {
          formatter: '{a} <br/>{b} : {c}'
        },
        toolbox: {
          show: true,
          feature: {
            mark: {show: true},
            restore: {show: false},
            saveAsImage: {show: false}
          }
        },
        series: [
          {
            name: 'Temp',
            type: 'gauge',
            detail: {formatter: '{value}°C'},
            data: [{value: 50, name: 'Temperature'}]
          }
        ]
      },

    }
  },
  methods: {  
      refreshData () {
    this.gauge.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
       }
  },

  mounted () 
  {
      this.refreshData()
      setInterval(function () {
          this.refreshData();
        }.bind(this), 3000); 
   
  }
}
</script>

<style>

</style>

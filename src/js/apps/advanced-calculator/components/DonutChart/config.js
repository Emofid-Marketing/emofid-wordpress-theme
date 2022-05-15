const chartConfig = (dist) => ({
  chart: {
    type: 'pie',
    backgroundColor: 'transparent',
    options3d: {
      enabled: true,
      alpha: 45
    },
    style: {
      fontFamily: 'dana',
    }
  },
  title: {
    text: ''
  },
  plotOptions: {
    pie: {
      size: 195,
      innerSize: 60,
      depth: 30,
      colors: ['#A86B9D', '#527CEB', '#FDD88E'],
      tooltip: {
        valueSuffix: ' درصد',
      }
    },
    series: {
      dataLabels: {
        enabled: false,
      }
    }
  },
  series: [{
    name: 'سهم از پرتفو',
    data: dist,
  }],
  credits: {
    enabled: false,
  },
});

export default chartConfig;

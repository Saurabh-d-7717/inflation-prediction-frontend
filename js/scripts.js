// ------------SIDEBAR CODE------------

let sidebarOpen = false;
const sidebar = document.getElementById('sidebar');

function openSidebar() {
  if (!sidebarOpen) {
    sidebar.classList.add('sidebar-responsive');
    sidebarOpen = true;
  }
}

function closeSidebar() {
  if (sidebarOpen) {
    sidebar.classList.remove('sidebar-responsive');
    sidebarOpen = false;
  }
}

// ---------- CHARTS ----------

// AREA CHART1
const areaChartOptions1 = {
  series: [
    {
      name: 'Inflation %',
      data: [31, 40, 28, 51, 42, 109, 100],
    }
  ],
  chart: {
    height: 350,
    type: 'area',
    toolbar: {
      show: false,
    },
  },
  colors: [ '#246dec'],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth',
  },
  labels: ['2018', '2019', '2020', '2021', '2022', '2023', '2024'],
  markers: {
    size: 0,
  },
  yaxis: [
    {
      title: {
        text: 'Inflation Rate',
      },
    },
   
  ],
  tooltip: {
    shared: true,
    intersect: false,
  },
};

const areaChart1 = new ApexCharts(
  document.querySelector('#area-chart1'),
  areaChartOptions1
);
areaChart1.render();

// AREA CHART
const areaChartOptions = {
  series: [
    
    {
      name: 'Inflation %',
      data: [11, 32, 45, 65, 70, 85, 110],
    },
  ],
  chart: {
    height: 350,
    type: 'area',
    toolbar: {
      show: false,
    },
  },
  colors: ['#4f35a1', '#246dec'],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth',
  },
  labels: ['2018', '2019', '2020', '2021', '2022', '2023', '2024'],
  markers: {
    size: 0,
  },
  yaxis: [
    
    {
      opposite: false,
      title: {
        text: 'Inflation Rate',
      },
    },
  ],
  tooltip: {
    shared: true,
    intersect: false,
  },
};

const areaChart = new ApexCharts(
  document.querySelector('#area-chart'),
  areaChartOptions
);
areaChart.render();


// COMBINED AREA CHART
const areaChartOptions2 = {
  series: [
    {
      name: 'Graph 1',
      data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
      name: 'Graph 2',
      data: [11, 32, 45, 65, 70, 85, 110],
    },
  ],
  chart: {
    height: 350,
    type: 'area',
    toolbar: {
      show: false,
    },
  },
  colors: ['#246dec', '#4f35a1'],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth',
  },
  labels: ['2018', '2019', '2020', '2021', '2022', '2023', '2024'],
  markers: {
    size: 0,
  },
  yaxis: [
    {
      title: {
        text: 'Graph 1',
      },
    },
    {
      opposite: true,
      title: {
        text: 'Graph 2',
      },
    },
  ],
  tooltip: {
    shared: true,
    intersect: false,
  },
};

const areaChart2 = new ApexCharts(
  document.querySelector('#area-chart2'),
  areaChartOptions2
);
areaChart2.render();
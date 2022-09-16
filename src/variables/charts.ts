import POPULATION_DATA from "../data/chart.json";
import SOCIALS_DATA from "../data/KPI.json";
const males = POPULATION_DATA.filter((person) => person.gender === "male");
const females = POPULATION_DATA.filter((person) => person.gender === "female");

// @ts-ignore
males?.push(males?.shift());

export const lineChartData = [
  {
    name: males[0].gender,
    data: males.map((stat) => stat.percentageViewed),
  },
  {
    name: females[0].gender,
    data: females.map((stat) => stat.percentageViewed),
  },
];
export const lineChartOptions = {
  chart: {
    toolbar: {
      show: true,
    },
  },
  tooltip: {
    theme: "dark",
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },
  xaxis: {
    title: {
      text: "Age Group",
    },
    categories: males.map((age) => age.ageGroup),
    labels: {
      style: {
        colors: "#C8CFCA",
        fontSize: "12px",
      },
    },
  },
  yaxis: {
    title: {
      text: "Percentage Viewed",
    },
    labels: {
      style: {
        colors: "#C8CFCA",
        fontSize: "12px",
      },
    },
  },
  legend: {
    show: true,
  },
  grid: {
    strokeDashArray: 5,
  },
  fill: {
    type: "gradient",
    gradient: {
      shade: "light",
      type: "vertical",
      shadeIntensity: 0.5,
      gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
      inverseColors: true,
      opacityFrom: 0.8,
      opacityTo: 0,
      stops: [],
    },
    colors: ["#4FD1C5", "#2D3748"],
  },
  colors: ["#4FD1C5", "#2D3748"],
};
export const barChartOptions = {
  plotOptions: {
    bar: {
      dataLabels: {
        position: "top", // top, center, bottom
      },
    },
  },
  dataLabels: {
    enabled: true,
    formatter: function (val: any) {
      return;
    },
    offsetY: -20,
    style: {
      fontSize: "12px",
      colors: ["#222222"],
    },
  },
  xaxis: {
    categories: SOCIALS_DATA.map((item) => item.viewSource),
    position: "bottom",
    labels: {
      offsetY: 0,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    crosshairs_: {
      fill: {
        type: "gradient",
        gradient: {
          colorFrom: "#C8CFCA",
          colorTo: "#C8CFCA",
          stops: [0, 100],
          opacityFrom: 0.4,
          opacityTo: 0.5,
        },
      },
    },
    tooltip: {
      enabled: false,
      offsetY: -35,
    },
  },
  fill: {
    gradient: {
      shade: "light",
      type: "horizontal",
      color: "#C8CFCA",
      shadeIntensity: 0.25,
      gradientToColors: undefined,
      inverseColors: true,
      opacityFrom: 1,
      opacityTo: 1,
      stops: [50, 0, 100, 100],
    },
  },
  yaxis: {
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    labels: {
      show: false,
      formatter: function (val: any) {
        return;
      },
    },
  },
  title: {
    text: "Social Media Platforms",
    floating: true,
    offsetY: 0,
    align: "center",
    style: {
      color: "#222222",
    },
  },
  chart: {
    style: {
      color: "#222222",
    },
    animations: {
      enabled: false,
    },
  },
  colors: ["#4FD1C5", "#2D3748"],
};
export const barChartData = [
  {
    name: "Percentage Difference",
    data: SOCIALS_DATA.map((item) => item.views),
  },
];

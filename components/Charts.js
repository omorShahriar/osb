import React from "react";

// import { useEffect, useRef } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

import {
  incomeData,
  totalDepositsData,
  totalLoansData,
  totalAssetsData,
  bookValueData,
} from "data/chartData";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = (type) => {
  switch (type) {
    case "income":
      return {
        responsive: true,
        maintainAspectRatio: false,
        animation: {
          easing: "easeInOutSine",
        },
        plugins: {
          tooltip: {
            callbacks: {
              label: function (context) {
                var label = context.dataset.label || "";

                if (label) {
                  label += ": ";
                }
                if (context.parsed.y !== null) {
                  label += new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                  }).format(context.parsed.y / 1000000);
                }
                return label;
              },
            },
          },
          legend: {
            display: false,
          },
          title: {
            display: true,
            color: "#000",
            font: {
              size: 24,
            },
            text: "Net Income ($Millions)",
          },
        },
        scales: {
          y: {
            ticks: {
              // Include a dollar sign in the ticks
              callback: function (value, index, values) {
                return "$" + value / 1000000;
              },
            },
          },
        },
      };
    case "bookValue":
      return {
        responsive: true,
        maintainAspectRatio: false,
        animation: {
          easing: "easeInOutSine",
        },
        plugins: {
          tooltip: {
            callbacks: {
              label: function (context) {
                var label = context.dataset.label || "";

                if (label) {
                  label += ": ";
                }
                if (context.parsed.y !== null) {
                  label += new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                  }).format(context.parsed.y);
                }
                return label;
              },
            },
          },
          legend: {
            display: false,
          },
          title: {
            display: true,
            color: "#000",
            font: {
              size: 24,
            },
            text: "Book Value Per Share",
          },
        },
        scales: {
          y: {
            ticks: {
              // Include a dollar sign in the ticks
              callback: function (value) {
                return "$" + value;
              },
            },
          },
        },
      };
    case "assets":
      return {
        responsive: true,
        maintainAspectRatio: false,
        animation: {
          easing: "easeInOutSine",
        },
        plugins: {
          tooltip: {
            callbacks: {
              label: function (context) {
                var label = context.dataset.label || "";

                if (label) {
                  label += ": ";
                }
                if (context.parsed.y !== null) {
                  label += new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                  }).format(context.parsed.y / 1000000);
                }
                return label;
              },
            },
          },
          legend: {
            display: false,
          },
          title: {
            display: true,
            color: "#000",
            font: {
              size: 24,
            },
            text: "Total Assets ($Millions)",
          },
        },
        scales: {
          y: {
            ticks: {
              // Include a dollar sign in the ticks
              callback: function (value, index, values) {
                return "$" + value / 1000000;
              },
            },
          },
        },
      };
    case "loans":
      return {
        responsive: true,
        maintainAspectRatio: false,
        animation: {
          easing: "easeInOutSine",
        },
        plugins: {
          tooltip: {
            callbacks: {
              label: function (context) {
                var label = context.dataset.label || "";

                if (label) {
                  label += ": ";
                }
                if (context.parsed.y !== null) {
                  label += new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                  }).format(context.parsed.y / 1000000);
                }
                return label;
              },
            },
          },
          legend: {
            display: false,
          },
          title: {
            display: true,
            color: "#000",
            font: {
              size: 24,
            },
            text: "Total Loans ($Millions)",
          },
        },
        scales: {
          y: {
            ticks: {
              // Include a dollar sign in the ticks
              callback: function (value, index, values) {
                return "$" + value / 1000000;
              },
            },
          },
        },
      };
    case "deposits":
      return {
        responsive: true,
        maintainAspectRatio: false,
        animation: {
          easing: "easeInOutSine",
        },
        plugins: {
          tooltip: {
            callbacks: {
              label: function (context) {
                var label = context.dataset.label || "";

                if (label) {
                  label += ": ";
                }
                if (context.parsed.y !== null) {
                  label += new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                  }).format(context.parsed.y / 1000000);
                }
                return label;
              },
            },
          },
          legend: {
            display: false,
          },
          title: {
            display: true,
            color: "#000",
            font: {
              size: 24,
            },
            text: "Total Deposits ($Millions)",
          },
        },
        scales: {
          y: {
            ticks: {
              // Include a dollar sign in the ticks
              callback: function (value, index, values) {
                return "$" + value / 1000000;
              },
            },
          },
        },
      };
  }
};

const IncomeChart = () => {
  return (
    <Bar
      data={incomeData}
      width={400}
      height={300}
      options={options("income")}
    />
  );
};
const BookValueChart = () => {
  return (
    <Bar
      data={bookValueData}
      width={400}
      height={300}
      options={options("bookValue")}
    />
  );
};
const TotalAssetsChart = () => {
  return (
    <Bar
      data={totalAssetsData}
      width={400}
      height={300}
      options={options("assets")}
    />
  );
};
const TotalLoansChart = () => {
  return (
    <Bar
      data={totalLoansData}
      width={400}
      height={300}
      options={options("loans")}
    />
  );
};
const TotalDepositsChart = () => {
  return (
    <Bar
      data={totalDepositsData}
      width={400}
      height={300}
      options={options("deposits")}
    />
  );
};

export {
  IncomeChart,
  BookValueChart,
  TotalAssetsChart,
  TotalLoansChart,
  TotalDepositsChart,
};

import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const incomeData = [
  {
    name: "2014",
    uv: 1.56,
  },
  {
    name: "2015",
    uv: 1.94,
  },
  {
    name: "2016",
    uv: 2.51,
  },
  {
    name: "2017",
    uv: 1.92,
  },
  {
    name: "2018",
    uv: 1.74,
  },
  {
    name: "2019",
    uv: 3.75,
  },
  {
    name: "2020",
    uv: 1.88,
  },
  {
    name: "2021",
    uv: 3.0,
  },
];
const bookValueData = [
  {
    name: "2014",
    uv: 29.67,
  },
  {
    name: "2015",
    uv: 31.48,
  },
  {
    name: "2016",
    uv: 31.88,
  },
  {
    name: "2017",
    uv: 34.07,
  },
  {
    name: "2018",
    uv: 34.1,
  },
  {
    name: "2019",
    uv: 39.82,
  },
  {
    name: "2020",
    uv: 42.56,
  },
  {
    name: "2021",
    uv: 43.88,
  },
];
const assetData = [
  {
    name: "2015",
    uv: 298,
  },
  {
    name: "2016",
    uv: 335,
  },
  {
    name: "2017",
    uv: 355,
  },
  {
    name: "2018",
    uv: 349,
  },
  {
    name: "2019",
    uv: 399,
  },
  {
    name: "2020",
    uv: 494,
  },
  {
    name: "2021",
    uv: 571,
  },
];
const loanData = [
  {
    name: "2014",
    uv: 131,
  },
  {
    name: "2015",
    uv: 139,
  },
  {
    name: "2016",
    uv: 146,
  },
  {
    name: "2017",
    uv: 169,
  },
  {
    name: "2018",
    uv: 224,
  },
  {
    name: "2019",
    uv: 253,
  },
  {
    name: "2020",
    uv: 330,
  },
  {
    name: "2021",
    uv: 303,
  },
];
const depositData = [
  {
    name: "2014",
    uv: 256,
  },
  {
    name: "2015",
    uv: 269,
  },
  {
    name: "2016",
    uv: 306,
  },
  {
    name: "2017",
    uv: 324,
  },
  {
    name: "2018",
    uv: 318,
  },
  {
    name: "2019",
    uv: 361,
  },
  {
    name: "2020",
    uv: 444,
  },
];

class IncomeChart extends PureComponent {
  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart width={150} height={40} data={incomeData}>
          <Bar dataKey="uv" fill="#00945f" />
          <XAxis dataKey="name" />
          <YAxis />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}

class BookValueChart extends PureComponent {
  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart width={150} height={40} data={bookValueData}>
          <Bar dataKey="uv" fill="#0056b8" />
          <XAxis dataKey="name" />
          <YAxis />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
class AssetChart extends PureComponent {
  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart width={150} height={40} data={assetData}>
          <Bar dataKey="uv" fill="#0056b8" />
          <XAxis dataKey="name" />
          <YAxis />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
class LoanChart extends PureComponent {
  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart width={150} height={40} data={loanData}>
          <Bar dataKey="uv" fill="#00945f" />
          <XAxis dataKey="name" />
          <YAxis />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
class DepositChart extends PureComponent {
  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart width={150} height={40} data={depositData}>
          <Bar dataKey="uv" fill="#0056b8" />
          <XAxis dataKey="name" />
          <YAxis />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}

export { IncomeChart, BookValueChart, AssetChart, LoanChart, DepositChart };

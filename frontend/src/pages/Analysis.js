import { Row, Col } from "react-bootstrap";
// import AdminLinksComponent from "../../components/admin/AdminLinksComponent";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import NavBar from "../components/NavBar";

const Analysis = () => {
  const data = [
    {
      name: "January",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "February",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "March",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "April",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "May",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "June",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "July",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
        name: "August",
        uv: 3490,
        pv: 4300,
        amt: 2100,
      },
      {
        name: "September",
        uv: 3490,
        pv: 4300,
        amt: 2100,
      },
      {
        name: "October",
        uv: 3490,
        pv: 4300,
        amt: 2100,
      },
      {
        name: "November",
        uv: 3490,
        pv: 4300,
        amt: 2100,
      },
      {
        name: "December",
        uv: 3490,
        pv: 4300,
        amt: 2100,
      },
  ];
  return (
    <div>
    <NavBar/>
    <Row className="m-5">
    
      <Col md={10} width="100%" height="100%">
        <h2>Monthly Profit </h2>
        <ResponsiveContainer width="100%" height={500}>
          <LineChart
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="pv"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </Col>
    </Row>
    </div>
  );
};

export default Analysis;


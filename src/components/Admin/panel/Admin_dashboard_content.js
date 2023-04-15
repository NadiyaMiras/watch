import React from 'react';
import a1 from './admin_dashboard.module.css';
import { Row, Col } from 'react-bootstrap';
import { PieChart, Pie, Cell } from 'recharts';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
const Admin_dashboard_content = () => {
  const data = [
    {
      name: '2017',
      orders: 4000,
      sales: 2400,
      amt: 2400,
    },
    {
      name: '2018',
      orders: 5000,
      sales: 3398,
      amt: 2210,
    },
    {
      name: '2019',
      orders: 2000,
      sales: 6800,
      amt: 2290,
    },
    {
      name: '2020',
      orders: 2780,
      sales: 3908,
      amt: 2000,
    },
    {
      name: '2021',
      orders: 1890,
      sales: 4800,
      amt: 2181,
    },
    {
      name: '2022 ',
      orders: 2390,
      sales: 2800,
      amt: 2500,
    },
    {
      name: '2023',
      orders: 3490,
      sales: 4300,
      amt: 2100,
    },
  ];
  const data1 = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
  ];
  const COLORS = ['#FF9F43', '#00CFE8', '#1B2850', '#28C76F'];
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <>
      <div className={a1.dashboard}>
        <h6>Dashboard overview</h6>
        <div className={a1.dashboard_content}>
          <Row>
            <Col lg={3} md={6} sm={6} xs={12}>
              <div className={a1.dashboard_box} style={{ backgroundColor: '#FF9F43' }}>
                <div className={a1.dashboard_content_left}>
                  <h5>Total Shops</h5>
                  <h4>12</h4>
                </div>
                <div>
                  <i class="fa fa-shopping-basket" aria-hidden="true"></i>
                </div>
              </div>
            </Col>
            <Col lg={3} md={6} sm={6} xs={12}>
              <div className={a1.dashboard_box} style={{ backgroundColor: '#00CFE8' }}>
                <div className={a1.dashboard_content_left}>
                  <h5>Total Products</h5>
                  <h4>105</h4>
                </div>
                <div>
                  <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                </div>
              </div>
            </Col>
            <Col lg={3} md={6} sm={6} xs={12}>
              <div className={a1.dashboard_box} style={{ backgroundColor: '#1B2850' }}>
                <div className={a1.dashboard_content_left}>
                  <h5>Total Categories</h5>
                  <h4>7</h4>
                </div>
                <div>
                  <i class="fa fa-shopping-bag" aria-hidden="true"></i>
                </div>
              </div>
            </Col>
            <Col lg={3} md={6} sm={6} xs={12}>
              <div className={a1.dashboard_box} style={{ backgroundColor: '#28C76F' }}>
                <div className={a1.dashboard_content_left}>
                  <h5>New Products</h5>
                  <h4>10</h4>
                </div>
                <div>
                  <i class="fa fa-diamond" aria-hidden="true"></i>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div className={a1.dashboard_graph}>
          <Row>
            <Col lg={6} md={12}>
              <h6 className={a1.graphheading}>Product Sales</h6>
              <BarChart className={a1.barChart} width={600} height={400} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="sales" fill="#FF9F43" />
                <Bar dataKey="orders" fill="#1B2850" />
              </BarChart>
            </Col>
            <Col lg={6} md={12}>
              <h6 className={a1.graphheading}>Best Selling Products</h6>
              <PieChart width={600} height={500}>
                <Pie
                  data={data1}
                  className={a1.pieChart}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={renderCustomizedLabel}
                  outerRadius={150}
                  fill="#8884d8"
                  dataKey="value">
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
            </Col>
          </Row>
        </div>
      </div>
    </>
  )
}

export default Admin_dashboard_content;
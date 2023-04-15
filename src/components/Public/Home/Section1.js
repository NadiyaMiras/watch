import React, { useState, useEffect } from 'react'
import { Button, Container } from 'react-bootstrap'
import a1 from './section.module.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Section1 = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('http://127.0.0.1:8080/api1/admin/categ_view.php').then(function (response) {
      // console.log(response.data);
      setData(response.data)
    });
  }, [])
  const viewPrdts = (id) => {
    axios.get('http://127.0.0.1:8080/api1/public/product_view.php?name1=' + id).then(function (response) {
      //  console.log(response.data);
      navigate("/productView", { state: response.data });
    });
  }
  return (
    <Container>
      <div className={a1.categ_btn}>
        <Button className={a1.single_btn} onClick={() => (data.filter(s1 => s1.name == "Women" && viewPrdts(s1.id)))}>Women's watches</Button>
        <Button className={a1.single_btn} onClick={() => (data.filter(s1 => s1.name == "Men" && viewPrdts(s1.id)))}>Men's watches</Button>
        <Button className={a1.single_btn} onClick={() => (data.filter(s1 => s1.name == "Gold" && viewPrdts(s1.id)))}>Gold watches</Button>
        <Button className={a1.single_btn} onClick={() => (data.filter(s1 => s1.name == "Silver" && viewPrdts(s1.id)))}>Silver watches</Button>
        <Button className={a1.single_btn} onClick={() => (data.filter(s1 => s1.name == "Rose gold" && viewPrdts(s1.id)))}>Rose Gold watches</Button>
        <Button className={a1.single_btn} onClick={() => (data.filter(s1 => s1.name == "Leather" && viewPrdts(s1.id)))}>Leather watches</Button>
      </div>
    </Container>
  )
}

export default Section1

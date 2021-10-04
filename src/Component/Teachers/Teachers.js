import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import CardTeachers from '../cardTeachers/cardTeachers';

const Teachers = () => {
  const[teachers, setTeachers] = useState([]);
  useEffect(() =>{
    fetch('./teachers.json')
    .then(res => res.json())
    .then(data => setTeachers(data))
  },[])
  return (
    <div className='container'>
      <h1 className='bg-danger p-5 text-center text-light rounded-3 mb-5 mt-5'>Teachers</h1>
        <Row xs={1} md={3} className=" g-4">
        {
          teachers.map(teacher => <CardTeachers 
          key={teacher.id}
          teacher={teacher}
          ></CardTeachers>)
          }
        </Row>
        
    </div>
  );
};

export default Teachers;
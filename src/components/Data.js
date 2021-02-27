import React, { useState } from 'react';
import './Data.css';
import { TagsInput } from './TagsInput';

export const Data = ({ student }) => {

  const grades = student.grades;
  // transform the string grade to int
  // calculate the average by dividing the sum with the length of grades array
  const avg = grades.reduce((ac, item) => (parseInt(ac) + parseInt(item)), 0) / grades.length;

  // toggle the button style and hidding panel by active status
  const[active, setActive] = useState(false);

  const handleClick = (currentId) => {
    setActive(!active);
    toggleList(active, `.list_${currentId}`);
  };

  const toggleList = (status, selector) => {
    const list = document.querySelector(`${selector}`);
    list.style.maxHeight = status === false ? list.scrollHeight + "px" : null;
  };



  return (
    <li className="listItem">
      <div className="pic">
        <img src={student.pic} alt="logo" className="logo"/>
      </div>
      <div className="discription">
        <div>
          <h2>{student.firstName} {student.lastName}</h2>
        </div>
        <div>
          <p>Email: {student.email}</p>
          <p>Company: {student.company}</p>
          <p>Skill: {student.skill}</p>
          <p>Average: {avg}%</p>
          <br/ >
          <div className={`expandableView list_${student.id}`}>
            <p>Test1 : {student.grades[0]}</p>
            <p>Test2 : {student.grades[1]}</p>
            <p>Test3 : {student.grades[2]}</p>
            <p>Test4 : {student.grades[3]}</p>
            <p>Test5 : {student.grades[4]}</p>
            <p>Test6 : {student.grades[5]}</p>
            <p>Test7 : {student.grades[6]}</p>
            <p>Test8 : {student.grades[7]}</p>
          </div>
          <TagsInput id={student.id} />
        </div>
      </div>
        <button className={`toggle ${active === true ? "active" : "inactive"}`} onClick={() => handleClick(student.id)}></button>
    </li>
  )
}

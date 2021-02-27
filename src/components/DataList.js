import React, { useContext, useEffect, useState } from 'react';
import { Data } from './Data';
import './DataList.css'
import { GlobalContext } from '../context/GlobalState';
import { SearchBar } from './SearchBar';

export function DataList() {
  const { students, getStudents, tags } = useContext(GlobalContext);
  const[searchName, setsearchName] = useState('');
  const[searchTag, setsearchTag] = useState('');

  // return students records that matches nameSearchInput with both upper or lower case
  let matchName = students.filter(student => {
    const regex = new RegExp(`^${searchName}`, 'gi');
    return student.firstName.match(regex) || student.lastName.match(regex);
  });

  // return tags records that matches tagSearchInput with both upper or lower case
  let matchTags = tags.filter(tag => {
    const regex = new RegExp(`^${searchTag}`, 'gi');
    return tag.tag.match(regex);
  });
  
  // transform tag array objects to corresponding ids array
  let matchTagIds = matchTags.map((matchT) => matchT.id);


  // retrieve students records at the beginning of renderring
  useEffect(() => {
    getStudents();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  return (
    <>
    <div className="container">
      <div className="searchBar">
        <SearchBar handleChange={(e) => setsearchName(e.target.value)} placeholder={"Search by name"}/>
        <SearchBar handleChange={(e) => setsearchTag(e.target.value)} placeholder={"Search by tag"}/>
      </div>
      {/* if searchTagInput is empty, pass matched name search students records. 
      If not, filter the students records with the same id in matchTagIds */}
      <ul className="list">
        {searchTag ? matchName.filter(match => matchTagIds.includes(match.id)).map(student => (<Data key = { student.id } student = { student } />)) :
         matchName.map(student => (<Data key = { student.id } student = { student } />))}
      </ul>      
    </div>
    </>
  )
}

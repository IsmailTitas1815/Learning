import React from 'react';
import ReactDOM from 'react-dom'
import Card from './Cards';
import Sdata from './Sdata';

console.log(Sdata[0]);



ReactDOM.render(
  <>
   <Card
    imgsrc = "https://static.wikia.nocookie.net/dark-netflix/images/f/fd/Dark_Title_Screen.jpg/revision/latest?cb=20171111233324"
    title = "A Netflix Original Series"
    link = "https://www.netflix.com/bd/"
    name = "Dark"
   />
   <Card
    imgsrc = "https://static.wikia.nocookie.net/dark-netflix/images/f/fd/Dark_Title_Screen.jpg/revision/latest?cb=20171111233324"
    title = "A Netflix Original Series"
    link = "https://www.netflix.com/bd/"
    name = "Dark"


   />
  </>
 
  ,
  document.getElementById('root')

);

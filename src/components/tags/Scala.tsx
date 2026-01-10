import React from 'react';
import config
 from './tags_config';

 function tagUrl(tagName:string) {
  return config.parent_url + tagName;
 }

function Scala() {
  // Import result is the URL of your image
  return (<a href={tagUrl("hello-world")}>
    <img src="https://img.shields.io/badge/Scala-s?style=flat&logo=Scala&logoColor=red&labelColor=white&color=black&link=https%3A%2F%2Fwww.google.com" alt="Static Badge" />
  </a>);
  
}

export default Scala;
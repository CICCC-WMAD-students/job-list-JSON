"use strict";
/*
01_ get json data and output html
*/
async function getJobList() {
  const response = await fetch("../../data.json");
  const data = await response.json();
  console.log(data);

  document.getElementById("logo").src = data[0].logo;
  document.getElementById("company").textContent = data[0].company;

  //Check////////////////
  document.getElementById("new").textContent = data[0].new;
  document.getElementById("featured").textContent = data[0].featured;
  //////////////////////

  document.getElementById("position").textContent = data[0].position;

  document.getElementById("posted").textContent = data[0].postedAt;
  document.getElementById("contract").textContent = data[0].contract;
  document.getElementById("location").textContent = data[0].location;

  document.getElementById("role").textContent = data[0].role;
  document.getElementById("level").textContent = data[0].level;

  document.getElementById("language").textContent = data[0].languages[0];
  // document.getElementById("language").textContent = data[0].languages[1];
  // document.getElementById("language").textContent = data[0].languages[2];
}
getJobList();

/*
02_ get input data from html and serch a job
*/

/*
03_ sort by cliking on the tags
*/

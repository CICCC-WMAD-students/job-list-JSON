"use strict";

/*
01_ get json data and output html
*/
async function getJson() {
  const response = await fetch("../../data.json");
  const data = await response.json();

  const jobsTable = document.getElementById("jobsTable");

  //create jobCards
  for (let i = 0; i < data.length; i++) {
    const jobCard = document.createElement("div");
    const jobDetails = document.createElement("div");
    const jobSkills = document.createElement("ul");
    const jobDetailsLogo = document.createElement("img");
    const jobDetailsWrap = document.createElement("div");
    const jobDetailsWrapTags = document.createElement("ul");
    const jobDetailsWrapPosition = document.createElement("p");
    const jobDetailsWrapInfo = document.createElement("ul");
    const jobDetailsWrapTagsCompany = document.createElement("li");
    const jobDetailsWrapTagsNew = document.createElement("li");
    const jobDetailsWrapTagsFeatured = document.createElement("li");
    const jobDetailsWrapInfoPostedAt = document.createElement("li");
    const jobDetailsWrapInfoContract = document.createElement("li");
    const jobDetailsWrapInfoLocation = document.createElement("li");
    const jobSkillsRole = document.createElement("li");
    const jobSkillsLevel = document.createElement("li");

    jobDetailsLogo.src = data[i].logo;
    jobDetailsWrapTagsCompany.textContent = data[i].company;
    jobDetailsWrapTagsNew.innerHTML = "NEW!";
    jobDetailsWrapTagsFeatured.innerHTML = "FEATURED";
    jobDetailsWrapPosition.textContent = data[i].position;
    jobDetailsWrapInfoPostedAt.textContent = data[i].postedAt;
    jobDetailsWrapInfoContract.textContent = data[i].contract;
    jobDetailsWrapInfoLocation.textContent = data[i].location;
    jobSkillsRole.textContent = data[i].role;
    jobSkillsLevel.textContent = data[i].level;

    jobCard.className = "l-jobs__container";
    jobDetails.className = "l-jobs__container__details";
    jobSkills.className = "l-jobs__container__skills";
    jobDetailsLogo.className = "l-jobs__container__details__logo";
    jobDetailsWrap.className = "l-jobs__container__details__wrap";
    jobDetailsWrapTags.className = "l-jobs__container__details__wrap__tags";
    jobDetailsWrapPosition.className =
      "l-jobs__container__details__wrap__position";
    jobDetailsWrapInfo.className = "l-jobs__container__details__wrap__info";
    jobDetailsWrapTagsCompany.className =
      "l-jobs__container__details__wrap__tags__company";
    jobDetailsWrapTagsNew.className =
      "l-jobs__container__details__wrap__tags__new";
    jobDetailsWrapTagsFeatured.className =
      "l-jobs__container__details__wrap__tags__featured";
    jobDetailsWrapPosition.className =
      "l-jobs__container__details__wrap__position";
    jobDetailsWrapInfoPostedAt.className =
      "l-jobs__container__details__wrap__info__posted";
    jobDetailsWrapInfoContract.className =
      "l-jobs__container__details__wrap__info__contract";
    jobDetailsWrapInfoLocation.className =
      "l-jobs__container__details__wrap__info__location";
    jobSkillsRole.className = "l-jobs__container__skills__role";
    jobSkillsLevel.className = "l-jobs__container__skills__level";

    const languages = data[i].languages;
    for (let j = 0; j < languages.length; j++) {
      const jobSkillslanguages = document.createElement("li");
      jobSkillslanguages.textContent = languages[j];
      jobSkills.appendChild(jobSkillslanguages);
    }
    const tools = data[i].tools;
    for (let k = 0; k < tools.length; k++) {
      const jobSkillsTools = document.createElement("li");
      jobSkillsTools.textContent = tools[k];
      jobSkills.appendChild(jobSkillsTools);
    }

    jobCard.appendChild(jobDetails);
    jobCard.appendChild(jobSkills);
    jobDetails.appendChild(jobDetailsLogo);
    jobDetails.appendChild(jobDetailsWrap);
    jobDetailsWrap.appendChild(jobDetailsWrapTags);
    jobDetailsWrap.appendChild(jobDetailsWrapPosition);
    jobDetailsWrap.appendChild(jobDetailsWrapInfo);
    jobDetailsWrapTags.appendChild(jobDetailsWrapTagsCompany);
    jobDetailsWrapInfo.appendChild(jobDetailsWrapInfoPostedAt);
    jobDetailsWrapInfo.appendChild(jobDetailsWrapInfoContract);
    jobDetailsWrapInfo.appendChild(jobDetailsWrapInfoLocation);
    jobSkills.appendChild(jobSkillsRole);
    jobSkills.appendChild(jobSkillsLevel);

    if (data[i].new || data[i].featured) {
      jobDetailsWrapTags.appendChild(jobDetailsWrapTagsNew);
      jobDetailsWrapTags.appendChild(jobDetailsWrapTagsFeatured);
    }
    jobsTable.appendChild(jobCard);
  }
}
getJson();

/*
02_ get input data from html and serch a job
*/

/*
03_ sort by cliking on the tags
*/

//languages html-css-javascript-python-ruby
const btnLanguages = document.querySelectorAll(".l-jobs__container__skills ul");

let selected;

// for (let i = 0; i < btnLanguages.length; i++) {
//   btnLanguages[i].addEventListener('click', function() {

//     selected = this.className;

//     for (let j = 0; j < )

//   })
// }

//tools

//level

//role


// Dark theme toggle
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

const switchTheme = (e) => {
  if (e.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
  else {
    document.documentElement.setAttribute('data-theme', 'light');
  }    
}

toggleSwitch.addEventListener('change', switchTheme);
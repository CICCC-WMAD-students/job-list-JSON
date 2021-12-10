'use strict';

/*
-----------------------------------
01_ get json data and output html
-----------------------------------
*/

const jobsList = document.getElementById('jobsList');
const searchBar = document.getElementById('searchBar');
let jobData = [];

searchBar.addEventListener('keyup', e => {
  const searchString = e.target.value.toLowerCase();

  const filteredJobs = jobData.filter(job => {
    return (
      job.role.toLowerCase().includes(searchString) ||
      job.level.toLowerCase().includes(searchString)
    );
  });
  displayJobs(filteredJobs);
});

const loadjobs = async () => {
  try {
    const res = await fetch('../data.json');
    jobData = await res.json();
    console.log(jobData);
    displayJobs(jobData);
  } catch (err) {
    console.log(err);
  }
};

const displayJobs = jobs => {
  const htmlString = jobs
    .map(job => {
      let display = 'display';
      let none = 'none';
      //arr
      let language = job.language;

      return `
        <div class="l-jobs__container">
            <div class="l-jobs__container__details">
                <img src="${job.logo}" class="l-jobs__container__details__logo">
                <div class="l-jobs__container__details__wrap">
                    <ul class="l-jobs__container__details__wrap__tags">
                        <li class="l-jobs__container__details__wrap__tags__company">${
                          job.company
                        }</li>
                        <li class="l-jobs__container__details__wrap__tags__new ${
                          job.new ? display : none
                        }">NEW!</li>
                        <li class="l-jobs__container__details__wrap__tags__featured ${
                          job.featured ? display : none
                        }">FEATURED</li>
                    </ul>
                    <p class="l-jobs__container__details__wrap__position">${
                      job.position
                    }</p>
                    <ul class="l-jobs__container__details__wrap__info">
                        <li class="l-jobs__container__details__wrap__info__posted">${
                          job.postedAt
                        }</li>
                        <li class="l-jobs__container__details__wrap__info__contract">${
                          job.contract
                        }</li>
                        <li class="l-jobs__container__details__wrap__info__location">${
                          job.location
                        }</li>
                    </ul>
                </div>
            </div>
            <ul class="l-jobs__container__skills">
                <li class="l-jobs__container__skills__role">${job.role}</li>
                <li class="l-jobs__container__skills__level">${job.level}</li>
            </ul>
        </div>       
        `;
    })
    .join('');
  jobsList.innerHTML = htmlString;

  for (let i = 0; i < jobs.length; i++) {
    const parent = document.querySelectorAll('.l-jobs__container__skills')[i];
    const languages = jobs[i].languages;
    const tools = jobs[i].tools;

    for (let j = 0; j < languages.length; j++) {
      const li = document.createElement('li');
      li.className = 'l-jobs__container__skills__languages';
      li.innerHTML = languages[j];
      parent.appendChild(li);
    }

    for (let k = 0; k < tools.length; k++) {
      const li = document.createElement('li');
      li.className = 'l-jobs__container__skills__tools';
      li.innerHTML = tools[k];
      parent.appendChild(li);
    }
  }
};

loadjobs();

/*
-----------------------------------
02_ Searching field
-----------------------------------
*/

const tagContainer = document.querySelector('.filter');
const input = document.querySelector('.filter input');

let tags = [];

function createTag(label) {
  const div = document.createElement('div');
  div.setAttribute('class', 'tag');
  const span = document.createElement('span');
  span.innerHTML = label;
  const closeIcon = document.createElement('i');
  closeIcon.innerHTML = 'close';
  closeIcon.setAttribute('class', 'material-icons');
  closeIcon.setAttribute('data-item', label);
  div.appendChild(span);
  div.appendChild(closeIcon);
  return div;
}

function clearTags() {
  document.querySelectorAll('.tag').forEach(tag => {
    tag.parentElement.removeChild(tag);
  });
}

function addTags() {
  clearTags();
  tags
    .slice()
    .reverse()
    .forEach(tag => {
      tagContainer.prepend(createTag(tag));
    });
}

input.addEventListener('keyup', e => {
  if (e.key === 'Enter') {
    e.target.value.split(',').forEach(tag => {
      tags.push(tag);
    });

    addTags();
    input.value = '';
  }
});
document.addEventListener('click', e => {
  if (e.target.tagName === 'I') {
    const tagLabel = e.target.getAttribute('data-item');
    const index = tags.indexOf(tagLabel);
    tags = [...tags.slice(0, index), ...tags.slice(index + 1)];
    addTags();
  }
});

input.focus();

/*-------------------------------------------------*/
/*-------------------------------------------------*/
/*-------------------------------------------------*/

/* Implementing Filters */
const dropdownButtons = document.querySelectorAll('.arrow-button');
const dropdownContent = document.querySelectorAll('.dropdown');
const dropdownLi = document.getElementsByTagName('li');

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
for (let i = 0; i < dropdownButtons.length; i++) {
  dropdownButtons[i].addEventListener('click', () => {
    dropdownContent[i].classList.toggle('show');
  });
}

/* 
1. When the user clicks the dropdown content, 
   stick the same background color as when it's hovered.
2. Show the job list filtered by chosen contents.
*/

let selectedContent = [];

for (let i = 0; i < dropdownLi.length; i++) {
  dropdownLi[i].addEventListener('click', () => {
    dropdownLi[i].classList.toggle('selected');

    if (selectedContent.includes(dropdownLi[i].textContent)) {
      const index = selectedContent.indexOf(dropdownLi[i].textContent);
      selectedContent.splice(index, 1);
      //   console.log(selectedContent);
    } else {
      selectedContent.push(dropdownLi[i].textContent);
    }

    console.log(selectedContent);

    const dropdownFilteredJobs = jobData.filter(job => {
      return (
        selectedContent.indexOf(job.contract) > -1 ||
        selectedContent.indexOf(job.location) > -1
      );
    });
    displayJobs(dropdownFilteredJobs);
  });
}

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
// Dark theme toggle end

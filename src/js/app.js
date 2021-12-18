'use strict';

/*
-----------------------------------
01_ get json data and output html
-----------------------------------
*/

const jobsList = document.getElementById('jobsList');
const searchBar = document.getElementById('searchBar');
// const searchButton = document.getElementById('searchButton');
// console.log(searchButton);
let jobData = [];

searchBar.addEventListener('keyup', e => {
  if (e.key === 'Enter') {
    const searchString = e.target.value.toLowerCase();

    const filteredJobs = jobData.filter(job => {
      return (
        job.role.toLowerCase().includes(searchString) ||
        job.company.toLowerCase().includes(searchString) ||
        job.position.toLowerCase().includes(searchString)
      );
    });

    displayJobs(filteredJobs);
  }
});

const loadjobs = async () => {
  try {
    const res = await fetch('../data.json');
    jobData = await res.json();
    displayJobs(jobData);
    displayTags(jobData);
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

const displayTags = tags => {
  const tagsArr = tags.map(tag => {
    return tag.role, tag.contract, tag.location;
  });

  for (let i = 0; i < tags.length; i++) {
    const languages = tags[i].languages;
    const tools = tags[i].tools;

    for (let j = 0; j < languages.length; j++) {
      tagsArr.push(languages[j]);
    }

    for (let k = 0; k < tools.length; k++) {
      tagsArr.push(tools[k]);
    }
  }

  //try not to pick same tags
  const newTagsArr = [...new Set(tagsArr)];
  console.log(newTagsArr);

  const htmlString = newTagsArr
    .map(tag => {
      return `
      <li class="js-filter-target" id="${tag}">${tag}</li>
    `;
    })
    .join('');
  tagsFilter.innerHTML = htmlString;

  // let targetTag = document.querySelectorAll("#js-filter-target");

  // targetTag.addEventListener(
  //   "click",
  //   function () {
  //     //change style
  //     this.classList.toggle("tag-filtered");
  //   },
  //   false
  // );

  tagsFilter.addEventListener(
    'click',
    function () {
      //show clear btn
      const clearBtn = document.createElement('p');
      const clearIcon = document.createElement('i');
      const parent = document.querySelector('.tags-filter-container');
      clearBtn.innerHTML = 'clear';
      clearBtn.className = 'clear-btn';
      clearIcon.innerHTML = 'close';
      clearIcon.className = 'material-icons';
      parent.appendChild(clearBtn);
      clearBtn.appendChild(clearIcon);
    },
    { once: true }
  );

  /* Implementing filters by selected tags */
  let filteredByTags = [];
  // const comparedArray = [jobData.location, jobData.tools, ...jobData.languages]
  const tagsFromDOM = document.querySelectorAll('.js-filter-target');
  console.log(tagsFromDOM);
  
  for (let l = 0; l < tagsFromDOM.length; l++) {
    tagsFromDOM[l].addEventListener('click', () => {
      tagsFromDOM[l].classList.toggle('selected');
      const selectedTags = document.querySelectorAll('.selected');
      console.log(selectedTags);
    });

    const arr = jobData.map(job => {
      const tagArr = [job.location, ...job.tools, ...job.languages]
      console.log(tagArr);
      const jobArr = Object.entries(job)         
    });
    
    
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

// Dark theme toggle
const toggleSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]'
);

const switchTheme = e => {
  if (e.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
  }
};

toggleSwitch.addEventListener('change', switchTheme);
// Dark theme toggle end

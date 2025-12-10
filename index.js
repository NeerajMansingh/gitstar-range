#!/usr/bin/env node

import prompts from "prompts";

const questions = [
  {
    type: 'text',
    name: 'startDate',
    message: 'What is start date (eg: YYYY-MM_DD 2024-12-20)?'
  },
  {
    type: 'text',
    name: 'endDate',
    message: 'What is end date (eg: YYYY-MM_DD 2024-12-25)?'
  },
  {
    type: 'number',
    name: 'repoCount',
    message: 'Mention number of starred repository needed',
    initial: '10'
  }
];

(async () => {
  const response = await prompts(questions);

  // => response => { username, age, about }
  // console.log(response.username);

  let repoList= await fetch(`https://api.github.com/search/repositories?q=created:${response.startDate}..${response.endDate}&sort=stars&order=desc&per_page=${response.repoCount}`)
  repoList= await repoList.json();

  for(let i=0;i<response.repoCount;i++)
  {
    console.log(`repository ${i+1}`);
    console.log(`NAME: ${repoList.items[i].name}`);

    if(repoList.items[i].html_url)   
        {console.log(`URL: ${repoList.items[i].html_url}`);}
    else
       { console.log("URL: NULL");}
    

    if(repoList.items[i].description)
        {console.log(`DESCRIPTION: ${repoList.items[i].description}`);}
    else
        {console.log("DESCRIPTION: NULL");}


    console.log('\n');
    
  }
})();

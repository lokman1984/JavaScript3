"use strict";
// me and karam we  work together ,the project is incomplete /we have an exam tomorrow, i need time to study
// //old code
// //   const HyfReposHttps = 'https://api.github.com/orgs/HackYourFuture/repos?per_page=100';
// //   fetch(HyfReposHttps)
// //   .then(data => {return data.json()
// //   })
// //   .then (data =>{
// //     // return xhrCallback(data)
// //     console.log(data)
// // .catch(err => renderError(err));
// //   })
//   //oldcode
//   //new code axios
//   const url = 'https://api.github.com/orgs/HackYourFuture/repos?per_page=100';
//   const HyfReposHttps = async ()=>{
//     const response = await axios(url);
//     // console.log(response);
//     return response;
//   }
  


//   async function fetchJson(){
//     try{
//       const data = await HyfReposHttps()
      
//       await xhrCallback(data);

//     }
//     catch(err){

//     }
//   }fetchJson()
  

//   // close new code

// async function xhrCallback(data){
  
//   await addSelectElementOptions(data);
//   await  checkSelectChanging(data);
// }


// function addSelectElementOptions(arr){
//   console.log(arr)
//     let selectElement = document.getElementById("repositories");
//     arr.map((rep) => {
//     let option = document.createElement('option');
//     option.text = rep.name;
//     option.value = rep.id;
//     selectElement.appendChild(option);
   
    
//   });
// }


//  function checkSelectChanging (arr) {
    
//     console.log(arr);
//     let selectElement = document.getElementById("repositories");
//     selectElement.addEventListener("change", function(){
//     const selectValue = selectElement.value;
//     const repo = arr.find(repo => repo.id == selectValue);
//     renderRepositoryInfo(repo);
//     const repoContributersUrl = repo.contributors_url;
//     fetch(repoContributersUrl)
//       .then (data =>{return data.json()} )
//       .then(data=> renderRepositoryContributers(data))
//       .catch(err => renderError(err));
      
//   });
// }

// function renderRepositoryInfo(selectedRepository){
 
//   console.log('calling renderRepositoryInfo');
//   const repositoriesInfoElement = document.querySelector('#repo_info');

//   repositoriesInfoElement.innerHTML =``;
//   repositoriesInfoElement.innerHTML =`<div class="repoContainer"> 
//                                     <strong>Repository:  </strong><span><a href=${selectedRepository.html_url}>${selectedRepository.name}</a></span><br>
//                                     <strong>Description:  </strong><span>${selectedRepository.description}</span><br>
//                                     <strong>Forks:  </strong><span>${selectedRepository.forks}</span><br>
//                                     <strong>Updated:  </strong><span>${selectedRepository.updated_at}</span><br>
//                                     </div>`;
  


// }

// function renderRepositoryContributers(response){
//   console.log('calling renderRepositoryContributers');
//    const repoContributers = document.querySelector('#repo_contributors');
//     repoContributers.innerHTML =``;
//     response.map((item)=>{
//     repoContributers.innerHTML += `<div class="contributorContainer">
//                                    <div class="contributorList"><h3>${item.login}</h3></div>
//                                    <div class="contributorList"><img src=${item.avatar_url}></div>
//                                    <div class="contributorList"><h5>${item.contributions}</h4></div>
//                                    </div>`;
//   });
 
// }

// const URL = 'https://api.github.com/orgs/HackYourFuture/repos?per_page=100';
//   fetch(URL)
//   .then(data => {return data.json()
//   })
//   .then (data =>{
//     return SelectElement(data)
//     .catch(err => renderError(err));
const url = "https://api.github.com/orgs/HackYourFuture/repos?per_page=100";
  const HyfReposHttps = async ()=>{
    const response = await axios(url);
    return response;
  }
  async function hyf(){
   const data= await HyfReposHttps();
   if(data.status==200){
    SelectElement(data)
   }else{
     console.log("there is an error")
   }
  }
  hyf()
async function SelectElement(data){
  console.log(data)
    let selectElement = document.getElementById('repositories');
    data.data.forEach(rep => {
    let option = document.createElement('option');
    option.text = rep.name;
    option.value = rep.id;
    selectElement.appendChild(option);
    SelectChang(data);
  });
}
  function SelectChang (data) {
    let selectElement = document.getElementById('repositories');
    selectElement.addEventListener('change', function(){
    const selectValue = selectElement.value;
    const repo = data.data.find(repo => repo.id == selectValue);
    renderInfo(repo);
    const repoContributersUrl = repo.contributors_url;
    fetch(repoContributersUrl)
      .then (data =>{return data.json()} )
      .then(data=> renderConterbute(data))
      .catch(err => renderError(err));
  });
}
function renderInfo(repo){
  const repositoriesInfoElement = document.querySelector('#repo_info');
  repositoriesInfoElement.innerHTML =``;
  repositoriesInfoElement.innerHTML =`<div class=“repoContainer”>
                                    <h2>Repository:  </h2><span><a href=${repo.html_url}>${repo.name}</a></span><br>
                                    <h2>Description:  </h2><span>${repo.description}</span><br>
                                    <h2>Forks:  </h2><span>${repo.forks}</span><br>
                                    <h2>Updated:  </h2><span>${repo.updated_at}</span><br>
                                    </div>`;
}
function renderConterbute(response){
  console.log('calling renderConterbute');
   const repoContributers = document.querySelector('#repo_contributors');
    repoContributers.innerHTML =``;
    response.forEach(function(item){
    repoContributers.innerHTML += `<div class=“contributorContainer”>
                                   <div class=“contributorList”><h2>${item.login}</h></div>
                                   <div class=“contributorList”><img src=${item.avatar_url}></div>
                                   <div class=“contributorList”><h2>${item.contributions}</h2></div>
                                   </div>`;
  });
}
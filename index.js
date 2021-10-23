const link = {
  github: 'LucVasSou',
  youtube: 'UCQfDKHxpZnBmHBxYPynBIyg',
  facebook: 'lucas.souza.73307',
  instagram: 'lucasvasouza'
}

function changeSocialMediaLinks() {
  /*document.getElementById('userName').textContent = 'Lucas Souza'*/
  /*   userName.textContent = 'Lucas Souza'    */

  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `http://${social}.com//${link[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${link.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      UserImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()

//Function//
//  function nomeFuncao(argumentos){} //

//Arrow Function//
//argumentos => {}//

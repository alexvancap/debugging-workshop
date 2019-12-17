document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('joke-form')
  const jokeList = document.getElementById('joke-list')
  let joke;

  function fetchJoke(username){
    fetch('https://icanhazdadjoke.com/', {
      headers: {
        "Accept": "application/json"
      }
    })
    .then(function(response){
      return response.json()
    })
    .then(function(fetchedJoke){
      const newJokeLi = document.createElement('li')
      joke = fetchedJoke.joke
      newJokeLi.innerHTML = `
      <span class="username">${username} says:</span> ${joke}
      `
    jokeList.appendChild(newJokeLi)
    })
  }

  form.addEventListener('submit', (event) => {
    const username = document.getElementById('name-input').value
    event.preventDefault()
    if(!username) return;
    fetchJoke(username)
  })

  async function logToDom(){
    const result = await fetchJoke()
    console.log(result)
  }
})


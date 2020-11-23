const player = document.querySelector(".player")
const goals = document.querySelector("#goals")






fetch('http://localhost:3000/players/1')
.then(response => {
    return response.json()
}).then((playerObject) => {  

    player.innerHTML = `
    <img src=${playerObject.photo} alt=${playerObject.name}>
    <h2>${playerObject.name}</h2>
    <em>${playerObject.nickname}</em>
    <p class="likes">${playerObject.likes} Likes</p>
    <button class="like-button">❤️</button>
    `    
})

// playerObject.goals.forEach((goalObject) => {
    //     const li = document.createElement("li")
    //     const a = document.createElement("a")
    //     goals.innerHTML = `<a>${goalObject.description}</a>
    //     <a href=${goalObject.link}>`
    //     goals.append(li)
    //     console.log(goals.li)
    //     // debugger
    // })



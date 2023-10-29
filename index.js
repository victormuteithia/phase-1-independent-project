const search = document.querySelector('#search')


search.addEventListener('submit', (e)=>{
    e.preventDefault()
    const input = document.querySelector('#player-search')
    const value = input.value
    const playerDisplayContainer = document.querySelector('#player-info')


    fetch(`http://localhost:3000/kopaTrophy`).then(res=> res.json()).then(players=>{
    // console.log(players)
    let player = players.find((player)=>{
        return player["name"].toLowerCase() === value.toLowerCase()
    })
   
        if(player === undefined){
            playerDisplayContainer.innerHTML = `
            <h3>player not found</h3>`
        }else{
            const card =`
    <h3>${player["name"]}</h3>
    <img src='${player["img"]}' id='images'><br>
    <p>position: ${player["position"]}<br>
     clubs: ${player["club"]}<br>
     achievements: ${player["achievements"]}</p>
     <p id='likevote-count'>likes/vote: <span id='likecount'>${player["like/vote"]}</span></p>
     <button id='like'>like</button>
     <p id='dislike-count'>dislikes: <span id='dislikecount'>${player["dislike"]}</span></p>
     <button id='dislike'>dislike</button>
     `
     console.log(card)
     
     playerDisplayContainer.innerHTML = card

     let likeBtn = document.querySelector('#like')
  likeBtn.addEventListener('click', (e) => {
    e.preventDefault()
    player["like/vote"] ++ 
    document.querySelector('#likecount').textContent = player["like/vote"]
//    updateLike(player["like/vote"])
})

let dislikeBtn = document.querySelector('#dislike')
dislikeBtn.addEventListener('click', (e) => {
    e.preventDefault()

    player["dislike"] ++
    document.querySelector('#dislikecount').textContent = player["dislike"]
    

})
// function updateLike(){
//     fetch(`http://localhost:3000/kopaTrophy/${player["like/vote"]}`, {
//         method: 'PATCH',
//         headers: {
//             'Content-type': 'application/json'
//         },
//         body: JSON.stringify(player["like/vote"])
//     })
//     .then(res=>res.json()).then(player => {
//         console.log(player)
//     })
// }
    //  const text = document.querySelector("#commentarea")
    //  const submit = document.querySelector('#comment')
    //  const store = document.querySelector('#comstore')

    //  submit.addEventListener('submit', (e)=>{
    //     e.preventDefault()
    //     store.textContent = text.value
        
    //    console.log("click")
    // })

    
    
   

  }
  
  

 })
})

 




 

 const likeButton = document.querySelector('#like')
 const dislikeButton = document.querySelector('#dislike')
 const ratingButton = document.querySelector('#rating')
const voteButton = document.querySelector('#vote')
 


    // console.log(value)





    




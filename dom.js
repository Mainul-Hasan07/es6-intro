document.getElementById('add-border').addEventListener('click',function(){
    const container = document.getElementById('friend-container');
    container.style.border = '3px solid yellow';
})

function addBackgroundColor(){
        const friends = document.getElementsByClassName('friend');
    for(const friend of friends){
        friend.style.backgroundColor = 'lightblue';
    }
}

document.getElementById('add-friend').addEventListener('click',function(){
    const container = document.getElementById('friend-container');
    const friendDiv = document.createElement('div');
    friendDiv.classList.add('friend')
    friendDiv.innerHTML = `
        <h3 class="friend-name">Friend</h3>
        <p>Voluptates quibusdam provident ad omnis?</p>
    `;
    container.appendChild(friendDiv);
})
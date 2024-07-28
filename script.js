// var isstatus = document.querySelector('h5')
// var addFriend = document.querySelector('#add')

// var removeFriend = document.querySelector('#remove')


// addFriend.addEventListener('click', function () {
//     isstatus.innerHTML = 'Friend'
//     isstatus.style.color = 'green'
// })

// removeFriend.addEventListener('click', function () {
//     isstatus.innerHTML = 'stramger'
//     isstatus.style.color = 'red'
// })



var isstatus = document.querySelector('h5')
var btn= document.querySelector('#add')

var addremove = 0
btn.addEventListener('click', function(){
    if (addremove==0 ){
        isstatus.innerHTML ='follow'
        isstatus.style.color = 'green'
        btn.innerHTML = 'Remove friend'
        addremove= 1
    }else{
        isstatus.innerHTML = 'stramger'
        isstatus.style.color = 'red'
        btn.innerHTML = 'Add friend'

        addremove=0
    }
})

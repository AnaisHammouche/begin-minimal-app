document.querySelector('form').addEventListener('submit', (e)=>{
    e.preventDefault()
    try {
        const FD = new FormData(document.querySelector('form'));
        console.log(Object.fromEntries([...FD.entries()]));

    } catch (error) {
        console.warn(error);
    }
})

// function getValue() {

//     var nameform = document.getElementById('name').value;
//     var emailform = document.getElementById('email').value;
//     var msgform = document.getElementById('msg').value;
//     const FD = new FormData(document.querySelector('form'));
//     console.log([...FD.entries()]);

    // console.log(JSON.stringify({name : nameform,email : emailform,msg :  msgform}));

// }



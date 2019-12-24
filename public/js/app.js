console.log('Fetch')

fetch('http://puzzle.mead.io/puzzle').then((response)=>//then is used for promises feature
{
    response.json().then((data)=> {
console.log(data)

    })

})
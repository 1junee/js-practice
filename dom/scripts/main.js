// console.log('hello movie')
// console.log([1, 2, 3, 4])
// console.log({ name: 'apple', price: 1300 })


const myHeading = document.querySelector('h1')
myHeading.textContent = 'hello worlllllllld'

const myImage = document.querySelector('img')

// 이벤트
// addEventListener('이벤트', 함수)
// myImage는 클릭이라는 걸 기다리고, 클릭이 되면 함수를 실행
myImage.addEventListener('click', e => {
    // console.log(e)
    const mySrc = myImage.getAttribute('src')

    if (mySrc == 'images/image1.jpeg') {
        myImage.setAttribute('src', 'images/image2.jpeg')
    }
    else {
        myImage.setAttribute('src', 'images/image1.jpeg')
    }
} )


const nameInput = document.querySelector('input')

nameInput.addEventListener('input', e => { 
    // console.log('hello')
    // console.log(e.target.value) 
    myHeading.textContent = `${e.target.value}의 영화관`
    
 })

 const movies = [
    {title: '스파이더맨', rating: 7.5},
    {title: '앤트맨', rating: 8.9},
    {title: '베트맨', rating: 9.5},
    {title: '슈퍼맨', rating: 1.5},
    {title: '아이언맨', rating: 2.5},
 ]

 // id가 list인거
 const list = document.querySelector('#list')
 const search = document.querySelector('#search')

 function render() {
    const shown = movies.filter(m => m.title.includes(search.value))
    list.innerHTML = shown.map(m => `<li>${m.title} | 평점 : ${m.rating}</li>`).join('')
 }

 search.addEventListener('input', render)

 render()
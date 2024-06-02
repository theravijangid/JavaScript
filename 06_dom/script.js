const title = document.getElementById('title')

title.style.backgroundColor= "green"
title.style.padding = "15px"
title.style.borderRadius = "15px"


// timestamp js.31 12.05

//Queryselector

const temp = document.querySelector('p')
temp.style.color = 'red'

//QuerySelectorAll

const ullist = document.querySelectorAll('li')
ullist[1].style.color = 'red'

ullist.forEach((li) => li.style.backgroundColor = 'green')


// HTML collection
const templist = document.getElementsByClassName('list')

const convertedArray = Array.from(templist)
convertedArray.forEach((li) => li.style.color = 'yellow')
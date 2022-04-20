/*You should create HTML design same as of the pdf - Constraints:
Your Final HTML should like this -
All the HTML elements should be created by DOM Methods
All the CSS should be created by DOM methods.
Common DOM Methods -
a. element = document.createElement
b. element.setAttribute
c. element.appendChild
d. element.innerText
*/

// container

let container = document.createElement('div')
container.className = 'container'
container.style.width = '1140px'
container.style.margin = '0 auto'
document.body.appendChild(container)



// Profile bg div
// let mainbgElement =  document.createElement('div')
let mainbgElement =  document.createElement('div')
mainbgElement.className = "main_bg"
mainbgElement.style.backgroundColor = "#808080"
mainbgElement.style.height = "300px"
mainbgElement.style.width = "100%"
mainbgElement.style.position = "relative"

container.appendChild(mainbgElement)


// Profile image

let profile = document.createElement('div')
profile.style.backgroundImage = "url(https://i.postimg.cc/LXfWZK5x/julian-wan-WNo-Ln-Jo7t-S8-unsplash.jpg)"
profile.style.height = "150px"
profile.style.width = "150px"
profile.style.backgroundSize = "cover"
profile.style.borderRadius = "100%"
profile.style.position = "absolute"
profile.style.bottom = "0"
profile.style.left = "50%"
profile.style.transform = "translateX(-50%)"
profile.style.border = "2px dashed #fff908"

mainbgElement.appendChild(profile)


// Name Plate
let namePlate = document.createElement('p')
namePlate.innerHTML = "John Doe"
namePlate.style.fontSize = '28px'
namePlate.style.padding = "20px 80px"
namePlate.style.background = "#f3b02a"
namePlate.style.width = "fit-content"
namePlate.style.margin = "0 auto"
namePlate.style.zIndex = "1"
namePlate.style.position = "relative"
namePlate.style.marginTop = "-10px"
container.appendChild(namePlate)

// bgsmallline

let bgline = document.createElement('div')
bgline.style.height = "50px"
bgline.style.width = "100%"
bgline.style.backgroundColor = "#808080"
bgline.style.marginTop = "-40px"
bgline.style.zIndex = "-1"
container.appendChild(bgline)

// profile detail

let profileDetail = document.createElement('p')
profileDetail.innerText = "Varanasi India | +919140780963 | dummyemail.com | www.domain.com |"
profileDetail.style.textAlign = "center"
profileDetail.style.fontSize = "18px"
profileDetail.style.borderBottom = "2px solid #000"
profileDetail.style.padding = "10px 0"
container.appendChild(profileDetail)

//>> profileMain
let profileMain = document.createElement('div')
profileMain.style.display = "flex"
container.appendChild(profileMain)

//> rightElement
let rightElement = document.createElement('div')
rightElement.style.width = '50%'
rightElement.style.padding = "10px"
rightElement.style.borderRight = '2px solid #000'

profileMain.appendChild(rightElement)

let profiletext = document.createElement('p')
profiletext.innerHTML = '<i class="fa-solid fa-user"></i> Profile'
rightElement.appendChild(profiletext)

let profilDetailtext = document.createElement('p')
profilDetailtext.textContent = 'I am a full stack developer with strong fundamentals of Python and JS with hands on experience on Django, Bootstrap and MERN.'
profiletext.appendChild(profilDetailtext)

let skill = document.createElement('p')
skill.innerHTML = '<i class="fa-solid fa-microchip"></i> Skills'
rightElement.appendChild(skill)


let skillText = document.createElement('p')
skillText.innerText = 'Technical Skills'
skillText.style.textAlign ="center"
rightElement.appendChild(skillText)

let jsTitleEle = document.createElement('div')
jsTitleEle.style.display = "flex"
jsTitleEle.style.justifyContent = "space-between"
skillText.appendChild(jsTitleEle)

let jsTitle = document.createElement('p')
jsTitle.innerHTML = 'Javascript'
jsTitleEle.appendChild(jsTitle)

let progressBar = document.createElement('p')
progressBar.innerHTML = '<progress id="file" value="32" max="100"> 32% </progress>'
jsTitleEle.appendChild(progressBar)

let experienceTitle =  document.createElement('p')
experienceTitle.innerHTML = '<i class="fa-solid fa-briefcase"></i> Work Experience'
rightElement.appendChild(experienceTitle)

let experienceText = document.createElement('p')
experienceText.textContent = 'I have 3 years of experience as a freelance on codementor where i have worked on python assignments on a regular basis. I have 5 star rating from clients all across the globe.I have worked as a full time role for Company 1 and Company 2 .'
experienceText.style.textAlign = "center"
rightElement.appendChild(experienceText)

let Company1 = document.createElement('b')
Company1.innerText = 'Company 1'
Company1.style.textAlign = "center"
Company1.style.display = "block"
rightElement.appendChild(Company1)

let Company1text = document.createElement('p')
Company1text.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in tempor lacus, non placerat urna. Maecenas erat nisl, euismod eu urna at, vulputate volutpat mi. Morbi ullamcorper augue quis ullamcorper maximus. Donec eu euismod diam, at tristique dolor. Aliquam est nunc, bibendum ut sodales eget, feugiat et nunc. Nullam eu odio cursus, iaculis tellus non, ultrices nibh. Aliquam velit eros, pharetra non purus vel, fermentum condimentum lectus. Donec nec ornare libero, ac lacinia tellus."
Company1text.style.textAlign = "center"
rightElement.appendChild(Company1text)

// leftElement
let leftElement = document.createElement('div')
leftElement.style.width = '50%'
leftElement.style.padding = "10px"
profileMain.appendChild(leftElement)



let Company2 = document.createElement('b')
Company2.innerText = 'Company 2'
Company2.style.textAlign = "center"
Company2.style.display = "block"
leftElement.appendChild(Company2)

let Company2text = document.createElement('p')
Company2text.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in tempor lacus, non placerat urna. Maecenas erat nisl, euismod eu urna at, vulputate volutpat mi. Morbi ullamcorper augue quis ullamcorper maximus. Donec eu euismod diam, at tristique dolor. Aliquam est nunc, bibendum ut sodales eget, feugiat et nunc. Nullam eu odio cursus, iaculis tellus non, ultrices nibh. Aliquam velit eros, pharetra non purus vel, fermentum condimentum lectus. Donec nec ornare libero, ac lacinia tellus."
Company2text.style.textAlign = "center"
leftElement.appendChild(Company2text)


let Company3 = document.createElement('b')
Company3.innerText = 'Company 3'
Company3.style.textAlign = "center"
Company3.style.display = "block"
leftElement.appendChild(Company3)

let Company3text = document.createElement('p')
Company3text.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in tempor lacus, non placerat urna. Maecenas erat nisl, euismod eu urna at, vulputate volutpat mi. Morbi ullamcorper augue quis ullamcorper maximus. Donec eu euismod diam, at tristique dolor. Aliquam est nunc, bibendum ut sodales eget, feugiat et nunc. Nullam eu odio cursus, iaculis tellus non, ultrices nibh. Aliquam velit eros, pharetra non purus vel, fermentum condimentum lectus. Donec nec ornare libero, ac lacinia tellus."
Company3text.style.textAlign = "center"
leftElement.appendChild(Company3text)

let eduTitle = document.createElement('h2')
eduTitle.innerText = "Education"
eduTitle.style.textAlign = "center"
leftElement.appendChild(eduTitle)


let bhu = document.createElement('h2')
bhu.innerText = "IIT-BHU"
bhu.style.textAlign = "center"
leftElement.appendChild(bhu)


let bhuText = document.createElement('p')
bhuText.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in tempor lacus, non placerat urna. Maecenas erat nisl, euismod eu urna at, vulputate volutpat mi. Morbi ullamcorper augue quis ullamcorper maximus. Donec eu euismod diam, at tristique dolor. Aliquam est nunc, bibendum ut sodales eget, feugiat et nunc. Nullam eu odio cursus, iaculis tellus non, ultrices nibh. Aliquam velit eros, pharetra non purus vel, fermentum condimentum lectus. Donec nec ornare libero, ac lacinia tellus."
bhuText.style.textAlign = "center"
leftElement.appendChild(bhuText)
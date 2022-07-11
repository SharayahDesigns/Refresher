const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
  panel.addEventListener('click',() => {
    removeActiveClasses()
  panel.classList.add('active')
  })
})

function removeActiveClasses() {
    panels.forEach(panel => {
     panel.classList.remove('active')
  })
}

//QuerySelectorAll returns a list of the documents elements
// addEventListener is a method of the event target
// classList gives a list of all the classes
// forEach will loop through all the panels

function openCity(){
    let tabcontent = [...document.querySelectorAll('.tabcontent')]
    let tablinks = [...document.querySelectorAll('.tablinks')]
    let conId = []

    tabcontent.map(con => {
        con.style.display = "none"
        conId.push(con.id)
    })
    tablinks.map((btn,i)=> {
        
        btn.addEventListener('click', function(){
          
           conId.map(id => {
            if(this.textContent === id){
               let city = document.getElementById(id)
               city.style.display = 'none'
               btn.className = btn.className.replace("active", "")
               city.style.display = 'block'
               btn.classList.add('active')
            }
           })
        })
    })

    // console.log(conId)
}

openCity()
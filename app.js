function openCity(eve, className){
    let tabcontent = [...document.querySelectorAll('.tabcontent')]
    let tablinks = [...document.querySelectorAll('.tablinks')]
    

    tabcontent.map(con => {
        con.style.display = "none"
        
    })
    tablinks.map((btn)=> {   
       btn.className = btn.className.replace(' active', "")
    })

    document.getElementById(className).style.display = "block"
    eve.currentTarget.className += ' active'
}


function ChangeContent(item, content) {

   

fetch(`./_page/content${$item}.html`)
.then(response => response.arrayBuffer.json())
    
    




    var $item = item
    var $content = content
    var url = `./_page/content${$item}.html`

    

    var xml = new XMLHttpRequest

    xml.onreadystatechange = function(){
        console.log(xml.status);
        if(xml.readyState == 4 && xml.status == 200){
            
            document.getElementById($content).innerHTML = xml.responseText
        }
    }

    xml.open("GET", url, true)

    xml.send()


}

function ChangePage(page, content) {

   

fetch(`./${$page}.html`)
.then(response => response.arrayBuffer.json())
    
    




    var $page = page
    var $content = content
    var url = `./${$page}.html`

    

    var xml = new XMLHttpRequest

    xml.onreadystatechange = function(){
        console.log(xml.status);
        if(xml.readyState == 4 && xml.status == 200){
            
            document.getElementById($content).innerHTML = xml.responseText
        }
    }

    xml.open("GET", url, true)

    xml.send()


}
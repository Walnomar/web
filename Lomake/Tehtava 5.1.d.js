document.getElementById("create").addEventListener("click", function() {
    let id1 = $("#id").val()
    let title1 = $("#title").val()
    let body1 = $("#body").val()

    console.log("id = " + id1)
    console.log("title = " + title1)
    console.log("body = " + body1)
    if(id1== "" || title1== "" || body1=="") {
        alert("Cannot create if textboxes are empty")
    }
    else {
        axios.post('https://jsonplaceholder.typicode.com/posts/', {
            id: id1, 
            title: title1, 
            body: body1
            })
            .then(function(response) {
            console.log("Response, data = " + response.data.id);
                if(response.status == 201) {
                    alert("Date update")
                }
                else{
                    alert(response.status + "something went wrong.")
                }
            })
        }
    })    
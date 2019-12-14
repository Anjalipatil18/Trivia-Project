const questions = [];

$(function fetchdata() {
    $.get('http://localhost:8041/get', {},
    (data,resp) => {
        console.log(data)
        data.map((data), (question)=> {
            $('questions').show()
        })
    });
})

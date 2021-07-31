//  ---------------------------get list--------------------------
// axios.get("http://localhost:8000/apiV1/status/list/")
// .then(response =>console.log(response))


//  ---------------------------get one--------------------------

// axios.get("http://localhost:8000/apiV1/status/detail/1")
// .then(response =>console.log(response))



//  ---------------------------delete--------------------------

// axios.delete("http://localhost:8000/apiV1/status/delete/158")
// .then(response =>console.log(response))

//  ---------------------------update(put)--------------------------

// let update_status = {
//     user : 1,
//     content : "Updated",
//     image: null
// }
// axios.put("http://localhost:8000/apiV1/status/update/159", update_status,{
//     headers:{
//         "Content-Type": "application/json"
//     },
// })
// .then(response =>console.log(response))


//  ---------------------------update(patch)--------------------------

// let update_status = {
//     user : 2,
// }
// axios.patch("http://localhost:8000/apiV1/status/update/159", update_status,{
//     headers:{
//         "Content-Type": "application/json"
//     },
// })
// .then(response =>console.log(response))

//  ---------------------------post one--------------------------

// let status = {
//     user : 2,
//     content : "Test html",
//     image: null
// }

// axios.post("http://localhost:8000/apiV1/status/create/",status , {
//     headers: {
//         "Content-Type": "application/json",
//     }
// })
// .then(response =>console.log(response))







document.getElementById("myForm").addEventListener('submit', handleSubmit);
document.getElementById("image").addEventListener('change', handleImage);

let myImage = null

function handleImage(e) {
    myImage = e.target.files[0];
}

function handleSubmit(e) {
    e.preventDefault();
    let user = document.getElementById('user').value;
    let content = document.getElementById('content').value;
    let form_data = new FormData();
    form_data.append('user',user)
    form_data.append('content',content)
    form_data.append('image', myImage)

    // for(var[key,value] of form_data.entries()){
    //     console.log(key, " : ", value);
    // }

    axios.put("http://localhost:8000/apiV1/status/160", form_data,{
        header:{
            "Content-Type":"multipart/form-data"
        }
    })
    .then(response =>response.data)
    .then(data=>console.log(data))

}
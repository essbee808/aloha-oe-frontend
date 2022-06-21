
document.addEventListener('DOMContentLoaded', () => {
    createForm();
})
const base_url = "http://127.0.0.1:3000"

function createForm() {
 
    let photoForm = document.getElementById("photo-form")
    
    photoForm.innerHTML += `
    <form>
        <h3>Upload Image</h3>
        <input type="file" id="img_src" name="img_src" accept="image/*"><br>
        <br>
        Caption: <input type="text" id="caption">
        <br><br>
        <input type="submit" value="Add Photo">
     </form>
    `

    photoForm.addEventListener("submit", photoFormSubmission)
}

function photoFormSubmission() {
    event.preventDefault();
    let img_src = document.getElementById("img_src").value
    let caption = document.getElementById("caption").value

    // create photo object
    debugger
    let photo = {
        img_src: img_src,
        caption: caption
    }

    fetch(`${base_url}/photos`, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(photo)
    })
    .then(resp => console.log(resp))
}
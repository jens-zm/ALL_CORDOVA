const user = JSON.parse(localStorage.getItem('user'));
$("#edit_foto").attr("src", "../../img/"+user["AVA"]);

// upload
const form = document.getElementById('form-upload');
form.addEventListener('submit', e => {
  e.preventDefault();
  const file = form.file.files[0];
  const fr = new FileReader();
  fr.readAsArrayBuffer(file);
  fr.onload = f => {

    const url = "https://script.google.com/macros/s/AKfycbzmI5T9kZKew1wDXWibH50LJySvzJcRi0pUHm6Gr-GadlxLaIk/exec";  // <--- Please set the URL of Web Apps.

    const qs = new URLSearchParams({tahunajar: tahunajaran, kelas: user["KELAS"], filename: form.filename.value || file.name, mimeType: file.type});
    fetch(`${url}?${qs}`, {method: "POST", body: JSON.stringify([...new Int8Array(f.target.result)])})
    .then(res => res.json())
    .then(e =>
      $("#edit_foto").attr("src", e.avaUrl),
    console.log(e.avaUrl),
    console.log(e.fileUrl))  // <--- You can retrieve the returned value here.
    .catch(err => console.log(err));
  }
});

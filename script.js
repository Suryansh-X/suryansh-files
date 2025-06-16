const fileList = document.getElementById("file-list");
const githubApiUrl = "https://api.github.com/repos/suryansh-x/Suryansh-files/contents/";

fetch(githubApiUrl)
  .then(res => res.json())
  .then(data => {
    fileList.innerHTML = "";
    data.forEach(file => {
      if (file.name.endsWith(".pdf") || file.name.endsWith(".mp3") || file.name.endsWith(".zip")) {
        const div = document.createElement("div");
        div.className = "file-item";
        div.innerHTML = `<strong>${file.name}</strong><br><a href="${file.download_url}" download>⬇️ Download</a>`;
        fileList.appendChild(div);
      }
    });
  })
  .catch(() => {
    fileList.innerHTML = "<p>⚠️ Unable to load files.</p>";
  });

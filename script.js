
const supabaseUrl = "https://zolkmdcvdoskwclhhbcx.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...";
const bucket = "files";
const music = document.getElementById("bg-music");
document.getElementById("muteToggle").onclick = () => {
  music.muted = !music.muted;
};
const client = supabase.createClient(supabaseUrl, supabaseKey);
async function listFiles() {
  const { data, error } = await client.storage.from(bucket).list("", { limit: 100 });
  const container = document.getElementById("file-list");
  container.innerHTML = "";
  if (error) {
    container.innerText = "Error loading files.";
    return;
  }
  data.forEach(file => {
    const card = document.createElement("div");
    card.className = "file-card";
    card.innerHTML = \`<a href="\${supabaseUrl}/storage/v1/object/public/\${bucket}/\${file.name}" target="_blank">\${file.name}</a>\`;
    container.appendChild(card);
  });
}
listFiles();

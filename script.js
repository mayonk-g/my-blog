function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

function searchPosts() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const list = document.getElementById("postList").getElementsByTagName("li");

  for (let i = 0; i < list.length; i++) {
    const post = list[i].textContent.toLowerCase();
    list[i].style.display = post.includes(input) ? "" : "none";
  }
}

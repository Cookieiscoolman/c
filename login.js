function Login()  {


player_name = document.getElementById("playername").value;
localStorage.setItem("player_name", player_name);

windown.location = "gamepage.html";
}
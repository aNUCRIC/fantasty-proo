const players = [
  {name: "Virat Kohli", role: "BAT"},
  {name: "Rohit Sharma", role: "BAT"},
  {name: "Jasprit Bumrah", role: "BOWL"},
  {name: "Hardik Pandya", role: "AR"},
  {name: "MS Dhoni", role: "WK"},
];

let selectedTeam = [];

function displayPlayers() {
  const div = document.getElementById("players");

  players.forEach(p => {
    let el = document.createElement("div");
    el.className = "player";
    el.innerHTML = `
      ${p.name} (${p.role})
      <button onclick="selectPlayer('${p.name}')">Select</button>
    `;
    div.appendChild(el);
  });
}

function selectPlayer(name) {
  if (selectedTeam.length >= 11) {
    alert("Max 11 players!");
    return;
  }

  if (!selectedTeam.includes(name)) {
    selectedTeam.push(name);
    updateTeam();
  }
}

function updateTeam() {
  const list = document.getElementById("teamList");
  list.innerHTML = "";

  selectedTeam.forEach(p => {
    let li = document.createElement("li");
    li.innerText = p;
    list.appendChild(li);
  });
}

function submitTeam() {
  alert("Team Submitted!");
}

displayPlayers();
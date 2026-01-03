const webhookURL = "https://discord.com/api/webhooks/1331642430285418506/vkJAlS3hUOLIo6bg-Lng3XGglYz3ednX397yWY4JQCYzMRSturDA0U2EuLH-pBEpWlyb";
const discordInvite = "https://discord.rimmserver.my.id";

let selectedRank = "";
let selectedPrice = 0;

function saveUsername() {
  const username = document.getElementById("usernameInput").value.trim();
  if (!username) return alert("Username tidak boleh kosong!");
  localStorage.setItem("mc_username", username);
  document.getElementById("playerName").innerText = "Player: " + username;
  document.getElementById("usernameModal").classList.remove("active");
}

window.onload = () => {
  const user = localStorage.getItem("mc_username");
  if (user) {
    document.getElementById("usernameModal").classList.remove("active");
    document.getElementById("playerName").innerText = "Player: " + user;
  }
};

function buyRank(rank, price) {
  selectedRank = rank;
  selectedPrice = price;
  document.getElementById("payRank").innerText = rank;
  document.getElementById("payPrice").innerText = "Total: Rp " + price.toLocaleString("id-ID");
  document.getElementById("paymentModal").classList.add("active");
}

function sendToDiscord() {
  const username = localStorage.getItem("mc_username");

  fetch(webhookURL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      content:
`🛒 **PEMBELIAN RANK**
Username : **${username}**
Rank     : **${selectedRank}**
Harga    : **Rp ${selectedPrice.toLocaleString("id-ID")}**

➡️ Silakan lanjutkan pembayaran di ticket #payment`
    })
  });

  window.location.href = discordInvite;
}
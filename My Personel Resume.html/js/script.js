// Fungsi Toggle untuk menu navigasi (Responsive)
function toggleNav() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else { 
        x.className = x.className.replace(" w3-show", "");
    }
}

// Log pengesahan
console.log("Website Portfolio Azmeer Daniel Loaded Successfully.");

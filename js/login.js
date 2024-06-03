function login(){
    const email = document.getElementById("form2Example11").value
    const pass = document.getElementById("form2Example22").value

    fetch("", {
        method: "POST",
        body: JSON.stringify({
            email: email,
            pass: pass
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8"
          }
    })
}

document.getElementById("login").addEventListener("click", login)
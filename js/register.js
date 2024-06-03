function register(){
    const email = document.getElementById("form2Example11").value
    const pass = document.getElementById("form2Example22").value

    fetch("/register", {
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

document.getElementById("register").addEventListener("click", register)
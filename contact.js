function sendEmail() {
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "safemahmud987@gmail.com",
    Password: "F8958D340CB9F6B4BCBD450AD76187F2FE0E",
    To: "mdmahmudurrahman987@gmail.com",
    From: document.getElementById("email").value,
    Subject: "New Conent from Inside Task",
    Body: "And this is the body",
  }).then((message) => {
    alert(message);
    console.log(message);
  });
  alert("Your email send sussessfully");
}

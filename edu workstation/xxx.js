document.getElementById("loginForm").addEventListener("submit",(event)=>{
  event.preventDefault()
})

firebase.auth().onAuthStateChanged((user)=>{
  if(user){
    window.open('writter.html')
  }
  else
  {
    alert("Error Password or Username")/*displays error message*/
   }

})

function login(user){
  const email = document.getElementById("email").value
  const password = document.getElementById("password").value
  firebase.auth().signInWithEmailAndPassword(email, password)
  .catch((error)=>{
      document.getElementById("error").innerHTML = error.message
  })
}

function signUp(){
  const email = document.getElementById("email").value
  const password = document.getElementById("password").value
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .catch((error) => {
      document.getElementById("error").innerHTML = error.message
  });
}

function forgotPass(){
  const email = document.getElementById("email").value
  firebase.auth().sendPasswordResetEmail(email)
  .then(() => {
      alert("Reset link sent to your email id")
  })
  .catch((error) => {
      document.getElementById("error").innerHTML = error.message
  });
}

// This is for the  admin login credetials #ruth

function googlelogin(googleUser){
  var userEmail = document.getElementById('email_field').value;
  var userPass = document.getElementById('password_field').value;

firebase.auth()
  .signInWithPopup(provider)
  .then(function(result) {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...
  }).catch(function(error){
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });


firebase.auth()
  .getRedirectResult()
  .then(function(result) {
    if (result.credential) {
      /** @type {firebase.auth.OAuthCredential} */
      var credential = result.credential;

      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = credential.accessToken;
      // ...
    }
    // The signed-in user info.
    var user = result.user;
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
 }

  function onSignIn(googleUser) {
            profile = googleUser.getBasicProfile();
            console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
            console.log('Name: ' + profile.getName());
            console.log('Image URL: ' + profile.getImageUrl());
            console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.

            var data = $('<div/>');
            data.append($('<div/>').html("Id: " + profile.getId()));
            data.append($('<br/>'));
            data.append($('<div/>').html("Name: " + profile.getName()));
            data.append($('<br/>'));
            data.append($('<div/>').html("Email: " + profile.getEmail()));
            data.append($('<br/>'));
            data.append($('<div/>').html('<img src="' + profile.getImageUrl() + '" alt="Ad Image Preview" height="200" width="200">'));
            // Appending the header to the table 
            $("#data").html(data);

            // hide login and show logout
            $("#btn-login").hide();
            $("#btn-logout").show();
        }



  
function validateForm() {
    const name = document.forms["myForm"]["name"].value;
    const email = document.forms["myForm"]["email"].value;
    const phone = document.forms["myForm"]["phone"].value;
  
    if (name == "") {
      alert("Name must be filled out");
      return false;
    }
  
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address");
      return false;
    }
  
    const phoneRegex = /^\d{9}$/;
    if (!phoneRegex.test(phone)) {
      alert("Please enter a 9-digit phone number");
      return false;
    }
  
    return true;
  }
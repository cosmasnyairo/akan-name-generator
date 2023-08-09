document.addEventListener("DOMContentLoaded", function() {
  const generateBtn = document.getElementById("generateBtn");
  const resultElement = document.getElementById("result");
  
  generateBtn.addEventListener("click", function() {
    const birthdate = new Date(document.getElementById("birthdate").value);
    const gender = document.getElementById("gender").value;
    
    if (!isNaN(birthdate)) {
      const dayOfWeek = birthdate.getDay();
      const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      const maleAkanNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
      const femaleAkanNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afia", "Ama"];
      
      const akanNames = (gender === "male") ? maleAkanNames : femaleAkanNames;
      const akanName = akanNames[dayOfWeek];
      const dayName = days[dayOfWeek];
      
      resultElement.innerText = `Your Akan name is ${akanName}, born on a ${dayName}.`;
    } else {
      resultElement.innerText = "Please enter a valid birthdate.";
    }
  });
});

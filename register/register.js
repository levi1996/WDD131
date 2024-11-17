// Initial participant count
let participantCount = 1;

// Function to generate participant HTML template
function participantTemplate(count) {
  return `
    <section class="participant${count}">
      <p>Participant ${count}</p>
      <div class="item">
        <label for="fname${count}">First Name<span>*</span></label>
        <input id="fname${count}" type="text" name="fname${count}" required />
      </div>
      <div class="item">
        <label for="activity${count}">Activity #<span>*</span></label>
        <input id="activity${count}" type="text" name="activity${count}" />
      </div>
      <div class="item">
        <label for="fee${count}">Fee ($)<span>*</span></label>
        <input id="fee${count}" type="number" name="fee${count}" />
      </div>
      <div class="item">
        <label for="date${count}">Desired Date<span>*</span></label>
        <input id="date${count}" type="date" name="date${count}" />
      </div>
    </section>`;
}

// Add participant button event listener
document.getElementById("add").addEventListener("click", () => {
  participantCount++;
  const participantHTML = participantTemplate(participantCount);
  document.getElementById("add").insertAdjacentHTML("beforebegin", participantHTML);
});
// Function to calculate total fees
function totalFees() {
    let feeElements = document.querySelectorAll("[id^=fee]");
    feeElements = [...feeElements];
    const total = feeElements.reduce((sum, fee) => sum + Number(fee.value || 0), 0);
    return total;
  }
  
  // Function to create success message template
  function successTemplate(info) {
    return `
      <p>Thank you, ${info.adultName}, for registering.</p>
      <p>You have registered ${info.participantCount} participant(s) and owe $${info.feeTotal} in fees.</p>`;
  }
  
  // Submit form event listener
  document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();
  
    const feeTotal = totalFees();
    const adultName = document.getElementById("adult_name").value;
    
    // Hide the form
    document.querySelector("form").style.display = "none";
    
    // Display the success summary
    const summaryElement = document.getElementById("summary");
    summaryElement.innerHTML = successTemplate({
      adultName,
      participantCount,
      feeTotal,
    });
    summaryElement.style.display = "block";
  });
  
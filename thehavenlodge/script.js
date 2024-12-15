// Old JavaScript Code
function setupSlideshow() {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    function nextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    setInterval(nextSlide, 5000);
}

document.addEventListener('DOMContentLoaded', setupSlideshow);

gsap.from(".service-card", {
    duration: 1,
    y: 50,
    opacity: 0,
    stagger: 0.2,
    scrollTrigger: {
        trigger: ".services",
        start: "top center"
    }
});

// New JavaScript Code for Booking Form
const bookingForm = document.getElementById('pet-booking-form');

bookingForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = {
        owner_name: document.getElementById('owner_name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        pet_name: document.getElementById('pet_name').value,
        pet_type: document.getElementById('pet_type').value,
        service: document.getElementById('service').value,
        check_in: document.getElementById('check_in').value,
        check_out: document.getElementById('check_out').value,
        special_notes: document.getElementById('special_notes').value,
    };

    try {
        const response = await fetch('https://fpiwv866gi.execute-api.us-east-2.amazonaws.com/prod/booking', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
    
        if (!response.ok) {
            // Handle HTTP errors (e.g., 4xx or 5xx status codes)
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
    
        const result = await response.json(); // Parse JSON response
        if (result.message) {
            alert('Booking confirmed: ' + result.message); // Success
        } else {
            throw new Error('Unexpected API response format'); // Handle unexpected response
        }
    } catch (error) {
        console.error('Error submitting booking:', error);
        alert('Failed to submit booking. Please try again.'); // General error message
    }
});

// Handles SNS subscriptions

document.getElementById('contactForm').addEventListener('submit', async function (e) {
    e.preventDefault();

    // Gather form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value,
    };

    try {
        // Send form data to API Gateway
        const response = await fetch('https://fpiwv866gi.execute-api.us-east-2.amazonaws.com/prod/subscribe', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        // Handle API response
        const result = await response.json();
        if (response.ok) {
            alert('Thank you for your message! We will get back to you soon.');
        } else {
            throw new Error(result.error || 'Unexpected error occurred.');
        }
    } catch (error) {
        console.error('Error submitting the contact form:', error);
        alert('Failed to send your message. Please try again.');
    }

    // Reset the form
    this.reset();
});

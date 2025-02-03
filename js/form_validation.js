document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    
    if (form) { 
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const email = document.getElementById('email');
            const message = document.getElementById('message');
            let isValid = true;

            if (!email.value || !email.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
                email.classList.add('is-invalid');
                isValid = false;
            } else {
                email.classList.remove('is-invalid');
                email.classList.add('is-valid');
            }

            if (!message.value.trim()) {
                message.classList.add('is-invalid');
                isValid = false;
            } else {
                message.classList.remove('is-invalid');
                message.classList.add('is-valid');
            }

            if (isValid) {
                form.submit();
            }
        });

        const inputs = [email, message];
        inputs.forEach(input => {
            input.addEventListener('input', function() {
                input.classList.remove('is-invalid');
                input.classList.remove('is-valid');
            });
        });
    }
});
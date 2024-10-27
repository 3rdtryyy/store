   // cancel button click
   document.getElementById('cancelButton').addEventListener('click', function() {
    if (confirm('Are you sure you want to cancel your order?')) {
        window.location.href = 'index.html'; 
    }
});

//  form submission
document.getElementById('checkoutForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
   
    alert('Thank you for your purchase! We will send you a text message once your order has been confirmed.');

    
    window.location.href = 'index.html'; 
});
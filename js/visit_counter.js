document.addEventListener('DOMContentLoaded', function() {
    let visits = localStorage.getItem('pageVisits') || 0;
    visits = parseInt(visits) + 1;
    localStorage.setItem('pageVisits', visits);
    document.getElementById('visitCount').textContent = visits;
});
// Admin Panel Logic

console.log('Admin Panel Loaded');

// Function to load and display deals
function loadDeals() {
  console.log('Loading deals for admin panel...');
  const dealsList = document.getElementById('deals-list');
  
  if (dealsList) {
    dealsList.innerHTML = '<p>Deals loading...</p>';
  }
}

// Initialize admin panel
function initAdmin() {
  console.log('Initializing admin panel...');
  loadDeals();
}

// Run when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAdmin);
} else {
  initAdmin();
}
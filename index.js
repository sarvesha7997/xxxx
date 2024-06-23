

document.addEventListener('DOMContentLoaded', function() {
    // Navbar functionality to change text color of "Create account"
    const createAccountLink = document.querySelector('.navbar .create-account');
    if (createAccountLink) {
        createAccountLink.style.color = 'blue'; // Change the color to blue
    }

    // Change overlay text dynamically
    const overlayText = document.getElementById('overlay-text');
    if (overlayText) {
        overlayText.textContent = 'Computer Engineering';

        // Handle click event on overlay text
        overlayText.addEventListener('click', function(event) {
            event.preventDefault();
            alert('Redirecting to Computer Engineering page...');
            // Redirect to a different page or perform other actions here
            window.location.href = overlayText.href;
        });
    }

    // Optionally, change the image source dynamically
    const mainImage = document.getElementById('main-image');
    if (mainImage) {
        mainImage.src = '/mnt/data/image.png'; // Update with your image path if needed
    }

    // Tabs functionality
    const tabs = document.querySelectorAll('.tab');
    const slider = document.querySelector('.tab-slider');

    // Function to update slider position
    const updateSlider = (activeTab) => {
        const tabWidth = activeTab.offsetWidth;
        const tabLeft = activeTab.offsetLeft;
        slider.style.width = `${tabWidth}px`;
        slider.style.left = `${tabLeft}px`;
    };

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove 'active' class from all tabs
            tabs.forEach(t => t.classList.remove('active'));

            // Add 'active' class to the clicked tab
            tab.classList.add('active');

            // Update slider position
            updateSlider(tab);
        });
    });

    // Initial slider position based on the default active tab
    const activeTab = document.querySelector('.tab.active');
    if (activeTab) {
        updateSlider(activeTab);
    }

    // Handle three dots menu click event
    const menuIcons = document.querySelectorAll('.three-dots-menu');

    menuIcons.forEach(icon => {
        icon.addEventListener('click', (e) => {
            const dropdown = icon.nextElementSibling;

            if (dropdown && dropdown.classList.contains('dropdown-menu')) {
                dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
            }
        });
    });

    // Close the menu when clicking outside
    window.addEventListener('click', (e) => {
        if (!e.target.matches('.three-dots-menu')) {
            const dropdowns = document.querySelectorAll('.dropdown-menu');
            dropdowns.forEach(menu => menu.style.display = 'none');
        }
    });

    // Handle clear icon click event
    const clearIcon = document.querySelector('.clear-icon');
    const locationInput = document.querySelector('.location-input input');
    const recommendedGroups = document.querySelector('.recommended-groups');


    if (clearIcon && locationInput) {
        clearIcon.addEventListener('click', () => {
            locationInput.value = '';
            recommendedGroups.classList.add('hidden'); // Hide recommendations when clearing location
        });

        locationInput.addEventListener('input', () => {
            if (locationInput.value.trim() !== '') {
                recommendedGroups.classList.remove('hidden'); // Show recommendations when location is entered
            } else {
                recommendedGroups.classList.add('hidden'); // Hide recommendations when location is empty
            }
        });
    }
    // if (locationInput && recommendedGroups) {
    //     locationInput.addEventListener('focus', () => {
    //         recommendedGroups.classList.remove('hidden');
    //     });

    //     locationInput.addEventListener('blur', () => {
    //         if (locationInput.value.trim() === '') {
    //             recommendedGroups.classList.add('hidden');
    //         }
    //     });
    // } else {
    //     console.error('Location input or recommended groups not found.');
    // }
    // if (seeMoreLink) {
    //     seeMoreLink.addEventListener('click', (event) => {
    //         event.preventDefault();

    //         // Check if the clicked element is not the "See More" link
    //         if (event.target !== seeMoreLink) {
    //             return;
    //         }

    //         hiddenGroups.forEach(group => group.classList.remove('hidden'));
    //         seeMoreLink.style.display = 'none'; // Hide the "See More" link after showing all groups
    //     });
    // }
    
    // Handle join/leave group button click event
    const toggleGroupBtn = document.getElementById('toggle-group-btn');

    if (toggleGroupBtn) {
        toggleGroupBtn.addEventListener('click', () => {
            if (toggleGroupBtn.classList.contains('join-group-btn')) {
                toggleGroupBtn.classList.remove('join-group-btn');
                toggleGroupBtn.classList.add('leave-group-btn');
                toggleGroupBtn.innerHTML = '<i class="fas fa-users"></i> Leave Group';
            } else {
                toggleGroupBtn.classList.remove('leave-group-btn');
                toggleGroupBtn.classList.add('join-group-btn');
                toggleGroupBtn.innerHTML = '<i class="fas fa-users"></i> Join Group';
            }
        });
    }

    // Handle showing/hiding the recommended groups
    const seeMoreLink = document.querySelector('.see-more');
    const hiddenGroups = document.querySelectorAll('.group.hidden');

    if (seeMoreLink) {
        seeMoreLink.addEventListener('click', (event) => {
            event.preventDefault();
            hiddenGroups.forEach(group => group.classList.remove('hidden'));
            seeMoreLink.style.display = 'none'; // Hide the "See More" link after showing all groups
        });
    }

    
});
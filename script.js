// Array to store profiles
let profiles = [];

// Handle form submission
document.getElementById('profileForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get the 3 profiles from input fields
    let profile1 = {
        name: document.getElementById('name1').value,
        description: document.getElementById('description1').value
    };
    let profile2 = {
        name: document.getElementById('name2').value,
        description: document.getElementById('description2').value
    };
    let profile3 = {
        name: document.getElementById('name3').value,
        description: document.getElementById('description3').value
    };

    // Add the profiles to the array
    profiles.push(profile1, profile2, profile3);

    // Clear the form
    document.getElementById('profileForm').reset();

    // Display the profiles
    displayProfiles();
});

// Function to display profiles for swiping
function displayProfiles() {
    const profilesContainer = document.getElementById('profiles');
    profilesContainer.innerHTML = ''; // Clear the existing profiles

    profiles.forEach((profile, index) => {
        let profileCard = document.createElement('div');
        profileCard.classList.add('profile-card');

        let profileContent = document.createElement('div');
        profileContent.innerHTML = `<strong>${profile.name}</strong><p>${profile.description}</p>`;

        let swipeButtons = document.createElement('div');
        swipeButtons.classList.add('swipe-buttons');
        let swipeRightBtn = document.createElement('button');
        swipeRightBtn.classList.add('swipe-right');
        swipeRightBtn.innerText = 'Swipe Right';
        swipeRightBtn.addEventListener('click', () => swipeRight(index));

        let swipeLeftBtn = document.createElement('button');
        swipeLeftBtn.classList.add('swipe-left');
        swipeLeftBtn.innerText = 'Swipe Left';
        swipeLeftBtn.addEventListener('click', () => swipeLeft(index));

        swipeButtons.appendChild(swipeRightBtn);
        swipeButtons.appendChild(swipeLeftBtn);

        profileCard.appendChild(profileContent);
        profileCard.appendChild(swipeButtons);

        profilesContainer.appendChild(profileCard);
    });
}

// Function to handle swipe right
function swipeRight(index) {
    alert(`You swiped right on ${profiles[index].name}`);
    // You can add additional logic here to store this information
}

// Function to handle swipe left
function swipeLeft(index) {
    alert(`You swiped left on ${profiles[index].name}`);
    // You can add additional logic here to store this information
}

const userWrapper = document.getElementById('userWrapper');
const communityLink = document.getElementById('community-link');
const coursesProgressSection = document.querySelector('.courses-progress');
const popularCategoriesSection = document.querySelector('.popular-categories');

// Add an event listener to the userWrapper
userWrapper.addEventListener('click', () => {
    userWrapper.classList.toggle('toggled');
});



const mentorCards = document.querySelectorAll('.category-item');

// Add an event listener to each mentor card
mentorCards.forEach(card => {
    card.addEventListener('click', function () {
        mentorCards.forEach(card => card.style.backgroundColor = '');
        // Change the background color of the clicked mentor card
        this.style.backgroundColor = getRandomColor();
    });
});

// Function to generate a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}



communityLink.addEventListener('click', () => {
  coursesProgressSection.style.display = 'none';
  popularCategoriesSection.style.display = 'none';
});
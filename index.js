
const createButton = document.getElementById('createButton');
const deleteButton = document.getElementById('deleteButton');
const retrieveButton = document.getElementById('retrieveButton');
const cookieNameInput = document.getElementById('cookieName');
const cookieValueInput = document.getElementById('cookieValue');

createButton.addEventListener('click', () => {
    const cookieName = cookieNameInput.value;
    const cookieValue = cookieValueInput.value;
    document.cookie = `${cookieName}=${cookieValue}`;
    alert(`Cookie "${cookieName}" created.`);
});

deleteButton.addEventListener('click', () => {
    const cookieName = cookieNameInput.value;
    const cookieValue = cookieValueInput.value;
    // Store the cookie data in local storage before deleting
    localStorage.setItem('deletedCookieName', cookieName);
    localStorage.setItem('deletedCookieValue', cookieValue);
    // Delete the cookie
    document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    alert(`Cookie "${cookieName}" deleted.`);
});

retrieveButton.addEventListener('click', () => {
    const deletedCookieName = localStorage.getItem('deletedCookieName');
    const deletedCookieValue = localStorage.getItem('deletedCookieValue');
    if (deletedCookieName && deletedCookieValue) {
        alert(`Deleted Cookie - Name: ${deletedCookieName}, Value: ${deletedCookieValue}`);
    } else {
        alert('No deleted cookie data found in local storage.');
    }
});

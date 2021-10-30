const USERNAME = 'ivanseibel';

const updateAvatar = async () => {
  const userObject = await fetch(`https://api.github.com/users/${USERNAME}`)
    .then(response => response.json())
    .then(data => data);

  const avatar = document.querySelector('#avatar-img');
  avatar.src = userObject.avatar_url;

  const fullName = document.querySelector('#full-name');
  fullName.textContent = userObject.name;

  const userProfileUrl = document.querySelector('#user-profile-url');
  userProfileUrl.href = userObject.html_url;

  const username = document.querySelector('#username');
  username.textContent = userObject.login;

  const userBio = document.querySelector('#user-bio');
  userBio.textContent = userObject.bio;
}

updateAvatar();
var username = "octocat";
fetch(`https://api.github.com/users/${username}`)
  .then((response) => response.json())
  .then((data) => generateProfile(data));

function generateProfile(profile) {
  const pfp = document.querySelector("#pfp");
  const username = document.getElementById("username");
  const biod = document.querySelector("#bio");
  const rname = document.querySelector("#name");
  const joined = document.querySelector(".joined");
  const loc = document.querySelector(".location");
  const url = document.querySelector(".url");
  const twt = document.querySelector(".twitter");
  const org = document.querySelector(".org");
  const repos = document.querySelector(".repos");
  const followers = document.querySelector(".followers");
  const following = document.querySelector(".following");

  pfp.src = profile.avatar_url;
  username.innerHTML = profile.login;
  rname.innerHTML = profile.name;
  if (profile.bio == null) biod.textContent = "This profile has no bio";
  biod.textContent = profile.bio;
  // joined.innerHTML = profile.created_at;
  loc.textContent = profile.location;
  url.innerHTML = profile.blog;
  if (profile.twitter_username == null) twt.innerHTML = "Not a available";
  twt.innerHTML = profile.twitter_username;
  if (profile.company == 'null') org.innerHTML = 'No company';
  org.innerHTML = profile.company;
  repos.innerHTML = profile.public_repos;
  followers.innerHTML = profile.followers;
  following.innerHTML = profile.following;
}

const fetchuser = async () => {
  const username = document.querySelector('.searchinput').value;
 const user = await fetch(`https://api.github.com/users/${username}`);
  const profile = await user.json();
  generateProfile(profile);
}

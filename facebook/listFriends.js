const allFriends = document.querySelectorAll('div[data-pagelet="ProfileAppSection_0"] div.buofh1pr.hv4rvrfc');

const friendsList = [];

allFriends.forEach(friend => {
  const friendInfos = friend.querySelector('div a');
  const linkProfile = friendInfos.getAttribute('href');
  const nameProfile = friendInfos.querySelector('span').innerText;

  return friendsList.push({
    name: nameProfile,
    link: linkProfile
  })
})

console.log(friendsList);
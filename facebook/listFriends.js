const allFriends = document.querySelectorAll('div[data-pagelet="ProfileAppSection_0"] div.buofh1pr.hv4rvrfc');

const friendsList = [];
const invalidProfiles = [];

allFriends.forEach(friend => {
  try {
    const friendInfos = friend.querySelector('div a');
    const linkProfile = friendInfos.getAttribute('href');
    const nameProfile = friendInfos.querySelector('span').innerText;

    return friendsList.push({
      nome: nameProfile,
      link: linkProfile
    })
  }

  catch (error) {
    const nameProfileInvalid = friend.querySelector('div span').innerText;
    return invalidProfiles.push({ name: nameProfileInvalid })
  }
})

console.log(friendsList);
console.log(invalidProfiles);
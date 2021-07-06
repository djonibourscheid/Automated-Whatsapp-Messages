// retorna uma nodeList com as divs de cada amigo
const allFriends = document.querySelectorAll('div[data-pagelet="ProfileAppSection_0"] div.buofh1pr.hv4rvrfc');

const friendsList = [];
const invalidProfiles = [];

allFriends.forEach(friend => {
  try {
    // pegando o link do perfil e o nome de cada pessoa.
    const friendInfos = friend.querySelector('div a');
    const linkProfile = friendInfos.getAttribute('href');
    const nameProfile = friendInfos.querySelector('span').innerText;

    return friendsList.push({
      nome: nameProfile,
      link: linkProfile
    })
  }

  catch (error) {
    // Caso o perfil não exista, retorna apenas uma mensagem no console
    const nameProfileInvalid = friend.querySelector('div span').innerText;
    return invalidProfiles.push({ nome: nameProfileInvalid })
  }
})

console.log("Lista de amigos: ", friendsList);
console.log("Lista de amigos que excluíram o perfil: ", invalidProfiles);
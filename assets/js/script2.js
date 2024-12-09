class Pet {
    constructor(petName, ownerName, species, breed) {
      this.petName = petName;
      this.ownerName = ownerName;
      this.species = species;
      this.breed = breed;
    }
  
    hasSameOwner(otherPet) {
      return this.ownerName === otherPet.ownerName;
    }
  }
  
  const petList = [];
  const petListElement = document.getElementById("petList");
  
  document.getElementById("petForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const petName = document.getElementById("petName").value;
    const ownerName = document.getElementById("ownerName").value;
    const species = document.getElementById("species").value;
    const breed = document.getElementById("breed").value;
  
    const newPet = new Pet(petName, ownerName, species, breed);
  
    petList.push(newPet);
  
    displayPetList();
  
    event.target.reset();
  });
  
  function displayPetList() {
    petListElement.innerHTML = "";
    petList.forEach((pet, index) => {
      const listItem = document.createElement("li");
  
      let sameOwnerPets = petList
        .filter((otherPet, otherIndex) => otherIndex !== index && pet.hasSameOwner(otherPet))
        .map(otherPet => otherPet.petName);
  
      const sameOwnerText = sameOwnerPets.length > 0
        ? `Condivide il proprietario con: ${sameOwnerPets.join(", ")}`
        : "Questo animale non condivide proprietario";
  
      listItem.textContent = ` ${pet.petName}, 
       ${pet.ownerName}, ${pet.species},  ${pet.breed}. ${sameOwnerText}`;
      petListElement.appendChild(listItem);
    });
  }
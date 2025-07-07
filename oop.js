class User {
  constructor(_firstName, _lastName, _age, _location) {
    this.firstName = _firstName;
    this.lastName = _lastName;
    this.age = _age;
    this.location = _location;
  }
  ageComparison(otherUser) {
    if (this.age > otherUser.age) {
      return `${this.firstName} è più vecchio di ${otherUser.firstName}`;
    } else if (this.age < otherUser.age) {
      return `${this.firstName} è più giovane di ${otherUser.firstName}`;
    }
  }
}

const user1 = new User("Andrea", "Tripodi", "27", "Pescara");
const user2 = new User("Giancarlo", "Bianchi", "45", "Milano");

console.log(user1.ageComparison(user2));

class Pet {
  constructor(_petName, _ownerName, _specie, _breed) {
    this.petName = _petName;
    this.ownerName = _ownerName;
    this.specie = _specie;
    this.breed = _breed;
  }
  isTheOwnerTheSame(sameOwner) {
    if (this.ownerName === sameOwner.ownerName) {
      return true;
    }
  }
}
const petNameInput = document.getElementById("petName");
const ownerNameInput = document.getElementById("ownerName");
const speciesInput = document.getElementById("species");
const breedInput = document.getElementById("breed");
const petList = document.getElementById("pet-list");
const form = document.getElementById("pet-form");
const pets = [];
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const petName = petNameInput.value;
  const ownerName = ownerNameInput.value;
  const species = speciesInput.value;
  const breed = breedInput.value;

  const animale = new Pet(petName, ownerName, species, breed);
  pets.push(animale);
  console.log(animale);
  pets.forEach((pet) => {
    if (pet !== animale && pet.isTheOwnerTheSame(animale)) {
      console.log("IL MIO PADRONE SPENDE TANTO");
    }
  });
  form.reset();
});

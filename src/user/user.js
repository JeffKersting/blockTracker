class User {
  constructor(name, password, favorites) {
    this.name = name;
    this.password = password;
    this.favorites = [];
    this.currency = '';
  }

  saveToStorage() {
    localStorage.setItem(this.name, JSON.stringify(this))
  }

  updateFavorites(updatedFavorites) {
    this.favorites = updatedFavorites
    this.saveToStorage()
  }
}

export default User

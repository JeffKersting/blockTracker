class User {
  constructor(name, password, favorites) {
    this.name = name;
    this.password = password;
    this.favorites = []
  }

  saveToStorage() {
    localStorage.setItem(this.name, JSON.stringify(this))
  }

  updateFavorites(updatedFavorites) {
    localStorage.setItem(this.favorites, JSON.stringify(updatedFavorites))
  }
}

export default User

class User {
  constructor(name, password, favorites) {
    this.name = name;
    this.password = password;
    this.favorites = []
  }

  saveToStorage() {
    localStorage.setItem(this.name, JSON.stringify(this))
  }

  updateFavorites(coinId) {
    this.favorites.push(coinId)
    this.saveToStorage()
  }
}

export default User

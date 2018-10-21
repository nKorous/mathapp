export function Login(playerName) {
    localStorage.setItem(`${playerName}-Login`, { playerName: playerName, isLoggedIn: true})
}

export function Logout(playerName) {
    localStorage.setItem(`${playerName}-Login`, { playerName: playerName, isLoggedIn: false})
}
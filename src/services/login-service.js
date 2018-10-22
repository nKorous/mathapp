export function Login(playerName) {
    let loginInfo = JSON.stringify({ playerName: playerName, isLoggedIn: true})
    localStorage.setItem('login', loginInfo)
}

export function Logout(playerName) {
    localStorage.setItem('login', { playerName: playerName, isLoggedIn: false})
}

export function GetLoginCreds(){
    return localStorage.getItem('login')
}
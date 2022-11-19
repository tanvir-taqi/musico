

export const jwtFetchRequest = (user)=>{
    const currentUser = {
        email: user.email
    }

    fetch('https://musico-server.vercel.app/jwt', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(currentUser)
    })
}
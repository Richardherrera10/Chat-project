const TOKEN_API = '563492ad6f91700001000001c792faf3c29741ae9adaa8662038dc0f'

export const getImages = async (search = 'computer') => {
    const response = await fetch(`https://api.pexels.com/v1/search?query=${search}&per_page=10`, {
        headers:{
            Authorization: `${TOKEN_API}`
        }
    })
    const data = await response.json()
    return data.photos
}
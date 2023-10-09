const API_URL = 'https://mocki.io/v1/9668e237-bded-476f-aff2-515d5019b41a'

export const getTodosApiFake = async () => {
  try {
    const res = await fetch(API_URL)
    const data = await res.json()
    return data
  } catch (error) {
    console.log(error)
  }
}

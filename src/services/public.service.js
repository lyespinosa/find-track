import axios from "axios"

const API_URL = 'http://3.213.63.135'

export const getSharedSavingsByUserRequest = async () => {

    try {
        const response = await axios.get(`${API_URL}/sharedSaving/user/1`)
        return response.data

    } catch (error) {
        console.error(JSON.stringify(error.message))
    }
}
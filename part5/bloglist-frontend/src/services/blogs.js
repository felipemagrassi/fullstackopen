import axios from 'axios'
const baseUrl = '/api/blog'

let token = null

const setToken = (newToken) => {
  token = `bearer ${newToken}`
}

const getAll = async () => {
  const request = await axios.get(baseUrl)
  return request.data
}

const create = async (newObject) => {
  const config = { headers: { Authorization: token } }
  const response = await axios.post(baseUrl, newObject, config)
  return response.data
}

const update = async (id) => {
  const config = { headers: { Authorization: token } }
  const response = await axios.put(`${baseUrl}/${id}/like`, {} ,  config)
  return response.data
}

const comment = async (id, comment) => {
  const response = await axios.put(`${baseUrl}/${id}/comments`, { comment: comment })
  return response.data
}

const deletePost = async (id) => {
  const config = { headers: { Authorization: token } }
  await axios.delete(`${baseUrl}/${id}`, config)
}

export default { setToken, getAll, create, update, comment, deletePost }

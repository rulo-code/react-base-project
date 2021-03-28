const { REACT_APP_API_URL } = process.env

const getConfig = () => {
  return {
    API_URL: `${REACT_APP_API_URL}`,
  }
}

export default getConfig()

/* eslint-disable @typescript-eslint/no-explicit-any */
export const getData = async (url: string): Promise<any> => {
  const response = await fetch(url)
  const data = response.json()
  return data
}

export default async function fetchData<T>(
  url: string,
  options: {
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
    headers?: HeadersInit;
    body?: any;
  } = {}
): Promise<T> {
  const { method = 'GET', headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': '2j8dC4EEYJu6qPQ3FcpG11uqVvkBbcvvofqBAcQ8e9TsvEj6kHfL4E02'
  }, body = null } = options;

  try {
    const response = await fetch(url, {
      method,
      headers,
      body: method !== 'GET' && body ? JSON.stringify(body) : null,
    } as any);
    if(response.ok) {
      return await response.json()
    }
    throw new Error(`Error: ${response.status}`);
  } catch (error: any) {
    console.log('error', error);
    throw new Error(error.message);
  }
}
class HTTPCall__PlayerOne {
  async get(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }
}

class HTTPCall_PlayerTwo {
  async get(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }
}
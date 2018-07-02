class HTTPCall__PlayerOne {
  async get_API(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }
}

class HTTPCall_PlayerTwo {
  async get_API(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }
}
class ItemHttp {
  async get_ItemId_API(itemId) {
    const response = await fetch(itemId);
    const itemData = await response.json();

    return itemData;
  }
}
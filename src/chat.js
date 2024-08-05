const axios = require('axios');

class ChatAPI {
  constructor(baseURL) {
    this.client = axios.create({ baseURL });
  }

  async getMessages(roomId) {
    const response = await this.client.get(`/api/chat?roomId=${roomId}`);
    return response.data;
  }

  async sendMessage(roomId, message, userName) {
    const response = await this.client.post('/api/chat', { roomId, message, userName });
    return response.data;
  }
}

module.exports = ChatAPI;

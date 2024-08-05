const axios = require('axios');

class AudioAPI {
  constructor(baseURL) {
    this.client = axios.create({ baseURL });
  }

  // Menambahkan audio ke dalam room
  async addAudio(roomId, audioData) {
    const response = await this.client.post(`/api/audio/add`, { roomId, audioData });
    return response.data;
  }

  // Mendapatkan daftar audio dari room
  async getAudios(roomId) {
    const response = await this.client.get(`/api/audio?roomId=${roomId}`);
    return response.data;
  }

  // Menghapus audio dari room
  async deleteAudio(audioId) {
    const response = await this.client.delete(`/api/audio/${audioId}`);
    return response.data;
  }

  // Mengupdate informasi audio
  async updateAudio(audioId, updateData) {
    const response = await this.client.put(`/api/audio/${audioId}`, updateData);
    return response.data;
  }
}

module.exports = AudioAPI;

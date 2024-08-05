const axios = require('axios');

class VideoAPI {
  constructor(baseURL) {
    this.client = axios.create({ baseURL });
  }

  // Menambahkan video ke dalam room
  async addVideo(roomId, videoData) {
    const response = await this.client.post(`/api/video/add`, { roomId, videoData });
    return response.data;
  }

  // Mendapatkan daftar video dari room
  async getVideos(roomId) {
    const response = await this.client.get(`/api/video?roomId=${roomId}`);
    return response.data;
  }

  // Menghapus video dari room
  async deleteVideo(videoId) {
    const response = await this.client.delete(`/api/video/${videoId}`);
    return response.data;
  }

  // Mengupdate informasi video
  async updateVideo(videoId, updateData) {
    const response = await this.client.put(`/api/video/${videoId}`, updateData);
    return response.data;
  }
}

module.exports = VideoAPI;

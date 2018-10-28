const Server = require("./server")

class S3MusicLibraryServer {
  constructor(s3MusicLibrary, port) {
    this.server = new Server(s3MusicLibrary, port)
  }
}

module.exports = S3MusicLibraryServer

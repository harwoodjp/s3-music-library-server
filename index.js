const express = require("express"),
  Router = require("./router")

class S3MusicLibraryServer {
  constructor(s3MusicLibrary, port) {
    this.s3MusicLibrary = s3MusicLibrary
    this.port = port
    this._setup()
  }

  _setup() {
    this.server = express()
    new Router(this.server, this.s3MusicLibrary)
  }

  listen(port) {
    this.server.listen(port, () =>
     console.log(`http://localhost:${port}`)
    )
  } 
  
}
  
module.exports = S3MusicLibraryServer

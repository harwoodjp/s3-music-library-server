const express = require("express"),
  Router = require("./router")

class S3MusicLibraryServer {
  constructor(s3MusicLibrary, port) {
    this.s3MusicLibrary = s3MusicLibrary
    this.port = port
    this._setup()
    this._start()
  }

  _setup() {
    this.server = express()
    new Router(this.server, this.s3MusicLibrary)
  }

  _start() {
    this.server.listen(this.port, () =>
      console.log(`http://localhost:${this.port}`)
    )
  } 
  
}
  
module.exports = S3MusicLibraryServer

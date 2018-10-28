require("dotenv").config()
const S3MusicLibrary = require("s3-music-library"),
  S3MusicLibraryServer = require("./index")

const {
  AWS_S3_BUCKET,
  AWS_ACCESS_KEY_ID,
  AWS_SECRET_ACCESS_KEY,
} = process.env

const s3MusicLibrary = new S3MusicLibrary(
  AWS_S3_BUCKET, 
  AWS_ACCESS_KEY_ID, 
  AWS_SECRET_ACCESS_KEY
)


const s3MusicLibraryServer = new S3MusicLibraryServer(
  s3MusicLibrary, 
  1776
)

class Router {
  constructor(server, s3MusicLibrary) {
    s3MusicLibrary.fetchData()
      .then(() => {       
        server.get("/artists", (req, res) => {
          res.json(s3MusicLibrary.artists)
        })

        server.get("/albums", (req, res) => {
          res.json(s3MusicLibrary.albums)
        })
        
        server.get("/tracks", (req, res) => {
          res.json(s3MusicLibrary.tracks)
        })

        server.get("/filter", (req, res) => {       
          const hasQuery = !!Object.keys(req.query).length
          hasQuery
            ? res.json(s3MusicLibrary.filterBy(req.query))
            : res.json({})
        })

      })
  }
}

module.exports = Router

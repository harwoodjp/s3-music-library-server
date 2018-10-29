class Router {
  constructor(server, s3MusicLibrary) {
    s3MusicLibrary.fetchData()
      .then(() => {       
        
        server.get('/*', (req, res, next) => {
          res.setHeader('Access-Control-Allow-Origin', '*')
          res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
          res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
          res.setHeader('Access-Control-Allow-Credentials', true)
          next()
        })
        
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
            ? res.json(s3MusicLibrary.filter(req.query))
            : res.json({})
        })
        
        server.get("/search", (req, res) => {
          const hasKey = req.query.key != null
          hasKey
            ? res.json(s3MusicLibrary.search(req.query.key))
            : res.json({})
        })

      })
  }
}

module.exports = Router

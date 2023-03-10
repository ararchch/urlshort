# urlshort
This is a simple url shortener which uses Firebase to store original and shortened urls, and retrieve/redirect accordingly. 

To Run:

1. Clone repo to local storage
2. In 'urlshort' directory run 'node .' (program will run on localhost:3000 port)
3. Using Postman send a post request to 'http://localhost:3000/short'
      Body: { 
              "originalUrl": "https://www.sampleurl.com"
            }
4. shortened url is returned with 200 response from server. 
5. access shortened url to be redirected to original one (Note: originalUrl - shortenedUrl data is maintained even if server is restarted)

Note: although there is a minimal frontend, it is not functional at the moment and encounters issues when sending a post request.
      I will attempt to debug it/improve the UI over the next few days.

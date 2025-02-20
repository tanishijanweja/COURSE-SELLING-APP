
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>yz</title>
    <link rel="stylesheet" href="style.css" type="text/css" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/1.7.6/axios.min.js"></script>
  </head>
  <body>
    Linkdn
    <div id="posts"></div>
    <script>
      async function getRecentPost() {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts/2"
        );
        document.getElementById("posts").innerHTML = response.data.title;
      }
      getRecentPost();
    </script>
  </body>
</html>

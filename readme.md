# URL Shortener
a RESTful API for a URL shortening service – a tool that transforms lengthy URLs into bite-sized versions.

### tech needed to run the api in system
node.js, MongoDB, Postman, VSCode

### Environment variables
MONGO_URL='mongodb://localhost/url-shortener'\
SECRET_KEY='codial'

### test account 
email: snkt@gmail.com\
password: 123

## Steps for running the api in local machine
1. download the code to your system or clone the repo
2. open the code in vscode and run command 'npm i' to install all the dependencies
3. create a .env file in the main folder and define environment variables
4. run command 'npm start' and the server is ready to use
5. now you can access the api using postman or any other api app

## Functionalities
1. register as a user\
    localhost:8888/user/signup \
    in body enter email and password \
    ![Alt text](<Screenshot (4).png>)

2. user signin \
    localhost:8888/user/signup \
    in body enter email and password , copy the token recieved in response \
    ![Alt text](<Screenshot (7).png>)

3. shorten a url \
    localhost:8888/short
    in authorization select bearer token and paste the token recieved and in body enter the url with key 'origUrl' then make a post request \
    ![Alt text](<Screenshot (5).png>)

4. using the short url \
    click on the shortUrl recieved and send it as a get request and you will be redirected to the original url \
    ![Alt text](<Screenshot (6).png>)

5. checking all your urls \
    to view all your saved urls send get request to localhost:8888/my-urls with your authoriation token \


### Deployed link for the API
https://url-shortener-c2l5.onrender.com
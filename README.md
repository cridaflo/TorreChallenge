# TorreChallenge

## Cultural Profile Matcher
Cultural Profile Matcher is web app that allows recruiters to check compatibility of an applicant’s cultural values and the ones required for a job. You can check the app in this link  https://torre-cultural-profile.herokuapp.com/.

## How to compile locally

### Backend

Set your database URI credentials in config.py like this: SQLALCHEMY_DATABASE_URI  = $DATABASE_URI. On the backend folder run the following commands:

```bash
# install dependencies
$ pip install -r reqeuirements.txt

# create tables
$ python db_create.py
$ python run.py

```
Make sure that your browser accepts self signed certificates from https://127.0.0.1:3000/. To enable it, access that url and select continue to the host in case that the browser shows you an alert.  

### Frontend

Make sure to have angular client instlled in yuor computer. On the frontend folder run the following commands:

```bash
# install dependencies
$ npm install

# compile and run
$ ng serve

```



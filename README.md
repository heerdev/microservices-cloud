# microservices-demo
microservices for e-commerce
# deploy product service
1. navigate to root folder containg pom.xml and Dockerfile
Execute following command 
heroku login
heroku container:login
mvn clean install
heroku container:push -a heerproductservice;
heroku ps:scale web=1 -a <application-name>

heroku url:https://heerproductservice.herokuapp.com/people

# Sky Technical Challenge

There were two decisions that I took which is worth mentioning and I hope don’t come across as a negative:
-	These requirements could easily have been implemented in the same repository. However, I created a separate repository for the catalogue service, customer location stub service and the product selection. This is because I believe separating these out reduces complexity, provides more room for scalability and most probably how they would be implemented in the real world.
-	In the catalogues service, I was torn between implementing a database vs serving static data. I chose to serve static data to minimise complexity for running the application for your testing. It would have been simple to include mongoose and setup a mongodb database modelling the catalogue.

### Running Application

Having different repositories does means you would have to run each one separately, not ideal, so apologies. The product selection React app makes HTTP requests to each one of these to gather the initial data (location_id and products) required for the app to work.

These repositories have already been transpiled using babel, therefor you simple need to  run __npm install__ and __npm run dev__ for each of the servers to start. Each uses a different port so there should not be any conflicts, however, if you have one of the below ports already in use, please change the port numbers in the config file of each repository:

-	Catalogue service runs on http://localhost:3001
-	Locations stub service runs on http://localhost:3002 
-	Product selection runs on default http://localhost:8080


#### Testing the application

As the requirement stated that we can assume a customer ID is present via a cookie, I simply set a cookie that holds this information and use it where needed in the application. In the product selection React app you can choose between customer_1 for location LONDON and customer_2 for location LIVERPOOL in the config file under /src. Changing this returns different products based on the chosen location.


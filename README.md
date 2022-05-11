/////////////////////////////
//Team Member Contributions//
/////////////////////////////

Jaidynn Fohr: 0.33
John Konchar: 0.33
Joseph Spielman: 0.33

////////////////////////////////
//Notes on Running the Project//
////////////////////////////////

Backend:
The backend uses MongoDB.
Start with "npm start" and view in localhost:8000

Frontend:
The frontend uses React with Hooks and a Bootstrap CSS styling framework.
You may need to run "react-scripts start" first and/or install Bootstrap.
Start with "npm start" and view in localhost:3000

////////////
//Criteria//
////////////

 - [X] Data Model (6)
    - [X] The final project includes at least two models/collections (6; three points for each entity)
    - [X] See the Todo Project description for an idea of what this looks like
        - [X] Brands:
            - [X] _id — this can be Mongo's ObjectId, if you like
            - [X] title — string
        - [X] Models:
            - [X] _id — this can be Mongo's ObjectId, if you like
            - [X] title — string
            - [X] description — string
            - [X] good_gas — boolean
            - [X] BrandID — this should be a reference to the brand's _id field
 - [X] Backend (20)
    - [X] GET (both / and /:thingId)
      - [X] Brands
      - [X] Brand
      - [X] Model 
    - [X] POST
      - [X] Brand
      - [X] Model
    - [X] PUT
      - [X] Brand
      - [X] Model
    - [X] DELETE 
      - [X] Brand
      - [X] Model
    - [X] Remember that for a REST API, the GET route is for all entities and also for a specific entity (fetched by ID)
 - [ ] Frontend (26)
    - [X] At least four frontend routes to create, read, update, and delete the entities created in the data model (16)
      - [X] "/"
      - [X] "/brands"
      - [X] "/brands/new"
      - [X] "/brands/:brandId"
	  - [X] "/brands/:brandId/update"
	  - [X] "/brands/:brandId/delete"
	  - [X] "/brands/:brandId/models/"
	  - [X] "/brands/:brandId/models/new"
	  - [X] "/brands/:brandId/models/:modelId"
	  - [X] "/brands/:brandId/models/:modelId/update"
	  - [X] "/brands/:brandId/models/:modelId/delete"
	- [X] Four points per route to take into account data fetching, state management, and interactivity in form submission, etc
    - [X] Some CSS styling; at least ten styles (10)
    - [X] Using a CSS framework like Bootstrap or Tailwind is substitutable for the ten style requirement. This also should help speed up the process of styling the project.
 - [ ] Grading (6)
    - [X] Zip up your code (2)
    - [X] Include a README with notes on how to run the project if any special steps were taken (2)
    - [X] Include a text file rating the effort each team member put into the project
    - [X] These ratings should add up to 1; if all team members contributed equitably, rate each person 0.33; adjust as-needed (2)

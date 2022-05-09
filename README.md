Criteria
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
 - [ ] Backend (20)
    - [X] GET (both / and /:thingId)
      - [X] Brands
      - [X] Brand
      - [X] Model 
    - [ ] POST
      - [X] Brand
      - [ ] Model
    - [ ] PUT
      - [ ] Brand
      - [ ] Model
    - [ ] DELETE 
      - [X] Brand
      - [ ] Model
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
    - [ ] Some CSS styling; at least ten styles (10)
    - [ ] Using a CSS framework like Bootstrap or Tailwind is substitutable for the ten style requirement. This also should help speed up the process of styling the project.
 - [ ] Grading (6)
    - [ ] Zip up your code (2)
    - [ ] Include a README with notes on how to run the project if any special steps were taken (2)
    - [ ] Include a text file rating the effort each team member put into the project
    - [ ] These ratings should add up to 1; if all team members contributed equitably, rate each person 0.33; adjust as-needed (2)

Plataforma web para publicação e busca de animais perdidos, achados ou disponíveis para adoção.

## Request

 Method | URL Path      | Description
| :-----| :-------------| :-----------------------
 GET    | /animals      | List all animals
 POST   | /animals      | Create a new animal
 GET    | /animals/{id} | Show info about a animal
 POST   | /animals/{id} | Update a animal
 DELETE | /animals/{id} | Delete a animal


## Database Models
### - Animals
 Fields      | Data Type   | Required  | Default       | Description
| :----------| :-----------| :---------| :-------------| :--------------------------------------------|
 id          | int         | True      | Autoincrement | Animal unique identifier
 date        | datetime    | True      | datetime.now  | Post date
 category    | string      | True      | None          | Animal condition: lost, found or for adoption
 size        | string      | True      | None          | Animal size: small, medium or large
 city        | string      | True      | None          | Animal location city
 state       | string      | True      | None          | Animal location state
 species_id  | int         | True      | None          | Species foreign key
 gender      | string      | True      | None          | Animal gender: male or female
 size        | string      | True      | None          | Animal size: small, medium or large
 maturity    | string      | False     | None          | Animal maturity: baby, young, adult, elder
 name        | string      | False     | None          | Animal name
 postcode    | string      | False     | None          | Animal location post code
 details     | textField   | False     | None          | Complementary information
 images      |  ?          | False     | None          | Animal photos


 ### - Species
 Fields      | Data Type   | Required  | Default       | Description
| :----------| :-----------| :---------| :-------------| :--------------------------------------------|
 id          | int         | True      | Autoincrement | Species unique identifier
 name        | string      | True      | None          | Species name


 ### - Breed
 Fields      | Data Type   | Required  | Default       | Description
| :----------| :-----------| :---------| :-------------| :--------------------------------------------|
 id          | int         | True      | Autoincrement | Species unique identifier
 name        | string      | True      | None          | Breed name
 species_id  | int         | True      | None          | Species foreign key

## Examples of API Usage
### - List top 3 most recently added animals
### - List all found animals
### - Add new lost animals
### - Change animal location
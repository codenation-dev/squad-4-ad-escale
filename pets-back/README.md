Plataforma web para publicação e busca de animais perdidos, achados ou disponíveis para adoção.


## Database Models
### - Animals
 Fields      | Data Type   | Required  | Default       | Description
| :----------| :-----------| :---------| :-------------| :--------------------------------------------|
 id          | int         | True      | Autoincrement | Animal unique identifier
 inserDate        | datetime    | True      | datetime.now  | Post date
 category    | string      | True      | None          | Animal condition: lost, found or for adoption
 size        | string      | True      | None          | Animal size: small, medium or large
 city        | string      | True      | None          | Animal location city
 species  | string         | True      | None          | Animal specie: cat, dog, fish, bird,rodent
 gender      | string      | True      | None          | Animal gender: male or female
 size        | string      | True      | None          | Animal size: small, medium or large
 name        | string      | False     | None          | Animal name
 detail_text     | textField   | False     | None          | Complementary information
 imageURL      |  string          | False     | None          | Animal photo url


 ### - Users
 Fields      | Data Type   | Required  | Default       | Description
| :----------| :-----------| :---------| :-------------| :--------------------------------------------|
 id          | int         | True      | Autoincrement | Species unique identifier
 name        | string      | False      | None          | User name
 password        | string      | True      | None          | User password
 email        | string      | True      | None          | User mail
 validation_question        | string      | True      | None          | Validation question
 validation_answer        | string     validation_answer True      | None          | Validation answer
 city        | string      | False      | None          | User location city
 phone        | string      | False      | None          | User phone
 

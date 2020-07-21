## Building an ERD 

### Example of ERD box

+------------+
|Coach       |
+------------+
| (PK) ID    |
|  name      |
| experience |
|  salary     |
|            |
|            |
+------------+
     |
    /|\
+------------+
| Player     |
+------------+
| (PK) ID    |
|  name      |
|  salary    |
| jersey num |
|FK coach ID |
|            |
+------------+
    \|/
     |
+------------+
|   game     |
+------------+
| (PK) ID    |
|  name      |
|FK- player id|
|            |
|            |
|            |
+------------+


### Description of your relationship
Coach leads many players. Some players are in the game while others are inactive

### ERD describing the relationship

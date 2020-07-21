## Building an ERD 

### Example of ERD box

+------------+
| Library    |
|(only one   |
|  exist     |
| in the     |
| world)     |
+------------+
|  ID (PK)   |
|inventory_id|
|  employees |
|  name      |
| Location   |
|  Rating    |
|            |
+------------+
      |
+------------+
|Inventory   |
+------------+
|   id(PK)   |
  title      |
  author     |
  description|
  borrowed (boolean)
|customer_id (FK)|
|            |
|            |
|            |
|            |
|            |
+------------+
      |
     /|\
+-----------------+
| Customer        |
+-----------------+
| id   (PK)       |
| names           |
| library_id(FK)  |
|   email         |
|    phone        |
|   adress        |
| borrowed_items  |
+-----------------+
### Description of your relationship


### ERD describing the relationship

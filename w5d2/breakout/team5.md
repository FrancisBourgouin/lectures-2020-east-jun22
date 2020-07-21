## Building an ERD 

We Build A Home

Contractor


### Example of ERD box

+------------+
| Material   |
+------------+
|  ID        |
|  NAME      |
|  PRICE     |--------------
|            |
|            |
|            |
+------------+
+------------+
| Contractor |
+------------+
| ID         |
| NAME       |
| CONTRACT ID|
|            |
|            |
|            |
+------------+

+----------------+
| MATERIALS_LIST |
+----------------+
| ID         |
| NAME       |
| CONTRACT ID|
| MATERIAL_ID |
|            |
|            |
+------------+

+-------------------+
| Contract          |
+-------------------+
| ID                |
| CUSTOMER ID       |
| CONTRACTOR ID     |
| MATERIALS_LIST ID |
|                   |
|                   |
+-------------------+

+------------+
| customer   |
+------------+
|     ID     |
|    NAME    |
|    EMAIL   |
|   ADDRESS  |
|   PHONE    |
|            |
+------------+

### Description of your relationship


### ERD describing the relationship

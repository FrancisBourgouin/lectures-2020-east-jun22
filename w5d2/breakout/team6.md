## Building an ERD 

### Example of ERD box

+------------+
| TITLE HERE |
+------------+
|            |
|            |
|            |
|            |
|            |
|            |
+------------+

### Description of your relationship

A Customer Service Rep (Rep) at a Call center where one Rep has many customers, where in  one instance one customer is talking to one rep only.

### ERD describing the relationship
+------------+
|    rep     |
+------------+
|[PK] id     |
|     name   |
|  department|
|            |
|            |
|            |
+------------+
      |
    / | \
+------------+
| customer   |
+------------+
|  [PK] id   |
|    name    |
|   query    |
|            |
|            |
|[FK] rep_id |
+------------+
-- Primary Key:
  -- A primary key is a field in a table which uniquely identifies each row/record in a database table. Primary keys must contain unique values. A primary key column cannot have NULL values.
-- Foreign Key
  -- A foreign key is a key used to link two tables together. This is sometimes also called as a referencing key.
  -- A Foreign Key is a column or a combination of columns whose values match a Primary Key in a different table.
  -- The relationship between 2 tables matches the Primary Key in one of the tables with a Foreign Key in the second table.
-- TABLE:
CREATE TABLE CUSTOMERS(
   ID   INT              NOT NULL,
   NAME VARCHAR (20)     NOT NULL,
   AGE  INT              NOT NULL,
   ADDRESS  CHAR (25) ,
   SALARY   DECIMAL (18, 2),       
   PRIMARY KEY (ID)
);
CUSTOMERS Table
+----+----------+-----+-----------+----------+
| ID | NAME     | AGE | ADDRESS   | SALARY   |
+----+----------+-----+-----------+----------+
|  1 | Ramesh   |  32 | Ahmedabad |  2000.00 |
|  2 | Khilan   |  25 | Delhi     |  1500.00 |
|  3 | kaushik  |  23 | Kota      |  2000.00 |
|  4 | Chaitali |  25 | Mumbai    |  6500.00 |
|  5 | Hardik   |  27 | Bhopal    |  8500.00 |
|  6 | Komal    |  22 | MP        |  4500.00 |
|  7 | Muffy    |  24 | Indore    | 10000.00 |
+----+----------+-----+-----------+----------+

CREATE TABLE ORDERS (
   ID          INT        NOT NULL,
   DATE        DATETIME, 
   CUSTOMER_ID INT references CUSTOMERS(ID),
   AMOUNT     double,
   PRIMARY KEY (ID)
);
ORDERS Table
+-----+---------------------+-------------+--------+
|OID  | DATE                | CUSTOMER_ID | AMOUNT |
+-----+---------------------+-------------+--------+
| 102 | 2009-10-08 00:00:00 |           3 |   3000 |
| 100 | 2009-10-08 00:00:00 |           3 |   1500 |
| 101 | 2009-11-20 00:00:00 |           2 |   1560 |
| 103 | 2008-05-20 00:00:00 |           4 |   2060 |
+-----+---------------------+-------------+--------+
-- SQl Inner join
  --  The INNER JOIN keyword selects records that have matching values in both tables.

  SELECT ID, NAME, AGE, AMOUNT
   FROM CUSTOMERS INNER JOIN ORDERS
   ON CUSTOMERS.ID = ORDERS.CUSTOMER_ID;

-- The LEFT JOIN keyword returns all records from the left table (CUSTOMERS), and the matching records from the right table (ORDERS). The result is 0 records from the right side, if there is no match.
  SELECT NAME, DATE 
    FROM CUSTOMERS LEFT JOIN ORDERS
    ON  CUSTOMERS.ID = ORDERS.CUSTOMER_ID;
    
-- The RIGHT JOIN keyword returns all records from the right table (ORDERS), and the matching records from the left table (CUSTOMERS). The result is 0 records from the left side, if there is no match.
  SELECT NAME, DATE 
    FROM CUSTOMERS RIGHT JOIN ORDERS
    ON  CUSTOMERS.ID = ORDERS.CUSTOMER_ID;
    
  -- The FULL OUTER JOIN keyword returns all records when there is a match in left (CUSTOMERS) or right (ORDERS) table records.
  SELECT NAME, DATE 
    FROM CUSTOMERS FULL JOIN ORDERS
    ON  CUSTOMERS.ID = ORDERS.CUSTOMER_ID;

    --outer Join is 
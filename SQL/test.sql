/* 1. Show details of the highest paid employee. Display their first and last name,
salary, job id, department name, city, and country name. Do not hard code any values in the WHERE clause */


    SELECT e.first_name||' '||e.last_name AS "First and Last Name", e.salary, e.job_id, d.department_name, l.city, c.country_name
    FROM employees e
    JOIN departments d
    ON e.department_id = d.department_id
    JOIN locations l
    ON d.location_id = l.location_id
    JOIN countries c
    ON l.country_id = c.country_id
    WHERE salary IN (SELECT max(salary) FROM employees);   
    
  
    /* 2. Show any employee who still appears as a consultant. Display the first and last name, job id, salary, and manager id, all from the employees table.
    Sort the result by last name.*/

    SELECT e.first_name||' '||e.last_name AS "First and Last Name", e.job_id AS job_id, e.salary AS Salary, e.MANAGER_ID AS Manager
    FROM employees e
    JOIN consultants c
    ON  e.first_name||' '||e.last_name =  c.first_name||' '||c.last_name
    ORDER BY e.last_name;
    
    /*3. For each customer, display their id, first name, last name, city, and their largest sale, total sales, largest sale as a percentage of total sales,
    average sales amount, and a count of how many sales they have each transacted.
    If they have no sales, show 0 for the aggregated amounts. Sort the result by the customer's id number.*/
     
      SELECT NVL(MAX(s.sales_amt), 0) AS "Largest Sale", c.cust_id, c.cust_fname, c.cust_lname, c.cust_city,
      NVL(SUM(s.sales_amt), 0) AS "Total Sales",
      NVL(AVG(s.sales_amt), 0) AS "Average Sales",
      NVL(COUNT(s.sales_amt), 0) AS "Transacted",
      (MAX(s.sales_amt) / SUM(s.sales_amt)) * 100 AS "Percentage"
         FROM customers c
         JOIN sales s
         ON c.CUST_ID = s.sales_CUST_ID
         GROUP BY c.CUST_ID, c.cust_fname, c.cust_lname, c.cust_city
         ORDER BY c.CUST_ID;
    
    
   /*4. Show the managers who manage entire departments. 
Display the first and last names, department names, addresses, cities, and states. Sort the output by department id.*/

    SELECT e.first_name||' '||e.last_name AS "First and Last Name", d.department_name, l.street_address, l.city, l.state_province
    FROM employees e
    JOIN departments d
    ON e.manager_id = d.manager_id
    JOIN locations l
    ON d.location_id = l.location_id
   WHERE EXISTS (SELECT 'x' 
                FROM employees 
                WHERE manager_id = e.employee_id)
    ORDER BY d.department_id;

        /*5. Show any employee who earns the same or more salary as her/his manager. Show the first name, last name, 
    job id, and salary of the employee, and the first name, last name, job id, and salary of the manager. Use meaningful column aliases throughout.*/    
    
    SELECT first_name, last_name,job_id, salary, Manager_ID, Employee_ID
    FROM employees e1
    WHERE manager_id IS NOT NULL AND e1.salary >= (SELECT salary FROM employees e2 WHERE e1.manager_id = e2.employee_id);
    
        
     /* 6.Find any employee who is now at the same job they had in the past.
        That is, they performed a job, moved on to another job, and are now back at their original job. Show employee id, first name, last name, job id, and salary.
    */
    
    SELECT employee_id, first_name, last_name, e.job_id, salary
    FROM employees e
    WHERE ( employee_id, job_id) IN (SELECT employee_id, job_id FROM job_history);

    /* 7. Show any employee who is not a manager, but earns more than any manager in the employees table. Show first name, last name, job id, and salary.
    Sort the result by salary. */

    SELECT e.first_name, e.last_name, e.job_id, e.salary
    FROM employees e 
    JOIN employees e1
    ON e.manager_id = e1.employee_id
    AND e.salary > e1.salary    
    ORDER BY salary;
    
    
    /* 8. For every geographic region, provide a count of the employees in that region. Display region name, and the count.
    Be sure to include all employees, even if they have not been assigned a department. Sort the result by region name.*/
 
        
    SELECT r.region_name, COUNT(r.region_name)
    FROM employees e
    LEFT JOIN departments d
    ON e.department_id = d.department_id
    JOIN locations l
    ON d.location_id = l.location_id
    JOIN countries c
    ON l.country_id = c.country_id
    JOIN regions r
    ON c.region_id = r.region_id
    GROUP BY region_name
    ORDER BY region_name;
    
        
    /* 9. PART 1: Update Kimberely Grant so that her department matches that of the other sales representatives.
    In the same update statement, change her first name to Kimberly. */
    
        UPDATE employees SET department_id = 80, first_name = 'Kimberely'
        WHERE employee_id = 178;
        
    
    /*PART 2: Employees Stiles and Seo are going to be earning the same pay as employee Ladwig. 
    Write an update statement to change both salaries in one statement, but do not hard-code the new amount. Instead, use a subquery.*/
    
            UPDATE employees set salary =(SELECT salary From employees WHERE last_name='Ladwig')
            WHERE last_name IN ('Stiles', 'Seo');
                 
    /*10. Remove any consultants who are now full-time employees with one delete statement. Do not hard-code any values.*/
    
            DELETE FROM Consultants 
            WHERE first_name = ANY (SELECT e.first_name from employees e JOIN consultants c ON e.email = c.email);

    /*11. The regions are expanding. Americas will now be called North America,
    and Middle East and Africa will now be called Middle East. Write the update statements to change these regions.*/
    
        UPDATE Regions Set Region_name = Case region_id
        WHEN 2 Then 'North America'
        WHEN 4 Then 'Middle EAST'
        END
        WHERE region_id IN (2,4);

    /*12. Add a new row for South America to the Regions table. Add another row for Africa.*/
        INSERT INTO REGIONS VALUES (5, 'South America');
        INSERT INTO REGIONS VALUES (7, 'Africa');
        
    /*13. For each sales representative, show their biggest sale. Display the sales representative's id,
    first and last names, their largest sales amount, the timestamp of the sale, 
    the customer id, and customer last name. Sort the result by the sales rep's id number.*/
            
            
        SELECT e.first_name, e.last_name, MAX(s.sales_amt), c.cust_fname, c.cust_lname  
        FROM sales s
        JOIN customers c
        ON c.cust_id = s.sales_cust_id
        JOIN employees e
        ON e.employee_id = s.sales_rep_id
        ORDER BY e.first_name;        
                

    /*14. Show the commissioned employees whose total pay is above the average total pay of commissioned employees. Total pay is salary added to the product of commission percent multiplied by the total sales for that salesperson.
    Show first name, last name, and total pay. Sort the result by the total pay.*/

    SELECT first_name, lastname, total_pay, salary, 
    FROM
    

    /*15. Sales managers earn a commission on the total sales of all their sales representatives. For each sales manager,
    calculate their total compensation, which is the manager's salary added to the product of the manager's commission percent multiplied by the total sales of the manager's sales representatives. 
    Show the manager's employee id, the manager's last name, and their total compensation. Sort by the managers’ employee id number.*/
        

    /*16. For every customer’s biggest sales amount, show the sales representative’s last name, his or her manager’s last name, the customer’s first and last names,
    customer’s city and country, and the amount of their largest sale. Sort by the salesperson’s last name.*/
                  
      SELECT MAX(s.sales_amt) AS "biggest Sale", e.last_name, m.last_name AS "manager's_lastname", c.cust_fname||' '|| c.cust_lname, c.cust_city, c.cust_country
         FROM customers c
         JOIN sales s
         ON c.CUST_ID = s.sales_CUST_ID
         JOIN employees e
         ON e.employee_id = s.sales_rep_id
         JOIN employees m
         ON m.employee_id = e.manager_id
         GROUP BY c.cust_fname, c.cust_lname, c.cust_city,  c.cust_country, e.last_name, m.last_name
         ORDER BY e.last_name; 
         

    
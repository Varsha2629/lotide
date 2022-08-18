--Practice Joining Tables
/*Lesson 13c*/

/* 1) Produce a query that shows addresses of all the departments. Show
      department name, location id, street address, city, and state or province. 
      Use NATURAL JOIN to produce your output.*/
SELECT  department_name,department_id,Street_address, state_province, location_id, city
    FROM departments NATURAL JOIN locations;

/* 2) Produce a report showing employees who work in Toronto. Display first and 
      last name, job, department number, department name, and city. 
      Produce your results with JOIN USING.*/
SELECT first_name, last_name, job_id, department_id, department_name, city
    FROM employees JOIN departments
    USING (department_id)
    JOIN locations
    USING (location_id)
    WHERE city = 'Toronto';    


/* 3) Display employee number, last name, manager's number and last name.
      Label the columns Emp#, Employee, Mgr#, Manager. Show all employees, even
      if they have no manager. Sort the result by employee's id number. */
SELECT e.EMPLOYEE_ID AS EMP#,e.last_name AS Employee,m.MANAGER_ID AS MGR#,m.last_name AS Manager
        FROM employees e  JOIN employees m
        ON e.manager_id = m.employee_id
        ORDER BY 1;
    


/* 4) For every department name, show the name of the country where the department
      is located. Show all countries even if the have no departments. */ 
 SELECT d.department_name, c.country_name
    FROM departments d JOIN locations l
    USING (location_id)
    RIGHT OUTER JOIN countries c
    USING (country_id);
 
        
      
/* 5) Create a report showing employee first and last name, department number, 
      and first and last names of their department colleagues. Do not display 
      the same employee twice in any row. Label the columns appropriately to 
      clarify the results. Order the results by employee id, even
      though it is not displayed.*/
SELECT e.first_name || ' ' || e.last_name AS "Employee Name",
    e.department_id,
    c.first_name || ' ' || c.last_name AS "Colleague Name"
    FROM Employees e
    JOIN Employees c
    ON e.department_id = c.department_id
    AND e.employee_id <> c.employee_id
    ORDER BY e.employee_id;

      
      
/* 6) Display last name, job, department name, salary, and salary grade level
      for all employees, even if the employee is not assigned to a department.
      Order the result by department name, job, and last name.*/ 
SELECT last_name, job_id, department_name, salary, grade_level
    FROM employees
    LEFT OUTER JOIN departments
    USING (department_id)
    JOIN sal_grades
    ON salary BETWEEN lowest_sal AND highest_sal
    ORDER BY 3, 2, 1;      
      
        
/* 7) Write a query that displays employees who have had different jobs. Show
      employee number, first and last name, hire date, previous job, previous 
      job end date, and current job. Use appropriate column aliases to clarify 
      the results. Order the result by employee id and end date. */
SELECT employee_id, first_name, last_name, hire_date,  j.job_id AS previous_job,  j.end_date, e.job_id      
    FROM employees e JOIN job_history j
    USING (employee_id)
    ORDER BY 1,6;
      
/* 8) Find the first and last names and hire dates of all employees who were 
      hired before their bosses. Also display the boss's last name 
      and hire date. Be sure to use apprpriate column aliases where needed. */
      
    
        
  
/* 9) For every country name, show how many departments are located in that country.
       Use a column alias to clarify the meaning of the numbers.*/
       

         
--------- CUST SALES Tables ----------------------

/* 10)For every sale, show the id, first and last names, email, and phone of the customer, 
      the first and last names of the sales representative, and the sales amount. 
      Order the result by customer id and sales amount.*/
   
    
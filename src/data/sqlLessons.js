const SQL_LESSONS = [
  {
    slug: 'select', title: 'SELECT', description: 'Choose which columns to return from a table.',
    explanation: 'SELECT is the starting point for most queries. It tells SQLite which columns you want to see. Use an asterisk (*) to return every column, or name only the fields that matter.',
    example: 'SELECT name, salary FROM employees;',
    tip: 'Selecting only the columns you need makes results easier to read.',
  },
  {
    slug: 'where', title: 'WHERE', description: 'Filter rows using a condition.',
    explanation: 'WHERE narrows a result to rows that match a condition. Text values use single quotes, while numbers can be written directly. Combine conditions with AND or OR.',
    example: "SELECT * FROM employees WHERE department = 'Engineering';",
    tip: 'A query without WHERE can affect every row when used with UPDATE or DELETE.',
  },
  {
    slug: 'order-by', title: 'ORDER BY', description: 'Sort results in ascending or descending order.',
    explanation: 'ORDER BY controls the order of returned rows. ASC is the default; use DESC when you want the largest, newest, or highest value first.',
    example: 'SELECT * FROM employees ORDER BY salary DESC;',
    tip: 'You can sort by more than one column: ORDER BY department, salary DESC.',
  },
  {
    slug: 'limit', title: 'LIMIT', description: 'Keep only a certain number of rows.',
    explanation: 'LIMIT is useful when you only need the first few results. Pair it with ORDER BY to reliably ask for things such as the three highest salaries.',
    example: 'SELECT name, salary FROM employees ORDER BY salary DESC LIMIT 3;',
    tip: 'LIMIT is especially useful for previews and pagination.',
  },
  {
    slug: 'group-by', title: 'GROUP BY', description: 'Summarize rows with aggregate functions.',
    explanation: 'GROUP BY gathers rows that share a value so you can summarize each group. COUNT, SUM, AVG, MIN, and MAX are common aggregate functions.',
    example: 'SELECT department, COUNT(*) AS people FROM employees GROUP BY department;',
    tip: 'Every selected column must be grouped or calculated with an aggregate.',
  },
  {
    slug: 'having', title: 'HAVING', description: 'Filter grouped results after aggregation.',
    explanation: 'HAVING is like WHERE for groups. Use WHERE to filter individual rows before grouping, and HAVING to filter the summaries created by GROUP BY.',
    example: 'SELECT department, AVG(salary) AS average_salary FROM employees GROUP BY department HAVING average_salary > 70000;',
    tip: 'Use HAVING with aggregate expressions such as COUNT(*) or AVG(salary).',
  },
  {
    slug: 'join', title: 'JOIN', description: 'Combine related data from multiple tables.',
    explanation: 'JOIN connects rows from two tables through related columns. An INNER JOIN keeps only matching rows; LEFT JOIN also keeps rows from the table on the left.',
    example: 'SELECT e.name, d.floor FROM employees e JOIN departments d ON e.department = d.name;',
    tip: 'Short aliases like e and d make multi-table queries easier to read.',
  },
  {
    slug: 'insert', title: 'INSERT', description: 'Add a new row to a table.',
    explanation: 'INSERT INTO adds new data. List the destination columns explicitly so the statement stays correct if the table gains another column later.',
    example: "INSERT INTO employees (name, department, salary) VALUES ('Mina', 'Design', 68000);",
    tip: 'The values must be in the same order as the columns you list.',
  },
  {
    slug: 'update', title: 'UPDATE', description: 'Change values in existing rows.',
    explanation: 'UPDATE changes data that is already stored. Always write a WHERE clause unless you truly intend to change every row in the table.',
    example: "UPDATE employees SET salary = 70000 WHERE name = 'Bea';",
    tip: 'Run the matching SELECT first to check which rows will change.',
  },
];

export default SQL_LESSONS;

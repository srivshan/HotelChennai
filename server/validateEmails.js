const mysql = require('mysql2');

// Database connection configuration
const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: 'SriMysql45#',
  database: 'server'
};

// Static array with email validation results
const validationResults = [
  {
    address: 'sri@gmail.com',
    status: 'invalid',
    sub_status: 'possible_typo',
    free_email: false,
    did_you_mean: 'abc@gmail.com',
    account: 'abc',
    domain: 'gmail1.com',
    domain_age_days: null,
    smtp_provider: '',
    mx_found: 'false',
    mx_record: null,
    firstname: null,
    lastname: null,
    gender: null,
    country: null,
    region: null,
    city: null,
    zipcode: null,
    processed_at: '2024-06-18 15:41:54.892'
  },
  {
    address: 'sa1@gmail.com',
    status: 'invalid',
    sub_status: 'failed_syntax_check',
    free_email: false,
    did_you_mean: null,
    account: '',
    domain: '',
    domain_age_days: '',
    smtp_provider: '',
    mx_found: 'false',
    mx_record: null,
    firstname: '',
    lastname: '',
    gender: '',
    country: null,
    region: null,
    city: null,
    zipcode: null,
    processed_at: '2024-06-18 15:41:54.892'
  }
];

// Function to fetch email addresses from the database
async function fetchEmails() {
  const connection = mysql.createConnection(dbConfig);
  const query = 'SELECT id, email FROM users';

  return new Promise((resolve, reject) => {
    connection.query(query, (error, results) => {
      connection.end();
      if (error) {
        return reject(error);
      }
      resolve(results);
      console.log(results);
    });
  });
}

// Function to remove invalid emails from the database
async function removeInvalidEmails(invalidEmails) {
  const connection = mysql.createConnection(dbConfig);
  connection.connect();

  for (const email of invalidEmails) {
    const cleanedEmail = email.trim().toLowerCase(); // Trim and lower case
    const query = `DELETE FROM users WHERE LOWER(TRIM(email)) = ?`;
    
    console.log(`Executing query: ${query} with email: ${cleanedEmail}`);

    try {

      const [results] = await connection.promise().query(query, [cleanedEmail]);
      console.log(`Deleted ${results.affectedRows} rows for email: ${cleanedEmail}`);
    } catch (error) {
      console.error('Error executing query:', error);
    }
  }

  connection.end();
}

// Main function to run the validation and cleanup process
async function main() {
  try {
    const emails = await fetchEmails();
    const invalidEmails = validationResults
      .filter(result => result.status !== 'valid')
      .map(result => result.address);

    if (invalidEmails.length > 0) {
      await removeInvalidEmails(invalidEmails);
      console.log(`Removed ${invalidEmails.length} invalid emails.`);
    } else {
      console.log('No invalid emails found.');
    }
  } catch (error) {
    console.error('An error occurred:', error.message);
  }
}

main();

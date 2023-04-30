//-- Adding an object containing a single method called format_date--//
//-- The method takes a date parameter and returns a formatted string in the format "MM/DD/YYYY"--//
module.exports = {
  format_date: (date) => { // Format date information to MM/DD/YYYY
    return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(date).getFullYear()}`;
  },
};

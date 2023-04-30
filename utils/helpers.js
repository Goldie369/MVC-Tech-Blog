module.exports = {
  format_date: (date) => { // Format date information to MM/DD/YYYY
    return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(date).getFullYear()}`;
  },
};

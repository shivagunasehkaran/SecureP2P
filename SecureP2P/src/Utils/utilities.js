export function ConvertDate(date) {
    // json date to actual date
    let newDate = new Date(date)
    let dateString = newDate.toString();
    // get the actual date
    return dateString.substring(4, 15);
};
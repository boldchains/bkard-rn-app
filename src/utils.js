// import config from '../appConfig';
export const offsetInHours = new Date().getTimezoneOffset() / 60;

export class timeWork {
  constructor(dateString) {
    this.dateString = dateString;
  }

  reformatTime = () => {
    const stringArr = this.dateString.split(' ');
    const firstPart = stringArr[0].replace(/:/g, '/');
    this.dateString = `${firstPart} ${stringArr[1]}`;
    return this;
  };

  timeAgo = () => {
    const date = new Date(this.dateString);
    const presentDate = new Date();
    var now_utc = new Date(
      Date.UTC(
        presentDate.getUTCFullYear(),
        presentDate.getUTCMonth(),
        presentDate.getUTCDate(),
        presentDate.getUTCHours(),
        presentDate.getUTCMinutes(),
        presentDate.getUTCSeconds(),
      ),
    );
    let seconds = Math.floor(
      (now_utc - date.valueOf() + offsetInHours * 1000 * 3600) / 1000,
    );

    let unit = 'sec';
    let direction = 'ago';
    if (seconds < 0) {
      seconds = -seconds;
      direction = 'just now';
    }
    let value = seconds;
    if (seconds >= 31536000) {
      value = Math.floor(seconds / 31536000);
      unit = 'year';
    } else if (seconds >= 86400) {
      value = Math.floor(seconds / 86400);
      unit = 'day';
    } else if (seconds >= 3600) {
      value = Math.floor(seconds / 3600);
      unit = 'hr';
    } else if (seconds >= 60) {
      value = Math.floor(seconds / 60);
      unit = 'min';
    }
    if (value !== 1) {
      unit = unit + 's';
    }
    this.dateString = value + ' ' + unit + ' ' + direction;
    return this;
  };
}

export const validateEmail = (email) =>
  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);

export const formatPresentDate = () => {
  const dateObj = new Date();
  const padDateValue = (value) => ('0' + value).slice(-2);
  let formattedDate = `${dateObj.getUTCFullYear()}:${padDateValue(
    dateObj.getUTCMonth() + 1,
  )}:${padDateValue(dateObj.getUTCDate())} ${padDateValue(
    dateObj.getUTCHours(),
  )}:${padDateValue(dateObj.getUTCMinutes())}:${padDateValue(
    dateObj.getUTCSeconds(),
  )}`;
  return formattedDate;
};

export const unixToDate = (unix_timestamp) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const dateObj = new Date(unix_timestamp * 1000);
  let formattedDate = `${
    months[dateObj.getMonth()]
  } ${dateObj.getDate()}, ${dateObj.getFullYear()}`;
  return formattedDate;
};

export const validatePassword = (password) => {
  const miniumEight = password.trim().length >= 8;
  const atLeastOneCapital = /(?=.*[A-Z])/.test(password);
  const atLeastOneDigit = /(?=.*\d)/.test(password);
  const atLeastOneSpecialCharacter = /(?=.*[^A-Za-z0-9])/.test(password);

  return (
    miniumEight &&
    atLeastOneCapital &&
    atLeastOneDigit &&
    atLeastOneSpecialCharacter
  );
};

export const dateToUnix = (date) => {
  return new Date(date).getTime() / 1000;
};

export const pushToCsv = (csv, newItem) => {
  const csvarray = csv.trim() === '' ? [] : csv.split(',');
  csvarray.push(newItem);
  return String(csvarray);
};

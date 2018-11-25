// function isEmpty(value) {
//   return (
//     value === undefined ||
//     value === null ||
//     (typeof value === "object" && Object.keys(value).length === 0) || //empty object
//     (typeof value === "string" && value.trim().length === 0) //empty string
//   );
// }

const isEmpty = value =>
  value === undefined ||
  value === null ||
  (typeof value === "object" && Object.keys(value).length === 0) || //empty object
  (typeof value === "string" && value.trim().length === 0); //empty string

module.exports = isEmpty;

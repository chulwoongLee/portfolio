import axios from "axios";
export function fncSendSlack(title) {
  
}
export function lpad(text, length, addText) {
    let retVal = "" + text;
    if (retVal.length <= length) {
        for (let i = retVal.length; i < length; i++) {
            retVal = addText + retVal;
        }
    }
    return retVal;
}
export function formatDate(date) {
    if (date === undefined || date === null) {
        return "";
    }
    else {
        let retVal = date;
        return retVal.getFullYear() + "-" + lpad(retVal.getMonth() + 1, 2, "0") + "-" + lpad(retVal.getDate(), 2, "0");
    }
}
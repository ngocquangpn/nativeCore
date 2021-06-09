import moment from "moment";
import ObjectManager from "../../framework/ObjectManager";

class DateTime {
    _strFormat = {
        "-dmy": "DD-MM-YYYY",
        "-ymd": "YYYY-MM-DD",
        "/dmy": "DD/MM/YYYY",
        "/ymd": "YYYY/MM/DD",

        "-dmy Hms": "DD-MM-YYYY HH:mm:ss",
        "-ymd Hms": "YYYY-MM-DD HH:mm:ss",
        "/dmy Hms": "DD/MM/YYYY HH:mm:ss",
        "/ymd Hms": "YYYY/MM/DD HH:mm:ss",

        "-dmy hms": "DD-MM-YYYY hh:mm:ss",
        "-ymd hms": "YYYY-MM-DD hh:mm:ss",
        "/dmy hms": "DD/MM/YYYY hh:mm:ss",
        "/ymd hms": "YYYY/MM/DD hh:mm:ss",
    };

    /**
     *
     * @param input
     * @param inFormat
     * @param outFormat
     * @returns {string}
     */
    format = (input, inFormat = "-ymd", outFormat = "/dmy") => {
        try {
            if (typeof (input) !== "string") {
                return "Invalid date";
            }

            if (input === "") {
                return "--/--/----";
            }

            if(!this._strFormat.hasOwnProperty(inFormat) || !this._strFormat.hasOwnProperty(outFormat)) {
                return "Invalid date format";
            }

            return moment(input, this._strFormat[inFormat]).format(this._strFormat[outFormat]);

        } catch (e) {
            return "--/--/----";
        }
    };

    /**
     *
     * @param input
     * @param inFormat
     * @returns {string|boolean}
     */
    isExpired = (input, inFormat = "-ymd") => {
        if(typeof (input) !== "string") {
            return false;
        }
        if(input === "") {
            return false;
        }

        if(!this._strFormat.hasOwnProperty(inFormat)) {
            return "Invalid format date";
        }

        input = moment(input, this._strFormat[inFormat]);
        input.set("hours", 23);
        input.set("minutes", 59);
        input.set("seconds", 59);
        let now = moment();
        now.set("hours", 0);
        now.set("minutes", 0);
        now.set("seconds", 0);

        return input.diff(now) < 0;
    };

    /**
     *
     * @param created
     * @returns {string}
     */
    convertTimeCreated = (created) => {
        created = moment(created);
        let now = moment();
        let diff = now.diff(created);

        let diffYears = diff / 1000 / 60 / 60 / 24 / 30 / 12;
        if (diffYears > 1) {
            return Math.floor(diffYears) + ` year${diffYears >= 2 ? "s" : ""}`;
        }

        let diffMonths = diffYears * 12;
        if (diffMonths > 1) {
            return Math.floor(diffMonths) + ` month${diffMonths >= 2 ? "s" : ""}`;
        }

        let diffDays = diffMonths * 30;
        if (diffDays > 1) {
            return Math.floor(diffDays) + ` day${diffDays >= 2 ? "s" : ""}`;
        }

        let diffHours = diffDays * 24;
        if (diffHours > 1) {
            return Math.floor(diffHours) + ` hour${diffHours >= 2 ? "s" : ""}`;
        }

        return "a few minutes ago";
    }
}

export default ObjectManager.get(DateTime);

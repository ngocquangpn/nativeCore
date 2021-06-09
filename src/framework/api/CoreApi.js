import {Alert}          from "react-native";
import axios            from 'axios';
import Config           from "../../config";
import ListErrorMessage from "./list_error/list_error.json";
import _                from 'lodash';

let isUserExpired = false;

export default class CoreApi {

    somethingsWrong = {
        error_code: "ERROR???",
        error_message: "Lỗi không xác định. Vui lòng liên hệ bộ phận kĩ thuật (1)"
    };

    _defaultHeaders = {
        "Content-Type": "application/json"
    };

    displayError(dataError) {
        try {
            let errorCode = dataError.error_code;
            let errorMessage = "";
            if (_.isString(errorCode)) {
                let error = ListErrorMessage.find(dt => dt.error_code === errorCode);
                if (error) {
                    errorMessage = error.description;
                } else {
                    errorMessage = errorCode + " - " + _.toString(dataError.error_message);
                    errorMessage = `${errorMessage}\r\nDanh sách lỗi cập nhật đến ngày 16/03/2021`;
                }
            } else {
                errorMessage = _.toString(dataError.error_message);
                errorMessage = `${errorMessage}\r\nDanh sách lỗi cập nhật đến ngày 16/03/2021`;
            }

            Alert.alert('Có lỗi xảy ra', errorMessage);

        } catch (e) {
            Alert.alert('Có lỗi xảy ra. Vui lòng liên hệ bộ phận kĩ thuật (2)', _.toString(e));
        }
    }

    /**
     * Get Auth token
     * @returns {*}
     */
    getToken() {
        const store = require("../../view/store/store").default;
        const state = store.getState();
        return state?.user?.authToken ?? '';
    }

    /**
     *
     * @param options
     * @returns {{Authorization: string, "Content-Type": string}}
     */
    getHeadersRequest(options = {}) {

        return {
            ...this._defaultHeaders,
            "Authorization": `Bearer ${this.getToken()}`,
            ...(options.headers ?? {})
        };
    }

    /**
     * Get Base URL
     * @returns {string}
     */
    getBaseUrl() {
        return Config.NETWORK_CONFIG.BASE_URL;
    }

    handleResult(resolve, result, options = {}) {
        let data;
        if (options.getHeaders) {
            data = {
                headers: result.headers,
                data: result.data
            };
        } else {
            data = result.data;
        }
        resolve(data);
    }

    handleError(reject, error, options) {
        const dataError = error?.response?.data ?? this.somethingsWrong;
        if (["AUTH3001.NotAuthenticated", "AUTH4001.NotAuthenticated"].includes(dataError?.error_code)) {
            if (!isUserExpired) {
                isUserExpired = true;
                const UserService = require("../../service/UserService").default;
                Alert.alert("Phiên đăng nhập hết hạn", "Vui lòng đăng nhập lại",
                    [{text: "OK", onPress: () => UserService.logOut()}],
                    {cancelable: false}
                );
            }
        } else {
            if (!options.noDisplayError) {
                this.displayError(dataError);
            }
        }
        reject(dataError);
    }


    /**
     * Method GET
     * @param url
     * @param params
     * @param options
     * @returns {Promise<unknown>}
     */
    get(url, params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            axios.get(url, {
                params: params,
                headers: this.getHeadersRequest()
            })
                .then(result => this.handleResult(resolve, result, options))
                .catch(error => this.handleError(reject, error, options));
        });
    }

    /**
     * Method POST
     * @param url
     * @param data
     * @param options
     * @returns {Promise<unknown>}
     */
    post(url, data = {}, options = {}) {
        return new Promise((resolve, reject) => {
            axios.post(url, data, {
                headers: this.getHeadersRequest()
            })
                .then(result => this.handleResult(resolve, result, options))
                .catch(error => this.handleError(reject, error, options));
        });
    }

    /**
     * Method PUT
     * @param url
     * @param data
     * @param options
     * @returns {Promise<unknown>}
     */
    put(url, data = {}, options = {}) {
        return new Promise((resolve, reject) => {
            axios.put(url, data, {
                headers: this.getHeadersRequest()
            })
                .then(result => this.handleResult(resolve, result, options))
                .catch(error => this.handleError(reject, error, options));
        });
    }

    /**
     * Method PATCH
     * @param url
     * @param data
     * @param options
     * @returns {Promise<unknown>}
     */
    patch(url, data = {}, options = {}) {
        return new Promise((resolve, reject) => {
            axios.patch(url, data, {
                headers: this.getHeadersRequest()
            })
                .then(result => this.handleResult(resolve, result, options))
                .catch(error => this.handleError(reject, error, options));
        });
    }

    /**
     * Method DELETE
     * @param url
     * @param params
     * @param options
     * @returns {Promise<unknown>}
     */
    delete(url, params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            axios.delete(url, {
                headers: this.getHeadersRequest(),
                params: params
            })
                .then(result => this.handleResult(resolve, result, options))
                .catch(error => this.handleError(reject, error, options));
        });
    }
}

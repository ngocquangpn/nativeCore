import Framework from "../../framework/Framework";

/**
 *
 */
class ApiUser extends Framework.CoreApi {
    static className = 'ApiUser';

    login_url = "/auth"

    /**
     *
     * @param username
     * @param password
     * @returns {*}
     */
    login(username, password) {

        const url = this.getBaseUrl() + this.login_url;

        const data = {username, password};

        return this.post(url, data);
    }
}

export default Framework.ApiFactory.get(ApiUser);

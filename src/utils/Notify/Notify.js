import notifee, {EventType} from "@notifee/react-native";

class Notify {
    constructor() {
        this.channelId = null;

        notifee.onForegroundEvent(({type, detail}) => {
            const {notification} = detail;

            switch (type) {
                case EventType.PRESS:
                    if (notification?.id === "BLE_OFF") {
                        // pass
                    }
                    break;
                default:
                    break;
            }
        });

        notifee.onBackgroundEvent(async ({type, detail}) => {

            const {notification, pressAction} = detail;
            //
            // if (type === EventType.ACTION_PRESS) {
            //     console.log("cc");
            // }

        });
    }

    async initial() {
        this.channelId = await notifee.createChannel({
            id: "default",
            name: "Default Channel"
        });
    }

    async show(title, message, options = {}) {
        if (!this.channelId) {
            await this.initial();
        }

        let data = {
            title,
            body: message,
            android: {
                channelId: this.channelId,
                smallIcon: "ic_launcher"
            }
        };

        if (options.id) {
            data.id = options.id;
        }

        await notifee.displayNotification(data);
    }
}

export default new Notify();

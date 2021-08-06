export default {
    methods: {
        randomString(len) {
            const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
            let str = '';
            for (let i = 0; i < len; i++) {
                str += chars[Math.floor(Math.random() * chars.length)];
            }
            return str;
        }
    }
}
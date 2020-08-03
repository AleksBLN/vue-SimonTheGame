module.exports = {
    css: {
        loaderOptions: {
            scss: {
                additionalData: `@import "~@/assets/variables.scss";`
            }
        }
    },
    publicPath: process.env.NODE_ENV === 'production'
        ? '/vue-SimonTheGame/'
        : '/'
}
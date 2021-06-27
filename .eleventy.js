module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy('./source/assets/images')
    eleventyConfig.addPassthroughCopy('./source/assets/icons')

    return {
        dir : {
            input : 'source',
            output : 'public'
        }
    }

}
module.exports = function(eleventyConfig) {
    
    eleventyConfig.addPassthroughCopy('./source/_assets/images')
    eleventyConfig.addPassthroughCopy('./source/_assets/icons')

    return {
        dir : {
            input : 'source',
            output : 'public'
        }
    }

}
const generateMessages = (username , text) =>{
    return {
        text ,
        username,
        createdAt: new Date().getTime()
    }
}

const generateLocationMessages = (username , url) =>{
    return {
        username,
        url ,
        createdAt: new Date().getTime()
    }
}

module.exports = {
    generateMessages,
    generateLocationMessages
}
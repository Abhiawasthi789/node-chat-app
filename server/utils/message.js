var generateMessage = (from,text)=>{
    return {
        from,
        text,
        cretaedAt : new Date().getTime()
    };
};

module.exports = {generateMessage};
const luis = require('./luis_config');
const qna_maker = require('./qna_maker_config');

//Threshold confidence % to be used for selecting response
const config = {
    "PRECISE_THRESHOLD" : 0.15,
    "RELATED_THRESHOLD" : 0.30,
    "CONFIDENCE_THRESHOLD" : 0.40,
    "CONFIRMATION_LUIS_HELPER_URL":'xxxx'
};

module.exports = {
    luis: luis,
    qna_maker:qna_maker,
    config: config
}

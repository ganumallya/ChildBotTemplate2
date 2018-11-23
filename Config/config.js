const luis = require('./luis_config');
const hr_qna_maker = require('./hr_qna_maker_config');
const smalltalk_qna_maker =require('./smalltalks_qna_maker_config');

//Threshold confidence % to be used for selecting response
const config = {
    "PRECISE_THRESHOLD" : 0.15,
    "RELATED_THRESHOLD" : 0.30,
    "CONFIDENCE_THRESHOLD" : 0.40,
    "CONFIRMATION_LUIS_HELPER_URL":'xxxx'
};

module.exports = {
    luis: luis,
    hr_qna_maker:hr_qna_maker,
    smalltalk_qna_maker:smalltalk_qna_maker,
    config: config
}

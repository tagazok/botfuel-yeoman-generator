const { <%= extractorType %>Extractor } = require('botfuel-dialog');

class <%= extractorName %>Extractor extends <%= extractorType %>Extractor {}

<%= extractorName %>.params = {
  dimensions: [],
};

module.exports = <%= extractorName %>Extractor;

const { <%= promptType %>Dialog } = require('botfuel-dialog');

class <%= dialogName %>Dialog extends <%= promptType %>Dialog {}

Name.params = {
  namespace: '<%= namespace %>',
  entities: 
    <%- entities %>
  ,
};

module.exports = <%= dialogName %>Dialog;


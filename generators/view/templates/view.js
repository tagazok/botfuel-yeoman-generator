const { View, BotTextMessage } = require('botfuel-dialog');

class <%= viewName %>View extends View {
  render() {
    return [
      new BotTextMessage('Hello human!'),
    ];
  }
}

module.exports = <%= viewName %>View;

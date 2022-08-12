const { workspace } = require('vscode')
const { LanguageClient } = require('vscode-languageclient')

module.exports = {
  activate(context) {
    const executable = {
      command: workspace.getConfiguration('hare').get('languageServer'),
    }

    const serverOptions = {
      run: executable,
      debug: executable,
    }

    const clientOptions = {
      documentSelector: [{
        scheme: 'file',
        language: 'hare',
      }],
    }

    const client = new LanguageClient(
      'hare',
      'Hare',
      serverOptions,
      clientOptions
    )

    context.subscriptions.push(client.start())
  },
}

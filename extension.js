const vscode = require("vscode");
const fs = require("fs");
const snippets = require("./snippets/snippets.json");
const TemplateCogCode = require("./snippets/TemplateCog.json");

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  console.log('Pythond DiscordAPI VSCode Extension" is now active!');

  var createBot = vscode.commands.registerCommand(
    "pythondiscordapivscodeextension.createbot",
    function () {
      vscode.window.showInformationMessage("Creating Bot Files Now...");
      if (vscode.workspace.workspaceFolders == undefined) {
        vscode.window.showWarningMessage("You do not have a workspace open!");
        return;
      }

      const folder = vscode.workspace.workspaceFolders[0].uri.fsPath;
      vscode.window
        .showInputBox({ prompt: "Bot Name: ", placeHolder: "(DemonicBot)" })
        .then((BotName) => {
          if (!BotName) {
            vscode.window.showErrorMessage("Failed to give a valid input.");
            return;
          }
          fs.stat(folder + `/${BotName}`, function (err, stat) {
            if (err == null) {
              if (stat.isDirectory()) {
                fs.readdir(folder + `/${BotName}`, function (err, files) {
                  if (files.length == 0) {
                    vscode.window.showInformationMessage(
                      `Found folder called ${BotName}. attempting to add files.`,
                    );
                  } else {
                    vscode.window.showErrorMessage(
                      `${BotName} is already a folder with content. Remove content to continue.`,
                    );
                    return;
                  }
                });
              }
            } else if (err.code == "ENOENT") {
              vscode.window.showInformationMessage(
                `Creating Folder Named ${BotName}`,
              );
              fs.mkdir(folder + `/${BotName}`, function (err) {
                if (err != null) {
                  vscode.window.showErrorMessage(
                    `Error Creating Folder named ${BotName} - ${err.code}`,
                  );
                  return;
                }
              });
            } else {
              //console.log('Error While Checking Folder: ', err.code);
              vscode.window.showErrorMessage(`Error Generated - ${err.code}`);
              return;
            }
            const subfolder = folder + `/${BotName}`; //Bot Folder
            const main = snippets["Main Bot File"].body.join("\n"); //MAIN CODE
            //console.log(main);
            fs.writeFile(subfolder + `/main.py`, main, () => {}); //Main File
            fs.writeFile(
              subfolder + `/TOKEN.key`,
              "REPLACE THIS WITH API TOKEN",
              () => {},
            ); //Token File
            fs.mkdirSync(subfolder + `/cogs`); //COGS FOLDER
            const cogfolder = subfolder + `/cogs`; //COGS FOLDER LOCATION
            //var Templatecog = snippets["Cog Template file"].body.join('\n');//Cog Template Code
            fs.writeFile(
              cogfolder + `/Template.py`,
              TemplateCogCode["main cog"].join("\n"),
              () => {},
            ); //COG TEMPLATE FILE
            console.log(`${BotName} Created `); //FINISHED OUTPUT
            vscode.window.showInformationMessage(
              `${BotName} has been created.`,
            );
          });
        });
    },
  );

  context.subscriptions.push(createBot);
}
// this method is called when your extension is deactivated
function deactivate() {
  vscode.window.showInformationMessage(`Thank you for using my extension!`);
}

module.exports = {
  activate,
  deactivate,
};

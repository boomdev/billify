const { app, BrowserWindow } = require('electron');

if (require('electron-squirrel-startup')) return app.quit();

const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 1000,
    height: 950,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });
  // win.maximize();
  win.loadFile('index.html');
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});

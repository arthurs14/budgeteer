const { app, BrowserWindow } = require('electron');

let win;

function createWindow() {
  // create the browser window
  win = new BrowserWindow({
    width: 800,
    height: 600
  });

  // and load the index.html of the app
  //win.loadFile('index.html');
  win.loadURL('http://localhost:3000/');

  //win.webContents.openDevTools();
  win.on('close', () => win = null);
}

app.on('ready', createWindow);

app.on('window-all-closed', () => app.quit());

app.on('activate', () => {
  if(win = null) {
    createWindow();
  }
})

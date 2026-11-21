const { app, BrowserWindow, Menu, ipcMain, shell } = require('electron');
const path = require('path');
const fs = require('fs');

function createWindow() {
  const win = new BrowserWindow({
    width: 1280, height: 820, minWidth: 1000, minHeight: 640,
    title: '2307 Ledger', backgroundColor: '#10302b',
    webPreferences: { contextIsolation: true, preload: path.join(__dirname, 'preload.js') }
  });
  Menu.setApplicationMenu(null);
  win.loadFile(path.join(__dirname, 'src', 'index.html'));
}

// Print = make a PDF of what is on screen and open it in the default PDF viewer (gives a real print preview)
ipcMain.handle('print-preview', async (e) => {
  const data = await e.sender.printToPDF({ printBackground: true, preferCSSPageSize: true });
  const file = path.join(app.getPath('temp'), `2307-print-${Date.now()}.pdf`);
  fs.writeFileSync(file, data);
  const err = await shell.openPath(file);
  return err || 'ok';
});

app.whenReady().then(createWindow);
app.on('window-all-closed', () => app.quit());

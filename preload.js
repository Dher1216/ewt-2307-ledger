const { contextBridge, ipcRenderer } = require('electron');
contextBridge.exposeInMainWorld('desk', { printPreview: () => ipcRenderer.invoke('print-preview') });

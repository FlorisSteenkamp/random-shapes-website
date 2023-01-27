import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './app.js';

import { dummy } from './main/global-debug.js';

const dummy_ = dummy;  // <- needed


(function runApp() {
    const container = document.getElementById('app');
    const root = createRoot(container!);
    root.render(<App />);
})();

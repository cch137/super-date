# Super Date

Extend the native JavaScript Date class to provide additional useful functionality.

# Quick Start

The module is exported as an initialization function that needs to be executed when importing SuperDate.

```
const SuperDate = require('@cch137/super-date')();

// declear a SuperDate
const x = new SuperDate();
// or
const y = new Date();

// "x" and "y" are both SuperDate objects.
// You can declare SuperDate according to your preference.

// Additional declaration methods:
const z1 = Date.$();
const z2 = SuperDate.$();

```

If you prefer SuperDate to be a standalone class instead of replacing Date, you can set the parameter during the initialization of SuperDate.

```
const SuperDate = require('@cch137/super-date')(false);
```

# Export SuperDate to frontend

You can export your SuperDate code for use in the frontend using the following methods. You can also set parameters to decide whether to export the code in minimized form.

1.  Export Script

```
const exporter = require('@cch137/super-date');
exporter.script('super-date.js');
```

2.  Export Module

```
const exporter = require('@cch137/super-date');
exporter.module('super-date.js');
```

# More Info

If your code editor is capable of parsing JS DOC, the auto-complete feature of your code editor will display the available methods of the SuperDate object, allowing you to easily see what SuperDate adds to the native Date object.

To gain a comprehensive understanding of each function’s usage, it is recommended to read the JS DOC in the source code. :)
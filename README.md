# Super Date

Extend the native JavaScript Date class to provide additional useful functionality.

# Quick Start

The module is exported as an initialization function that needs to be executed when importing SuperDate.

```
const SpDate = require('@cch137/super-date')();

// declear a SuperDate
const x = new SpDate();
// or
const y = new Date();
// "x" and "y" are both SuperDate objects, depending on how you choose to declare them.

```

If you prefer SuperDate to be a standalone class instead of replacing Date, you can set the parameter during the initialization of SuperDate.

```
const SuperDate = require('@cch137/super-date')(false);
```


# More Info

If your code editor is capable of parsing JS DOC, the auto-complete feature of your code editor will display the available methods of the Super Date object, allowing you to easily see what Super Date adds to the native Date object.

To gain a comprehensive understanding of each function's usage, it is recommended to read the JS DOC in the source code. :)
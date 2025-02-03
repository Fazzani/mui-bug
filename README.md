# Mui styled component bug

`NOTE`: react-controls is the library consumed by the client

## Exception

```js
Uncaught [Error: Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: object.

    Check the render method of `Styled(undefined)`.]
        at reportException (D:\Work\repos\Up.France.ODI.Commercant.Web\node_modules\jsdom\lib\jsdom\living\helpers\runtime-script-errors.js:66:24)
        at innerInvokeEventListeners (D:\Work\repos\Up.France.ODI.Commercant.Web\node_modules\jsdom\lib\jsdom\living\events\EventTarget-impl.js:353:9)      
        at invokeEventListeners (D:\Work\repos\Up.France.ODI.Commercant.Web\node_modules\jsdom\lib\jsdom\living\events\EventTarget-impl.js:286:3)
        at HTMLUnknownElementImpl._dispatch (D:\Work\repos\Up.France.ODI.Commercant.Web\node_modules\jsdom\lib\jsdom\living\events\EventTarget-impl.js:233:9)
        at HTMLUnknownElementImpl.dispatchEvent (D:\Work\repos\Up.France.ODI.Commercant.Web\node_modules\jsdom\lib\jsdom\living\events\EventTarget-impl.js:104:17)
```
## Setup

```sh
cd react-controls
npm i && npm run release

cd ..\client
npm i && npm test

```

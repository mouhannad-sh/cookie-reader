# Cookie Reader

An ES6 super tiny read-only cookie reader.

Literally, it only reads the cookie

## Install

```bash
npm i cookie-reader
```

### Example

```javascript
import Cookie from "cookie-reader"
// by default the parse method will use `document.cookie`
// parses the cookie into a {"key":"value"} Object
const cookie = Cookie.parse()

// get an item from the cookie
const JWT_Token = Cookie.getItem("jwt_token")
```

## Methods

### parse

Accepts 1 argument as a `String`. Defaults to `document.cookie`

```javascript
const cookieString = "some_key=ABC1234; key_2=123456;key_3=asdfg"
Cookie.parse(cookieString)
/*
 * {
     some_key: "ABC1234",
     key_2: "123456",
     key_3: "asdfg"
 }
*/
```

### getItem

Accepts 2 arguments

1. `key`: required key `String`, representing the item name from the cookie.
2. `cookie`: Optional cookie `String` you want to get the key from ( defaults to `document.cookie`)

```javascript
document.cookie = "some_key=ABC1234; key_2=123456;key_3=asdfg"
Cookie.getItem("key_2")
// 123456

// OR

const anotherCookieString = "key_1=A;key_2=12341"
Cookie.getItem("key_2", anotherCookieString)
// 12341
```

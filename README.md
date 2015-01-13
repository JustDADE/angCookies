# angCookies
Simple AngularJS factory to work with cookies

## Installation

You need to include ``angular-angCookies.js`` or ``angular-angCookies.min.js`` script into your project

```html
<script src="/path/to/angular-angCookies.min.js"></script>
```

Inject angCookies into your Angular module

```javascript
angular.module('testApp', ['angCookies']);
```

Now you are able to use factory from your controllers for example:

```javascript
myApp.controller('homeController', function($angCookies) {
  // Your code here
}
```

## Usage

##### Setting cookies

Create a new cookie:

```javascript
$angCookies.set('name', 'value');
```

Create expiring cookie:

```javascript
$angCookies.set('name', 'value', { expires: 7 });
```

Create cookie valid across entire website:

```javascript
$angCookies.set('name', 'value', { path: '/', expires: 7 });
```

##### Getting cookies

Get all cookies:

```javascript
$angCookies.all(); // { name: 'value' }
```

Get specific cookie:

```javascript
$angCookies.get('name'); // value
$angCookies.get('not-set'); // undefined
```

##### Removing cookies

Remove cookie from current path

```javascript
$angCookies.remove('name');
```

Remove cookie across domain

```javascript
$angCookies.remove('name', { path: '/' });

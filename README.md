# VueJS input field validation for Laravel5 form validator

A simple directive plugin for Vue 1.x that lets you validate a input field using laravels validation response.


**cave: experimental**


## Install

	$ npm install --save lopiade/v-validate-field


## Usage

```javascript
import Validator from 'v-validate-field';
Vue.use(Validator);
```

Then in your component:

```html
<input type="text" class="form-control" v-model="model_name" v-validate-field="errors">
```

The keys in the jason-response (from laravel) has to match your v-model name.



## License

MIT

# Vue.js 3 Frontend PoC
Experiment on using Vue.js 3 Single Page Application (SPA) and Bootstrap 5, in parallel with the existing UI.

PoC pages:
* http://[YOUR/MISP_HOST]/spa
* http://[YOUR/MISP_HOST]/spa/users/view/me
* http://[YOUR/MISP_HOST]/spa/admin/users/index
* http://[YOUR/MISP_HOST]/spa/admin/users/add

## Why
Putting aside the hype driven development of javascript frameworks, some projects have real tangible benefits that make the effort of migrating legacy applications worthwhile.

### Pros
* SPA pages are faster and provide a better user experience.
* UI components/views are developed isolated from the backend, **this reduces the complexity of the backend/controllers code**.
* Modern dev tools, components and libraries available.
* Backend could be reduced to just the API.
* Easier to get contributors with a modern tech stack/codebase.
* Less likely to have XSS vulns (everything is strictly escaped).

### Cons
* **Migrating a LOT of views.**
* Requires to implement some new endpoints to support the design.
* Learning curve.
* Currently some API endpoints are not quite standarized.
* Not good for SEO (but we don't care about that).

## Requirements
* Node.js

## Install
```
cd frontend/
npm install
```

## Running
### Development
```
cp frontend/vue.config.dist.js frontend/vue.config.js 
npm run serve
```
* Go to  `https://localhost/spa`

    *NOTE*: This assumes you are running MISP on localhost, you can update `frontend/vue.config.js` accordingly.

### Prod build
`npm run build`

Go to  `https://[YOUR_MISP_HOST]/spa`

## How it works

### Auth
The SPA uses the existing session cookie auth method, if the cookie is no longer valid, the user is redirected to the non-SPA login form.
Read [this](https://auth0.com/docs/sessions/cookies/spa-authenticate-with-cookies](this)) for more details.

### Router
The supported SPA pages and which component they load are defined in `frontend/src/router/index.js`.

### Axios
The SPA pages load all the resources via concurrent API calls, the `axios` library is used for this porpuse, the global API settings are defined in `frontend/src/api/api.js`.

Each resource API methods are defined in separate files under the `frontend/src/store/modules` directory.

### Bundle
* The bundle is compiled and copied to the `app/webroot/js/vue/` directory.
* The `index.html` / Vue app entrypoint is copied to app/View/Layouts/spa.ctp (a bit hacky if you ask me).
* 
### CakePHP/backend stuff
* `/spa` page added to ACLComponent, this page bypasses auth, since the resources are loaded by authenticated API calls.
* `app/View/Layouts/spa.ctp` is the cakephp layout / Vue app entrypoint.
* When running in dev mode (`npm run serve`) and in order to have hot reload and Vue devtools working a new CSP header has to be added. **This should be configurable/optional**.
* `app/Config/routes.php` redirects all `/spa/*` urls to the Vue SPA in case the user manually refreshes the page.

### Directory structure
* `frontend/src/components`: reusable UI components.
* `frontend/src/views`: user browsable UI's.
* `frontend/src/assets`: static files such as images.
* `frontend/src/mixins`: general helpers.
* `frontend/src/store`: API resources.
* `frontend/src/router`: Routes and their linked views.

## TODO
* Get menu options via API endpoint instead of hardcoded in `frontend/src/store/modules/menu.js`
* Get instance configuration via API endpoint, to be able to adjust UI layouts that depending on configuration settings
* Improve the dev/prod build workflow.
* See if theres a workaround to adding the CSP headers, or make them a `config.php` setting.
* API/axios error handling, axios interceptors.
* Pagination component and many other common components are missing.
* Add user password matches / missing funcionalities in that form.

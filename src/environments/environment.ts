// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const pathToAssets = "assets";

const paths = {
  assets: pathToAssets,
  stylesheets: pathToAssets + "/styles",
  images: pathToAssets + "/images"
}

export const environment = {
  production: false,

  themes: {
    blueGreen: paths.stylesheets + "/blue.green.css",
    brownDark: paths.stylesheets + "/brown.dark.css",
    greenYellow: paths.stylesheets + "/green.yellow.css",
    brownLight: paths.stylesheets + "/brown.light.css",
    greenDark: paths.stylesheets + "/green.yellow.dark.css"
  },
  paths: paths
};

const api_root = "http://localhost:3000/";

const prefix = {
  auth: api_root + "auth/",
  profile: api_root + "profile/",
  meal: api_root + "meal/"
}

export const api = {
  login: prefix.auth + "login",
  register: prefix.auth + "register",
  profile_post_data: prefix.profile + "update",
  meal: {
    MealOfTheDay: prefix.meal + "meal-today",
    MealStatement: prefix.meal + 'meal-statement'
  }
};

export const ResponseCodes = {
  DUPL_INSERT: 400,
  INVALID_REQ: 401,
  REQ_FAILURE: 402,
  NOT_ALLOWED: 403,
  REQ_SUCCESS: 200,
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

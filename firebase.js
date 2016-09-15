// webtask to add any data passed with POST to 
// a Firebase DB whose details are passed to the
// webtask as secrets
var firebase = require("firebase");

module.exports = 
  function (ctx, done) {
    // it'd be nice to validate the payload as JSON
    // it'd be nice to validate the secrets
    var access_key = ctx.secrets.fb_api_key;
    var project_id = ctx.secrets.project_id;
    // create connection to firebase and authenticate
    var myFirebaseRef = new firebase("https://"+project_id+".firebaseio.com/");
    myFirebaseRef.authWithCustomToken(access_key);
    myFirebaseRef.push(ctx.body);
    // it'd be nice to check if the push worked (but is it possible?)
    done(null,"Done");
  }

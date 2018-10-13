# A Webtask to push to Firebase any data POST'ed

[![GuardRails badge](https://badges.production.guardrails.io/bennythejudge/webtask-firebase.svg)](https://www.guardrails.io)

## Disclaimer

This software is just an exercise and is stored in GitHub "as is", without warranty of any kind, either expressed or implied and such software is to be used at your own risk.

## Prerequisites

- a [Webtask](https://webtask.io/) account
- a [Firebase](https://www.firebase.com/) account, a project URL and an API key.


## How to create the webtask

- execute:

```
wt create --secret project_id=XXXXXXXX --secret fb_api_key=XXXXXXXXXXXXXXXXXXXXXXXXXXXXX firebase.js
```

Webtask will return a URL:

```
Webtask created

You can access your webtask at the following url:

<URL>
```

## How to use it

```
curl -X POST -H "Content-Type: application/json" -d '{"title":"A JSON PAYLOAD","description":"WHATEVER U WANT"}' <URL>
```

- The data (what follows `-d`) is only an example, it can be any JSON content.


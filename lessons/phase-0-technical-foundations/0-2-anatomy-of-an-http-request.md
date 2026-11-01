# 0.2 Anatomy of an HTTP request

Phase 0: Technical foundations · about 10 min

Most APIs travel over HTTP, the same protocol your browser uses to load pages. A request has four parts.

- **Method:** the verb. `GET` reads, `POST` sends or creates, `PUT` and `PATCH` update, `DELETE` removes.
- **URL (endpoint):** where it goes. A base address plus a path, sometimes with query parameters after a `?`, like `?city=Cairo&units=metric`.
- **Headers:** metadata about the request. Who you are (the API key), what format the body is in, which version of the API you expect.
- **Body:** the payload, usually JSON. GET requests normally have no body.

The Claude API uses one main endpoint, `POST /v1/messages`. It's a POST because you're sending a body: the model name, your instructions and the conversation so far. Three headers matter: `x-api-key` carries your key, `anthropic-version` pins the API version, and `content-type: application/json` says the body is JSON.

## Key points

- Four parts: method, URL, headers, body.
- GET reads and usually has no body; POST sends a body.
- The Claude API is POST https://api.anthropic.com/v1/messages.
- Auth and format information go in headers, not in the body.

## Example: A real Claude API request

```
POST https://api.anthropic.com/v1/messages
x-api-key: $ANTHROPIC_API_KEY
anthropic-version: 2023-06-01
content-type: application/json

{
  "model": "claude-sonnet-5-5",
  "max_tokens": 512,
  "messages": [
    { "role": "user", "content": "Write a one-line caption for a shawarma post." }
  ]
}
```

## Exam traps

- Putting the API key in the body or the URL. It belongs in a header.
- Forgetting the content-type header, so the server can't read the JSON body.

## Quick check

1. Where does your Claude API key go in a request?
   A. In the JSON body
   B. In the x-api-key header
   C. In the URL after ?key=
   D. In the system prompt

2. Which method sends a new message to Claude?
   A. GET
   B. DELETE
   C. POST
   D. PATCH

3. In https://api.example.com/v1/orders?status=open, what is status=open?
   A. A header
   B. A query parameter in the URL
   C. The request body
   D. The method

<details><summary>Answers</summary>

1. **B.** Credentials travel in headers. Anthropic uses the x-api-key header.
2. **C.** You are sending a body (the conversation), so it is a POST.
3. **B.** Everything after the ? is the query string, made of parameters.

</details>

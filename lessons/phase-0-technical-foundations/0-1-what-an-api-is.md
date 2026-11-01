# 0.1 What an API is

Phase 0: Technical foundations · about 8 min

An API (application programming interface) is an agreement that lets one program ask another program for something. Your program is the **client**. The service it talks to is the **server**. The client sends a **request** saying what it wants, and the server sends back a **response** with the result or an error.

Think of ordering at a counter. The menu is the documentation: it tells you what you can ask for and how. Your order is the request. The food, or "sorry, we're out of that", is the response. You never need to see the kitchen.

Every agent you build is a chain of these exchanges. Your code calls the Claude API. Claude asks for a tool. The tool calls another API, like a CRM, a calendar or a database. When an agent misbehaves, the cause nearly always shows up in one of these requests or responses. That is why reading them is the core skill of this whole track, even when AI writes the code for you.

An **SDK** (software development kit) is a library, for example the Anthropic Python or TypeScript SDK, that builds and sends these requests for you. It is a convenience layer. Underneath, it sends exactly the same request a raw command would.

## Key points

- The client sends a request; the server returns a response.
- The documentation is the contract: what you can ask for, in what format, and what comes back.
- An SDK only builds the request for you. Python, TypeScript or a curl command all send the same thing.
- An agent is many API calls chained together, so debugging an agent means reading those calls.

## Example: A request and its response

```
GET https://api.example-weather.com/v1/current?city=Cairo
Authorization: Bearer YOUR_API_KEY

HTTP/1.1 200 OK
Content-Type: application/json

{ "city": "Cairo", "temp_c": 27, "condition": "clear" }
```

## Exam traps

- Thinking the SDK is the API. When something fails, ask what request the SDK actually sent.
- Treating an agent bug as mysterious AI behaviour before checking the requests and responses.

## Quick check

1. Your code calls the Claude API to ask for a summary. In that exchange, which is the client?
   A. Claude
   B. Your code
   C. The Anthropic SDK documentation
   D. The person reading the summary

2. What is an SDK?
   A. A different, faster API
   B. A library that builds and sends API requests for you in a specific language
   C. A database of API keys
   D. The server that answers requests

3. Why read raw requests and responses if AI writes your code?
   A. You don't need to
   B. To check spelling
   C. Most agent failures show up there, and you must judge whether the AI's fix is right
   D. Because SDKs are unreliable

<details><summary>Answers</summary>

1. **B.** Whoever sends the request is the client. Your code sends it; the Claude API is the server.
2. **B.** The SDK is a convenience library. It sends the same request you could send by hand.
3. **C.** You are the one who decides if a fix is correct. That means reading what was actually sent and received.

</details>

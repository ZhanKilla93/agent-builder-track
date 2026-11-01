# 0.3 Status codes and errors

Phase 0: Technical foundations · about 9 min

Every response starts with a three-digit status code. The first digit tells you whose problem it is.

- **2xx: success.** `200 OK` is the one you'll see most.
- **4xx: you sent something wrong.** Retrying the same request won't help; change something first.
- **5xx: the server had a problem.** Waiting and retrying may work.

The ones worth knowing by heart for Claude: `400` invalid request (read the message, it usually names the bad field), `401` bad or missing key, `403` key lacks permission, `404` wrong URL, `413` request too large, `429` rate limited (too many requests, slow down), `500` internal error, and `529` overloaded, which is Anthropic's signal that the service is busy.

The rule your code should follow: on a 4xx, fix the request. On 429, 500 or 529, wait and retry with **exponential backoff** (wait 1 second, then 2, then 4, and stop after a few tries). Error responses also carry a JSON body explaining what went wrong. Read it before guessing.

## Key points

- 2xx success, 4xx your fault, 5xx the server's fault.
- 4xx means change the request; retrying it unchanged won't work.
- 429, 500 and 529 are worth retrying with backoff and a retry limit.
- The error body usually says exactly what is wrong.

## Example: An error response from the Claude API

```
HTTP/1.1 429 Too Many Requests
retry-after: 20

{
  "type": "error",
  "error": {
    "type": "rate_limit_error",
    "message": "Number of request tokens has exceeded your per-minute rate limit"
  }
}
```

## Exam traps

- Retrying a 400 in a loop. The request is malformed, so it fails every time.
- Retrying instantly on 429 with no backoff, which makes the rate limit worse.

## Quick check

1. Your agent gets a 401. What should you check first?
   A. The prompt wording
   B. The API key
   C. The model's temperature
   D. Whether the server is down

2. You get a 429 during a busy batch run. Best response?
   A. Retry immediately in a tight loop
   B. Change the prompt
   C. Wait and retry with exponential backoff, up to a limit
   D. Switch API keys

3. After editing a tool definition, every call returns 400. What's the right move?
   A. Retry a few times
   B. Read the error message, which likely names the invalid field, and fix the definition
   C. Wait an hour
   D. Increase max_tokens

<details><summary>Answers</summary>

1. **B.** 401 means authentication failed: the key is missing, wrong or revoked.
2. **C.** 429 is a rate limit. Back off, respect retry-after if present, and cap your retries.
3. **B.** A 400 is a malformed request. Retrying can't fix it; the error message tells you what to change.

</details>

function parseJwt (token) {
  var base64Url = token.split(".")[1];
  var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  var jsonPayload = decodeURIComponent(globalThis.atob(base64).split("").map(function(c) {
    return `%${ (`00${ c.charCodeAt(0).toString(16)}`).slice(-2)}`;
  }).join(""));

  return JSON.parse(jsonPayload);
}

console.log(parseJwt("eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI3ZmExMjNmMi1mYWIzLTRhZDgtOThiZC1hZjBiMDU0MGEwMTEiLCJzdWIiOiJzdXBwb3J0QHBlcnNvbmFsc29mdC5jb20uYnIiLCJuYmYiOjE3MDg0MTUxNTYsImlhdCI6MTcwODQxNTE1NiwiZXhwIjoxNzA4NTAxNTU2LCJsb2NhbGUiOiJwdC1CUiIsInRpbWVab25lIjoiQW1lcmljYS9TYW9fUGF1bG8ifQ.61y3xLZN-srfyorcRNLGE4IITsgTr3qHsrMexlCsz9g"));
# tinyfiledialogs-deno
This is a port of tinyfiledialogs-rs for use in Deno.
It requires --unstable --allow-plugin --allow-read --allow-write (because it uses a native plugin).

## Example
```ts
import * as tinyfiledialogs from "https://denopkg.com/Srinivasa314/tinyfiledialogs-deno@1.0/tinyfiledialogs.ts"
tinyfiledialogs.messageBoxOk("Content", "Title", MessageBoxIcon.Info)
```
# tinyfiledialogs-deno
[![deno doc](https://doc.deno.land/badge.svg)](https://doc.deno.land/https/deno.land/x/tinyfiledialogs@1.0.4/mod.ts)

This is a port of tinyfiledialogs-rs for use in Deno.
It requires --unstable --allow-plugin --allow-net --allow-read --allow-write (because it uses a native plugin).

## Example
```ts
import * as tinyfiledialogs from "https://deno.land/x/tinyfiledialogs@1.0.4/mod.ts"
tinyfiledialogs.messageBoxOk("Title", "Content", tinyfiledialogs.MessageBoxIcon.Info)
```
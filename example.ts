import {
  OkCancel,
  MessageBoxIcon,
  YesNo,
  colorChooserDialog,
  inputBox,
  listDialog,
  messageBoxOk,
  messageBoxOkCancel,
  messageBoxYesNo,
  openFileDialog,
  openFileDialogMulti,
  passwordBox,
  saveFileDialog,
  saveFileDialogWithFilter,
  selectFolderDialog,
} from "https://deno.land/x/tinyfiledialogs@1.0.2/mod.ts";

console.log(colorChooserDialog("Choose a Color","#FF0000"));

console.log(inputBox("Enter user name", "Username:", "username"));

console.log(
  listDialog(
    "Test Dialog",
    ["Id", "Name"],
    [["471", "Donald Duck"],[ "1143", "Chris P. Bacon"], ["6509", "Moon Doge"]],
  ),
);

console.log(messageBoxOk("Error", "Error 0x00", MessageBoxIcon.Error));

console.log(
  messageBoxOkCancel(
    "hello",
    "ok or cancel?",
    MessageBoxIcon.Question,
    OkCancel.Cancel,
  ),
);

console.log(
  messageBoxYesNo("hello", "yes or no?", MessageBoxIcon.Question, YesNo.No),
);

console.log(openFileDialog("Open", "password.txt", [[".txt"], "Text files"]));

console.log(
  openFileDialogMulti("Open", "password.txt", [[".txt"], "Text files"]),
);

console.log(passwordBox("Enter password", "Password:"));

console.log(saveFileDialog("Save", "password.txt"));

console.log(
  saveFileDialogWithFilter("Save", "password.txt", [".txt"], "Text files"),
);

console.log(selectFolderDialog("Select folder", "example"));

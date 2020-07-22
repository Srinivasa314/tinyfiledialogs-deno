import {
  loadPlugin,
  importFromPlugin,
} from "https://deno.land/x/calcite@1.0/calcite.ts";

await loadPlugin("tinyfiledialogs_deno", "https://github.com/Srinivasa314/tinyfiledialogs-deno/releases/download/1.0/");

export enum MessageBoxIcon {
  Info,
  Warning,
  Error,
  Question,
}

export enum OkCancel {
  Cancel,
  Ok,
}

export enum YesNo {
  No,
  Yes,
}

export const colorChooserDialog = importFromPlugin(
  "color_chooser_dialog",
) as (
  title: string,
  default_color: [number, number, number] | string,
) => [string, [number, number, number]] | null;

export const inputBox = importFromPlugin("input_box") as (
  title: string,
  message: string,
  default_text: string,
) => string | null;

export const listDialog = importFromPlugin("list_dialog") as (
  title: string,
  columns: string[],
  cells: string[] | null,
) => string | null;

export const messageBoxOk = importFromPlugin("message_box_ok") as (
  title: string,
  message: string,
  icon: MessageBoxIcon,
) => void;

export const messageBoxOkCancel = importFromPlugin(
  "message_box_ok_cancel",
) as (
  title: string,
  message: string,
  icon: MessageBoxIcon,
  default_selection: OkCancel,
) => OkCancel;

export const messageBoxYesNo = importFromPlugin("message_box_yes_no") as (
  title: string,
  message: string,
  icon: MessageBoxIcon,
  default_selection: YesNo,
) => YesNo;

export const openFileDialog = importFromPlugin("open_file_dialog") as (
  title: string,
  path: string,
  filter: [string[], string] | null,
) => string | null;

export const openFileDialogMulti = importFromPlugin(
  "open_file_dialog_multi",
) as (
  title: string,
  path: string,
  filter: [string[], string] | null,
) => string[] | null;

export const passwordBox = importFromPlugin("password_box") as (
  title: string,
  message: string,
) => string | null;

export const saveFileDialog = importFromPlugin("save_file_dialog") as (
  title: string,
  path: string,
) => string | null;

export const saveFileDialogWithFilter = importFromPlugin(
  "save_file_dialog_with_filter",
) as (
  title: string,
  path: string,
  filter_patterns: string[],
  description: string,
) => string | null;

export const selectFolderDialog = importFromPlugin(
  "select_folder_dialog",
) as (title: string, path: string) => string | null;

import {
  loadPlugin,
  importFromPlugin,
} from "https://deno.land/x/calcite@1.0/calcite.ts";

await loadPlugin("tinyfiledialogs_deno", "https://github.com/Srinivasa314/tinyfiledialogs-deno/releases/download/1.0");

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

/**
 * Shows a color chooser dialog
 * @param title - The dialog box title
 * @param default_color - The default selected color: A tuple of RGB values or a color hex string
 * @returns  A tuple of the color hex string and a tuple of RGB values. It returns null if the dialog is cancelled without selecting anything.
 */

export const colorChooserDialog = importFromPlugin(
  "color_chooser_dialog",
) as (
  title: string,
  default_color: [number, number, number] | string,
) => [string, [number, number, number]] | null;

/**
 * Shows an input box
 * @param title - The dialog box title
 * @param message - The message to display
 * @param default_text - The default text in the input field
 * @returns The entered text. It returns null if the dialog is cancelled without selecting anything.
 */

export const inputBox = importFromPlugin("input_box") as (
  title: string,
  message: string,
  default_text: string,
) => string | null;

/**
 * Shows a list dialog
 * @param title - The dialog box title
 * @param columns - The column names of the rows to select
 * @param cells - The rows that can be selected. If it is null, no rows are shown.
 * @returns The selected row. It returns null if the dialog is cancelled without selecting anything.
 */
export const listDialog = importFromPlugin("list_dialog") as (
  title: string,
  columns: string[],
  cells: string[][] | null,
) => string[] | null;

/**
 * Shows a message box
 * @param title - The dialog box title
 * @param message - The message to display
 * @param icon - The icon to show
 */

export const messageBoxOk = importFromPlugin("message_box_ok") as (
  title: string,
  message: string,
  icon: MessageBoxIcon,
) => void;

/**
 * Shows a message box with ok and cancel options
 * @param title - The dialog box title
 * @param message - The message to display
 * @param icon - The icon to show
 * @param default_selection - The button selected by default
 * @returns The selected button
 */

export const messageBoxOkCancel = importFromPlugin(
  "message_box_ok_cancel",
) as (
  title: string,
  message: string,
  icon: MessageBoxIcon,
  default_selection: OkCancel,
) => OkCancel;

/**
 * Shows a message box with yes and no options
 * @param title - The dialog box title
 * @param message - The message to display
 * @param icon - The icon to show
 * @param default_selection - The button selected by default
 * @returns The selected button
 */

export const messageBoxYesNo = importFromPlugin("message_box_yes_no") as (
  title: string,
  message: string,
  icon: MessageBoxIcon,
  default_selection: YesNo,
) => YesNo;

/**
 * Shows an open file dialog
 * @param title - The dialog box title
 * @param path - The path to select the file from
 * @param filter - A tuple of a list of file extensions (eg: ".png") and the file type (eg: "Text files").
 * If null then there will be no filter
 * @returns The selected file. It returns null if the dialog is cancelled without selecting anything.
 */

export const openFileDialog = importFromPlugin("open_file_dialog") as (
  title: string,
  path: string,
  filter: [string[], string] | null,
) => string | null;

/**
 * Shows an open multiple file dialog
 * @param title - The dialog box title
 * @param path - The path to select files from
 * @param filter - A tuple of a list of file extensions (eg: ".png") and the file type (eg: "Text files").
 * If null then there will be no filter
 * @returns The selected files. It returns null if the dialog is cancelled without selecting anything.
 */
export const openFileDialogMulti = importFromPlugin(
  "open_file_dialog_multi",
) as (
  title: string,
  path: string,
  filter: [string[], string] | null,
) => string[] | null;

/**
 * Shows a password box
 * @param title - The dialog box title
 * @param message - The message to display
 * @returns The entered password. It returns null if the dialog is cancelled without selecting anything.
 */

export const passwordBox = importFromPlugin("password_box") as (
  title: string,
  message: string,
) => string | null;

/**
 * Shows a save file dialog
 * @param title - The dialog box title
 * @param path - The path to save the file
 * @returns The selected file. It returns null if the dialog is cancelled without selecting anything.
 */

export const saveFileDialog = importFromPlugin("save_file_dialog") as (
  title: string,
  path: string,
) => string | null;

/**
 * Shows a save file dialog with an option to filter the type of saved file.
 * @param title - The dialog box title
 * @param path - The path to save the file.
 * @param filter_patterns - The file extensions with which the file can be saved
 * @param description - The type of the file (eg: "Text files")
 * @returns The selected file. It returns null if the dialog is cancelled without selecting anything.
 */

export const saveFileDialogWithFilter = importFromPlugin(
  "save_file_dialog_with_filter",
) as (
  title: string,
  path: string,
  filter_patterns: string[],
  description: string,
) => string | null;

/**
 * Shows a select folder dialog
 * @param title - The dialog box title
 * @param path - The path to select the folder
 * @returns The selected folder. It returns null if the dialog is cancelled without selecting anything.
 */

export const selectFolderDialog = importFromPlugin(
  "select_folder_dialog",
) as (title: string, path: string) => string | null;

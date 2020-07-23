use serde_repr::*;
use std::convert::TryInto;

#[macro_use]
extern crate serde_derive;

#[serde(untagged)]
#[derive(Deserialize)]
enum DefaultColorValue<'a> {
    Hex(&'a str),
    RGB(Vec<u8>),
}

#[derive(Deserialize_repr)]
#[repr(u8)]
enum MessageBoxIcon {
    Info,
    Warning,
    Error,
    Question,
}

impl From<MessageBoxIcon> for tinyfiledialogs::MessageBoxIcon {
    fn from(item: MessageBoxIcon) -> Self {
        match item {
            MessageBoxIcon::Info => tinyfiledialogs::MessageBoxIcon::Info,
            MessageBoxIcon::Warning => tinyfiledialogs::MessageBoxIcon::Warning,
            MessageBoxIcon::Error => tinyfiledialogs::MessageBoxIcon::Error,
            MessageBoxIcon::Question => tinyfiledialogs::MessageBoxIcon::Question,
        }
    }
}
#[derive(Deserialize_repr, Serialize_repr)]
#[repr(u8)]
enum OkCancel {
    Cancel,
    Ok,
}

impl From<OkCancel> for tinyfiledialogs::OkCancel {
    fn from(item: OkCancel) -> Self {
        match item {
            OkCancel::Cancel => tinyfiledialogs::OkCancel::Cancel,
            OkCancel::Ok => tinyfiledialogs::OkCancel::Ok,
        }
    }
}

impl From<tinyfiledialogs::OkCancel> for OkCancel {
    fn from(item: tinyfiledialogs::OkCancel) -> Self {
        match item {
            tinyfiledialogs::OkCancel::Cancel => OkCancel::Cancel,
            tinyfiledialogs::OkCancel::Ok => OkCancel::Ok,
        }
    }
}
#[derive(Deserialize_repr, Serialize_repr)]
#[repr(u8)]
enum YesNo {
    No,
    Yes,
}

impl From<YesNo> for tinyfiledialogs::YesNo {
    fn from(item: YesNo) -> Self {
        match item {
            YesNo::No => tinyfiledialogs::YesNo::No,
            YesNo::Yes => tinyfiledialogs::YesNo::Yes,
        }
    }
}

impl From<tinyfiledialogs::YesNo> for YesNo {
    fn from(item: tinyfiledialogs::YesNo) -> Self {
        match item {
            tinyfiledialogs::YesNo::No => YesNo::No,
            tinyfiledialogs::YesNo::Yes => YesNo::Yes,
        }
    }
}

#[calcite::deno_op]
pub fn color_chooser_dialog(title: &str, default: DefaultColorValue) -> Option<(String, [u8; 3])> {
    tinyfiledialogs::color_chooser_dialog(
        title,
        match default {
            DefaultColorValue::Hex(h) => tinyfiledialogs::DefaultColorValue::Hex(h),
            DefaultColorValue::RGB(ref r) => {
                tinyfiledialogs::DefaultColorValue::RGB(r.as_slice().try_into().unwrap())
            }
        },
    )
}

#[calcite::deno_op]
pub fn input_box(title: &str, message: &str, default: &str) -> Option<String> {
    tinyfiledialogs::input_box(title, message, default)
}

#[calcite::deno_op]
pub fn list_dialog(
    title: &str,
    columns: Vec<&str>,
    cells: Option<Vec<Vec<&str>>>,
) -> Option<Vec<String>> {
    tinyfiledialogs::list_dialog(
        title,
        &columns,
        cells
            .map(|s| s.into_iter().flatten().collect::<Vec<_>>())
            .as_ref()
            .map(|v| &v[..]),
    )
    .map(|s| s.split('|').map(|s| s.to_string()).collect())
}

#[calcite::deno_op]
pub fn message_box_ok(title: &str, message: &str, icon: MessageBoxIcon) {
    tinyfiledialogs::message_box_ok(title, message, icon.into())
}

#[calcite::deno_op]
pub fn message_box_ok_cancel(
    title: &str,
    message: &str,
    icon: MessageBoxIcon,
    default: OkCancel,
) -> OkCancel {
    tinyfiledialogs::message_box_ok_cancel(title, message, icon.into(), default.into()).into()
}

#[calcite::deno_op]
pub fn message_box_yes_no(
    title: &str,
    message: &str,
    icon: MessageBoxIcon,
    default: YesNo,
) -> YesNo {
    tinyfiledialogs::message_box_yes_no(title, message, icon.into(), default.into()).into()
}

#[calcite::deno_op]
pub fn open_file_dialog(
    title: &str,
    path: &str,
    filter: Option<(Vec<&str>, &str)>,
) -> Option<String> {
    tinyfiledialogs::open_file_dialog(
        title,
        path,
        filter.as_ref().map(|(a, b)| (a.as_slice(), *b)),
    )
}

#[calcite::deno_op]
pub fn open_file_dialog_multi(
    title: &str,
    path: &str,
    filter: Option<(Vec<&str>, &str)>,
) -> Option<Vec<String>> {
    tinyfiledialogs::open_file_dialog_multi(
        title,
        path,
        filter.as_ref().map(|(a, b)| (a.as_slice(), *b)),
    )
}

#[calcite::deno_op]
pub fn password_box(title: &str, message: &str) -> Option<String> {
    tinyfiledialogs::password_box(title, message)
}

#[calcite::deno_op]
pub fn save_file_dialog(title: &str, path: &str) -> Option<String> {
    tinyfiledialogs::save_file_dialog(title, path)
}

#[calcite::deno_op]
pub fn save_file_dialog_with_filter(
    title: &str,
    path: &str,
    filter_patterns: Vec<&str>,
    description: &str,
) -> Option<String> {
    tinyfiledialogs::save_file_dialog_with_filter(title, path, &filter_patterns, description)
}

#[calcite::deno_op]
pub fn select_folder_dialog(title: &str, path: &str) -> Option<String> {
    tinyfiledialogs::select_folder_dialog(title, path)
}

calcite::export!(
    color_chooser_dialog,
    input_box,
    list_dialog,
    message_box_ok,
    message_box_ok_cancel,
    message_box_yes_no,
    open_file_dialog,
    open_file_dialog_multi,
    password_box,
    save_file_dialog,
    save_file_dialog_with_filter,
    select_folder_dialog
);

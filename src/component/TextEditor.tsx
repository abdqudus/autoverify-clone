import { useState } from "react";
import {
  ContentEditableEvent,
  Editor,
  EditorProps,
  EditorProvider,
  createButton,
} from "react-simple-wysiwyg";
import {
  BtnBold,
  BtnBulletList,
  BtnClearFormatting,
  BtnItalic,
  BtnLink,
  BtnNumberedList,
  BtnRedo,
  BtnStrikeThrough,
  BtnUnderline,
  BtnUndo,
  Separator,
  Toolbar,
} from "react-simple-wysiwyg";
export function TextEditor(props: EditorProps) {
  const [value, setValue] = useState("");

  function onChange(e: ContentEditableEvent): void {
    setValue(e.target.value);
  }
  const BtnAlignCenter = createButton(
    "Align center",
    <img src="/align-center.png" alt="" />,
    "justifyCenter"
  );
  const BtnAlignLeft = createButton(
    "Align left",
    <img src="/align-left.png" alt="" />,
    "justifyLeft"
  );
  const BtnAlignRight = createButton(
    "Align right",
    <img src="/align-right.png" alt="" />,
    "justifyRight"
  );
  return (
    <div className="mt-4">
      <div className="vsm:hidden block lg:min-h-[301px]">
        <EditorProvider>
          <Editor
            containerProps={{ style: { minHeight: "301px" } }}
            value={value}
            onChange={onChange}
            {...props}
          >
            <Toolbar>
              <BtnUndo />
              <BtnRedo />
              <Separator />
              <BtnAlignLeft />
              <BtnAlignCenter />
              <BtnAlignRight />
              <Separator />
              <BtnBold />
              <BtnItalic />
              <BtnUnderline />
              <BtnStrikeThrough />
              <Separator />
              <BtnNumberedList />
              <BtnBulletList />
              <Separator />
              <BtnLink />
              <BtnClearFormatting />
            </Toolbar>
            <Toolbar></Toolbar>
          </Editor>
        </EditorProvider>
        <div className="h-[37px] bg-dark-bg border border-[#9E9E9E]"></div>
      </div>
      <div className="hidden vsm:block lg:min-h-[300px]">
        <EditorProvider>
          <Editor
            containerProps={{ style: { minHeight: "300px" } }}
            value={value}
            onChange={onChange}
            {...props}
          >
            <Toolbar>
              <BtnUndo />
              <BtnRedo />
              <Separator />
              <BtnBold />
              <BtnItalic />
              <BtnUnderline />
              <BtnStrikeThrough />
              <Separator />
              <BtnNumberedList />
              <BtnBulletList />
            </Toolbar>
            <Toolbar>
              <BtnAlignLeft />
              <BtnAlignCenter />
              <BtnAlignRight />
              <Separator />
              <BtnLink />
              <BtnClearFormatting />
            </Toolbar>
          </Editor>
        </EditorProvider>
        <div className="h-[37px] bg-dark-bg border border-[#9E9E9E]"></div>
      </div>
    </div>
  );
}

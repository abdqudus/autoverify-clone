import { Dispatch, SetStateAction } from "react";
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
type ValueProps = {
  textVal: string;
  setTextVal: Dispatch<SetStateAction<string>>;
  setStoreDetails?: Dispatch<
    SetStateAction<{
      address: string;
      domain: string;
      name: string;
      terms: string;
      logo: null | string;
      code_warning_threshold: number;
      transaction_email: string;
    }>
  >;
  setProductDetails: Dispatch<
    SetStateAction<{
      name: string;
      price: string;
      thumbnail: File | string;
      description: string;
      codebase: string | number;
    }>
  >;
};
export function TextEditor(props: EditorProps & { val: ValueProps }) {
  const { textVal, setTextVal, setStoreDetails, setProductDetails } = props.val;
  function onChange(e: ContentEditableEvent): void {
    setTextVal(e.target.value);
    if (setStoreDetails) {
      setStoreDetails((details) => ({ ...details, terms: e.target.value }));
    }
    if (setProductDetails) {
      setProductDetails((details) => ({
        ...details,
        description: e.target.value,
      }));
    }
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
            value={textVal}
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
      </div>
      <div className="hidden vsm:block lg:min-h-[300px]">
        <EditorProvider>
          <Editor
            containerProps={{ style: { minHeight: "300px" } }}
            value={textVal}
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
      </div>
    </div>
  );
}

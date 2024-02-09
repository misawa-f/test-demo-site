import React, { useState, KeyboardEvent } from 'react';
import Head from 'next/head';
import {
  TextBoxComponent,
  RadioButtonComponent,
  CheckboxComponent,
  ButtonComponent,
  DropdownComponent,
  TextComponent,
  ImageComponent,
  FocusComponent,
  KeyInputComponent,
  DialogComponent,
  FileUploadComponent,
  FileDownloadComponent,
} from '@/components/form/Form';

export default function Actions() {
  const options = {
    option1: 'オプション1',
    option2: 'オプション2',
    option3: 'オプション3',
  };

  const [text, setText] = useState<string>('');
  const [radio, setRadio] = useState<string>('ラジオ2');
  const [checkboxes, setCheckboxes] = useState<string[]>(['チェック2']);
  const [dropdown, setDropdown] = useState<string>('');
  const [button, setButton] = useState<string>('');
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [keyPressed, setKeyPressed] = useState<string>('');
  const [dialog, setDialog] = useState<string>('');
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const handleTextboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const handleRadioCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRadio(event.target.value);
  };

  const handleCheckboxCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (event.target.checked) {
      setCheckboxes([...checkboxes, value]);
    } else {
      setCheckboxes(checkboxes.filter((item) => item !== value));
    }
  };

  const handleDropdownSelect = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setDropdown(event.target.value);
  };
  const selectedName = options[dropdown as keyof typeof options] || '';

  const handleButtonClick = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setButton('クリックしました');
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    setKeyPressed(event.key);
  };

  const handleDialog = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const result = window.confirm('この操作を実行しますか？');
    if (result) {
      setDialog('OK');
    } else {
      setDialog('キャンセル');
    }
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    setUploadedFile(file);
  };

  return (
    <>
      <Head>
        <title>Actions</title>
      </Head>
      <div className="container mx-auto">
        <div className="mx-10">
          <h1 className="mt-5 text-3xl font-bold">Action</h1>
          <form>
            <div className="space-y-12">
              <div className="mt-5 grid grid-cols-4 gap-x-6 gap-y-8">
                <TextBoxComponent
                  label="テキストボックス"
                  placeholder="プレースホルダー"
                  id="textbox"
                  name="textbox"
                  handleTextboxChange={handleTextboxChange}
                  result={text}
                />
                <RadioButtonComponent
                  handleRadioCheck={handleRadioCheck}
                  result={radio}
                />
                <CheckboxComponent
                  handleCheckboxCheck={handleCheckboxCheck}
                  result={checkboxes}
                />
                <ButtonComponent
                  name="ボタン"
                  handleButtonClick={handleButtonClick}
                  result={button}
                />
              </div>
              <div className="mt-5 pt-5 grid grid-cols-4 gap-x-6 gap-y-8 border-t border-gray-200">
                <DropdownComponent
                  handleDropdownSelect={handleDropdownSelect}
                  value={dropdown}
                  result={selectedName}
                />
                <TextComponent
                  heading="サンプル見出し"
                  text="これはサンプルテキストです。"
                />
                <ImageComponent
                  src="/images/curryrice.png"
                  alt="カレーライス"
                  width={100}
                  height={100}
                />
                <FocusComponent
                  isFocused={isFocused}
                  setIsFocused={setIsFocused}
                />
              </div>
              <div className="mt-5 pt-5 grid grid-cols-4 gap-x-6 gap-y-8 border-t border-gray-200">
                <KeyInputComponent
                  result={keyPressed}
                  handleKeyDown={handleKeyDown}
                />
                <DialogComponent result={dialog} handleDialog={handleDialog} />
                <FileUploadComponent
                  uploadedFile={uploadedFile}
                  handleFileUpload={handleFileUpload}
                />

                <FileDownloadComponent
                  filePath="/images/shortcake.png"
                  fileName="shortcake.png"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

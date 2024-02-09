import React, { useState } from 'react';
import Head from 'next/head';
import {
  TextBoxComponent,
  RadioButtonComponent,
  CheckboxComponent,
  ButtonComponent,
  LinkComponent,
  TextComponent,
  ItemListComponent,
  ImageComponent,
  TitleButtonComponent,
  TestIdButtonComponent,
  SelectorComponent,
} from '@/components/form/Form';

export default function Locators() {
  const options = {
    option1: 'オプション1',
    option2: 'オプション2',
    option3: 'オプション3',
  };

  const [text, setText] = useState<string>('');
  const [radio, setRadio] = useState<string>('ラジオ2');
  const [checkboxes, setCheckboxes] = useState<string[]>([]);
  const [button, setButton] = useState<string>('');

  const [selectedItem, setSelectedItem] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [testId, setTestId] = useState<string>('');
  const [selectedColor, setSelectedColor] = useState<string>('');

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

  const handleButtonClick = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setButton('クリックしました');
  };

  const handleItemButtonClick = (
    e: { preventDefault: () => void },
    itemName: string
  ) => {
    e.preventDefault();
    setSelectedItem(itemName);
  };

  const handleTitleButtonClick = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setTitle('クリックしました');
  };

  const handleTestIdButtonClick = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setTestId('クリックしました');
  };

  const handleColorButtonClick = (
    e: { preventDefault: () => void },
    colorName: string
  ) => {
    e.preventDefault();
    setSelectedColor(colorName);
  };

  return (
    <>
      <Head>
        <title>Locators</title>
      </Head>
      <div className="container mx-auto">
        <div className="mx-10">
          <h1 className="mt-5 text-3xl font-bold">Locator</h1>
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
                <LinkComponent url="https://www.google.com" text="Google" />
                <TextComponent
                  heading="サンプル見出し"
                  text="これはサンプルテキストです。"
                />
                <ItemListComponent
                  handleItemButtonClick={handleItemButtonClick}
                  result={selectedItem}
                />
                <ImageComponent
                  src="/images/curryrice.png"
                  alt="カレーライス"
                  width={100}
                  height={100}
                />
              </div>
              <div className="mt-5 pt-5 grid grid-cols-4 gap-x-6 gap-y-8 border-t border-gray-200">
                <TitleButtonComponent
                  handleTitleButtonClick={handleTitleButtonClick}
                  result={title}
                  title="Title属性のボタンです"
                />
                <TestIdButtonComponent
                  handleTestIdButtonClick={handleTestIdButtonClick}
                  result={testId}
                  testId="test-target"
                />
                <SelectorComponent
                  handleColorButtonClick={handleColorButtonClick}
                  result={selectedColor}
                  id="selector"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

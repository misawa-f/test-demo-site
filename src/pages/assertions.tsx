import React, { useState } from 'react';
import Head from 'next/head';
import {
  TextBoxComponent,
  RadioButtonComponent,
  CheckboxComponent,
  ButtonComponent,
  DropdownComponent,
  LinkComponent,
  TextVisibleComponent,
  ItemListComponent,
  LoadingButtonComponent,
} from '@/components/form/Form';

export default function Assertions() {
  const options = {
    option1: 'オプション1',
    option2: 'オプション2',
    option3: 'オプション3',
  };

  const [text, setText] = useState<string>('');
  const [textDisabled, setTextDisabled] = useState<string>('');
  const [radio, setRadio] = useState<string>('ラジオ2');
  const [checkboxes, setCheckboxes] = useState<string[]>([]);
  const [button, setButton] = useState<string>('');
  const [buttonDisabled, setButtonDisabled] = useState<string>('');
  const [dropdown, setDropdown] = useState<string>('');
  const [selectedItem, setSelectedItem] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [showText, setShowText] = useState<boolean>(false);

  const handleTextboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };
  const handleTextboxDisabledChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setTextDisabled(event.target.value);
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

  const handleButtonDisabledClick = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setButtonDisabled('クリックしました');
  };

  const handleDropdownSelect = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setDropdown(event.target.value);
  };
  const selectedName = options[dropdown as keyof typeof options] || '';

  const handleItemButtonClick = (
    e: { preventDefault: () => void },
    itemName: string
  ) => {
    e.preventDefault();
    setSelectedItem(itemName);
  };

  const handleLoadingButtonClick = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setLoading(true);
    setShowText(false);

    setTimeout(() => {
      setLoading(false);
      setShowText(true);
    }, 6000);
  };

  return (
    <>
      <Head>
        <title>Assertions</title>
      </Head>
      <div className='container mx-auto'>
        <form className='mx-5'>
          <div className='space-y-12'>
            <div className='my-10 grid grid-cols-4 gap-x-6 gap-y-8'>
              <TextBoxComponent
                label='テキストボックス(有効)'
                placeholder='プレースホルダー'
                id='textbox-editable'
                name='textbox-editable'
                handleTextboxChange={handleTextboxChange}
                result={text}
              />
              <TextBoxComponent
                label='テキストボックス(無効)'
                placeholder='プレースホルダー(無効)'
                id='textbox-disabled'
                name='textbox-disabled'
                handleTextboxChange={handleTextboxDisabledChange}
                result={textDisabled}
                disabled={true}
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
                name='ボタン(有効)'
                handleButtonClick={handleButtonClick}
                result={button}
              />
              <ButtonComponent
                name='ボタン(無効)'
                handleButtonClick={handleButtonDisabledClick}
                result={buttonDisabled}
                disabled={true}
              />
              <DropdownComponent
                handleDropdownSelect={handleDropdownSelect}
                value={dropdown}
                result={selectedName}
              />
              <LinkComponent url='https://www.google.com' text='Google' />
              <TextVisibleComponent
                heading='サンプル見出し'
                text='これはサンプルテキストです。'
              />
              <ItemListComponent
                handleItemButtonClick={handleItemButtonClick}
                result={selectedItem}
              />
              <LoadingButtonComponent
                loading={loading}
                showText={showText}
                handleLoadingButtonClick={handleLoadingButtonClick}
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

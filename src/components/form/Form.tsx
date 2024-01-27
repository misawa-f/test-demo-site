import React from 'react';
import Image from 'next/image';
import dayjs from 'dayjs';
import 'dayjs/locale/ja';

// Textbox
interface TextBoxComponentProps {
  label: string;
  placeholder: string;
  id: string;
  name: string;
  handleTextboxChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  result: string;
  disabled?: boolean;
}

export const TextBoxComponent: React.FC<TextBoxComponentProps> = ({
  label,
  placeholder,
  id,
  name,
  handleTextboxChange,
  result,
  disabled = false,
}) => {
  return (
    <div>
      <label
        htmlFor={id}
        className='block text-sm font-semibold leading-6 text-gray-900'
      >
        {label}
      </label>
      <div className='mt-2'>
        <input
          id={id}
          name={name}
          type='text'
          placeholder={placeholder}
          className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none'
          onChange={handleTextboxChange}
          disabled={disabled}
        />
        <p className='text-sm'>テキストボックス入力値: {result}</p>
      </div>
    </div>
  );
};

// Radio button
interface RadioButtonComponentProps {
  handleRadioCheck: (event: React.ChangeEvent<HTMLInputElement>) => void;
  result: string;
}

export const RadioButtonComponent: React.FC<RadioButtonComponentProps> = ({
  handleRadioCheck,
  result,
}) => {
  return (
    <fieldset>
      <legend className='text-sm font-semibold leading-6 text-gray-900'>
        ラジオボタン
      </legend>

      <div className='mt-1 space-y-1'>
        <div className='flex items-center gap-x-3'>
          <input
            id='radio-1'
            name='radio'
            type='radio'
            value='ラジオ1'
            className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600'
            defaultChecked={result === 'ラジオ1'}
            onChange={handleRadioCheck}
          />
          <label
            htmlFor='radio-1'
            className='block text-sm font-medium leading-6 text-gray-900'
          >
            ラジオ1
          </label>
        </div>
        <div className='flex items-center gap-x-3'>
          <input
            id='radio-2'
            name='radio'
            type='radio'
            value='ラジオ2'
            className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600'
            defaultChecked={result === 'ラジオ2'}
            onChange={handleRadioCheck}
          />
          <label
            htmlFor='radio-2'
            className='block text-sm font-medium leading-6 text-gray-900'
          >
            ラジオ2
          </label>
        </div>
        <p className='text-sm'>ラジオボタン選択値: {result}</p>
      </div>
    </fieldset>
  );
};

// Checkbox
interface CheckboxComponentProps {
  handleCheckboxCheck: (event: React.ChangeEvent<HTMLInputElement>) => void;
  result: string[];
}

export const CheckboxComponent: React.FC<CheckboxComponentProps> = ({
  handleCheckboxCheck,
  result,
}) => {
  return (
    <fieldset>
      <legend className='text-sm font-semibold leading-6 text-gray-900'>
        チェックボックス
      </legend>

      <div className='mt-1 space-y-1'>
        <div className='relative flex gap-x-3'>
          <div className='flex h-6 items-center'>
            <input
              id='checkbox-1'
              name='checkbox-1'
              type='checkbox'
              value='チェック1'
              className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600'
              defaultChecked={result.includes('チェック1')}
              onChange={handleCheckboxCheck}
            />
          </div>
          <div className='text-sm leading-6'>
            <label htmlFor='checkbox-1' className='font-medium text-gray-900'>
              チェック1
            </label>
          </div>
        </div>
        <div className='relative flex gap-x-3'>
          <div className='flex h-6 items-center'>
            <input
              id='checkbox-2'
              name='checkbox-2'
              type='checkbox'
              value='チェック2'
              className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600'
              defaultChecked={result.includes('チェック2')}
              onChange={handleCheckboxCheck}
            />
          </div>
          <div className='text-sm leading-6'>
            <label htmlFor='checkbox-2' className='font-medium text-gray-900'>
              チェック2
            </label>
          </div>
        </div>
        <p className='text-sm'>チェックボックス選択値: {result.join(', ')}</p>
      </div>
    </fieldset>
  );
};

// Button
interface ButtonComponentProps {
  name: string;
  handleButtonClick: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  result: string;
  disabled?: boolean;
}

export const ButtonComponent: React.FC<ButtonComponentProps> = ({
  name,
  handleButtonClick,
  result,
  disabled = false,
}) => {
  return (
    <div>
      <legend className='text-sm font-semibold leading-6 text-gray-900'>
        {name}
      </legend>
      <button
        onClick={handleButtonClick}
        className='rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:bg-indigo-400 disabled:border-indigo-600 disabled:cursor-not-allowed'
        disabled={disabled}
      >
        {name}
      </button>
      <p className='text-sm'>ボタン状態: {result}</p>
    </div>
  );
};

// Link
interface LinkComponentProps {
  url: string;
  text: string;
}

export const LinkComponent: React.FC<LinkComponentProps> = ({ url, text }) => {
  return (
    <div>
      <legend className='text-sm font-semibold leading-6 text-gray-900'>
        リンク
      </legend>
      <a href={url} className='text-sm text-sky-500 hover:underline'>
        {text}
      </a>
    </div>
  );
};

// Text
interface TextComponentProps {
  heading: string;
  text: string;
}

export const TextComponent: React.FC<TextComponentProps> = ({
  heading,
  text,
}) => {
  return (
    <div>
      <h1 className='text-sm font-semibold leading-7 text-gray-900'>
        {heading}
      </h1>
      <p className='text-sm'>{text}</p>
    </div>
  );
};

// Text visible
export const TextVisibleComponent: React.FC<TextComponentProps> = ({
  heading,
  text,
}) => {
  const today = dayjs().format('YYYY年MM月DD日');
  return (
    <div>
      <h1
        id='example-head'
        className='text-sm font-semibold leading-7 text-gray-900'
      >
        {heading}
      </h1>
      <h2 className='text-sm text-red-500' style={{ fontWeight: '600' }}>
        今日は{today}です。
      </h2>
      <p className='text-sm'>{text}</p>
      <p className='text-sm' style={{ visibility: 'hidden' }}>
        これはvisibility:hiddenでユーザーからは見えないテキストです。
      </p>
      <p className='text-sm' style={{ display: 'none' }}>
        これはdisplay:noneでユーザーからは見えないテキストです。
      </p>
      <p data-testid='test-empty'></p>
    </div>
  );
};

// List
interface ItemListComponentProps {
  handleItemButtonClick: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    itemName: string
  ) => void;
  result: string;
}

export const ItemListComponent: React.FC<ItemListComponentProps> = ({
  handleItemButtonClick,
  result,
}) => {
  return (
    <div>
      <div className='text-sm font-semibold leading-6 text-gray-900'>
        リスト
      </div>
      <div className='mt-1 space-y-1'>
        <div className='ml-4'>
          <ul className='list-disc'>
            {['アイテム1', 'アイテム2', 'アイテム3'].map((item) => (
              <li className='text-sm' key={item}>
                <h3>{item}</h3>
                <button
                  className='rounded-md bg-white px-2.5 py-1.5 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50'
                  onClick={(e) => handleItemButtonClick(e, item)}
                >
                  アイテム
                </button>
              </li>
            ))}
          </ul>
          <p className='text-sm'>リスト選択値: {result}</p>
        </div>
      </div>
    </div>
  );
};

// Image
interface ImageComponentProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export const ImageComponent: React.FC<ImageComponentProps> = ({
  src,
  alt,
  width,
  height,
}) => {
  return (
    <div>
      <label
        htmlFor='image'
        className='block text-sm font-semibold leading-6 text-gray-900'
      >
        画像
      </label>
      <div className='inline-block relative group'>
        <Image
          id='image'
          src={src}
          alt={alt}
          width={width}
          height={height}
          className='inline-block border border-gray-300 rounded-md'
        />
        <div className='opacity-0 invisible ml-2 text-sm group-hover:visible opacity-100 absolute'>
          カレーライス
        </div>
      </div>
    </div>
  );
};

// Title
interface TitleButtonComponentProps {
  handleTitleButtonClick: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  result: string;
  title: string;
}

export const TitleButtonComponent: React.FC<TitleButtonComponentProps> = ({
  handleTitleButtonClick,
  result,
  title,
}) => {
  return (
    <div>
      <div className='text-sm font-semibold leading-6 text-gray-900'>
        Title属性
      </div>
      <button
        title={title}
        onClick={handleTitleButtonClick}
        className='rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
      >
        Title属性
      </button>
      <p className='text-sm'>Title属性状態: {result}</p>
    </div>
  );
};

// Test ID
interface TestIdButtonComponentProps {
  handleTestIdButtonClick: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  result: string;
  testId: string;
}

export const TestIdButtonComponent: React.FC<TestIdButtonComponentProps> = ({
  handleTestIdButtonClick,
  result,
  testId,
}) => {
  return (
    <div>
      <div className='text-sm font-semibold leading-6 text-gray-900'>
        テストID
      </div>
      <button
        data-testid={testId}
        onClick={handleTestIdButtonClick}
        className='rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
      >
        テストID
      </button>
      <p className='text-sm'>テストID状態: {result}</p>
    </div>
  );
};

// Selector
interface SelectorComponentProps {
  handleColorButtonClick: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    color: string
  ) => void;
  result: string;
  id: string;
}

export const SelectorComponent: React.FC<SelectorComponentProps> = ({
  handleColorButtonClick,
  result,
  id,
}) => {
  return (
    <div id={id}>
      <div className='text-sm font-semibold leading-6 text-gray-900'>
        セレクタ
      </div>
      <p className='text-sm'>
        <button
          className='text-red-500 rounded-md bg-white px-2.5 py-1 font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50'
          onClick={(e) => handleColorButtonClick(e, '赤')}
        >
          赤
        </button>
        のボタンです。
        <br />
        <button
          className='text-green-500 rounded-md bg-white px-2.5 py-1 font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50'
          onClick={(e) => handleColorButtonClick(e, '緑')}
        >
          緑
        </button>
        のボタンです。
      </p>
      <p className='text-sm'>セレクタ選択値: {result}</p>
    </div>
  );
};

// Dropdown
interface DropdownComponentProps {
  handleDropdownSelect: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  value: string;
  result: string;
}

export const DropdownComponent: React.FC<DropdownComponentProps> = ({
  handleDropdownSelect,
  value,
  result,
}) => {
  return (
    <div>
      <label
        htmlFor='dropdown'
        className='block text-sm font-semibold leading-6 text-gray-900'
      >
        ドロップダウン
      </label>
      <div className='mt-2'>
        <select
          id='dropdown'
          name='dropdown'
          value={value}
          className='block w-full rounded-md border-0 pr-8 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6'
          onChange={handleDropdownSelect}
        >
          <option value='option1'>オプション1</option>
          <option value='option2'>オプション2</option>
          <option value='option3'>オプション3</option>
        </select>
        <p className='text-sm'>ドロップダウン選択値: {result}</p>
      </div>
    </div>
  );
};

// Focus
interface FocusComponentProps {
  isFocused: boolean;
  setIsFocused: (value: boolean) => void;
}

export const FocusComponent: React.FC<FocusComponentProps> = ({
  isFocused,
  setIsFocused,
}) => {
  return (
    <div>
      <label
        htmlFor='force'
        className='block text-sm font-semibold leading-6 text-gray-900'
      >
        フォーカス
      </label>
      <div className='mt-2'>
        <input
          id='force'
          name='force'
          type='text'
          className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        {isFocused && <p className='text-sm'>フォーカスされました！</p>}
      </div>
    </div>
  );
};

// Key input
interface KeyInputComponentProps {
  result: string;
  handleKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

export const KeyInputComponent: React.FC<KeyInputComponentProps> = ({
  result,
  handleKeyDown,
}) => {
  return (
    <div>
      <label
        htmlFor='keypress'
        className='block text-sm font-semibold leading-6 text-gray-900'
      >
        キーボード入力
      </label>
      <div className='mt-2'>
        <input
          id='keypress'
          name='keypress'
          type='text'
          className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
          onKeyDown={handleKeyDown}
        />
        <p className='text-sm'>キーボード入力値 : {result}</p>
      </div>
    </div>
  );
};

// Dialog
interface DialogComponentProps {
  result: string;
  handleDialog: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const DialogComponent: React.FC<DialogComponentProps> = ({
  result,
  handleDialog,
}) => {
  return (
    <div>
      <div className='text-sm font-semibold leading-6 text-gray-900'>
        ダイアログ
      </div>
      <button
        onClick={handleDialog}
        className='rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
      >
        ダイアログ
      </button>
      <p className='text-sm'>ダイアログ状態: {result}</p>
    </div>
  );
};

// File Upload
interface FileUploadComponentProps {
  uploadedFile: File | null;
  handleFileUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const FileUploadComponent: React.FC<FileUploadComponentProps> = ({
  uploadedFile,
  handleFileUpload,
}) => {
  return (
    <div>
      <label
        htmlFor='formFile'
        className='block text-sm font-semibold leading-6 text-gray-900'
      >
        ファイルアップロード
      </label>
      <input
        className='relative text-sm m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary'
        type='file'
        id='formFile'
        onChange={handleFileUpload}
      />

      <p className='text-sm mb-2'>
        選択ファイル: {uploadedFile ? uploadedFile.name : ''}
      </p>
    </div>
  );
};

// File Download
interface FileDownloadComponentProps {
  filePath: string;
  fileName: string;
}

export const FileDownloadComponent: React.FC<FileDownloadComponentProps> = ({
  filePath,
  fileName,
}) => {
  return (
    <div>
      <div className='text-sm font-semibold leading-6 text-gray-900'>
        ファイルダウンロード
      </div>
      <div className='mt-1'>
        <a href={filePath} download className='text-sky-500 hover:underline'>
          {fileName}
        </a>
      </div>
    </div>
  );
};

// Loading
interface LoadingButtonComponentProps {
  loading: boolean;
  showText: boolean;
  handleLoadingButtonClick: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
}

export const LoadingButtonComponent: React.FC<LoadingButtonComponentProps> = ({
  loading,
  showText,
  handleLoadingButtonClick,
}) => {
  return (
    <div>
      <div className='text-sm font-semibold leading-6 text-gray-900'>
        ローディング
      </div>
      <button
        onClick={handleLoadingButtonClick}
        className='rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
      >
        6秒後にメッセージ表示
      </button>
      {loading && (
        <div className='m-2 animate-spin h-10 w-10 border-4 border-blue-500 rounded-full border-t-transparent'></div>
      )}
      {showText && <div className='mt-1'>メッセージが表示されました！</div>}
    </div>
  );
};

import React, { useEffect, useRef } from 'react';

const fileMenu = (type) => [
  {
    name: `New ${type}`,
    disabled: false,
  },
  {
    name: 'New tab',
    disabled: false,
    break: true,
  },
  {
    name: 'Open',
    disabled: false,
  },
  {
    name: 'Rename',
    disabled: false,
    break: true,
  },
  {
    name: 'Compress',
    disabled: false,
  },
  {
    name: 'Duplicate',
    disabled: false,
  },
  {
    name: 'Find',
    disabled: false,
    break: true,
  },
  {
    name: 'Close Folder',
    disabled: false,
  },
  {
    name: 'Close Window',
    disabled: false,
  },
];
const editMenu = (type) => [
  {
    name: 'Undo',
    disabled: false,
  },
  {
    name: 'Redo',
    disabled: false,
    break: true,
  },
  {
    name: 'Cut',
    disabled: false,
  },
  {
    name: 'Copy',
    disabled: false,
  },
  {
    name: 'Copy As',
    disabled: false,
  },
  {
    name: 'Paste',
    disabled: false,
    break: true,
  },
  {
    name: 'Find',
    disabled: false,
  },
  {
    name: 'Replace',
    disabled: false,
  },
];

const goMenu = (type) => [
  {
    name: 'Back',
    disabled: false,
  },
  {
    name: 'Forward',
    disabled: false,
    break: true,
  },
  {
    name: 'Go to File',
    disabled: false,
  },
  {
    name: 'Go to Location',
    disabled: false,
  },
  {
    name: 'Go to Line/Column',
    disabled: false,
    break: true,
  },
  {
    name: 'Next Problem',
    disabled: false,
  },
  {
    name: 'Previous Problem',
    disabled: false,
  },
];

export const menuLists = (type) => [
  { name: 'file', options: fileMenu(type) },
  { name: 'edit', options: editMenu(type) },
  { name: 'go', options: goMenu(type) },
];

export function useOutsideClick(ref, callback) {
  const cachedCallback = useRef(() => {});

  useEffect(() => {
    cachedCallback.current = callback;
  });

  function handleClick(e) {
    if (!ref.current?.contains(e.target)) cachedCallback.current?.();
  }

  useEffect(() => {
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);
}

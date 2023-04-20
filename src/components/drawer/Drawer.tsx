import React, { useState } from 'react';
import { Input, Drawer } from 'antd';

const { TextArea } = Input;

const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
  console.log('Change:', e.target.value);
};

export const Readplan: React.FC = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div onClick={showDrawer}>
        Reading Plan
      </div>
      <Drawer title="Reading Plan" placement="right" onClose={onClose} open={open}>
        <TextArea
          showCount
          maxLength={100}
          style={{ height: 120, marginBottom: 24 }}
          onChange={onChange}
          placeholder="can resize"
        />
      </Drawer>
    </>
  );
};
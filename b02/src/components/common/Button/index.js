import './Button.css';
import { useEffect, useState } from 'react';
// import classnames from 'classnames';

Button.defaultProps = {
  type: 'button'
}

export default function Button({
  type,
  value,
  className,
}) {
  const [localType, setlocalType] = useState('button');
  const [valueText, setValueText] = useState('');


  useEffect(() => {
    if(value) {
      setValueText(value);
    }
  }, [value])

  useEffect(() => {
    if (type) {
      setlocalType(type);
    }
  }, [type])

  return (

    <input 
    type={localType} 
    value={valueText}
    className={className}

  />

  )
}
// className={classnames('btn btn-primary btn-size-large')}

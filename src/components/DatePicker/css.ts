import styled from 'styled-components';
import clsx from 'clsx';

export const DateBox = styled.div.attrs(props => ({
  className: clsx(
    props.className,
    'date-box',
    'rounded-lg',
    'border',
    'border-solid',
    'border-gray-01',
    'flex',
    'relative',
  )
}))`
.MuiButtonBase-root {
  padding: 0;
}

.MuiInputAdornment-root {
  margin: 0;
  width: 24px;
  height: 24px;
}
`;
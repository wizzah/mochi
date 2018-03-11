import * as React from 'react';

type ReactChildren = React.ReactElement<React.Component> | React.ReactElement<React.Component>[];

interface IBaseLayoutProps {
  children: ReactChildren,
  mixinStyles?: React.CSSProperties
}

const baseLayoutStyles: React.CSSProperties = {
  fontFamily: 'sans-serif'
};

export default (props: IBaseLayoutProps) => {
  const finalStyles = props.mixinStyles ?
    {...baseLayoutStyles, ...props.mixinStyles} : baseLayoutStyles;

  return (
    <div style={finalStyles}>
      { props.children }
    </div>
  );
}

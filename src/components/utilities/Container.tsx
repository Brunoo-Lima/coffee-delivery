import { ReactNode } from 'react';

type ContainerProps = {
  children: ReactNode;
};

const Container = ({ children }: ContainerProps) => {
  return <div className="container md:px-8 px-4 mx-auto">{children}</div>;
};

export default Container;

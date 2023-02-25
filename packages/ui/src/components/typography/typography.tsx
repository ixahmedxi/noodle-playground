import { FC, ReactNode } from 'react';

type TypographyProps = {
  children: ReactNode;
};

export const Typography: FC<TypographyProps> = ({ children }) => {
  return <p className="text-blue-500 dark:text-pink-500">{children}</p>;
};

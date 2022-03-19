import { ContainerProps } from '@chakra-ui/react';
import { PageLayoutContainer } from './PageLayoutContainer';

interface TableLayoutContainerProps {}

export const UserTableLayoutContainer: React.FC<
  TableLayoutContainerProps & ContainerProps
> = ({ children, ...rest }) => {
  return (
    <PageLayoutContainer
      _before={{
        content: '""',
        position: 'absolute',
        left: 0,
        right: 0,
        height: '70px',
        borderTop: '1px solid #ced3dd',
        borderBottom: '1px solid #ced3dd',
        opacity: 0.5,
      }}
      {...rest}
    >
      {children}
    </PageLayoutContainer>
  );
};

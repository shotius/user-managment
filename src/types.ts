import { Td, Th } from '@chakra-ui/react';
import { ComponentProps, FC } from 'react';

type IUserRole = 'Admin' | 'User';

interface IBaseUser {
  id: string;
  user: string;
  status: 'active' | "inactive";
  role: IUserRole;
}

export type IUserTableColumnTypes = keyof IBaseUser

export interface ExampleObject extends IBaseUser {
  email: string;
}

export type TdProps = ComponentProps<typeof Td>;

export type ThProps = ComponentProps<typeof Th>;

export interface IUserTableColumn {
  Header: any;
}


export type IFormUser  = Pick<ExampleObject, "email" | "role" | "user">
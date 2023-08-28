import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Label } from './ui/label';
import { Input } from './ui/input';
import { title } from 'process';

type Props = {title:string}

function ListItem(context: Props) {
  return (
    <Card className="w-[auto]">
      <CardHeader>
        {/* <CardTitle>{context.title}</CardTitle> */}
        <CardDescription>{context.title}</CardDescription>
      </CardHeader>
    </Card>
  );
}

export default ListItem
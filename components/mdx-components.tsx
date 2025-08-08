import Image from "next/image";
import * as runtime from "react/jsx-runtime";

const MDXComponents = (code: string) => {
  const fn = new Function(code);
  return fn({ ...runtime }).default;
};

const components = {
    Image
}

interface MdxProps {
    code: string;
}

export function MDXContent({ code }: MdxProps) {
  const Component = MDXComponents(code);
  return <Component components={components} />;
}